
GameHempPuzzles.storege = {};
GameHempPuzzles.storege.data = null;

GameHempPuzzles.storege.init = function() {
	if (typeof (window.localStorage) === "undefined") {
		this.data = null;
	} else {
		this.data = window.localStorage;
	}
};

GameHempPuzzles.storege.getData = function(key) {
	var dt,
					dtstr;

	if (this.data) {

		dtstr = this.data.getItem(key);
		dt = JSON.parse(dtstr);

		return dt;
	}
};

GameHempPuzzles.storege.setData = function(key, data) {
	if (this.data) {
		this.data.setItem(key, JSON.stringify(data));
	}
};

GameHempPuzzles.storege.removeData = function(key) {
	if (this.data) {
		this.data.removeItem(key);
	}
};
