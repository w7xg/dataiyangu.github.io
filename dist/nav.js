// build time:Sun Sep 22 2019 22:26:47 GMT+0800 (China Standard Time)
$(function(){var a=$(document).scrollTop();function o(){var o=$(document).scrollTop();if(o>a){$(".header_nav").css("background-color","");$(".header_nav").stop().animate({top:"-50px"},80);$(".a_tag").stop().animate({top:"-50px"},80);$(".a_tag a").css("color","#fff")}else if(o<=2){$(".a_tag a").css("color","#fff");$(".header_nav").stop().animate({opacity:"0"},80)}else{$(".header_nav").css("background-color","# ");$(".header_nav").stop().animate({top:"0px"},80);$(".a_tag").stop().animate({top:"0px"},80);$(".header_nav").css("opacity","0.9");$(".a_tag a").css("color","#666")}a=$(document).scrollTop()}var t=_.throttle(o,100);$(window).scroll(t)});
//rebuild by neat 