$(function() {
	$('.fa-bars').on('click', function(){
		$('.mainNav').toggleClass('show');
	});

	// smoothscroll
	$('.scroll a,.mainNav a').smoothScroll({
		offset: 0, 
		speed: 1000
	});

	$('.mainNav a').on('click', function(){
		$('.mainNav').removeClass('show');
	});
});	