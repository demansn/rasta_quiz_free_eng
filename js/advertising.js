GameHempPuzzles.advresing = {
};

GameHempPuzzles.advresing.data = [
		"img/ads/reklama1.jpg",
		"img/ads/reklama2.jpg",
		"img/ads/reklama3.jpg",
		"img/ads/reklama4.jpg",
		"img/ads/reklama5.jpg"
];

GameHempPuzzles.advresing.imgs = [];
GameHempPuzzles.advresing.currentAd = 0;
GameHempPuzzles.advresing.container = 0;
GameHempPuzzles.advresing.time = 5;
GameHempPuzzles.advresing.counterTime = 0;
GameHempPuzzles.advresing.target = 12;
GameHempPuzzles.advresing.counter = 0;
GameHempPuzzles.advresing.timeView = null;
GameHempPuzzles.advresing.view = null;

GameHempPuzzles.advresing.init = function() {

		var img;

		for (var i = 0; i < this.data.length; i += 1) {
				img = new Image();
				img.src = this.data[i];
				img.className = "advresing";
				this.imgs.push(img);
		}

		this.container = document.getElementById("adView");
		this.view = document.getElementById("advresing");
		this.timeView = document.getElementById("timeView");
		imgAd = this.imgs[this.currentAd];
		this.container.appendChild(imgAd);
};

GameHempPuzzles.advresing.next = function() {
		var imgAd;

		imgAd = this.imgs[this.currentAd];
		this.container.removeChild(imgAd);


		if (this.currentAd < this.imgs.length - 1) {
				this.currentAd += 1;
		} else {
				this.currentAd = 0;
		}

		imgAd = this.imgs[this.currentAd];
		this.container.appendChild(imgAd);

};

GameHempPuzzles.advresing.show = function() {
		if (this.counter < this.target) {
				this.counter += 1;
		} else {
				this.counter = 0;
				this.next();
				this.view.style.display = "block";
				//setTimeout(this.hide.bind(this), this.time);
				this.updateTime();
		}
};

GameHempPuzzles.advresing.showNow = function() {
		this.next();
		this.container.style.display = "block";
		this.updateTime();
};

GameHempPuzzles.advresing.updateTime = function() {
		try {
				this.timeView.innerHTML = "Bro, get some rest! We will return to the game through " + (this.time - this.counterTime) + " seconds!";

				if (this.counterTime < this.time) {
						this.counterTime += 1;
						setTimeout(this.updateTime.bind(this), 1000);
				} else {
						this.counterTime = 0;
						setTimeout(this.hide.bind(this), 500);
				}
		} catch (e) {
				alert(e.message);
		}

};

GameHempPuzzles.advresing.hide = function() {
		this.view.style.display = "none";
};
