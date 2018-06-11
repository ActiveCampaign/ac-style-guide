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


// Swatch Library


// Colors page

$(document).ready(function() {
	var color_hash = $("#colors").val();
	var colors = JSON.parse(color_hash);

	// Copying swatches
	$(".swatch").click(function() {
		var hex = $(this).data('hex');
		$("#hex-copy").val(hex);
		$("#hex-copy").select();
		document.execCommand("Copy");
		console.log('Copied ' + hex + ' to clipboard!');

	});

	$(".color_toggle a").click(function() {
		var palette = $(this).parent().data('palette');
		$(".color_toggle[data-palette='" + palette + "'] a").removeClass('active');
		$(this).addClass('active');
		var mode = $(this).data('mode');
		console.log(mode + ", " + palette);
		
		$('.color-palettes#' + palette + ' .palette').each(function() {
			var palette = $(this).data('palette');
			console.log(palette);
			$(this).find('.swatch .value').each(function() {
				var level = $(this).data('level').toString();
				//console.log(level)
				var value = colors[palette][level][mode];
				$(this).text(value);
				console.log(value);
			});
		});

		return false;
	});



}, event);