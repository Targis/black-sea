$(function() {

	$(".slides").responsiveSlides({
		timeout: 3000,
		pager: true,
	});

	// Mobile menu
	$(".toggle-menu, .mobile-menu li, wrapper-invis").click(function() {
		$(".sandwich").toggleClass("active");
		$(".mobile-menu").slideToggle();
	});

	$(document).click(function(e){

		if($(e.target).closest('.mobile-menu-wrapper').length != 0) return false;
		$(".sandwich").removeClass("active");
		$(".mobile-menu").hide();
	});

});
