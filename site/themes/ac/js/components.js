// Toasts
function toast(message) {
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