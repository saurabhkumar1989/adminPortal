$(document).ready(function() {
	$(".toggle-nav").click(function(){
		$("body").toggleClass("open-menu");		
	});  
	$(".login-bgt").click(function(){
		$(".popup-overlay, .close-popup").show();	
		$(".popups-main-wrapper").show();
		$(".logIn-btn").addClass("active");
		$(".signUp-btn").removeClass("active");
		$(".popup-content-wrapper").hide();
		$(".login-popup.popup-content-wrapper").show();
	});	
	$(".signup-bgt").click(function(){
		$(".popup-overlay, .close-popup").show();
		$(".popups-main-wrapper").show();
		$(".logIn-btn").removeClass("active");
		$(".signUp-btn").addClass("active");
		$(".popup-content-wrapper").hide();
		$(".signup-popup.popup-content-wrapper").show();
	});	
	$(".popup-ins-wrapper").click(function(e){
		$(".popup-overlay, .close-popup").show();
		$(".popups-main-wrapper").show();
		$(this).show();
		e.stopPropagation()
	});
	$(".close-popup, .popups-main-wrapper").click(function(e){
		$(".popup-overlay, .close-popup").hide();	
		$(".popups-main-wrapper").hide();
		$(".logIn-btn").removeClass("active");
		$(".signUp-btn").removeClass("active");
		$(".popup-content-wrapper").hide();	
		e.stopPropagation()
	});	
	
	$(".logIn-btn").click(function(){	
	    $(".signUp-btn").addClass("active");	
		$(this).addClass("active");	
		$(".popup-content-wrapper").hide();
		$(".login-popup.popup-content-wrapper").show();
	});
	$(".signUp-btn").click(function(){	
	    $(".logIn-btn").addClass("active");	
		$(this).addClass("active");	
		$(".popup-content-wrapper").hide();
		$(".signup-popup.popup-content-wrapper").show();
	});

	/* Chages below */
	$(".buy-now").click(function(){
		$(".popup-overlay, .close-popup").show();
		$(".popups-main-wrapper-user").show();
		$(".signUp-btn").addClass("active");
		$(".popup-content-wrapper-user").hide();
		$(".signup-popup-user.popup-content-wrapper-user").show();
	});

	
	$(".buy-now").click(function(){
		$(this).addClass("active");	
		$(".popup-content-wrapper-user").hide();
		$(".signup-popup-user.popup-content-wrapper-user").show();
	});
	
	$(".popup-ins-wrapper-user").click(function(e){
		$(".popup-overlay, .close-popup").show();
		$(".popups-main-wrapper-user").show();
		$(this).show();
		e.stopPropagation()
	});
	
	$(".close-popup, .popups-main-wrapper-user").click(function(e){
		$(".popup-overlay, .close-popup").hide();	
		$(".popups-main-wrapper-user").hide();
		$(".signUp-btn").removeClass("active");
		$(".popup-content-wrapper-user").hide();	
		e.stopPropagation()
	});
});

$(function() {
  $('a.sl-btn[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});
