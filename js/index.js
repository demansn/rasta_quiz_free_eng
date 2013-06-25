// This event handler is fired once the AppMobi libraries are ready
function onDeviceReady() {

		if (!Function.prototype.bind) {
				Function.prototype.bind = function(thisAgrg) {

						var fn = this,
										slice = Array.prototype.slice,
										agrs = slice.call(arguments, 1);

						return function() {
								return fn.apply(thisAgrg, agrs.concat(slice.call(arguments)));
						};
				};
		}

		GameHempPuzzles.resourceLoad();
		//GameHempPuzzles.init();

}

preventDefaultScroll = function(event) {
		// Prevent scrolling on this element
		event.preventDefault();
		window.scroll(0, 0);
		return false;
};

function DOMLoad() {
		document.addEventListener('touchmove', preventDefaultScroll, false);
		document.addEventListener("deviceready", onDeviceReady, false);
		onDeviceReady();
}

