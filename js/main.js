$(function() {
	console.log("Loaded.");

	$('.form-search').submit(function() {
		alert('sumbitted');
		return false;
	});
	
	$('html').css({ display : 'none'})    // doc fades in
	$('html').fadeIn(1200);				// doc fades in
});