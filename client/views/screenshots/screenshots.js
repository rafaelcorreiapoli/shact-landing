Template.screenshots.onRendered(function(){
	/* =================================
	===  OWL CROUSEL               ====
	=================================== */
	



	    var owl = $("#screenshots");

	    owl.owlCarousel({
	        items: 4, //10 items above 1000px browser width
	        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
	        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
	        itemsTablet: [600, 1], //2 items between 600 and 0
	        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	    });

	/* =================================
	===  Nivo Lightbox              ====
	=================================== */

    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });    
})