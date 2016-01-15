Template.defaultLayout.onRendered(function(){
	/* =================================
	   LOADER                     
	=================================== */
	// makes sure the whole site is loaded
	        // will first fade out the loading animation
		$(".status").fadeOut();
	        // will fade out the whole DIV that covers the website.
		$(".preloader").delay(1000).fadeOut("slow");


	/* =================================
	===  RESPONSIVE VIDEO           ====
	=================================== */

	$(".video-container").fitVids();



	/* =================================
	===  MAILCHIMP                 ====
	=================================== */

	$('.mailchimp').ajaxChimp({
	    callback: mailchimpCallback,
	    url: "http://webdesign7.us6.list-manage.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
	});

	function mailchimpCallback(resp) {
	     if (resp.result === 'success') {
	        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
	        $('.subscription-error').fadeOut(500);
	        
	    } else if(resp.result === 'error') {
	        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
	    }  
	}

	/* =================================
	===  STICKY NAV                 ====
	=================================== */

	
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    filter: ':not(.external)',
    changeHash: true
  });
	  
	


	/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

	if (matchMedia('(max-width: 480px)').matches) {
	    $('.main-navigation a').on('click', function () {
	        $(".navbar-toggle").click();
	    });
	}


	/* NAVIGATION VISIBLE ON SCROLL */

	
	    
	

	$(window).scroll(function () {
	    mainNav();
	});

	if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
	  function mainNav() {
	        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

	        else $('.sticky-navigation').stop().animate({"top": '-60'});
	    }
	}

	if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
	  function mainNav() {
	        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

	        else $('.sticky-navigation').stop().animate({"top": '-120'});
	    }
	}

	mainNav();





	/* =================================
	===  FULL SCREEN HEADER         ====
	=================================== */
	function alturaMaxima() {
	  var altura = $(window).height();
	  $(".full-screen").css('min-height',altura); 
	  
	}

  alturaMaxima();
  
  $(window).bind('resize', alturaMaxima);


	/* =================================
	===  SMOOTH SCROLL             ====
	=================================== */
	var scrollAnimationTime = 1200,
	    scrollAnimation = 'easeInOutExpo';
	$('a.scrollto').bind('click.smoothscroll', function (event) {
	    event.preventDefault();
	    var target = this.hash;
	    $('html, body').stop().animate({
	        'scrollTop': $(target).offset().top
	    }, scrollAnimationTime, scrollAnimation, function () {
	        window.location.hash = target;
	    });
	});


	/* =================================
	===  WOW ANIMATION             ====
	=================================== */
	wow = new WOW(
	  {
	    mobile: false
	  });
	wow.init();


















	/* =================================
	===  STELLAR                    ====
	=================================== */
	$(window).stellar({ 
	horizontalScrolling: false 
	});


	/* =================================
	===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
	=================================== */
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	  var msViewportStyle = document.createElement('style')
	  msViewportStyle.appendChild(
	    document.createTextNode(
	      '@-ms-viewport{width:auto!important}'
	    )
	  )
	  document.querySelector('head').appendChild(msViewportStyle)
	}
})