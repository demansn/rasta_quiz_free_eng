GameHempPuzzles.SoundPlayer = {};


GameHempPuzzles.SoundPlayer.Sound = function Sound(data) {

	this.audio = new Audio(data.url);
	this.startPosition = data.startPosition || 0.0;
	this.endPosition = data.endPosition || this.audio.duration;
	this.audio.loop = data.loop || false;
	this.audio.currentTime = data.position || this.startPosition || 0.0;

};

GameHempPuzzles.SoundPlayer.Sound.prototype.audio = null;

GameHempPuzzles.SoundPlayer.Sound.prototype.currentPosition = 0.0;
GameHempPuzzles.SoundPlayer.Sound.prototype.endPosition = 0.0;
GameHempPuzzles.SoundPlayer.Sound.prototype.startPosition = 0.0;

GameHempPuzzles.SoundPlayer.Sound.prototype.play = function(position) {
	if (position) {
		this.setPosition(position);
	}
	if (this.audio.ended) {
		this.setPosition(this.startPosition);
	}
	this.audio.play();
};
GameHempPuzzles.SoundPlayer.Sound.prototype.pause = function() {
	this.audio.pause();
};
GameHempPuzzles.SoundPlayer.Sound.prototype.stop = function() {
	this.audio.pause();
	this.setPosition(this.startPosition);
};
GameHempPuzzles.SoundPlayer.Sound.prototype.setPosition = function(position) {
	if (position < this.startPosition) {
		this.audio.currentTime = this.startPosition;
	} else if (position > this.endPosition) {
		this.audio.currentTime = this.startPosition;
	} else {
		this.audio.currentTime = position;
	}
};
GameHempPuzzles.SoundPlayer.Sound.prototype.getPosition = function() {
	return this.audio.currentTime;
};
GameHempPuzzles.SoundPlayer.Sound.prototype.setVolume = function(volume) {
	this.audio.volume = volume;
};
GameHempPuzzles.SoundPlayer.Sound.prototype.getVolume = function() {
	return this.audio.volume;
};
GameHempPuzzles.SoundPlayer.Sound.prototype.setLoop = function(loop) {
	this.audio.loop = loop;
};
GameHempPuzzles.SoundPlayer.Sound.prototype.setMute = function(mute) {
	this.audio.muted = mute;
};

GameHempPuzzles.SoundPlayer.sounds = {};
GameHempPuzzles.SoundPlayer.load = function(data) {
	for (var i = 0; i < data.length; i += 1) {
		this.sounds[data[i].id] = new this.Sound(data[i]);
	}
};
GameHempPuzzles.SoundPlayer.play = function(soundName) {
	var sound = this.sounds[soundName];
	if (sound) {
		sound.play();
	}
	return sound;
};
GameHempPuzzles.SoundPlayer.pause = function(soundName) {
	var sound = this.sounds[soundName];
	if (sound) {
		sound.pause();
	}
	return sound;
};
GameHempPuzzles.SoundPlayer.stop = function(soundName) {
	var sound = this.sounds[soundName];
	if (sound) {
		sound.stop();
	}
	return sound;
};
GameHempPuzzles.SoundPlayer.setPosition = function(soundName, position) {
	var sound = this.sounds[soundName];
	if (sound) {
		sound.setPosition(position);
	}
	return sound;
};
GameHempPuzzles.SoundPlayer.getPosition = function(soundName) {
	var sound = this.sounds[soundName],
					position;
	if (sound) {
		position = sound.getPosition();
	}
	return position;
};

GameHempPuzzles.SoundPlayer.setVolume = function(soundName, volume) {
	var sound = this.sounds[soundName];
	if (sound) {
		sound.setVolume(volume);
	}
	return sound;
};

GameHempPuzzles.SoundPlayer.getVolume = function(soundName) {
	var sound = this.sounds[soundName],
					volume;
	if (sound) {
		volume = sound.getPosition();
	}
	return volume;
};
