jQuery(document).ready(function(){

	"use strict";

	arlo_tm_hamburger();

});

function arlo_tm_hamburger(){

	"use strict";

	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.youb_mobile_menu_wrap');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}

$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});


/* Slider */

$(document).ready(function() {
    $('#youb-projets-slides').lightSlider({
        item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600
    });
  });
