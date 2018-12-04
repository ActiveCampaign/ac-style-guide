

$(document).ready(function() {

	//var color_hash = $("#colors").val();
	//var colors = JSON.parse(color_hash);

	// Copying swatches
	$(".swatch").click(function() {
		var hex = $(this).data('hex');
		$("#hex-copy").val(hex);
		$("#hex-copy").select();
		document.execCommand("Copy");
		console.log('Copied ' + hex + ' to clipboard!');
		toast("✅ Color copied to clipboard!");
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

	$(".color-usage--colors li").click(function() {
		var color = $(this).attr('id');
		$(".color-usage--colors li").removeClass('active');
		$(this).addClass('active');
		
		$("#color-usage--guide .content").removeClass('visible');
		$("#color-usage--guide .content.c-" + color).addClass('visible');
	});



}, event);