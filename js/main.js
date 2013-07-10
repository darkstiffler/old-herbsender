$(function() {
	console.log("Loaded.");

	$('.form-search').submit(function() {
		alert('sumbitted');
		return false;
	});
	
	$('.searchForm').css({ display : 'none'})    // doc fades in
	$('.searchForm').fadeIn(1200);				// doc fades in
});