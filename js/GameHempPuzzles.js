var GameHempPuzzles = {
};

GameHempPuzzles.gui = null;
GameHempPuzzles.questions = null;
GameHempPuzzles.currentQuest = null;
GameHempPuzzles.questType = null;
GameHempPuzzles.isDemo = true;
GameHempPuzzles.isDebug = false;
GameHempPuzzles.initDeley = 4000;
GameHempPuzzles.data = {
};
GameHempPuzzles.data.mediaById = {
};
GameHempPuzzles.data.appUrl = "http://www.weedyapp.com/";
GameHempPuzzles.data.sound = [
		{
				id: "menu",
				src: "sounds/click2.mp3|sounds/click2.ogg",
				srcm: "sounds/click2.mp3"
		}, {
				id: "back",
				src: "sounds/click2.mp3|sounds/click2.ogg",
				srcm: "sounds/click2.mp3"
		}, {
				id: "answerYes",
				src: "sounds/click3.mp3|sounds/click3.ogg",
				srcm: "sounds/click3.mp3"
		}, {
				id: "answerNo",
				src: "sounds/click7.mp3|sounds/click7.ogg",
				srcm: "sounds/click7.mp3"
		}, {
				id: "slectItem",
				src: "sounds/click1.mp3|sounds/click1.ogg",
				srcm: "sounds/click1.mp3"
		}, {
				id: "borderTogle",
				src: "sounds/click5.mp3|sounds/click5.ogg",
				srcm: "sounds/click5.mp3"
		}
];

GameHempPuzzles.newGame = function(questType) {
		this.questType = questType;
		this.questions.reset();
		this.gui.showGameScreen();
		this.setNewQuest();
};

GameHempPuzzles.save = function() {
		var data = {
		},
						saved = false;

		if (this.questType && this.currentQuest) {
				try {
						data.questType = this.questType;
						data.cuurentQuestId = this.currentQuest.id;
						data.useQuest = this.questions.use;
						data.useCounter = this.questions.useCounter;
						saved = true;
				} catch (e) {
						saved = false;
						if (this.isDebug) {
								alert("save error: " + e.message);
						}
				}
		}

		if (saved) {
				this.storege.setData("data", data, -1);
		} else {
				this.storege.removeData("data");
		}
		if (this.isDebug) {
				alert("saved = " + saved);
		}
};

GameHempPuzzles.load = function() {
		try {
				var loaded = true,
								n,
								answers,
								isB,
								data = this.storege.getData("data");

				if (data) {
						data.questType ? this.questType = data.questType : loaded = false;
						data.useQuest ? this.questions.use = data.useQuest : loaded = false;
						data.useCounter || data.useCounter == 0 ? this.questions.useCounter = data.useCounter : loaded = false;

						if (this.isDebug) {
								var message = "questType:" + data.questType + " data.useQuest:" + data.useQuest + " data.useCounter:" + data.useCounter + " loaded:" + loaded;
								alert(message);
						}
				} else {
						loaded = false;
				}

				if (loaded) {
						this.currentQuest = this.questions.getQuest(this.questType, data.cuurentQuestId);
						this.gui.questView.setHTML(this.currentQuest.question);
						answers = this.gui.answers;
						n = Math.round(Math.random() * 2),
										isB = false;

						for (var i = 0; i < answers.length; i += 1) {
								if (i == n) {
										answers[i].domElement.setHTML(this.currentQuest.answers.a);
								} else {
										isB ? answers[i].domElement.setHTML(this.currentQuest.answers.c) : answers[i].domElement.setHTML(this.currentQuest.answers.b);
										isB = true;
								}
						}

						this.gui.showQwest();
						this.gui.showGameScreen();
						this.gui.borderToggle();
						this.playSound("borderTogle");
				} else {
						this.gui.showMainScreen();
				}
		} catch (e) {
				alert("load error: " + JSON.stringify(e));
		}
};

GameHempPuzzles.close = function() {
		this.showMessageConfirm("Will close game?", function(keyId) {
				if (keyId == 1) {

						GameHempPuzzles.save();

						navigator.app.exitApp();
				}
		}, "Exit the game.", "Yes,No");
};

GameHempPuzzles.checkAnswer = function(answer) {
		var result = false;

		if (this.currentQuest.answers.a == answer) {
				result = true;
				setTimeout(this.setNewQuest.bind(this), 1000);
		}

		return result;
};

GameHempPuzzles.setNewQuest = function(noBorderToggle) {
		var quest = this.questions.getRandomQuest(this.questType),
						n,
						answers;

		if (quest) {
				this.currentQuest = quest;
				this.gui.questView.setHTML(quest.question);
				answers = this.gui.answers;
				n = Math.round(Math.random() * 2),
								isB = false;

				for (var i = 0; i < answers.length; i += 1) {
						if (i == n) {
								answers[i].domElement.setHTML(quest.answers.a);
						} else {
								isB ? answers[i].domElement.setHTML(quest.answers.c) : answers[i].domElement.setHTML(quest.answers.b);
								isB = true;
						}
				}

				this.gui.showQwest();

				if (!noBorderToggle) {
						this.gui.borderToggle();
						this.playSound("borderTogle");
				}

				if (this.isDemo) {
						this.advresing.show();
				}
		} else {

				this.currentQuest = null;
				this.gui.showMenuScreen();
				this.gui.hist = [];
				if (this.isDemo) {
						GameHempPuzzles.advresing.showNow();
				}
		}

};

GameHempPuzzles.resourceLoad = function() {

		var src,
						i,
						l,
						media,
						s;

		for (i = 0, l = this.data.sound.length; i < l; i += 1) {
				s = this.data.sound[i];
				this.data.mediaById[s.id] = s;
		}
		this.init();
		try {
				media = Media;
		} catch (e) {
				media = null;
		}

		if (media) {
				for (i = 0, l = this.data.sound.length; i < l; i += 1) {
						s = this.data.sound[i];

						// Android needs the search path explicitly specified
						if (device && device.platform == 'Android') {
								src = '/android_asset/www/' + s.srcm;
						} else {
								src = s.srcm;
						}


						var mediaRes = new Media(src,
										function onSuccess() {
												// release the media resource once finished playing
												mediaRes.release();
										},
										function onError(e) {
												alert("error playing sound: " + JSON.stringify(e));
										});



						this.data.mediaById[s.id] = mediaRes;

				}

				this.init();
		}
};

GameHempPuzzles.hwBackButtonPressed = function() {
		try {
				//this.gui.showBackScreen();
				this.close();
		} catch (e) {
				alert("error in HWBackButtonPressed: " + e.message);
		}
};

GameHempPuzzles.playSound = function(soundId) {

		//createjs.Sound.play(soundId);
		var m = this.data.mediaById[soundId];
		if (m) {
				m.play();
		} else {
				createjs.Sound.play(soundId);
		}
};

GameHempPuzzles.showMessageConfirm = function(message, confirmCallback, title, buttonLabels) {
		if (navigator && navigator.notification) {
				navigator.notification.confirm(message, confirmCallback, title, buttonLabels);
		}
};

GameHempPuzzles.init = function() {
		try {
				if (!this.isInit) {
						//this.resourceLoad();
						GameHempPuzzles.advresing.init();
						var s,
										i,
										l;
						for (i = 0, l = this.data.sound.length; i < l; i += 1) {
								s = this.data.sound[i];
								this.data.mediaById[s.id] = s;
						}
						this.isInit = true;
						this.storege.init();
						this.gui = new GameHempPuzzles.GraphicalUserInterface(this);
						this.gui.resize();

						document.addEventListener("resize", this.gui.resize.bind(this.gui), false);
						document.addEventListener("backbutton", this.hwBackButtonPressed.bind(this), false);


						var calback = function() {
								//скрываем сплэш скрин


								if (GameHempPuzzles.storege.getData("data")) {


										GameHempPuzzles.showMessageConfirm("Continue with the last question?", function(keyId) {
												if (navigator && navigator.splashscreen) {
														navigator.splashscreen.hide();
												}
												if (keyId == 1) {
														GameHempPuzzles.load();
												}
										}, "Load game", "Yes,No");
								} else {
										if (navigator && navigator.splashscreen) {
												navigator.splashscreen.hide();
										}
								}
								if (GameHempPuzzles.isDemo) {
										GameHempPuzzles.advresing.show();
								}
								GameHempPuzzles.gui.showMainScreen();

						};
						window.setTimeout(calback, this.initDeley);

				}

		} catch (e) {

				alert("error: " + JSON.stringify(e) + e.message);

		}
};