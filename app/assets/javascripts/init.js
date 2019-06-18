// Init
$(document).on("turbolinks:load", function() {

	// Sectional nav
	var navbar = $('.section-nav');
	if (navbar.length) {
		// Build section nav
		$('section').each(function() {
			if ($(this).attr('id')) {
				var section_id = $(this).attr('id');
				console.log(section_id);
				var section_name = section_id.replace(/-/g, ' ');
				section_name = toTitleCase(section_name);
				$('.section-nav ul').append('<li><a href="#' + section_id + '">' + section_name + '</a></li>');
			}
		});

	}
});