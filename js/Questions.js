GameHempPuzzles.questions = {
};
GameHempPuzzles.questions.use = {
};
GameHempPuzzles.questions.useCounter = 0;
GameHempPuzzles.questions.useDemo = 20;
GameHempPuzzles.questions.currentQuiz = {
};
GameHempPuzzles.questions.isDebug = false;

GameHempPuzzles.questions.init = function() {
		var ques,
						i;
		for (i = 0; i < this._0.length; i += 1) {
				ques = this._0[i];
				if (ques) {
						if (this[ques.type]) {
								this[ques.type].push(ques);
						}
				}
		}
};

GameHempPuzzles.questions.getQuest = function(type, id) {
		var quest,
						questions = this[type],
						i,
						l;

		if (questions) {
				for (i = 0, l = questions.length; i < l; i += 1) {
						if (questions[i].id == id) {
								quest = questions[i];
								break;
						}
				}
		}

		return quest;
};

GameHempPuzzles.questions.reset = function() {
		this.use = {
		};
		this.useCounter = 0;
		this.currentQuiz = {
		};
};
GameHempPuzzles.questions.getRandomQuest = function(type) {
		var n,
						i,
						l,
						qwest = null,
						questions,
						tempArr = [];
		try {
				if (type) {

						if (this.currentQuiz[type]) {
								questions = this.currentQuiz[type];
						} else {
								questions = this[type];

								for (i = 0, l = questions.length; i < l; i += 1) {
										if (!this.use[questions[i].id]) {
												tempArr.push(questions[i]);
										}
								}

								this.currentQuiz[type] = tempArr;
								questions = tempArr;
						}

						if (questions.length > 0) {
								if (this.isDebug) {
										alert("type:" + type + "questions:" + questions.length);
								}
								n = Math.round(Math.random() * questions.length - 1);
								tempArr = [];

								for (i = 0, l = questions.length; i < l; i += 1) {
										if (n == i) {
												qwest = questions[i];
										} else {
												tempArr.push(questions[i]);
										}
								}

								this.currentQuiz[type] = tempArr;
								if (qwest) {
										this.use[qwest.id] = true;
								}

						}
				}

				return qwest;

		} catch (e) {
				alert("getRandomQuest error: " + e.message);
		}
};
GameHempPuzzles.questions.types = {
		"item-0": "_0", //all
		"item-1": "_1", //forBeginners
		"item-2": "_2", //культура, история, музыка, кино
		"item-3": "_5", //девайсы и лайфстайл
		"item-4": "_4", //путешествия, география, законодательство
		"item-5": "_6", //Гровинг, техника, приспособления
		"item-6": "_3"  //иностанные языки
};

GameHempPuzzles.questions._0 = [{
				"id": 0,
				"question": "What does the word \"grower\" mean?",
				"answers": {
						"a": "Someone who grows cannabis",
						"b": "Wild lady in red",
						"c": "An Internet provider"
				},
				"type": "_1"
		}, {
				"id": 1,
				"question": "Who's the boss of the \"Green House Seed Company\"?",
				"answers": {
						"a": "Arjan",
						"b": "Marjan",
						"c": "Padavan"
				},
				"type": "_6"
		}, {
				"id": 2,
				"question": "What does the term \"white widow\" has to do with cannabis?",
				"answers": {
						"a": "Cannabis strain",
						"b": "Very sad strory",
						"c": "A nickname given to Holland's First Lady"
				},
				"type": "_1"
		}, {
				"id": 3,
				"question": "What should you do if the plants in your grow box started forming \"hairs\" and \"balls\"?",
				"answers": {
						"a": "Destroy those with \"balls\"",
						"b": "Destroy those with \"hairs\"",
						"c": "Destroy them all! With fire!"
				},
				"type": "_6"
		}, {
				"id": 4,
				"question": "In which country can you legally purchase and consume cannabis products without any special permission or license?<br>",
				"answers": {
						"a": "Holland<br>",
						"b": "Spain",
						"c": "Mongolia"
				},
				"type": "_1"
		}, {
				"id": 5,
				"question": "One of the best coffeeshops in Amsterdam?",
				"answers": {
						"a": "Abraxas",
						"b": "Karaxsas",
						"c": "Turaxas"
				},
				"type": "_6"
		}, {
				"id": 6,
				"question": "What is the most common haschich on EU-market?",
				"answers": {
						"a": "Morocco",
						"b": "Afghanistan",
						"c": "India"
				},
				"type": "_2"
		}, {
				"id": 7,
				"question": "Which American state voted medicinal marijuana program?",
				"answers": {
						"a": "California, 1996",
						"b": "Alaska, 2000",
						"c": "Texas, 1999"
				},
				"type": "_4"
		}, {
				"id": 8,
				"question": "What is the Latin word for \"wild hemp\"?",
				"answers": {
						"a": "Cannabis Ruderalis",
						"b": "Cannabis Sativa",
						"c": "Cannabis Indica"
				},
				"type": "_1"
		}, {
				"id": 9,
				"question": "What can LED lights do?",
				"answers": {
						"a": "Give you a relatively good harvest",
						"b": "Serve as a disincentive for plants",
						"c": "Cause headache "
				},
				"type": "_6"
		}, {
				"id": 10,
				"question": "What is the name for non-pollinated cannabis flowers?",
				"answers": {
						"a": "Sensimillia",
						"b": "Weed",
						"c": "Regular"
				},
				"type": "_6"
		}, {
				"id": 11,
				"question": "Who discovered THC?",
				"answers": {
						"a": "Raphael Mechoulam, 1964",
						"b": "Timothy Leary, 1969",
						"c": "Marie Curie, 1909"
				},
				"type": "_2"
		}, {
				"id": 12,
				"question": "Whats the best place to hide some hashish while traveling?",
				"answers": {
						"a": "Smuggling drugs abroad is highly unadvised",
						"b": "A pocket is a perfect place for a stash",
						"c": "The shoes will do, especially since you have to take them off in the airport anyway"
				},
				"type": "_"
		}, {
				"id": 13,
				"question": "In which region of Morocco most of the hash production takes place?",
				"answers": {
						"a": "Ketama mountainside",
						"b": "Casablanca",
						"c": "Near the Algerian border"
				},
				"type": "_4"
		}, {
				"id": 14,
				"question": "Why do some growers use perforated pots?",
				"answers": {
						"a": "For better air flow and easy roots clipping",
						"b": "For drainage",
						"c": "Because they look better"
				},
				"type": "_6"
		}, {
				"id": 15,
				"question": "How much would a fully grown cannabis clone plant cost in an Austrian grow shop?",
				"answers": {
						"a": "6 to 9 euros per plant",
						"b": "10 to 15 Euros per plant",
						"c": "Marijuana plants trade is prohibited in Austria"
				},
				"type": "_4"
		}, {
				"id": 16,
				"question": "The best Spanish stoner magazine?",
				"answers": {
						"a": "Cáñamo",
						"b": "Youmba",
						"c": "Yourba"
				},
				"type": "_2"
		}, {
				"id": 17,
				"question": "What's the main safety tip for a professional grower?",
				"answers": {
						"a": "Don't tell anyone about your hobby",
						"b": "Don't think too much",
						"c": "Always wash your hands after using the bathroom"
				},
				"type": "_3"
		}, {
				"id": 18,
				"question": "What's a nickname for those individuals who grow pot in secret outdoor plantations?",
				"answers": {
						"a": "Guerrilla growers",
						"b": "Gorilla growers",
						"c": "Godzilla growers"
				},
				"type": "_1"
		}, {
				"id": 19,
				"question": "An ancient empire in which hashish was considered an everyday common product?",
				"answers": {
						"a": "Mongol Empire",
						"b": "Inca Empire",
						"c": "British Empire"
				},
				"type": "_2"
		}, {
				"id": 20,
				"question": "A cannabis strain named after its blue color?",
				"answers": {
						"a": "Blueberry",
						"b": "Malawi Gold",
						"c": "White Widow"
				},
				"type": "_1"
		}, {
				"id": 21,
				"question": "Canadian company, famous because of its bud-trimmers?",
				"answers": {
						"a": "Trimpro",
						"b": "Turner",
						"c": "Bush Administration"
				},
				"type": "_6"
		}, {
				"id": 22,
				"question": "Which cannabinoid is believed to be the most promising in terms of controlling the spread of cancer cells?",
				"answers": {
						"a": "CBD",
						"b": "THC",
						"c": "Stearic acid"
				},
				"type": "_5"
		}, {
				"id": 23,
				"question": " A medieval Islamic sect which was also known as \"the hashish eaters\"?",
				"answers": {
						"a": "Assassins",
						"b": "Wahhabits",
						"c": "Sufi "
				},
				"type": "_2"
		}, {
				"id": 24,
				"question": "What for should artificial lighting in a grow box be changed to the 12/12 on/off period?",
				"answers": {
						"a": "To stimulate flowering",
						"b": "To stimulate vegetation",
						"c": "To stimulate root formation"
				},
				"type": "_6"
		}, {
				"id": 25,
				"question": "In which region a nickname \"dagga\" for marijuana is common?",
				"answers": {
						"a": "South Africa",
						"b": "Somalia",
						"c": "Morocco"
				},
				"type": "_3"
		}, {
				"id": 26,
				"question": "Who was the author of the Hashish Poem?",
				"answers": {
						"a": "Charles Baudelaire",
						"b": "Arthur Rimbaud",
						"c": "Jim Morrison"
				},
				"type": "_2"
		}, {
				"id": 27,
				"question": "Do you know region in Kazakhstan where lots of wild cannabis grows? ",
				"answers": {
						"a": "Chui valley",
						"b": "Astana",
						"c": "Borat city"
				},
				"type": "_4"
		}, {
				"id": 28,
				"question": "What means HESI ?",
				"answers": {
						"a": "Fertilizer brand",
						"b": "Potato chips",
						"c": "A toaster"
				},
				"type": "_6"
		}, {
				"id": 29,
				"question": "A brand, known for automatic pollinating machines made for hash producing?",
				"answers": {
						"a": "Pollinator",
						"b": "Trmpro",
						"c": "Growers Pouder"
				},
				"type": "_5"
		}, {
				"id": 30,
				"question": "From where \"the highest\" hash comes from?",
				"answers": {
						"a": "Nepal",
						"b": "Ghana",
						"c": "Moroccо"
				},
				"type": "_3"
		}, {
				"id": 31,
				"question": "Which countries have the most draconian drug laws?",
				"answers": {
						"a": "Thailand, China, United Arab Emirates, Turkey, Sweden",
						"b": "India, Spain, Czech Republic, Austria",
						"c": "Russia, Ukraine, Belarus, Kazakhstan, Georgia"
				},
				"type": "_4"
		}, {
				"id": 32,
				"question": "What is aeroponics?",
				"answers": {
						"a": "The roots of a plant are being grown in an air or mist environment without the use of soil",
						"b": "The plant roots are in the water, oxygenated",
						"c": "The plants are grown in pockets of the pants"
				},
				"type": "_6"
		}, {
				"id": 33,
				"question": "What kind of cannabis plant produce the most buds?",
				"answers": {
						"a": "Feminized",
						"b": "Autoflowering",
						"c": "Regular"
				},
				"type": "_1"
		}, {
				"id": 34,
				"question": "Which European country has four annual cannabis fairs?",
				"answers": {
						"a": "Spain",
						"b": "Holland",
						"c": "Austria"
				},
				"type": "_4"
		}, {
				"id": 35,
				"question": "How much weed do Holland coffee shops are allowed to serve per customer?",
				"answers": {
						"a": "Not more than five grams",
						"b": "Not more than seven grams",
						"c": "Not more than forty grams"
				},
				"type": "_4"
		}, {
				"id": 36,
				"question": "What may happen if you attempt driving stoned?",
				"answers": {
						"a": "You can get into lots of trouble",
						"b": "Everything's gonna be fine",
						"c": "The car won't start"
				},
				"type": "_1"
		}, {
				"id": 37,
				"question": "Portugal laws are hard for cannabis smokers?",
				"answers": {
						"a": "False, Portugal laws are soft on pot smokers",
						"b": "True, possession can lead to imprisonment",
						"c": "Trick question: Portugal has no laws"
				},
				"type": "_4"
		}, {
				"id": 38,
				"question": "What do you need to get a medicinal marijuana card in USA?",
				"answers": {
						"a": "Doctor's recommendation",
						"b": "Doctor's prescription",
						"c": "Doctor's degree"
				},
				"type": "_4"
		}, {
				"id": 39,
				"question": "What can hemp oil be used for?",
				"answers": {
						"a": "Salad dressing",
						"b": "Engine greasing",
						"c": "Getting high"
				},
				"type": "_1"
		}, {
				"id": 40,
				"question": "Which product is gathered by rubbing the tops of marijuana plants?",
				"answers": {
						"a": "Hashish",
						"b": "Opium",
						"c": "Marijuana"
				},
				"type": "_1"
		}, {
				"id": 41,
				"question": "For how long can THC be traced in saliva?",
				"answers": {
						"a": "Up to 4 hours",
						"b": "10 hours",
						"c": "24 hours"
				},
				"type": "_5"
		}, {
				"id": 42,
				"question": "A Dutch company that produces pre-rolled paper cones for lazy smokers?",
				"answers": {
						"a": "Vandenberg Special Products",
						"b": "Scania Machines",
						"c": "Bulwers Polwers"
				},
				"type": "_5"
		}, {
				"id": 43,
				"question": "Biggest German cannabis magazines?",
				"answers": {
						"a": "Hanf, Hanfblatt, Grow",
						"b": "Hemp, Hemporium, Growlight",
						"c": "Mein Kampf, Herkorium, Bittburger"
				},
				"type": "_2"
		}, {
				"id": 44,
				"question": "What is CAN Filters?",
				"answers": {
						"a": "A Dutch brand of coal filters",
						"b": "A German brand of coal for the filters",
						"c": "An American brand of filter testers"
				},
				"type": "_6"
		}, {
				"id": 45,
				"question": "What is a grinder?",
				"answers": {
						"a": "An instrument for grinding buds",
						"b": "A pencil sharpener",
						"c": "A hashish press"
				},
				"type": "_5"
		}, {
				"id": 46,
				"question": "That is mixed into the ground to loosen it, so it was easier for roots to grow?",
				"answers": {
						"a": "Perlite granules",
						"b": "Plastic granules",
						"c": "Sand"
				},
				"type": "_6"
		}, {
				"id": 47,
				"question": "In what country many citizen are Rastamans?",
				"answers": {
						"a": "Jamaica",
						"b": "Monaco",
						"c": "Mozambique"
				},
				"type": "_4"
		}, {
				"id": 48,
				"question": "Who is considered to be creator of feminized seeds?",
				"answers": {
						"a": "Henk van Daelen, Dutch Passion",
						"b": "Steven Crowley, Rastman Seeds",
						"c": "James Hetfield, Metallica"
				},
				"type": "_2"
		}, {
				"id": 49,
				"question": "Can marijuana be legally purchased in Denmark?",
				"answers": {
						"a": "Hashish is virtually legal in Christiania, a famous hippie commune in the center of Copenhagen",
						"b": "No way, no how",
						"c": "Only if you have connections"
				},
				"type": "_4"
		}, {
				"id": 50,
				"question": "What was the name of the first Dutch coffee shop?",
				"answers": {
						"a": "Yellow Mellow, 1973",
						"b": "Yellow Strellow, 1967",
						"c": "Yelki Palki, 1998"
				},
				"type": "_2"
		}, {
				"id": 51,
				"question": "What is hemp?",
				"answers": {
						"a": "The fibers derived from cannabis stalk",
						"b": "Fibers obtained from the leaves of a cannabis plant",
						"c": "Pollen cannabis"
				},
				"type": "_1"
		}, {
				"id": 52,
				"question": "What is necessery for the drying of harvested buds?",
				"answers": {
						"a": "A warm, dry room",
						"b": "Hot, wet conditions",
						"c": "A freezer and icecream"
				},
				"type": "_"
		}, {
				"id": 53,
				"question": "What is the \"secret ingredient\" in the Plagron Guano fertilizer?",
				"answers": {
						"a": "Bat shit",
						"b": "Bird guano",
						"c": "Coco fibers"
				},
				"type": "_6"
		}, {
				"id": 54,
				"question": "How much THC can be found in technical hemp?",
				"answers": {
						"a": "Not more then 0,3%",
						"b": "Not more then 0,5%",
						"c": "Approximately 1%"
				},
				"type": "_4"
		}, {
				"id": 55,
				"question": "Which organ does the THC impact mostly?",
				"answers": {
						"a": "Brain",
						"b": "Liver",
						"c": "Stomach"
				},
				"type": "_3"
		}, {
				"id": 56,
				"question": "Which percentage of the European population uses cannabis regularly today?",
				"answers": {
						"a": "2-3%",
						"b": "0,5-2%",
						"c": "4-8%"
				},
				"type": "_3"
		}, {
				"id": 57,
				"question": "Who is the author of \"Grower's Bible\"?",
				"answers": {
						"a": "Jorge Cervantes",
						"b": "Jorge Serkantes",
						"c": "Meek Gotich"
				},
				"type": "_2"
		}, {
				"id": 58,
				"question": "What kind of penalty would a pot smoker face in Sweden?",
				"answers": {
						"a": "Mandatory rehab",
						"b": "Jail sentence",
						"c": "A promotion"
				},
				"type": "_4"
		}, {
				"id": 59,
				"question": "What TV channel was the first to make a documentary about modern cannabis culture?",
				"answers": {
						"a": "National Geographic",
						"b": "CNN",
						"c": "BBC"
				},
				"type": "_2"
		}, {
				"id": 60,
				"question": "What is the most popular cannabis app for an iPhone?",
				"answers": {
						"a": "Weed Strains 3D Pro",
						"b": "Weedypedia",
						"c": "Wiki Liki Pikki"
				},
				"type": "_3"
		}, {
				"id": 61,
				"question": "What is the Green Sensation from Plagron made for?",
				"answers": {
						"a": "It makes the buds grow bigger",
						"b": "It makes the stem grow thicker",
						"c": "Less harvest, more THC"
				},
				"type": "_6"
		}, {
				"id": 62,
				"question": "What should be done to a plant to increase its branching?",
				"answers": {
						"a": "Clipping off the tops",
						"b": "Clipping off the buds",
						"c": "Watering with iodine"
				},
				"type": "_6"
		}, {
				"id": 63,
				"question": "Whats the best way to buy some hash in India?",
				"answers": {
						"a": "Ask cab drivers",
						"b": "Ask customs officials",
						"c": "Trained monkeys"
				},
				"type": "_4"
		}, {
				"id": 64,
				"question": "When did the \"Club of the Hashish-Eaters\" existed in Paris?",
				"answers": {
						"a": "End of XIX century, 1870...",
						"b": "Beginning of the XVII century, 1710 …",
						"c": "The middle of the XX century, 1955 …"
				},
				"type": "_2"
		}, {
				"id": 65,
				"question": "In which way were the members of \"Brotherhood of Eternal Love\" smuggling hashish into US?",
				"answers": {
						"a": "By stuffing surfing boards with it",
						"b": "By duct-taping bricks of it to their bodies",
						"c": "By swallowing containers with hash"
				},
				"type": "_2"
		}, {
				"id": 66,
				"question": "What is the name of a smoking pipe, which is clamped between the little finger and ring finger?",
				"answers": {
						"a": "Chillum",
						"b": "Bhang",
						"c": "Maha Vishnu"
				},
				"type": "_5"
		}, {
				"id": 67,
				"question": "What is the name of the an Indian god who smokes chillum?",
				"answers": {
						"a": "Shiva",
						"b": "Vishnu",
						"c": "Ganesh"
				},
				"type": "_2"
		}, {
				"id": 68,
				"question": "What is the right way to dry one's harvest?",
				"answers": {
						"a": "To hang them downwards in a dark dry place",
						"b": "Arranging the buds on a table and covering them with a piece of a newspaper",
						"c": "Putting them on a heating radiator"
				},
				"type": "_6"
		}, {
				"id": 69,
				"question": "Two comedians, who are considered the fathers of stoner comedy?",
				"answers": {
						"a": "Cheech and Chong",
						"b": "Abbott and Costello",
						"c": "Jay and Silent Bob"
				},
				"type": "_2"
		}, {
				"id": 70,
				"question": "What place in India is the most popular among the rastamans?",
				"answers": {
						"a": "Goa",
						"b": "Palolem",
						"c": "Sri-Lanka"
				},
				"type": "_4"
		}, {
				"id": 71,
				"question": "Which of these strains is considered to be the most effective for the relief of chronic pain?",
				"answers": {
						"a": "White Rhino",
						"b": "Pineapple Express",
						"c": "Lowryder#2"
				},
				"type": "_6"
		}, {
				"id": 72,
				"question": "What was the name the very first festival of smokers and cannabis breeders?",
				"answers": {
						"a": "Cannabis Cup",
						"b": "Spannabis",
						"c": "Drugs Mugs"
				},
				"type": "_2"
		}, {
				"id": 73,
				"question": "In what substance THC can be dissolved?",
				"answers": {
						"a": "Ethanol",
						"b": "Water",
						"c": "Saliva"
				},
				"type": "_5"
		}, {
				"id": 74,
				"question": "Which European countries banned the sale of cannabis seeds?",
				"answers": {
						"a": "Germany, France, Switzerland",
						"b": "Spain, Slovenia, Czech Republic",
						"c": "Tunisia, Morocco, Libya"
				},
				"type": "_4"
		}, {
				"id": 75,
				"question": "Other words for \"joint\"?",
				"answers": {
						"a": "Spliff, blunt, doobie",
						"b": "Bee's knees, splendid, swell stuff",
						"c": "Stamp, cutting grooves, boots"
				},
				"type": "_5"
		}, {
				"id": 76,
				"question": "What is the most effective way to minimize the harm to the organism by smoking cannabis?",
				"answers": {
						"a": "Using a vaporizer",
						"b": "Using filters in joints",
						"c": "Smoking through a bong"
				},
				"type": "_5"
		}, {
				"id": 77,
				"question": "The name of the manufacturer of manual presses with removable dies for marking hashish dimes?",
				"answers": {
						"a": "Peacemaker, Austria",
						"b": "Trolmhak, Denmark",
						"c": "Krostyr, USA"
				},
				"type": "_5"
		}, {
				"id": 78,
				"question": "Is it possible to carry medicinal cannabis, purchased in a Dutch pharmacy across Europe?",
				"answers": {
						"a": "Yes, if you have a patient card and filling out the form",
						"b": "You can, but hidden in Univac jars",
						"c": "Any attempt is punishable by law"
				},
				"type": "_4"
		}, {
				"id": 79,
				"question": "When do the Nepalese producers of hashish begin their work?",
				"answers": {
						"a": "At dawn, when the buds are covered in dew",
						"b": "At noon, when pollen is warming",
						"c": "At any time of the day"
				},
				"type": "_4"
		}, {
				"id": 80,
				"question": "Name the world's first portable butane vaporizer brand",
				"answers": {
						"a": "iOlite",
						"b": "iOrbite",
						"c": "iMolodets"
				},
				"type": "_5"
		}, {
				"id": 81,
				"question": "The name of a car manufacturer, who proposed to construct an automoblie made out of hemp plastic?",
				"answers": {
						"a": "Ford",
						"b": "Forbes",
						"c": "Fellini"
				},
				"type": "_2"
		}, {
				"id": 82,
				"question": "What is a marijuana dispensary?",
				"answers": {
						"a": "A pharmacy where you can purchase medical marijuana",
						"b": "A rehab for pot smokers",
						"c": "A place where marijuana is stored"
				},
				"type": "_3"
		}, {
				"id": 83,
				"question": "Can you drink beer in a Dutch coffee shop?",
				"answers": {
						"a": "No",
						"b": "Yes",
						"c": "Only if you bring your own"
				},
				"type": "_4"
		}, {
				"id": 84,
				"question": "Does cannabis smoking allowed in spanish cafe's?",
				"answers": {
						"a": "Yes, if the cafe belongs to the local Cannabis Club",
						"b": "No",
						"c": "If you know the owner"
				},
				"type": "_2"
		}, {
				"id": 85,
				"question": "Where in South Asia you almost legally purchase some smoking stuff?",
				"answers": {
						"a": "Cambodia",
						"b": "Thailand",
						"c": "Vietnam"
				},
				"type": "_4"
		}, {
				"id": 86,
				"question": "Two main Argentinian cannabis magazines?",
				"answers": {
						"a": "Haze, THC",
						"b": "Buenos porros, Fumos",
						"c": "Hasta la marijuana, Hola MJ"
				},
				"type": "_2"
		}, {
				"id": 87,
				"question": "What does the word \"dubbing\" means?",
				"answers": {
						"a": "Smoking butane cannabis extract through the hookah with a titanium head",
						"b": "Steeplechase",
						"c": "Trimming of the cannabis plants branches"
				},
				"type": "_3"
		}, {
				"id": 88,
				"question": "A slang word for marijuana popular in 1930's?",
				"answers": {
						"a": "Reefer",
						"b": "Beatnik",
						"c": "Poofter"
				},
				"type": "_3"
		}, {
				"id": 89,
				"question": "A German word for \"cannabis\"?",
				"answers": {
						"a": "Hanf",
						"b": "Hanffen",
						"c": "Fluegendihaimer"
				},
				"type": "_3"
		}, {
				"id": 90,
				"question": "How do I buy cannabis seeds (in Chezch)?",
				"answers": {
						"a": "Myslíte si, prodat konopných semen?",
						"b": "Proč je váš zadek tak velký?",
						"c": "Kolik je hodin?"
				},
				"type": "_3"
		}, {
				"id": 91,
				"question": "What is the origin of the word \"ganja\"?",
				"answers": {
						"a": "Sanskrit",
						"b": "Jamaican I&amp;I",
						"c": "Pidgin English"
				},
				"type": "_3"
		}, {
				"id": 92,
				"question": "Why is a reefer but referred to as a roach?",
				"answers": {
						"a": "Because 'roach' is a British slang word for a joint.",
						"b": "Because it resembles a cockroach",
						"c": "Because joints were invented by William S. Roache"
				},
				"type": "_3"
		}, {
				"id": 93,
				"question": "What is a marijuana \"high\"?",
				"answers": {
						"a": "Excited state of mind, energy refill, cool state of mind",
						"b": "Depressed, desperate sense of self, a synonym for bad trip",
						"c": "Sleepiness"
				},
				"type": "_3"
		}, {
				"id": 94,
				"question": "What does that mean to be \"stoned\" on weed?",
				"answers": {
						"a": "A passive, meditative mood, usually occurs after smoking Indica",
						"b": "An exited, horny state of mind",
						"c": "Paranoid, fearful behavior"
				},
				"type": "_3"
		}, {
				"id": 95,
				"question": "Any \"weed pests\" which coud destroy your harvest?",
				"answers": {
						"a": "Cannabis flea, which feeds only on hemp plants, and many others beasts... ",
						"b": "No, cannabis has no natural enemies",
						"c": "Pests attack cannabis as much as any other plant"
				},
				"type": "_6"
		}, {
				"id": 96,
				"question": "Who wrote the song Low Rider?",
				"answers": {
						"a": "Charles Miller",
						"b": "James Brown",
						"c": "Bob Marley"
				},
				"type": "_2"
		}, {
				"id": 97,
				"question": "Which editions of the Spanish magazine \"Cáñamo\" set free seed samples?",
				"answers": {
						"a": "March, April",
						"b": "May, June",
						"c": "January, September"
				},
				"type": "_2"
		}, {
				"id": 98,
				"question": "When did the author of the book \"The Growers Bible\" registered his cannabis seed bank, and what was it called?",
				"answers": {
						"a": "2013, Jorge Cervantes Seeds",
						"b": "2011, Jorge's Seeds",
						"c": "2000, Cool Seeds"
				},
				"type": "_6"
		}, {
				"id": 99,
				"question": "How many harvests can be gathered in a hydroponic greenhouse in one year?",
				"answers": {
						"a": "Three to eight",
						"b": "Eight to eleven",
						"c": "Not more then three"
				},
				"type": "_6"
		}, {
				"id": 100,
				"question": "What are the russian cannabis market notorious for?",
				"answers": {
						"a": "Very rapid and stable grow",
						"b": "Free seed samples for tourists in Amsterdam",
						"c": "Yellow colour cannabis strains"
				},
				"type": "_2"
		}, {
				"id": 101,
				"question": "Where was born the idea of growing cannabis, hidden up in the trees?",
				"answers": {
						"a": "California",
						"b": "Mexico",
						"c": "Africa"
				},
				"type": "_6"
		}, {
				"id": 102,
				"question": "What does the law about the Dutch \"weitpass\" mean for the localr residents of Holland?",
				"answers": {
						"a": "Coffeshops near the border don't sell to the tourists",
						"b": "All Dutch coffeeshops sells only to the locals",
						"c": "Cannabis trade is banned"
				},
				"type": "_4"
		}, {
				"id": 103,
				"question": "What gadgets are used nowadays to detect intrusions in your growhouse?",
				"answers": {
						"a": "An SMS controller from the G-SE company",
						"b": "A CCTV system",
						"c": "A fortune teller"
				},
				"type": "_6"
		}, {
				"id": 104,
				"question": "How is hashish being prepared for serving in the Dutch coffeeshops?",
				"answers": {
						"a": "It's grinded on a special hashish grinder",
						"b": "Cut in pieces with a small knife",
						"c": "Hacked into random lumps with a large machete."
				},
				"type": "_2"
		}, {
				"id": 105,
				"question": "What is the name of a Northern California region famous for massive marijuana production?",
				"answers": {
						"a": "Emerald Triangle",
						"b": "Silicon Valley",
						"c": "Kramy Stow"
				},
				"type": "_4"
		}, {
				"id": 106,
				"question": "Does marijuana consumption have an impact on the reproductive function?",
				"answers": {
						"a": "The impact has not been proven to be drastic or even noticable",
						"b": "Marijuana makes men impotent",
						"c": "Marijuana actually stimulates the fertility."
				},
				"type": "_2"
		}, {
				"id": 107,
				"question": "Is \"Barney's Farm\" only a seed bank or also the name of a coffeeshop?",
				"answers": {
						"a": "Yes, Barney's Farm owns coffeeshop in Amsterdam",
						"b": "No, coffeeshop belongs to another company",
						"c": "There is no such coffeeshop at all"
				},
				"type": "_4"
		}, {
				"id": 108,
				"question": "What is the number of lethal cases of marijuana overdose? ",
				"answers": {
						"a": "0 persons yet",
						"b": "30-50 people per year ",
						"c": "About 100 lethal cases a year"
				},
				"type": "_2"
		}];
GameHempPuzzles.questions._1 = [];
GameHempPuzzles.questions._2 = [];
GameHempPuzzles.questions._3 = [];
GameHempPuzzles.questions._4 = [];
GameHempPuzzles.questions._5 = [];
GameHempPuzzles.questions._6 = [];

GameHempPuzzles.questions.init();


