GameHempPuzzles.ButtonContoller = function ButtonController(id) {
	this.domElement = GameHempPuzzles.DomObjectController.getDomObject(id);

	this.up(function() {
		this.isDown = false;
		this.domElement.removeClass("selected");
	});

	this.out(function() {
		if (this.isDown) {
			this.isDown = false;
			this.domElement.removeClass("selected");
		}
	});

	this.down(function() {
		this.isDown = true;
		this.domElement.addClass("selected");
	});

};

GameHempPuzzles.ButtonContoller.prototype.domElement = null;
GameHempPuzzles.ButtonContoller.prototype.isEnabled = true;
GameHempPuzzles.ButtonContoller.prototype.isDown = false;

GameHempPuzzles.ButtonContoller.prototype.up = function(listener) {
	this.domElement.up(listener.bind(this));
};

GameHempPuzzles.ButtonContoller.prototype.down = function(listener) {
	this.domElement.down(listener.bind(this));
};

GameHempPuzzles.ButtonContoller.prototype.over = function(listener) {
	this.domElement.over(listener.bind(this));
};

GameHempPuzzles.ButtonContoller.prototype.out = function(listener) {
	this.domElement.out(listener.bind(this));
};