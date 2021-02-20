$(document).ready(function() {
	"use strict";
	/*$.validator.setDefaults({ 
    
    // any other default options and/or rules
});*/
	// form validate
	$.validate({
		'validateHiddenInputs': true,
		'scrollToTopOnError' : false
	}); 

	// wedding counter
	$("#countscript").countdown({
		date: "24 june 2017 13:00:00", /** Enter new date here **/
		format: "on"
	},
	function() {
		// callback function
	});
	
	//select box 
	$(".select-style").selectbox();
	var banner = $(".banner");
	//banner height set
	banner.css("min-height",$(window).height() + "px");
	
	//one page js 
	$(".nav li a").each(function(){
		$(this).on('click', function() {
			if ($(window).width() <= 768 )
			{
				$(".navbar-toggle").click();
			}
			var self = this;
			$(".nav li").removeClass("active");
			$(this).parent().addClass("active");
			var click_id =  $(this).attr("href");
			
			var subs = click_id.indexOf("#");
			var new_click_id = click_id.substring(subs);
			
			var count = 0;
			var index = $(this).index('.nav li a');
			
			$(".section-scroll").each(function(){
				if(count === index){
					var page_position = $(this).offset().top;
					var navbar_height = $("#nav-main").outerHeight();
					if ($(window).width() <= 768 )
					{
						navbar_height = 0;
					}
					if ($(self).parent("li").hasClass("first"))
					{
						var target_position = page_position  + 1;
					}
					else
					{
						var target_position = page_position - navbar_height + 1;
					}
					$("html,body").stop(true,true).animate({scrollTop:target_position + "px"},1000);							 		
				}
				count++;	
			});
			
		});
	});
	
	// accordion js 
	$(".event-slide .event-title h3").each(function() {
        $(this).on('click', function() {
			if($(this).parent(".event-title").next(".event-content").is(":visible"))
			{
				
			}
			else
			{
				$(".event-slide .event-content").slideUp();
				$(".event-slide").removeClass("active");
				$(this).parent(".event-title").parent(".event-slide").addClass("active");
				$(this).parent(".event-title").next(".event-content").slideDown();
			}
		});
    });
	$(window).on('resize',function() {
		"use strict";
		
		// banner height set
		$(".banner").css("min-height",$(window).height() + "px");
		
		if ($(".right-content").length){
			var window_height = $(window).height();
			window_height = window_height - 60 ;
			$(".right-content").css("min-height", window_height + "px");
		}
		if ($(".home-view").length){
			var home_height = $(".home-view").outerHeight();
			var window_height = $(window).height();
			if (window_height > home_height)
			{
				var padding_value = (window_height - home_height) / 2 ;
				$(".home-view").css("margin-top", padding_value +"px");	
			}
			else
			{
				$(".home-view").css("margin-top","0px");	
			}

		}
	});
	$(".nav-list ul li a").each(function(){
		$(this).click(function(){
			var open_id = $(this).attr("id");
			$(".nav-list ul li").removeClass("active");
			$(this).parent("li").addClass("active");
			$(".right-content .right-blcok").fadeOut();
			$("." + open_id + "-view").fadeIn();
		});
	});
	if ($(".right-content").length){
		var window_height = $(window).height();
		window_height = window_height - 60 ;
		$(".right-content").css("min-height", window_height + "px");
	}
	if ($(".home-view").length){
		var home_height = $(".home-view").outerHeight();
		var window_height = $(window).height();
		if (window_height > home_height)
		{
			var padding_value = (window_height - home_height) / 2 ;
			$(".home-view").css("margin-top", padding_value +"px");	
		}
		else
		{
			$(".home-view").css("margin-top","0px");	
		}
		
	}
	$(".people-view .tab-nav ul li a").each(function(){
		$(this).click(function(){
			var open_id = $(this).attr("id");
			$(".people-view .tab-nav ul li").removeClass("active");
			$(this).parent("li").addClass("active");
			$(".people-view .tab-content").slideUp();
			$("." + open_id + "-content").slideDown();
		});
	});
	$(".story-view .tab-nav ul li a").each(function(){
		$(this).click(function(){
			var open_id = $(this).attr("id");
			$(".story-view .tab-nav ul li").removeClass("active");
			$(this).parent("li").addClass("active");
			$(".story-view .tab-content").slideUp();
			$("." + open_id + "-content").slideDown();
		});
	});
	
});
if ($(".home1").length) {
	$(window).on('scroll',function(){ 
		"use strict";
		var nav_main = $("#nav-main");
		var section_scroll = $(".section-scroll"); 
		// one page js 
		var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		var windowHeight = $(window).height(); // get the height of the window
		var docHeight = $(document).height();

		var page_position, index;
		var count = 0, index = 0;

		windowPos = windowPos + nav_main.outerHeight();
		section_scroll.each(function(){
				page_position = $(this).offset().top;

				if(windowPos > page_position){ 
					var newindex = $(this).index('.section-scroll');
					if(newindex > index){
						index = $(this).index('.section-scroll');
					}
				}		
		});

		index = index+1;
		$('.nav li').removeClass("active");
		$('.nav li:nth-child('+index+')').addClass("active");

		// nav fiexd 
		var top_value = $(".wedding-block").offset().top; 

		if($(window).scrollTop() > top_value)
		{
			nav_main.addClass("fiexd");
		}
		else
		{
			nav_main.removeClass("fiexd");
		}
	});
}