$(window).resize(function(){
	fullHeight();
}).resize();

function fullHeight(){
	var excludeHeight = $('header').height() + $('footer').height()-1;
	$('[data-height="fullheight"]').css({minHeight : $(window).height() - excludeHeight});
}

/*Top navigation for mobile*/
function inverseDropdown(){
	$('[data-toggle="inverseDropdown"] .navbar-toggle').click(function(e){
		if(!$(this).closest('.navbar-inverse').hasClass('active')){
			$(this).closest('.navbar-inverse').addClass('active');
		} else {
			$(this).closest('.navbar-inverse').removeClass('active');
		}
		e.stopPropagation();
	});
	$(document.body).click(function() {
		$('[data-toggle="inverseDropdown"]').removeClass('active');
	});
}

/*notification tab on header*/
function notificationTabFn(){
	$('#notificationTab a').each(function() {
		var $this = $(this);
		$this.click(function (e) {
			e.preventDefault();
			$this.tab('show');
		});
	});
}

/*Navigation active*/
function mainNav(index){
 var allLinks=$('#mainNav ul > li');
 allLinks.removeClass('active');
 $(allLinks[index-1]).addClass('active');
}

/*Slider text animation*/
/*$('#topCarousel').bind('slide.bs.carousel', function (e) {
  $('#topCarousel').find('.carousel-container').removeClass('fadeInUp');
});
$('#topCarousel').on('slide.bs.carousel', function (e) {
  var This = $(this);
  setTimeout(function(){
	if($(This).find('.item').hasClass('active')){
	  $(This).find('.carousel-container').addClass('fadeInUp');
	}
  },100);
});*/

$(function() {
    $('#topCarousel').bind('slide.bs.carousel', function(e) {
        $(this).find('.carousel-container').removeClass('fadeInUp');
    });
    $('#topCarousel').on("slide.bs.carousel", function(e) {
        var interval = parseInt($(e.relatedTarget).data("interval"));
        $('#topCarousel').data("bs.carousel").options.interval = interval;
        var that = $(this);
        setTimeout(function() {
            if ($(that).find('.item').hasClass('active')) {
                $(that).find('.carousel-container').addClass('fadeInUp');
            }
        }, 100);
    });
});

/*Header sticky*/
$(window).scroll(function(){
  if($(window).scrollTop() > 50){
    $('.backto-top').fadeIn();
	$('[data-scroll="blur"]').css({
	  'margin-top' : '-60px'
    });
  }
  else {
	$('.backto-top').fadeOut();
	$('[data-scroll="blur"]').css({
	  'margin-top' : -($(this).scrollTop()/1)+"px"
    });
  }
});
if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
	var iScrollPos = 0;
	$(window).scroll(function(){
		var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos){
		  $('header [data-role="sticky"]').addClass('navbar-fixed-top');
		  $('header [data-role="sticky"]').removeClass('upscroll').addClass('downscroll');
		  $('header .navbar-default').find('.navbar-brand').addClass('small');
	    } else {
		  $('header [data-role="sticky"]').removeClass('downscroll').addClass('upscroll');
		  $('header .navbar-default').find('.navbar-brand').removeClass('small');
	    }
	    iScrollPos = iCurScrollPos;
	});
}

/*Back to top*/
function backToTop(){
	$('.backto-top').on('click', function(){
		$('html, body').animate({scrollTop: $('body').offset().top}, 800);
	});
}

/*Owl Carousel*/
function thumbCarousel(carouselAttr, mobItem, tabItem, webItem, mobNav, tabNav, webNav){
	var owl = $(carouselAttr);
	owl.owlCarousel({
		loop:false,
		smartSpeed:450,
		responsiveClass:true,
		responsive:{
			0:{
				items:mobItem,
				autoHeight:true,
				margin:10,
				nav:mobNav
			},
			767:{
				items:tabItem,
				margin:20,
				nav:tabNav
			},
			992:{
				items:webItem,
				margin:20,
				nav:webNav
			}
		}
	});
	owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
    	if (!event.namespace) return;
		var carousel = event.relatedTarget,
			element = event.target,
			current = carousel.current();
		$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
		$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
	});
}

function autoThumbCarousel(carouselAttr, mobItem, tabItem, webItem, autoslide){
	var owl = $(carouselAttr);
	owl.owlCarousel({
		loop:true,
		smartSpeed:450,
		responsiveClass:true,
		autoplay:autoslide,
    	autoplayTimeout:5000,
		nav:true,
		responsive:{
			0:{
				items:mobItem,
				autoHeight:true,
				margin:10
			},
			767:{
				items:tabItem,
				margin:20
			},
			992:{
				items:webItem,
				margin:20
			}
		}
	});
	owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
    	if (!event.namespace) return;
		var carousel = event.relatedTarget,
			element = event.target,
			current = carousel.current();
		$('.owl-prev', element).removeClass('disabled');
	});
}

$(window).resize(function() {
	if ($(window).width() < 767) {
		$('[data-role="carouselMobile"]').owlCarousel({
			loop:false,
			nav:true,
			smartSpeed:450,
			margin:10,
			nav:false,
			dots:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					margin:10
				},
				600:{
					items:2,
					margin:20
				}
			}
		});
	} else {
	  if($('[data-role="carouselMobile"]').hasClass('owl-carousel')){
		$('[data-role="carouselMobile"]').data('owlCarousel').destroy();
	  }
	}
}).resize();
/*End Carousel*/
/*Owl Slider*/
function slideCarousel(carouselAttr){
	var owl = $(carouselAttr);
	owl.owlCarousel({
		loop:false,
		smartSpeed:450,
		items:1,
		margin:10,
		nav:true
	});
	owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
    	if (!event.namespace) return;
		var carousel = event.relatedTarget,
			element = event.target,
			current = carousel.current();
		$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
		$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
	});
}

// $(window).resize(function() {
// 	if ($(window).width() < 767) {
// 		$('[data-role="carouselMobileNew"]').owlCarousel({
// 			loop:false,
// 			nav:true,
// 			smartSpeed:450,
// 			margin:10,
// 			nav:true,
// 			dots:false,
// 			responsiveClass:true,
// 			responsive:{
// 				0:{
// 					items:1,
// 					margin:15
// 				},
// 				600:{
// 					items:2,
// 					margin:20
// 				}
// 			}
// 		});
// 		$('[data-role="carouselMobileNew"]').on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
//     	if (!event.namespace) return;
// 		var carousel = event.relatedTarget,
// 			element = event.target,
// 			current = carousel.current();
// 		$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
// 		$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
// 	});
// 	} else {
// 	  if($('[data-role="carouselMobileNew"]').hasClass('owl-carousel')){
// 		$('[data-role="carouselMobileNew"]').data('owlCarousel').destroy();
// 	  }
// 	}
// }).resize();
/*End Carousel*/

function OCRTabFn(){
	$('.panel-topOcr .nav-tabs .owl-item.owl-active:first').click(function(){
		$('.panel-topOcr .owl-nav > .owl-prev').trigger('click');
	});
	$('.panel-topOcr .nav-tabs .owl-item.owl-active:last').click(function(){
		$('.panel-topOcr .owl-nav > .owl-next').trigger('click');
	});
}


/*Scroll blur effect*/
var scrollSlider = function() {
  if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		if (st <= $('[data-scroll="blur"]').height()+110) {
			$('[data-scroll="blur"] .backstretch').css({
				'-webkit-filter': 'blur(' + (st/35) + 'px)',
				'-moz-filter': 'blur(' + (st/35) + 'px)',
				'-ms-filter': 'blur(' + (st/35) + 'px)',
				'-o-filter': 'blur(' + (st/35) + 'px)',
				'filter': 'blur(' + (st/35) + 'px)'
			});
			$('[data-scroll="blur"] .carousel-caption').css({ 
				'margin-top' : -(st/2.2)+"px",
				'opacity' : 1 - st/500
			});
			$('[data-scroll="blur"] .carousel-indicators').css({ 
				'margin-bottom' : (st/1.3)+"px",
				'opacity' : 1 - st/500
			});
		} else {
			$('[data-scroll="blur"] .backstretch').css({
				'-webkit-filter': 'none',
				'-moz-filter': 'none',
				'-ms-filter': 'none',
				'-o-filter': 'none',
				'filter': 'none'
			});
		}
	}).scroll();
  }
}
/*End*/

/*SVG Image*/
function imgSVG(){
	$('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });
}

/*Flip Animation Start*/
function flipAnimation(){
	if($('div').hasClass('flip-animation')){
	  $.support.css3d = supportsCSS3D();
	  var flipContainer = $('.flipContainer');
	  $('.flipLink').click(function(e){
		var flipRel = $(this).attr('data-rel');
		flipContainer.find('.flip-panel').removeClass('flipShow').addClass('flipHide');
		$('#' + flipRel).addClass('flipShow').removeClass('flipHide');
		if(!$.support.css3d && navigator.appVersion.indexOf("MSIE 9.")!=-1){
			flipContainer.find('.flip-panel').hide();
			$('#' + flipRel).fadeIn();
		}
		e.preventDefault();
	  });
	
	  $('.modal').on('show.bs.modal', function () {
		setTimeout(function(){
			$('.flip-panel').each(function() {
				var excludeHeight = $(this).find('.modal-header').height() + $(this).find('.modal-footer').height() + 30;
				if(!$(this).find('.modal-footer').length == 0){
					if($(window).width() > 767){
						$(this).find('.modal-body').height($(this).height() - excludeHeight - 92);
					} else {
						$(this).find('.modal-body').height($(this).height() - excludeHeight - 72);
					}
				} else {
					if($(window).width() > 767){
						$(this).find('.modal-body').height($(this).height() - $(this).find('.modal-header').height() - 92);
					} else {
						$(this).find('.modal-body').height($(this).height() - $(this).find('.modal-header').height() - 72);
					}
				}
			});
		},300);
	  });
	
	  $('.modal').on('hidden.bs.modal', function () {
		$(this).find('.flip-panel').removeClass('flipShow').removeClass('flipHide').removeAttr('style');
		$(this).find('.flip-panel').not(':first-child').addClass('flipHide');
	  })
	}
}
function supportsCSS3D() {
  var props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective'], testDom = document.createElement('a');
  for(var i=0; i<props.length; i++){
	if(props[i] in testDom.style){
		return true;
	}
  }
  return false;
}
/*Flip Animation End*/

/*Owl Slider*/
function slideCarousel(carouselAttr){
	var owl = $(carouselAttr);
	owl.owlCarousel({
		loop:false,
		smartSpeed:450,
		items:1,
		margin:10,
		nav:true
	});
	owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
    	if (!event.namespace) return;
		var carousel = event.relatedTarget,
			element = event.target,
			current = carousel.current();
		$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
		$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
	});
}

/*Global Search*/
function globalSearch(){
	$('[data-toggle="globalSearch"]').bind('click', function(){
		if(!$('.global-search').hasClass('open')){
			$(this).addClass('close-search');
			$('.global-search').addClass('open').find('.form-control').focus();
			setTimeout(function(){
			  $('.global-search > .filter-action').css({overflow:'visible'});
			},300);
		} else {
			$(this).removeClass('close-search');
			$('.global-search').removeClass('open');
			$('.search-autosuggest').slideUp();
			$('.global-search > .filter-action').css({overflow:''});
		}
		
		if($('#mainNav').hasClass('in')){
		  $('#mainNav').collapse("hide");
		  $('[data-target="#mainNav"]').addClass('collapsed');
		}
	});
	
	$('[data-target="#mainNav"]').bind('click', function(){
		if($('.global-search').hasClass('open')){
		  $('.global-search').removeClass('open');
		  $('.search-autosuggest').slideUp();
		  $('[data-toggle="globalSearch"]').removeClass('close-search');
		  $('.global-search > .filter-action').css({overflow:''});
		}
	});
	
	$('.global-search .form-control').on('keyup', function(){
		if($.trim($(this).val())==""){
			$(this).closest('.global-search').find('.search-autosuggest').slideUp();
		} else {
			$(this).closest('.global-search').find('.search-autosuggest').slideDown();
		}
	});
}

/*Post comment*/
function postComment(){
	$('[data-comment="post"] .form-control').on('keyup', function(){
		if($.trim($(this).val())==""){
			$(this).closest('[data-comment="post"]').find('.post-btn').slideUp();
		} else {
			$(this).closest('[data-comment="post"]').find('.post-btn').slideDown();
		}
	});
}


/*slider Count*/
function carouselCounter(){
	$('[data-count="slide"]').each(function() {
		var total = $(this).find('.item').length;
		$(this).find('.slide-count').text("1 of " + total);
		
		$(this).on('slid.bs.carousel', function () {
		  var carouselData = $(this).data('bs.carousel');
		  var currentIndex = carouselData.getActiveIndex();
		  var total = carouselData.$items.length;
		  $(this).find('.slide-count').text((currentIndex + 1) + " of " + total);
		});
	});
}

/*Selected text on dropdown*/
function selectTextDropdown(){
	$('[data-dropdown="selectText"] .dropdown-menu>li>a').each(function() {
        $(this).click(function(){
			$('[data-dropdown="selectText"] .dropdown-menu>li>a').removeClass('select');
			$(this).parent().addClass('select');
			$(this).closest('[data-dropdown="selectText"]').find('.dropdown-toggle > .text').text($(this).text());
		});
		
		if($(this).parent().hasClass('select')){
			$(this).closest('[data-dropdown="selectText"]').find('.dropdown-toggle > .text').text($(this).text());
		}
    });
}

/*Checkall checkbox*/
function handleCheckAll() {
  $('.checkall').click(function() {
	if(this.checked) {           
	  $('.checkinput').each(function() {
		$(this).prop('checked', true);
	  });
	}else{
	  $('.checkinput').each(function() {
		$(this).prop('checked', false);
	  });
	}
  });
  $(".checkinput").click(function() {
	if ($(".checkinput").length == $(".checkinput:checked").length) {
	  $(".checkall").prop('checked', true);
	} else {
	  $(".checkall").prop('checked', false);
	}
  });
  if ($(".checkinput").length == $(".checkinput:checked").length) {
	$(".checkall").prop('checked', true);
  } else {
	$(".checkall").prop('checked', false);
  }
}

/*Chat background image*/
function chatBgFn() {
  $('.chat-thumbnail .chat-thumb').each(function(){
	$(this).prepend('<chat-bg></chat-bg>');
	var imgSrc = $(this).attr('data-imgsrc');
	$(this).find('chat-bg').css('background-image','url('+imgSrc+')');
  });
}

/*modal scroll issue on touch device*/
if (Modernizr.touch) {
  $('.modal').on('show.bs.modal', function() {
	$('body, html').css({height:'100%', position:'relative', overflow:'hidden'});
	$('.modal').css({position:'absolute'});
  });
  $('.modal').on('hidden.bs.modal', function() {
	setTimeout(function(){
	  $('body, html').css({height:'', position:'', overflow:''});
	  $('.modal').css({position:''});
	},0);
  });
}

function scrollToDestination() {
	$(".scroll-link").click(function() {
		if($('#' + $(this).attr('data-rel')).length >= 1){
	  		$('html, body').animate({scrollTop: $('#' + $(this).attr('data-rel')).offset().top-60}, 800);
		}
	});
}

/*multiple modal*/
$('[data-multi="modal"]').on('click',function(){
	$(this).closest('.modal').modal('hide').on('hidden.bs.modal',function(){
		setTimeout(function(){
			$('body').addClass('modal-open');
		},0);
	});
});

/*Image aligned*/
function setImageProportion() {
	var img = $('.main-img');
	$.each(img,function(key,value){
	  value.src=value.src+'?'+Math.random();
	  value.onload=function(){ 
		$(value).css({left:'50%', marginLeft:-$(value).width()/2, top:'50%', marginTop:-$(value).height()/2}).promise().done(function(){
		  $(value).addClass('fadeIn');
		});
	  };
	});
}

$(function () {
	$('[data-dropdown="onhold"]').on('click touchstart', function(e) {
		e.stopPropagation();
	});
	$('.dropdown').on("touchstart", function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}
	});
	/*Carousel Swipe*/
	$(".carousel").swiperight(function() {  
	  $(this).carousel('prev');  
	});
	$(".carousel").swipeleft(function() {  
	  $(this).carousel('next');  
	});
	/*End*/
	
	//setImageProportion();
	scrollSlider();
	$('.scrollbox').enscroll();
	inverseDropdown();
	notificationTabFn();
	$('[data-toggle="tooltip"]').tooltip();
	backToTop();
	imgSVG();
	flipAnimation();
	globalSearch();
	postComment();
	selectTextDropdown();
	setTimeout(function(){chatBgFn();},0);
	scrollToDestination();
	
	/*Scroll on page load*/
	$('.nextpage-scroll').click(function(){
		if($('#topOcrId').length==0){
			var UrlHref = $(this).attr('data-rel');
			window.location.href = 'home.html?tab=' + UrlHref
		}
	});
	/*End*/	
	if ($(window).width() > 767) {
		$('.scrollboxHome').enscroll({
			addPaddingToPane:false,
         	showOnHover: false
		});
	}
});

// for new home page crousel

$(document).ready(function () {
    initialize_owl($('[data-role="carouselMobileNew"]'));

    $('a[href="#trendingStories"]').on('shown.bs.tab', function () {
        initialize_owl($('[data-role="carouselMobileNew"]'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('[data-role="carouselMobileNew"]'));
    });

    $('a[href="#latestStories"]').on('shown.bs.tab', function () {
        initialize_owl($('[data-role="carouselMobileNew1"]'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('[data-role="carouselMobileNew1"]'));
    });
});

function initialize_owl(el) {
    $(window).resize(function() {
	if ($(window).width() < 767) {
		el.owlCarousel({
			loop:false,
			nav:true,
			smartSpeed:450,
			margin:10,
			nav:true,
			dots:false,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					margin:15
				},
				600:{
					items:2,
					margin:20
				}
			}
		});
		el.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
	    	if (!event.namespace) return;
			var carousel = event.relatedTarget,
				element = event.target,
				current = carousel.current();
			$('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
			$('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
		});
	} else {
	  if(el.hasClass('owl-carousel')){
		el.data('owlCarousel').destroy();
	  }
	}
	}).resize();
}

function destroy_owl(el) {
    el.data('owlCarousel').destroy();
}