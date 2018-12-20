
// Global Functions
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

// Global Doc Load
$(document).ready(function() {
	console.log('Page loaded...');
	// Sectional nav
	var navbar = $('.section-nav');
	if (navbar.length) {
		// Build section nav
		$('section').each(function() {
			if ($(this).attr('id')) {
				var section_id = $(this).attr('id');
				//console.log(section_id);
				var section_name = section_id.replace(/-/g, ' ');
				section_name = toTitleCase(section_name);
				$('.section-nav ul').append('<li><a href="#' + section_id + '">' + section_name + '</a></li>');
			}
		});

	}

	// Mobile nav
	$("#mobile-nav_trigger").click(function() {
		if ($('.mobile-sub-header ._state-control').hasClass('nav_open')) {
			$(this).toggleClass('nav_open');
			$('.mobile-sub-nav').toggleClass('closed');
		}
		$('.mobile-nav').toggleClass('closed');
		$(this).parent().toggleClass('nav_open');
	});
	$("#sub-nav_trigger").click(function() {
		$('.mobile-sub-nav').toggleClass('closed');
		$(this).parent().toggleClass('nav_open'); 
	});

	// Automatically adjust sectional nav width based

});