// build time:Tue Feb 12 2019 15:06:25 GMT+0800 (China Standard Time)
function header_left(){var e=false;$(".header_sidebar").click(function(){var a="80px";if(e==false){$(".header_left_inner ").animate({width:"80px",opacity:"show"},{duration:500,easing:"easeInOutQuart",complete:function(){}});$(".header_left_inner .site-nav").css("display","block");$("body").animate({paddingLeft:"80px"},{duration:500,easing:"easeInOutQuart",complete:function(){}});e=true}else{$(".header_left_inner").animate({width:"0px",opacity:"hide"},{duration:500,easing:"easeInOutQuart",complete:function(){}});$("body").animate({paddingLeft:"0px"},{duration:500,easing:"easeInOutQuart",complete:function(){}});e=false}})}header_left();
//rebuild by neat 