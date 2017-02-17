$(function() {


	/*===========scroll to our me========*/
	$("#js-link-our-me").on("click", function(e) {
		e.preventDefault();

		var ourMeOffset = $("#js-our-me").offset().top;
		$("html, body").animate({
			scrollTop: ourMeOffset
		}, 1200);
	});

	/*scroll to my skills*/
	$("#js-link-my-skills").on("click", function(e) {
		e.preventDefault();

		var mySkillsOffset = $("#js-my-skills").offset().top;
		$("html, body").animate({
			scrollTop: mySkillsOffset
		}, 1200);
	});

	/*scroll to my skills*/
	$("#js-link-viev-skills").on("click", function(e) {
		e.preventDefault();

		var mySkillsOffset = $("#js-viev-skills").offset().top;
		$("html, body").animate({
			scrollTop: mySkillsOffset
		}, 1200);
	});


	/*scroll to contact*/
	$("#js-link-contacts").on("click", function(e) {
		e.preventDefault();

		var contactsOffset = $("#js-contacts").offset().top;
		$("html, body").animate({
			scrollTop: contactsOffset
		}, 1200);
	});

	/* =============fixed header menu======*/
	
	var headerH = $("#js-header").height();
	$(document).on("scroll", function() {

		var documentScroll = $(this).scrollTop();

		if((documentScroll+1) > headerH) {
			$("#js-nav-container").addClass("fixed");
			
		} else {
			$("#js-nav-container").removeClass("fixed");
		}
	});

	/*
	=============  modals ======*/
	$(".js-show-modal").on("click", function(e) {
		e.preventDefault();
		$(".js-modal, #js-overlay").fadeIn(500);
		$("body").addClass("open-modal");
	});


	$(".js-modal-close, #js-overlay").on("click", function(e) {
		e.preventDefault();
		$(".js-modal, #js-overlay").fadeOut(400);
		$("body").removeClass("open-modal");
	});



	/*
	=============  technologies ======*/
	$(".js-technologies-title").on("click", function(e) {
		e.preventDefault();

		$(".js-technologies-content").slideToggle(1500);
	});



	


	/*
	 =============  slick ======
	 https://github.com/kenwheeler/slick/ */
	 $('.single-item').slick({
	 	slidesToShow: 3,
	 	slidesToScroll: 1,
	 	autoplay: true,
	 	dots: true,
	 	infinite: true,
	 	autoplaySpeed: 2000,
	 	responsive: [
	 	{
	 		breakpoint: 1172,
	 		settings: {
	 			slidesToShow: 2,
	 			slidesToScroll: 2,
	 			infinite: true,
	 			dots: true
	 		}
	 	},
	 	{
	 		breakpoint: 786,
	 		settings: {
	 			slidesToShow: 1,
	 			slidesToScroll: 1
	 		}
	 	},
	 	]
	 });
	
/*
$('.single-item').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
	*/
	/*
	 =============  wow js  ====== */
	 new WOW().init();
/*
	=============  cricle animate  ======
	http://www.sitehere.ru/krugovaya-animaciya-blokov-dlya-lendinga */
	/*
		$('.circlestat').circliful({
			animateInView: 1,
			animationStep: 5,
		    foregroundBorderWidth: 5,
		    backgroundBorderWidth: 15,
		    percent: 80,
		    halfCircle: 1,
		});
	
*/

		var numForCricl = 1;
		$(document).on("scroll", function() {

			var myskillsH = $(".my-skills").height();
			var mySkillScroll = $(this).scrollTop();

			if (numForCricl === 1) {
				if(mySkillScroll > (myskillsH+250)) {
					$(function(){
						$('.circlestat').circliful({
							animationStep: 100,
							animateInView: 1,
						});
					});
				numForCricl = numForCricl+1;
				return;
				}
			}
			
		});




});



