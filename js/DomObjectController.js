GameHempPuzzles.DomObjectController = function DomObjectController(domObject) {
	this.view = domObject;
	this.style = domObject.style;
	this.style.opacity = 1;
	this.appearTimerId = null;
	this.disappearTimerId = null;
};

GameHempPuzzles.DomObjectController.prototype.view = null;
GameHempPuzzles.DomObjectController.prototype.style = null;
GameHempPuzzles.DomObjectController.prototype.isShow = true;
GameHempPuzzles.DomObjectController.prototype.isVisible = true;
GameHempPuzzles.DomObjectController.prototype.appearTimerId = null;
GameHempPuzzles.DomObjectController.prototype.disappearTimerId = null;

GameHempPuzzles.DomObjectController.prototype.setHTML = function(html) {
	this.view.innerHTML = html;
};

GameHempPuzzles.DomObjectController.prototype.getHTML = function() {
	return this.view.innerHTML;
};

GameHempPuzzles.DomObjectController.prototype.setVisible = function(visible) {
	if (visible) {
		this.style.visibility = "visible";
	} else {
		this.style.visibility = "hidden";
	}
	this.isVisible = visible;
};

GameHempPuzzles.DomObjectController.prototype.show = function() {
	this.isShow = true;
	this.style.display = "block";
	this.style.opacity = 1;
};

GameHempPuzzles.DomObjectController.prototype.hide = function() {
	this.isShow = false;
	this.style.display = "none";
	this.style.opacity = 0;
};

GameHempPuzzles.DomObjectController.prototype.bind = function(type, handler, preventBubble) {
	this.view.addEventListener(type, handler, preventBubble);
};

GameHempPuzzles.DomObjectController.prototype.unbind = function(type, handler, preventBubble) {
	this.view.removeEventListener(type, handler, preventBubble);
};

GameHempPuzzles.DomObjectController.prototype.appear = function(deley, x) {
	try {
		$(this.view).animate({
			opacity: 1
		},
		deley, this.setVisible.bind(this, true));
	} catch (e) {
		alert("err " + e.message);
	}
	/*	var op;
	 x = x || 1;

	 if (!this.isVisible) {
	 this.setVisible(true);
	 }

	 op = (this.style.opacity) ? parseFloat(this.style.opacity) : parseInt(this.style.filter) / 100;
	 if (op < x) {

	 clearTimeout(this.appearTimerId);

	 op += 0.10;

	 this.style.opacity = op;

	 this.style.filter = 'alpha(opacity=' + op * 100 + ')';

	 this.appearTimerId = setTimeout(this.appear.bind(this, deley, x), deley);

	 }*/

};

GameHempPuzzles.DomObjectController.prototype.disappear = function(deley, x) {
	/*var op = parseFloat(this.style.opacity);
	 x = x || 0.10;

	 op = (this.style.opacity) ? parseFloat(this.style.opacity) : parseInt(this.style.filter) / 100;

	 if (op > x) {

	 clearTimeout(this.disappearTimerId);

	 op -= 0.10;

	 this.style.opacity = op;

	 this.style.filter = 'alpha(opacity=' + op * 100 + ')';

	 this.disappearTimerId = setTimeout(this.disappear.bind(this, deley, x), deley);

	 } else {
	 this.setVisible(false);
	 }*/
	try {
		$(this.view).animate({
			opacity: 0
		},
		deley, this.setVisible.bind(this, false));
	} catch (e) {
		alert("err " + e.message);
	}
};


GameHempPuzzles.DomObjectController.prototype.addClass = function addClass(klass) {
	var classes = this.view.className.split(" "),
					newClassName = "";

	for (var i = 0; i < classes.length; i += 1) {
		if (classes[i] != klass) {
			newClassName += classes[i] + " ";
		}
	}


	this.view.className = newClassName + klass;
};

GameHempPuzzles.DomObjectController.prototype.removeClass = function removeClass(klass) {
	var classes = this.view.className.split(" "),
					newClassName = "";

	for (var i = 0; i < classes.length; i += 1) {
		if (classes[i] != klass) {
			newClassName += classes[i] + " ";
		}
	}


	this.view.className = newClassName;
};

GameHempPuzzles.DomObjectController.prototype.up = function up(listener) {
	GameHempPuzzles.eventHandling.addListener(GameHempPuzzles.ScreenEvents.UP, listener.bind(this), this.view, false);
};

GameHempPuzzles.DomObjectController.prototype.down = function down(listener) {
	GameHempPuzzles.eventHandling.addListener(GameHempPuzzles.ScreenEvents.DOWN, listener.bind(this), this.view, false);
};

GameHempPuzzles.DomObjectController.prototype.move = function move(listener) {
	GameHempPuzzles.eventHandling.addListener(GameHempPuzzles.ScreenEvents.MOVE, listener.bind(this), this.view, false);
};

GameHempPuzzles.DomObjectController.prototype.over = function over(listener) {
	GameHempPuzzles.eventHandling.addListener(GameHempPuzzles.ScreenEvents.OVER, listener.bind(this), this.view, false);
};

GameHempPuzzles.DomObjectController.prototype.out = function out(listener) {
	GameHempPuzzles.eventHandling.addListener(GameHempPuzzles.ScreenEvents.OUT, listener.bind(this), this.view, false);
};

GameHempPuzzles.DomObjectController.prototype.reset = function() {
	this.style.visibility = "visible";
	this.style.display = "block";
	this.style.opacity = 1;
};

GameHempPuzzles.DomObjectController.newDomObject = function(tagName) {
	var element = document.createElement(tagName),
					doc = new GameHempPuzzles.DomObjectController(element);

	return doc;
};

GameHempPuzzles.DomObjectController.getDomObject = function(id) {
	var element = document.getElementById(id),
					doc = new GameHempPuzzles.DomObjectController(element);

	return doc;
};