// build time:Sun Aug 04 2019 13:51:36 GMT+0800 (China Standard Time)
function category_js(){$(".category-list-link").filter(function(){return $(this).siblings(".category-list-child").length>0}).attr("href","javascript:void(0)");$(".category-list-link").click(function(){$(this).siblings(".category-list-child").slideToggle()});var t=$(".main-inner").width()/1.2;$(".category-list-link").animate({width:t},300)}function opacity_js(){$(".post-block").css({opacity:1});$(".post-header").css({opacity:1});$(".post-body").css({opacity:1});$(".pagination").css({opacity:1})}function motion_js(){NexT.motion={};var t={lines:[],push:function(t){this.lines.push(t)},init:function(){this.lines.forEach(function(t){t.init()})},arrow:function(){this.lines.forEach(function(t){t.arrow()})},close:function(){this.lines.forEach(function(t){t.close()})}};function e(t){this.el=$(t.el);this.status=$.extend({},{init:{width:"100%",opacity:1,left:0,rotateZ:0,top:0}},t.status)}e.prototype.init=function(){this.transform("init")};e.prototype.arrow=function(){this.transform("arrow")};e.prototype.close=function(){this.transform("close")};e.prototype.transform=function(t){this.el.velocity("stop").velocity(this.status[t])};var i=new e({el:".sidebar-toggle-line-first",status:{arrow:{width:"50%",rotateZ:"-45deg",top:"2px"},close:{width:"100%",rotateZ:"-45deg",top:"5px"}}});var o=new e({el:".sidebar-toggle-line-middle",status:{arrow:{width:"90%"},close:{opacity:0}}});var n=new e({el:".sidebar-toggle-line-last",status:{arrow:{width:"50%",rotateZ:"45deg",top:"-2px"},close:{width:"100%",rotateZ:"45deg",top:"-5px"}}});t.push(i);t.push(o);t.push(n);var s="320px";var a=200;var r,c;var l={toggleEl:$(".sidebar-toggle"),dimmerEl:$("#sidebar-dimmer"),sidebarEl:$(".sidebar"),isSidebarVisible:false,init:function(){this.toggleEl.on("click",this.clickHandler.bind(this));this.dimmerEl.on("click",this.clickHandler.bind(this));this.toggleEl.on("mouseenter",this.mouseEnterHandler.bind(this));this.toggleEl.on("mouseleave",this.mouseLeaveHandler.bind(this));this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this));this.sidebarEl.on("touchend",this.touchendHandler.bind(this));this.sidebarEl.on("touchmove",function(t){t.preventDefault()});$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:s},a)}).on("sidebar.isHiding",function(){})},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar();this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){if(this.isSidebarVisible){return}t.arrow()},mouseLeaveHandler:function(){if(this.isSidebarVisible){return}t.init()},touchstartHandler:function(t){r=t.originalEvent.touches[0].clientX;c=t.originalEvent.touches[0].clientY},touchendHandler:function(t){var e=t.originalEvent.changedTouches[0].clientX;var i=t.originalEvent.changedTouches[0].clientY;if(e-r>30&&Math.abs(i-c)<20){this.clickHandler()}},showSidebar:function(){var e=this;t.close();this.sidebarEl.velocity("stop").velocity({width:s},{display:"block",duration:a,begin:function(){$(".sidebar .motion-element").velocity("transition.slideRightIn",{stagger:50,drag:true,complete:function(){e.sidebarEl.trigger("sidebar.motion.complete")}})},complete:function(){e.sidebarEl.addClass("sidebar-active");e.sidebarEl.trigger("sidebar.didShow")}});this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0});this.sidebarEl.find(".motion-element").velocity("stop").css("display","none");this.sidebarEl.velocity("stop").velocity({width:0},{display:"none"});t.init();this.sidebarEl.removeClass("sidebar-active");this.sidebarEl.trigger("sidebar.isHiding");if(!!$(".post-toc-wrap")){if($(".site-overview-wrap").css("display")==="block"){$(".post-toc-wrap").removeClass("motion-element")}else{$(".post-toc-wrap").addClass("motion-element")}}}};l.init();NexT.motion.integrator={queue:[],cursor:-1,add:function(t){this.queue.push(t);return this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(t){var e=[];var i=$(".brand");var o=$(".site-title");var n=$(".site-subtitle");var s=$(".logo-line-before i");var a=$(".logo-line-after i");i.size()>0&&e.push({e:i,p:{opacity:1},o:{duration:200}});NexT.utils.isMist()&&c([s,a])&&e.push(r(s,"100%"),r(a,"-100%"));c(o)&&e.push({e:o,p:{opacity:1,top:0},o:{duration:200}});c(n)&&e.push({e:n,p:{opacity:1,top:0},o:{duration:200}});if(CONFIG.motion.async){t.next()}if(e.length>0){e[e.length-1].o.complete=function(){t.next()};$.Velocity.RunSequence(e)}else{t.next()}function r(t,e){return{e:$(t),p:{translateX:e},o:{duration:500,sequenceQueue:false}}}function c(t){t=Array.isArray(t)?t:[t];return t.every(function(t){return $.isFunction(t.size)&&t.size()>0})}},menu:function(t){if(CONFIG.motion.async){t.next()}$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}})},postList:function(t){var e=$(".post-block, .pagination, .comments");var i=CONFIG.motion.transition.post_block;var o=$(".post-header");var n=CONFIG.motion.transition.post_header;var s=$(".post-body");var a=CONFIG.motion.transition.post_body;var r=$(".collection-title, .archive-year");var c=CONFIG.motion.transition.coll_header;var l=$(".sidebar-inner");var d=CONFIG.motion.transition.sidebar;var u=e.size()>0;u?h():t.next();if(CONFIG.motion.async){t.next()}function h(){var u=window.postMotionOptions||{stagger:100,drag:true};u.complete=function(){if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){l.css({transform:"initial"})}t.next()};if(CONFIG.motion.transition.post_block){e.velocity("transition."+i,u)}if(CONFIG.motion.transition.post_header){o.velocity("transition."+n,u)}if(CONFIG.motion.transition.post_body){s.velocity("transition."+a,u)}if(CONFIG.motion.transition.coll_header){r.velocity("transition."+c,u)}if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){l.velocity("transition."+d,u)}}},sidebar:function(t){if(CONFIG.sidebar.display==="always"){NexT.utils.displaySidebar()}t.next()}}}function scrollspy_js(){+function(t){"use strict";function e(i,o){this.$body=t(document.body);this.$scrollElement=t(i).is(document.body)?t(window):t(i);this.options=t.extend({},e.DEFAULTS,o);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this));this.refresh();this.process()}e.VERSION="3.3.2";e.DEFAULTS={offset:10};e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};e.prototype.refresh=function(){var e=this;var i="offset";var o=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!t.isWindow(this.$scrollElement[0])){i="position";o=this.$scrollElement.scrollTop()}this.$body.find(this.selector).map(function(){var e=t(this);var n=e.data("target")||e.attr("href");var s=/^#./.test(n)&&t(NexT.utils.escapeSelector(n));return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]);e.targets.push(this[1])})};e.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset;var i=this.getScrollHeight();var o=this.options.offset+i-this.$scrollElement.height();var n=this.offsets;var s=this.targets;var a=this.activeTarget;var r;if(this.scrollHeight!=i){this.refresh()}if(e>=o){return a!=(r=s[s.length-1])&&this.activate(r)}if(a&&e<n[0]){t(this.selector).trigger("clear.bs.scrollspy");this.activeTarget=null;return this.clear()}for(r=n.length;r--;){a!=s[r]&&e>=n[r]&&(!n[r+1]||e<=n[r+1])&&this.activate(s[r])}};e.prototype.activate=function(e){this.activeTarget=e;this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]';var o=t(i).parents("li").addClass("active");if(o.parent(".dropdown-menu").length){o=o.closest("li.dropdown").addClass("active")}o.trigger("activate.bs.scrollspy")};e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function i(i){return this.each(function(){var o=t(this);var n=o.data("bs.scrollspy");var s=typeof i=="object"&&i;if(!n)o.data("bs.scrollspy",n=new e(this,s));if(typeof i=="string")n[i]()})}var o=t.fn.scrollspy;t.fn.scrollspy=i;t.fn.scrollspy.Constructor=e;t.fn.scrollspy.noConflict=function(){t.fn.scrollspy=o;return this};t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery)}function postdetails_js(){t();function t(){var t=".post-toc";var e=$(t);var i=".active-current";e.on("activate.bs.scrollspy",function(){var i=$(t+" .active").last();o();i.addClass("active-current");e.scrollTop(i.offset().top-e.offset().top+e.scrollTop()-e.height()/2)}).on("clear.bs.scrollspy",o);$("body").scrollspy({target:t});function o(){$(t+" "+i).removeClass(i.substring(1))}}var e=$("html");var i=200;var o=$.isFunction(e.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var n="sidebar-panel-active";if(t.hasClass(e)){return}var s=$("."+n);var a=$("."+t.data("target"));o?s.velocity("transition.slideUpOut",i,function(){a.velocity("stop").velocity("transition.slideDownIn",i).addClass(n)}):s.animate({opacity:0},i,function(){s.hide();a.stop().css({opacity:0,display:"block"}).animate({opacity:1},i,function(){s.removeClass(n);a.addClass(n)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(t){t.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href"));var n=$(i).offset().top;o?e.velocity("stop").velocity("scroll",{offset:n+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:n},500)});function n(){var t=navigator.userAgent;var e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];var i=false;for(var o=0;o<e.length;o++){if(t.indexOf(e[o])>0){i=true;break}}var n=window.screen.width;var s=window.screen.height;if(n<500&&s<800){i=true}return i}var n=n();var s=$(".post-toc-content");var a=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var r=s.length>0&&s.html().trim().length>0;if(a&&r&&!n){NexT.utils.displaySidebar()}else{var c=$(".sidebar");if(typeof c!="undefined"){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0});c.find(".motion-element").velocity("stop").css("display","none");c.velocity("stop").velocity({width:0},{display:"none"});sidebarToggleLines.init();c.removeClass("sidebar-active");c.trigger("sidebar.isHiding");if(!!$(".post-toc-wrap")){if($(".site-overview-wrap").css("display")==="block"){$(".post-toc-wrap").removeClass("motion-element")}else{$(".post-toc-wrap").addClass("motion-element")}}}}}var sidebarToggleLines={lines:[],push:function(t){this.lines.push(t)},init:function(){this.lines.forEach(function(t){t.init()})},arrow:function(){this.lines.forEach(function(t){t.arrow()})},close:function(){this.lines.forEach(function(t){t.close()})}};function lean_analytics(){AV.initialize("6og9b7lpddMqazBCDe8z4HqL-gzGzoHsz","faKN7dalSdXLmYYJTRq98B1f");$.getScript("https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js");function t(t){var e=new AV.Query(t);var i=[];var o=$(".leancloud_visitors");o.each(function(){i.push($(this).attr("id").trim())});e.containedIn("url",i);e.find().done(function(t){var e=".leancloud-visitors-count";if(t.length===0){o.find(e).text(0);return}for(var n=0;n<t.length;n++){var s=t[n];var a=s.get("url");var r=s.get("time");var c=document.getElementById(a);$(c).find(e).text(r)}for(var n=0;n<i.length;n++){var a=i[n];var c=document.getElementById(a);var l=$(c).find(e);if(l.text()==""){l.text(0)}}}).fail(function(t,e){console.log("Error: "+e.code+" "+e.message)})}function e(t){var e=$(".leancloud_visitors");var i=e.attr("id").trim();var o=e.attr("data-flag-title").trim();var n=new AV.Query(t);n.equalTo("url",i);n.find({success:function(e){if(e.length>0){var n=e[0];n.fetchWhenSave(true);n.increment("time");n.save(null,{success:function(t){var e=$(document.getElementById(i));e.find(".leancloud-visitors-count").text(t.get("time"))},error:function(t,e){console.log("Failed to save Visitor num, with error message: "+e.message)}})}else{var s=new t;var a=new AV.ACL;a.setPublicReadAccess(true);a.setPublicWriteAccess(true);s.setACL(a);s.set("title",o);s.set("url",i);s.set("time",1);s.save(null,{success:function(t){var e=$(document.getElementById(i));e.find(".leancloud-visitors-count").text(t.get("time"))},error:function(t,e){console.log("Failed to create")}})}},error:function(t){console.log("Error:"+t.code+" "+t.message)}})}var i=AV.Object.extend("Counter");if($(".leancloud_visitors").length==1){e(i)}else if($(".post-title-link").length>1){t(i)}}function baidutuisong(){var t=document.createElement("script");var e=window.location.protocol.split(":")[0];if(e==="https"){t.src="https://zz.bdstatic.com/linksubmit/push.js"}else{t.src="http://push.zhanzhang.baidu.com/push.js"}var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}var $config={sites:["weibo","qq","wechat","qzone","douban","facebook","google","twitter"],disabled:["linkedin","diandian"],wechatQrcodeTitle:"微信扫一扫",wechatQrcodeHelper:"<p>微信扫一扫，右上角分享</p>",source:"Leesin Dong"};$(".post-spread").share($config);function pjaxshare(){$(".post-spread").share($config)}function utils_js(){NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var t=$(this);var e=t.attr("title");var i=t.parent("a");if(i.size()<1){var o=t.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");i=t.wrap('<a href="'+o+'"></a>').parent("a")}i.addClass("fancybox fancybox.image");i.attr("rel","group");if(e){i.append('<p class="image-caption">'+e+"</p>");i.attr("title",e)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var t=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var e=location.hash;if(e!==""){$(t+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active");$(e).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(t+".tab").on("click",function(t){t.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(t){var e=t.which===27&&$(".search-popup").is(":visible");if(e){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var t=50;var e=$(".back-to-top");$(window).on("scroll",function(){e.toggleClass("back-to-top-on",window.pageYOffset>t);var i=$(window).scrollTop();var o=NexT.utils.getContentVisibilityHeight();var n=i/o;var s=Math.round(n*100);var a=s>100?100:s;$("#scrollpercent>span").html(a)});e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var t=$("iframe");var e=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var i=new RegExp(e.join("|"));t.each(function(){var t=this;var e=$(this);var s=o(e);var a;if(this.src.search(i)>0){var r=n(s.width,s.height);e.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=r+"%";c.style.paddingTop===""&&(c.style.paddingTop="50%");var l=t.parentNode;l.insertBefore(c,t);c.appendChild(t);if(this.src.search("music.163.com")>0){a=o(e);var d=a.width>s.width||a.height<s.height;if(d){c.style.paddingTop=n(a.width,s.height)+"%"}}}});function o(t){return{width:t.width(),height:t.height()}}function n(t,e){return e/t*100}},addActiveClassToMenuItem:function(){var t=window.location.pathname;t=t==="/"?t:t.substring(0,t.length-1);$('.menu-item a[href^="'+t+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var t=window.navigator;var e=t.userAgent;var i=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return i.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(t){return t.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var t=$("<div />").addClass("scrollbar-measure").prependTo("body");var e=t[0];var i=e.offsetWidth-e.clientWidth;t.remove();return i},getContentVisibilityHeight:function(){var t=$("#content").height(),e=$(window).height(),i=t>e?t-e:$(document).height()-e;return i},getSidebarb2tHeight:function(){var t=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return t},getSidebarSchemePadding:function(){var t=$(".sidebar-nav").css("display")=="block"?$(".sidebar-nav").outerHeight(true):0,e=$(".sidebar-inner"),i=e.innerWidth()-e.width(),o=this.isPisces()||this.isGemini()?i*2+t+CONFIG.sidebar.offset*2+this.getSidebarb2tHeight():i*2+t/2;return o}}}initSidebarDimension();function initSidebarDimension(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();updateSidebarHeight(t)},0)});var e=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+e+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+e+"px)")}updateSidebarHeight(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function updateSidebarHeight(t){t=t||"auto";$(".site-overview, .post-toc").css("max-height",t)}function initSidebarDimension(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();updateSidebarHeight(t)},0)});var e=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+e+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+e+"px)")}updateSidebarHeight(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function lazyLoad(){$("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn",threshold:100,failure_limit:20,skip_invisible:false})}function comments_js(){if($(".comments").length>0){$.getScript("https://cdn-city.livere.com/js/embed.dist.js")}}function busuanzi_js(){$.getScript("/js/src/pjax/busuanzi.js")}function gitalk(){if($("#gitalk-container").length>0){var t=new Gitalk({clientID:"a9ce619db1631dda096d",clientSecret:"7e8f7305d2493c153d210082610329f07f1aa093",repo:"dataiyangu.github.io",owner:"dataiyangu",admin:["dataiyangu"],id:location.pathname});t.render("gitalk-container")}}function eye_js(){$color=$("#canvas").css("background");$("article").css("background",$color);var t=$color;if(t.indexOf("rgb(50, 50, 50)")>=0){$("p").css({color:"#999"});$("a").css({color:"#FF99CC"});$("h1 a").css({color:"#FFFF66"});$("h2 a").css({color:"#FFFF66"});$("h3 a").css({color:"#FFFF66"});$("h4 a").css({color:"#FFFF66"});$("h1").css({color:"#FFFF66"});$("h2").css({color:"#FFFF66"});$("h3").css({color:"#FFFF66"});$("h4").css({color:"#FFFF66"})}else{$("article p").css({color:"#333"});$("p a").css({color:"#0593d3"});$("h1").css({color:"#555"});$("h1").css({color:"#555"});$("h2").css({color:"#555"});$("h3").css({color:"#555"});$(".sidebar a ").css({color:"#999"});$(".header_left a ").css({color:"#999"})}}function article_top_js(){function t(){var t=window.location.pathname;var e=$(".header").innerHeight();if(t.indexOf("html")>0){$("html,body").animate({scrollTop:e},300)}}setTimeout(t,800)}function donate(){var t=$("#QR");var e=$("#rewardButton");if(e.length>0){e.click(function(){t.css("display")=="none"?t.css("display","block"):t.css("display","none")})}}function hover_left_bottom(){function t(){$(".eye").animate({left:0},{duration:500,easing:"easeOutBounce",complete:function(){}});$(".header_left").animate({left:0},{duration:500,easing:"easeOutBounce",complete:function(){}});$(".aplayer-body").animate({left:"-66px"},{duration:80,easing:"easeOutBounce",complete:function(){}})}function e(){$(".eye").animate({left:"-18px"},{duration:500,easing:"easeOutBounce",complete:function(){}});$(".header_left").animate({left:"-18px"},{duration:500,easing:"easeOutBounce",complete:function(){}});if($(".header_left").css("width").indexOf("80")!=-1){$(".header_sidebar").click()}if($(".eye1").css("display")=="block"){$(".eye2").click()}if($(".aplayer-body").css("left").indexOf("-84")==-1|$(".aplayer-body").css("left").indexOf("-66")==-1){if($(".aplayer-narrow").length!=1){$(".aplayer-miniswitcher").click();$(".aplayer-body").animate({left:"-84px"},{duration:80,easing:"easeOutBounce",complete:function(){}})}}$(".aplayer-body").animate({left:"-84px"},{duration:80,easing:"easeOutBounce",complete:function(){}})}function i(){var i=0;$(".hover_sidebar").hover(function(){i=setTimeout(function(){t()},1e3)},function(){clearTimeout(i)});var o=0;$("#posts").hover(function(){o=setTimeout(function(){e()},1e3)},function(){clearTimeout(o)})}i();$(function(){setTimeout(e,2e3)})}function pjax_eye_change(){$(".eye ul li").click(function(){my_scrollReveal_js()})}function wrapImageWithFancyBox(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var t=$(this);var e=t.attr("title");var i=t.parent("a");if(i.size()<1){var o=t.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");i=t.wrap('<a href="'+o+'"></a>').parent("a")}i.addClass("fancybox fancybox.image");i.attr("rel","group");if(e){i.append('<p class="image-caption">'+e+"</p>");i.attr("title",e)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})}function copy_code(){$(".highlight").each(function(t,e){var i=$("<div>").addClass("highlight-wrap");$(e).after(i);i.append($("<button>").addClass("copy-btn").append("复制").on("click",function(t){var e=$(this).parent().find(".code").find(".line").map(function(t,e){return $(e).text()}).toArray().join("\n");var i=document.createElement("textarea");document.body.appendChild(i);i.style.position="absolute";i.style.top="0px";i.style.left="0px";i.value=e;i.select();i.focus();var o=document.execCommand("copy");document.body.removeChild(i);if(o)$(this).text("复制成功");else $(this).text("复制失败");$(this).blur()})).on("mouseleave",function(t){var e=$(this).find(".copy-btn");setTimeout(function(){e.text("复制")},300)}).append(e)})}function header_top(){$(function(){var t=$(document).scrollTop();function e(){var e=$(document).scrollTop();if(e>t){$(".header_nav").css("background-color","");$(".header_nav").stop().animate({top:"-50px"},200);$(".a_tag").stop().animate({top:"-50px"},200);$(".a_tag a").css("color","#fff")}else if(e<=2){$(".a_tag a").css("color","#fff");$(".header_nav").stop().animate({opacity:"0"},200)}else{$(".header_nav").css("background-color","# ");$(".header_nav").stop().animate({top:"0px"},200);$(".a_tag").stop().animate({top:"0px"},200);$(".header_nav").css("opacity","0.9");$(".a_tag a").css("color","#666")}t=$(document).scrollTop()}var i=_.throttle(e,100);$(window).scroll(i)})}
//rebuild by neat 