(function ($, window, document, undefined) {
  'use strict';
  $(function () {
  	// custom scripts below





	// add scrollup button for the long pages
	$(document).ready(function () {
		$(window).scroll(function() {
			if ($(this).scrollTop() >= 100) { // If page is scrolled more than 100px
				$('.scrollup').fadeIn(200); // Fade in the arrow
			} else {
				$('.scrollup').fadeOut(200); // Else fade out the arrow
			}
		});
		$('.scrollup').click(function() { // When arrow is clicked
			$('body,html').animate({
				scrollTop : 0 
			}, 500);
			event.preventDefault();
		});
	});



	// close nav when clicking outside of it
	$(document).click(function(e) {
		if (!$(e.target).is('a')) {
			$('.collapse').collapse('hide');        
		}
	});



	// close accordion when clicking outside of it
	$(document).click(function(e) {
		if (!$(e.target).is('.panel-body')) {
			$('.collapse').collapse('hide');	    
		}
	});



    // end custom scripts
  });
})(jQuery, window, document);

