$(function() {
	console.log("Document loaded.");

	$('form').submit(function() {
		console.log("Submitted");
		return false;
	});
	
	$('html').css({ display : 'none'})    // doc fades in
	$('html').fadeIn(1200);				// doc fades in
});