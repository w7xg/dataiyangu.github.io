// build time:Wed Apr 03 2019 21:27:09 GMT+0800 (China Standard Time)
$(document).pjax("a[target!=_blank]","#pjax-container",{fragment:"#pjax-container",timeout:5e3});$(window).on("popstate.pjax",function(){pjax()});$(document).on("pjax:start",function(){});$(document).on("pjax:complete",function(){pjax()});function pjax(){pjaxshare();if($("#lv-container").length>0){$(".comments").css({opacity:1});$.getScript("https://cdn-city.livere.com/js/embed.dist.js")}$.getScript("https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js");pjaxshare();category_js();opacity_js();motionz_js();scrollspy_js();postdetails_js();lean_analytics();baidutuisong();initSidebarDimension();$("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn",threshold:100,failure_limit:20,skip_invisible:false})}
//rebuild by neat 