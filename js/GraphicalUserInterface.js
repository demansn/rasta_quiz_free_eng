GameHempPuzzles.GraphicalUserInterface = function GraphicalUserInterface(game) {
		this.game = game;

		this.appView = GameHempPuzzles.DomObjectController.getDomObject("app");

		this.screens["main"] = GameHempPuzzles.DomObjectController.getDomObject("mainScreen");
		this.screens["menu"] = GameHempPuzzles.DomObjectController.getDomObject("menuScreen");
		this.screens["game"] = GameHempPuzzles.DomObjectController.getDomObject("gameScreen");
		this.screens["about"] = GameHempPuzzles.DomObjectController.getDomObject("about");

		this.borderA = GameHempPuzzles.DomObjectController.getDomObject("borderView-1");
		this.borderB = GameHempPuzzles.DomObjectController.getDomObject("borderView-2");

		this.lineA = GameHempPuzzles.DomObjectController.getDomObject("lineView-1");
		this.lineB = GameHempPuzzles.DomObjectController.getDomObject("lineView-2");

		this.questView = GameHempPuzzles.DomObjectController.getDomObject("questionView");

		this.answers.push(new GameHempPuzzles.ButtonContoller("answerView-1"));
		this.answers.push(new GameHempPuzzles.ButtonContoller("answerView-2"));
		this.answers.push(new GameHempPuzzles.ButtonContoller("answerView-3"));

		this.forwardButton = new GameHempPuzzles.ButtonContoller("forwardButtonView");
		this.backButton = new GameHempPuzzles.ButtonContoller("backButtonView");
		this.menuButton = new GameHempPuzzles.ButtonContoller("menuButtonView");

		this.items.push(new GameHempPuzzles.ButtonContoller("item-0"));
		this.items.push(new GameHempPuzzles.ButtonContoller("item-1"));
		this.items.push(new GameHempPuzzles.ButtonContoller("item-2"));
		this.items.push(new GameHempPuzzles.ButtonContoller("item-3"));
		this.items.push(new GameHempPuzzles.ButtonContoller("item-4"));
		this.items.push(new GameHempPuzzles.ButtonContoller("item-5"));
		this.items.push(new GameHempPuzzles.ButtonContoller("item-6"));

		var btn1 = new GameHempPuzzles.ButtonContoller("s1");
		//var btn2 = new GameHempPuzzles.ButtonContoller("s2");

		btn1.down(function() {
				window.open("http://www.weedy.be/", '_blank', 'location=yes');
		});

		/*btn2.down(function() {
		 window.open("http://www.weedyapp.com/", '_blank', 'location=yes');
		 });*/


		this.about = new GameHempPuzzles.ButtonContoller("aboutButtonView");


		this.about.up(function() {
				GameHempPuzzles.playSound("menu");
				if (GameHempPuzzles.gui.currentScreenId != "about") {
						GameHempPuzzles.gui.showScreen("about", true);
				}
		});

		var callback = function() {
				GameHempPuzzles.playSound("slectItem");
				GameHempPuzzles.newGame(GameHempPuzzles.questions.types[this.domElement.view.id]);
				this.domElement.style.background = "rgba(0, 0, 0, 0)";
				return false;
		};

		var callbackDemo = function() {
				GameHempPuzzles.playSound("slectItem");
				GameHempPuzzles.newGame(GameHempPuzzles.questions.types[this.domElement.view.id]);
				GameHempPuzzles.showMessageConfirm("Buy?", function(keyId) {
						if (keyId == 1) {
								window.open(GameHempPuzzles.data.appUrl, '_blank', 'location=yes');
						} else {
								//GameHempPuzzles.advresing.showNow();
						}

				}, "Pay the application does not contain ads.", "Yes,No");
				this.domElement.style.background = "rgba(0, 0, 0, 0)";
				return false;
		};

		for (var i = 0,
						max = this.items.length; i < max; i += 1) {
				if (this.game.isDemo) {
						this.items[i].down(callbackDemo);
				} else {
						this.items[i].down(callback);
				}

		}

		callback = function() {
				if (this.enabled) {
						this.enabled = false;
						if (!GameHempPuzzles.checkAnswer(this.domElement.getHTML())) {
								GameHempPuzzles.playSound("answerYes");
								navigator.notification.vibrate(50);
								this.domElement.disappear(20);
						} else {
								GameHempPuzzles.playSound("answerNo");
								GameHempPuzzles.gui.hideQwest();
						}
				}
				this.domElement.style.background = "rgba(0, 0, 0, 0)";
				return false;
		};

		for (var i = 0; i < this.answers.length; i += 1) {
				this.answers[i].down(callback);

		}

		this.forwardButton.up(function() {
				GameHempPuzzles.playSound("menu");
				if (GameHempPuzzles.gui.currentScreenId == "main") {
						GameHempPuzzles.gui.showMenuScreen();
				} else if (GameHempPuzzles.gui.currentScreenId == "game") {
						GameHempPuzzles.gui.hideQwest();
						setTimeout(GameHempPuzzles.setNewQuest.bind(GameHempPuzzles, true), 1000);
				} else {
						GameHempPuzzles.gui.showForwardScreen();
				}
				return false;
		});

		this.backButton.up(function() {
				GameHempPuzzles.playSound("menu");
				GameHempPuzzles.gui.showBackScreen();
				return false;
		});

		this.menuButton.up(function() {
				GameHempPuzzles.playSound("back");
				if (GameHempPuzzles.gui.currentScreenId != "menu") {
						GameHempPuzzles.gui.showMenuScreen();
				}
				return false;
		});
};

GameHempPuzzles.GraphicalUserInterface.prototype.appView = null;
GameHempPuzzles.GraphicalUserInterface.prototype.screens = {
};

GameHempPuzzles.GraphicalUserInterface.prototype.currentScreenId = null;
GameHempPuzzles.GraphicalUserInterface.prototype.questView = null;
GameHempPuzzles.GraphicalUserInterface.prototype.answers = [];
GameHempPuzzles.GraphicalUserInterface.prototype.items = [];
GameHempPuzzles.GraphicalUserInterface.prototype.hist = [];
GameHempPuzzles.GraphicalUserInterface.prototype.forwardHist = [];
GameHempPuzzles.GraphicalUserInterface.prototype.borderA = null;
GameHempPuzzles.GraphicalUserInterface.prototype.borderB = null;
GameHempPuzzles.GraphicalUserInterface.prototype.lineA = null;
GameHempPuzzles.GraphicalUserInterface.prototype.lineB = null;
GameHempPuzzles.GraphicalUserInterface.prototype.forwardButton = null;
GameHempPuzzles.GraphicalUserInterface.prototype.backButton = null;
GameHempPuzzles.GraphicalUserInterface.prototype.menuButton = null;
GameHempPuzzles.GraphicalUserInterface.prototype.mainScreenView = null;
GameHempPuzzles.GraphicalUserInterface.prototype.game = null;
GameHempPuzzles.GraphicalUserInterface.prototype.isShowMenu = false;
GameHempPuzzles.GraphicalUserInterface.prototype.about = null;

GameHempPuzzles.GraphicalUserInterface.prototype.showQwest = function() {
		var deley = 500;
		this.screens["game"].appear(deley);
		for (var i = 0; i < this.answers.length; i += 1) {
				this.answers[i].enabled = true;
				this.answers[i].domElement.reset();
		}
};

GameHempPuzzles.GraphicalUserInterface.prototype.hideQwest = function() {
		this.screens["game"].disappear(500);
};

GameHempPuzzles.GraphicalUserInterface.prototype.borderToggle = function() {
		var deley = 250;
		if (this.borderA.isVisible) {
				this.borderA.disappear(deley);
				this.borderB.appear(deley);
		} else {
				this.borderA.appear(deley);
				this.borderB.disappear(deley);
		}
};

GameHempPuzzles.GraphicalUserInterface.prototype.showMainScreen = function() {
		this.showScreen("main", true);
};

GameHempPuzzles.GraphicalUserInterface.prototype.showMenuScreen = function() {
		this.showScreen("menu", true);
};

GameHempPuzzles.GraphicalUserInterface.prototype.showGameScreen = function() {
		this.showScreen("game", true);
};

GameHempPuzzles.GraphicalUserInterface.prototype.showForwardScreen = function() {
		var scrId;

		if (this.forwardHist.length > 0) {

				scrId = this.forwardHist.pop();

				this.showScreen(scrId, true);

		}
};

GameHempPuzzles.GraphicalUserInterface.prototype.showBackScreen = function() {
		if (this.hist.length > 0) {
				this.forwardHist.push(this.currentScreenId);
				var srcId = this.hist.pop();
				this.showScreen(srcId, false);
		} else {
				this.close();
		}
};

GameHempPuzzles.GraphicalUserInterface.prototype.showScreen = function(screeenId, isHist) {

		try {

				var scr = this.screens[screeenId],
								cscr = this.screens[this.currentScreenId];

				if (cscr) {


						cscr.hide();

						if (isHist && this.hist.length <= 4 && this.hist[this.hist.length] != this.currentScreenId) {
								this.hist.push(this.currentScreenId);
						}

				}

				switch (screeenId) {
						case "main":
								if (!this.menuButton.domElement.isShow) {
										//this.menuButton.domElement.show();
								}
								break;
						case "menu":
								//	this.menuButton.domElement.hide();

								break;
						case "game":
								if (!this.menuButton.domElement.isShow) {
										//	this.menuButton.domElement.show();
								}
								break;
				}

				scr.show();
				this.currentScreenId = screeenId;

		} catch (e) {

				alert("error GameHempPuzzles.GraphicalUserInterface.prototype.showScreen - " + e.message + " srcId = " + screeenId);

		}

};


GameHempPuzzles.GraphicalUserInterface.prototype.resize = function() {
		var gameArea = document.getElementById('gameArea');
		var widthToHeight = 6 / 4;
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight;
		var newWidthToHeight = newWidth / newHeight;

		if (newWidthToHeight > widthToHeight) {
				newWidth = newHeight * widthToHeight;
				gameArea.style.height = newHeight + 'px';
				gameArea.style.width = newWidth + 'px';
		} else {
				newHeight = newWidth / widthToHeight;
				gameArea.style.width = newWidth + 'px';
				gameArea.style.height = newHeight + 'px';
		}
		gameArea.style.fontSize = (newWidth / 800) + 'em';
		gameArea.style.marginTop = (-newHeight / 2) + 'px';
		gameArea.style.marginLeft = (-newWidth / 2) + 'px';

};
