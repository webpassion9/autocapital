// import * as flsFunctions from "./modules/functions.js";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/bundle';

// flsFunctions.isWebp();

// --------------------------------------------------------------------------
// correct ratio
// --------------------------------------------------------------------------
// function forcedOriginalScale(containerClass) {
//   var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
//   if (!isMobile) {
//     var App = document.querySelector(containerClass);
//     App.style.zoom = 1 / devicePixelRatio;
//   }
// }

// document.addEventListener(
//   "DOMContentLoaded",
//   function() {
//     forcedOriginalScale('.wrapper');
//   }
// );


$(function () {
	var tabContainers = $('div.tabs > div');
	tabContainers.hide().filter(':first').show();		
	$('div.tabs ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});
$(function () {
	var tabContainers = $('div.tabs2 > div');
	tabContainers.hide().filter(':first').show();		
	$('div.tabs2 ul.tabNavigation a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('div.tabs2 ul.tabNavigation a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
});
$(function(){
	$('.advantages-block2 .list .item-name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.item').toggleClass('opened');
	});
	$('[data-fancybox2]').fancybox({
		'touch': false
	});
	$('.faq-block .list .item .name').click(function() {
		$(this).toggleClass('active');
		$(this).next('.text').slideToggle();
	});
	$('.about-block .photos-link a').click(function() {
		$(this).parent().hide();
		$('.about-block .photos .item').show();
	});
	$('.mobile-menu .close').click(function() {
		$('.mobile-menu').removeClass('opened');
	});
	$('.header ul li a.menu').click(function() {
		$('.mobile-menu').addClass('opened');
	});
	$('.mobile-menu ul li a').click(function() {
		$(this).next('ul').slideToggle();
	});
	if ($('#tabs').length) {
    $('#tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });
}
	$('.steps-block .content .list').slick({
		dots: true,
		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        dots: false,
	      }
	    }
	  ]
	});
	$('.about-block .docs .list').slick({
	  speed: 300,
	  arrows: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
		variableWidth: false,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        arrows: true,
					variableWidth: false,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        variableWidth: true,
	        arrows: true
	      }
	    }
	  ]
	});
	// if ($(window).width() < 576) {
	// 	$('.reviews-block .list:nth-child(2)').slick({
	// 		adaptiveHeight: true
	// 	});
	// }
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  focusOnSelect: true
	});
	$('.last-credits-block .photos').slick({
		responsive: [
	    {
	      breakpoint: 576,
	      settings: {
	        arrows: false,
	        dots: true
	      }
	    }
	  ]
	});
	$('.slider-item').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-nav'
	});
	$('.slider-articles').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: false,
		adaptiveHeight: false
	});
});


document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".mobile-menu .close");

    menuBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("is-active");
    });

    closeBtn.addEventListener("click", function() {
        mobileMenu.classList.remove("is-active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
	const menuBtn = document.querySelector(".menu-btn");
	const mobileMenu = document.querySelector(".mobile-menu");
	const closeBtn = document.querySelector(".mobile-menu .close");
	const body = document.querySelector("body");

	menuBtn.addEventListener("click", function() {
			mobileMenu.classList.add("is-active");
			body.style.overflow = "hidden";
	});

	closeBtn.addEventListener("click", function() {
			mobileMenu.classList.remove("is-active");
			body.style.overflow = "auto";
	});
});

document.addEventListener('DOMContentLoaded', function() {
	const toggles = document.querySelectorAll('.item-toggle');

	toggles.forEach(toggle => {
			toggle.addEventListener('click', function() {
					const item = this.nextElementSibling;

					toggles.forEach(t => {
							if (t !== toggle) {
									t.classList.remove('active');
									t.nextElementSibling.classList.remove('active');
									t.nextElementSibling.style.maxHeight = null;
							}
					});
					this.classList.toggle('active');

					item.classList.toggle('active');

					if (item.classList.contains('active')) {
							item.style.maxHeight = item.scrollHeight + 'px';
					} else {
							item.style.maxHeight = null;
					}
			});
	});
});