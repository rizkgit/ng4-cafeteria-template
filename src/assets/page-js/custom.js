//Page Loader 

$(window).on('load', function () {
	$(".loader").fadeOut("slow");
});


//Navbar Javascript

$('.nav a').click(function () {
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".navbar-nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#banner-1 .btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// Flex Slider

$(window).on('load',function(){
  $('.flexslider').flexslider({
	animation: "slide",
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
});

$('.flexslider').flexslider({
	animation: "slide",
	flexDirectionNav: false,
	controlNav: true,
	
});


// Date Picker

$( function() {
	$( "#datepicker" ).datepicker();	 
});


// Owl Team

$("#owl-team").owlCarousel({
	items : 3,
	itemsCustom : false,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [991,3],
	itemsTablet: [768,2],
	itemsTabletSmall: [500,1],
	itemsMobile : [479,1],
	singleItem : false,
	itemsScaleUp : false,
 
	//Autoplay
	autoPlay : true,
	stopOnHover : true,
 
	// Navigation
	navigation : true,
	navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	rewindNav : true,
	scrollPerPage : false,
 
	//Pagination
	pagination : false,
	paginationNumbers: false,
 
	// Responsive 
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,    
});


// Gallery

$('.with-caption').magnificPopup({
	
	type: 'image',
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',

    gallery: {
      enabled: true 
    }, 

    callbacks: {
      open: function() {
        this.wrap.on('click.pinhandler', '.pin-it', function(e) {
          
          // This part of code doesn't work on CodePen, as it blocks window.open
          // Uncomment it on your production site, it opens a window via JavaScript, instead of new page
          /*window.open(e.currentTarget.href, "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 50) + ",top=" + 100);

          
          return false;*/
        });
      },
      beforeClose: function() {
       //this.wrap.off('click.pinhandler');
      }
    }
  
});


// Owl Reviews

$("#owl-testimonial").owlCarousel({
	items : 2,
	itemsCustom : false,
	itemsDesktop : [1199,2],
	itemsDesktopSmall : [991,2],
	itemsTablet: [768,2],
	itemsTabletSmall: [600,1],
	itemsMobile : [479,1],
	singleItem : false,
	itemsScaleUp : false,
 
	//Autoplay
	autoPlay : true,
	stopOnHover : true,
 	
	// Navigation
	loop : true,
	scrollPerPage : false,
 
	//Pagination
	pagination : true,
	paginationNumbers: false,
 
	// Responsive 
	responsive: true,
	responsiveRefreshRate : 200,
	responsiveBaseWidth: window,    
});