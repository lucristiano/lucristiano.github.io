$(document).ready(function() {
	
	// Menu
	$("#menu").click(function() {
		$(".menu-items").toggleClass("show")
	})

	// Reveal divs
	window.sr = ScrollReveal( {});
	sr.reveal('.reveal', { duration: 1000, origin: 'bottom', scale: 1 });

	// Project List
	$(".project-link").hover(function() {
	  $('.project-link').toggleClass('active-item');
	  $(this).toggleClass('active-item');
	})

	//Footer
	$(".footer").hover(function() {
		$('.tools').toggleClass('show-tools');
	})

	// Change color when scroll
	var accent = $('.accent-bg').offset().top;
	$(window).scroll(function(){    
	    if ($(this).scrollTop() >= accent - 100){ 
	        $('.logo a').addClass('white-color'); 
	        $('#svg-black').addClass('white-color');
	        $('.header ul.menu-items li a').addClass('white-color');
	    }
	   	if ($(this).scrollTop() <= accent - 100){ 
	        $('.logo a').removeClass('white-color');
	        $('#svg-black').removeClass('white-color');  
	        $('.header ul.menu-items li a').removeClass('white-color');
	    }
	});

	var after = $('.after-accent').offset().top;
	$(window).scroll(function() {
		if ($(this).scrollTop() >= after - 90){
			$('.logo a').removeClass('white-color');
			$('#svg-black').removeClass('white-color');
			$('.header ul.menu-items li a').removeClass('white-color'); 
		}
	});

	// Smooth Scroll
	var scroll = new SmoothScroll('a[href*="#"]');
});
