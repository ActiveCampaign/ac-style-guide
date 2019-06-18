// Global
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

// Toasts
function showToast(message) {
	var template = '<div class="toast">' + message + '</div>';

	if (!$('.toast').length) { // Check if a toast is already visible first

		// Add that shit to the DOM son!
		$('body').prepend(template);
		$('.toast').addClass('animated bounceInDown');
		$('.toast').one(animationEnd, function() {
			//$('.toast').removeClass('bounceInDown');
			setTimeout(function() {
				$('.toast').addClass('bounceOutUp');
				$('.toast').one(animationEnd, function() {
					$('.toast').remove();
				});
			}, 3000);

		});
	}
}