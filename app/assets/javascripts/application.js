// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


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

