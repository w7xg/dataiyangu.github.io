// build time:Tue Feb 12 2019 15:14:56 GMT+0800 (China Standard Time)
function category_js(){$(".category-list-link").filter(function(){return $(this).siblings(".category-list-child").length>0}).attr("href","javascript:void(0)");$(".category-list-link").click(function(){$(this).siblings(".category-list-child").slideToggle()});var t=$(window).width()/1.2;$(".category-list-link").animate({width:t},300)}function opacity_js(){$(".post-block").css({opacity:1});$(".post-header").css({opacity:1});$(".post-body").css({opacity:1});$(".pagination").css({opacity:1})}function motion_js(){NexT.motion={};var t={lines:[],push:function(t){this.lines.push(t)},init:function(){this.lines.forEach(function(t){t.init()})},arrow:function(){this.lines.forEach(function(t){t.arrow()})},close:function(){this.lines.forEach(function(t){t.close()})}};function e(t){this.el=$(t.el);this.status=$.extend({},{init:{width:"100%",opacity:1,left:0,rotateZ:0,top:0}},t.status)}e.prototype.init=function(){this.transform("init")};e.prototype.arrow=function(){this.transform("arrow")};e.prototype.close=function(){this.transform("close")};e.prototype.transform=function(t){this.el.velocity("stop").velocity(this.status[t])};var i=new e({el:".sidebar-toggle-line-first",status:{arrow:{width:"50%",rotateZ:"-45deg",top:"2px"},close:{width:"100%",rotateZ:"-45deg",top:"5px"}}});var o=new e({el:".sidebar-toggle-line-middle",status:{arrow:{width:"90%"},close:{opacity:0}}});var s=new e({el:".sidebar-toggle-line-last",status:{arrow:{width:"50%",rotateZ:"45deg",top:"-2px"},close:{width:"100%",rotateZ:"45deg",top:"-5px"}}});t.push(i);t.push(o);t.push(s);var n="320px";var r=200;var a,l;var c={toggleEl:$(".sidebar-toggle"),dimmerEl:$("#sidebar-dimmer"),sidebarEl:$(".sidebar"),isSidebarVisible:false,init:function(){this.toggleEl.on("click",this.clickHandler.bind(this));this.dimmerEl.on("click",this.clickHandler.bind(this));this.toggleEl.on("mouseenter",this.mouseEnterHandler.bind(this));this.toggleEl.on("mouseleave",this.mouseLeaveHandler.bind(this));this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this));this.sidebarEl.on("touchend",this.touchendHandler.bind(this));this.sidebarEl.on("touchmove",function(t){t.preventDefault()});$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:n},r)}).on("sidebar.isHiding",function(){})},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar();this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){if(this.isSidebarVisible){return}t.arrow()},mouseLeaveHandler:function(){if(this.isSidebarVisible){return}t.init()},touchstartHandler:function(t){a=t.originalEvent.touches[0].clientX;l=t.originalEvent.touches[0].clientY},touchendHandler:function(t){var e=t.originalEvent.changedTouches[0].clientX;var i=t.originalEvent.changedTouches[0].clientY;if(e-a>30&&Math.abs(i-l)<20){this.clickHandler()}},showSidebar:function(){var e=this;t.close();this.sidebarEl.velocity("stop").velocity({width:n},{display:"block",duration:r,begin:function(){$(".sidebar .motion-element").velocity("transition.slideRightIn",{stagger:50,drag:true,complete:function(){e.sidebarEl.trigger("sidebar.motion.complete")}})},complete:function(){e.sidebarEl.addClass("sidebar-active");e.sidebarEl.trigger("sidebar.didShow")}});this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0});this.sidebarEl.find(".motion-element").velocity("stop").css("display","none");this.sidebarEl.velocity("stop").velocity({width:0},{display:"none"});t.init();this.sidebarEl.removeClass("sidebar-active");this.sidebarEl.trigger("sidebar.isHiding");if(!!$(".post-toc-wrap")){if($(".site-overview-wrap").css("display")==="block"){$(".post-toc-wrap").removeClass("motion-element")}else{$(".post-toc-wrap").addClass("motion-element")}}}};c.init();NexT.motion.integrator={queue:[],cursor:-1,add:function(t){this.queue.push(t);return this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(t){var e=[];var i=$(".brand");var o=$(".site-title");var s=$(".site-subtitle");var n=$(".logo-line-before i");var r=$(".logo-line-after i");i.size()>0&&e.push({e:i,p:{opacity:1},o:{duration:200}});NexT.utils.isMist()&&l([n,r])&&e.push(a(n,"100%"),a(r,"-100%"));l(o)&&e.push({e:o,p:{opacity:1,top:0},o:{duration:200}});l(s)&&e.push({e:s,p:{opacity:1,top:0},o:{duration:200}});if(CONFIG.motion.async){t.next()}if(e.length>0){e[e.length-1].o.complete=function(){t.next()};$.Velocity.RunSequence(e)}else{t.next()}function a(t,e){return{e:$(t),p:{translateX:e},o:{duration:500,sequenceQueue:false}}}function l(t){t=Array.isArray(t)?t:[t];return t.every(function(t){return $.isFunction(t.size)&&t.size()>0})}},menu:function(t){if(CONFIG.motion.async){t.next()}$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}})},postList:function(t){var e=$(".post-block, .pagination, .comments");var i=CONFIG.motion.transition.post_block;var o=$(".post-header");var s=CONFIG.motion.transition.post_header;var n=$(".post-body");var r=CONFIG.motion.transition.post_body;var a=$(".collection-title, .archive-year");var l=CONFIG.motion.transition.coll_header;var c=$(".sidebar-inner");var d=CONFIG.motion.transition.sidebar;var u=e.size()>0;u?h():t.next();if(CONFIG.motion.async){t.next()}function h(){var u=window.postMotionOptions||{stagger:100,drag:true};u.complete=function(){if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){c.css({transform:"initial"})}t.next()};if(CONFIG.motion.transition.post_block){e.velocity("transition."+i,u)}if(CONFIG.motion.transition.post_header){o.velocity("transition."+s,u)}if(CONFIG.motion.transition.post_body){n.velocity("transition."+r,u)}if(CONFIG.motion.transition.coll_header){a.velocity("transition."+l,u)}if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){c.velocity("transition."+d,u)}}},sidebar:function(t){if(CONFIG.sidebar.display==="always"){NexT.utils.displaySidebar()}t.next()}}}function scrollspy_js(){+function(t){"use strict";function e(i,o){this.$body=t(document.body);this.$scrollElement=t(i).is(document.body)?t(window):t(i);this.options=t.extend({},e.DEFAULTS,o);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this));this.refresh();this.process()}e.VERSION="3.3.2";e.DEFAULTS={offset:10};e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};e.prototype.refresh=function(){var e=this;var i="offset";var o=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!t.isWindow(this.$scrollElement[0])){i="position";o=this.$scrollElement.scrollTop()}this.$body.find(this.selector).map(function(){var e=t(this);var s=e.data("target")||e.attr("href");var n=/^#./.test(s)&&t(NexT.utils.escapeSelector(s));return n&&n.length&&n.is(":visible")&&[[n[i]().top+o,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]);e.targets.push(this[1])})};e.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset;var i=this.getScrollHeight();var o=this.options.offset+i-this.$scrollElement.height();var s=this.offsets;var n=this.targets;var r=this.activeTarget;var a;if(this.scrollHeight!=i){this.refresh()}if(e>=o){return r!=(a=n[n.length-1])&&this.activate(a)}if(r&&e<s[0]){t(this.selector).trigger("clear.bs.scrollspy");this.activeTarget=null;return this.clear()}for(a=s.length;a--;){r!=n[a]&&e>=s[a]&&(!s[a+1]||e<=s[a+1])&&this.activate(n[a])}};e.prototype.activate=function(e){this.activeTarget=e;this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]';var o=t(i).parents("li").addClass("active");if(o.parent(".dropdown-menu").length){o=o.closest("li.dropdown").addClass("active")}o.trigger("activate.bs.scrollspy")};e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function i(i){return this.each(function(){var o=t(this);var s=o.data("bs.scrollspy");var n=typeof i=="object"&&i;if(!s)o.data("bs.scrollspy",s=new e(this,n));if(typeof i=="string")s[i]()})}var o=t.fn.scrollspy;t.fn.scrollspy=i;t.fn.scrollspy.Constructor=e;t.fn.scrollspy.noConflict=function(){t.fn.scrollspy=o;return this};t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery)}function postdetails_js(){t();function t(){var t=".post-toc";var e=$(t);var i=".active-current";e.on("activate.bs.scrollspy",function(){var i=$(t+" .active").last();o();i.addClass("active-current");e.scrollTop(i.offset().top-e.offset().top+e.scrollTop()-e.height()/2)}).on("clear.bs.scrollspy",o);$("body").scrollspy({target:t});function o(){$(t+" "+i).removeClass(i.substring(1))}}var e=$("html");var i=200;var o=$.isFunction(e.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var e="sidebar-nav-active";var s="sidebar-panel-active";if(t.hasClass(e)){return}var n=$("."+s);var r=$("."+t.data("target"));o?n.velocity("transition.slideUpOut",i,function(){r.velocity("stop").velocity("transition.slideDownIn",i).addClass(s)}):n.animate({opacity:0},i,function(){n.hide();r.stop().css({opacity:0,display:"block"}).animate({opacity:1},i,function(){n.removeClass(s);r.addClass(s)})});t.siblings().removeClass(e);t.addClass(e)});$(".post-toc a").on("click",function(t){t.preventDefault();var i=NexT.utils.escapeSelector(this.getAttribute("href"));var s=$(i).offset().top;o?e.velocity("stop").velocity("scroll",{offset:s+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:s},500)});function s(){var t=navigator.userAgent;var e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];var i=false;for(var o=0;o<e.length;o++){if(t.indexOf(e[o])>0){i=true;break}}var s=window.screen.width;var n=window.screen.height;if(s<500&&n<800){i=true}return i}var s=s();var n=$(".post-toc-content");var r=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var a=n.length>0&&n.html().trim().length>0;if(r&&a&&!s){NexT.utils.displaySidebar()}else{var l=$(".sidebar");if(typeof l!="undefined"){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0});l.find(".motion-element").velocity("stop").css("display","none");l.velocity("stop").velocity({width:0},{display:"none"});sidebarToggleLines.init();l.removeClass("sidebar-active");l.trigger("sidebar.isHiding");if(!!$(".post-toc-wrap")){if($(".site-overview-wrap").css("display")==="block"){$(".post-toc-wrap").removeClass("motion-element")}else{$(".post-toc-wrap").addClass("motion-element")}}}}}var sidebarToggleLines={lines:[],push:function(t){this.lines.push(t)},init:function(){this.lines.forEach(function(t){t.init()})},arrow:function(){this.lines.forEach(function(t){t.arrow()})},close:function(){this.lines.forEach(function(t){t.close()})}};function lean_analytics(){AV.initialize("6og9b7lpddMqazBCDe8z4HqL-gzGzoHsz","faKN7dalSdXLmYYJTRq98B1f");$.getScript("https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js");function t(t){var e=new AV.Query(t);var i=[];var o=$(".leancloud_visitors");o.each(function(){i.push($(this).attr("id").trim())});e.containedIn("url",i);e.find().done(function(t){var e=".leancloud-visitors-count";if(t.length===0){o.find(e).text(0);return}for(var s=0;s<t.length;s++){var n=t[s];var r=n.get("url");var a=n.get("time");var l=document.getElementById(r);$(l).find(e).text(a)}for(var s=0;s<i.length;s++){var r=i[s];var l=document.getElementById(r);var c=$(l).find(e);if(c.text()==""){c.text(0)}}}).fail(function(t,e){console.log("Error: "+e.code+" "+e.message)})}function e(t){var e=$(".leancloud_visitors");var i=e.attr("id").trim();var o=e.attr("data-flag-title").trim();var s=new AV.Query(t);s.equalTo("url",i);s.find({success:function(e){if(e.length>0){var s=e[0];s.fetchWhenSave(true);s.increment("time");s.save(null,{success:function(t){var e=$(document.getElementById(i));e.find(".leancloud-visitors-count").text(t.get("time"))},error:function(t,e){console.log("Failed to save Visitor num, with error message: "+e.message)}})}else{var n=new t;var r=new AV.ACL;r.setPublicReadAccess(true);r.setPublicWriteAccess(true);n.setACL(r);n.set("title",o);n.set("url",i);n.set("time",1);n.save(null,{success:function(t){var e=$(document.getElementById(i));e.find(".leancloud-visitors-count").text(t.get("time"))},error:function(t,e){console.log("Failed to create")}})}},error:function(t){console.log("Error:"+t.code+" "+t.message)}})}var i=AV.Object.extend("Counter");if($(".leancloud_visitors").length==1){e(i)}else if($(".post-title-link").length>1){t(i)}}function baidutuisong(){var t=document.createElement("script");var e=window.location.protocol.split(":")[0];if(e==="https"){t.src="https://zz.bdstatic.com/linksubmit/push.js"}else{t.src="http://push.zhanzhang.baidu.com/push.js"}var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}var $config={sites:["weibo","qq","wechat","qzone","douban","facebook","google","twitter"],disabled:["linkedin","diandian"],wechatQrcodeTitle:"微信扫一扫",wechatQrcodeHelper:"<p>微信扫一扫，右上角分享</p>",source:"Leesin Dong"};$(".post-spread").share($config);function pjaxshare(){$(".post-spread").share($config)}function utils_js(){NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var t=$(this);var e=t.attr("title");var i=t.parent("a");if(i.size()<1){var o=t.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");i=t.wrap('<a href="'+o+'"></a>').parent("a")}i.addClass("fancybox fancybox.image");i.attr("rel","group");if(e){i.append('<p class="image-caption">'+e+"</p>");i.attr("title",e)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var t=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var e=location.hash;if(e!==""){$(t+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active");$(e).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(t+".tab").on("click",function(t){t.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var e=$(this).find("a").attr("href");$(e).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(t){var e=t.which===27&&$(".search-popup").is(":visible");if(e){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var t=50;var e=$(".back-to-top");$(window).on("scroll",function(){e.toggleClass("back-to-top-on",window.pageYOffset>t);var i=$(window).scrollTop();var o=NexT.utils.getContentVisibilityHeight();var s=i/o;var n=Math.round(s*100);var r=n>100?100:n;$("#scrollpercent>span").html(r)});e.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var t=$("iframe");var e=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var i=new RegExp(e.join("|"));t.each(function(){var t=this;var e=$(this);var n=o(e);var r;if(this.src.search(i)>0){var a=s(n.width,n.height);e.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var l=document.createElement("div");l.className="fluid-vids";l.style.position="relative";l.style.marginBottom="20px";l.style.width="100%";l.style.paddingTop=a+"%";l.style.paddingTop===""&&(l.style.paddingTop="50%");var c=t.parentNode;c.insertBefore(l,t);l.appendChild(t);if(this.src.search("music.163.com")>0){r=o(e);var d=r.width>n.width||r.height<n.height;if(d){l.style.paddingTop=s(r.width,n.height)+"%"}}}});function o(t){return{width:t.width(),height:t.height()}}function s(t,e){return e/t*100}},addActiveClassToMenuItem:function(){var t=window.location.pathname;t=t==="/"?t:t.substring(0,t.length-1);$('.menu-item a[href^="'+t+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var t=window.navigator;var e=t.userAgent;var i=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return i.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(t){return t.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var t=$("<div />").addClass("scrollbar-measure").prependTo("body");var e=t[0];var i=e.offsetWidth-e.clientWidth;t.remove();return i},getContentVisibilityHeight:function(){var t=$("#content").height(),e=$(window).height(),i=t>e?t-e:$(document).height()-e;return i},getSidebarb2tHeight:function(){var t=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return t},getSidebarSchemePadding:function(){var t=$(".sidebar-nav").css("display")=="block"?$(".sidebar-nav").outerHeight(true):0,e=$(".sidebar-inner"),i=e.innerWidth()-e.width(),o=this.isPisces()||this.isGemini()?i*2+t+CONFIG.sidebar.offset*2+this.getSidebarb2tHeight():i*2+t/2;return o}}}initSidebarDimension();function initSidebarDimension(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();updateSidebarHeight(t)},0)});var e=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+e+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+e+"px)")}updateSidebarHeight(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function updateSidebarHeight(t){t=t||"auto";$(".site-overview, .post-toc").css("max-height",t)}function initSidebarDimension(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();updateSidebarHeight(t)},0)});var e=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+e+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+e+"px)")}updateSidebarHeight(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function lazyLoad(){$("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn",threshold:100,failure_limit:20,skip_invisible:false})}function comments_js(){if($(".comments").length>0){$.getScript("https://cdn-city.livere.com/js/embed.dist.js")}}function busuanzi_js(){$.getScript("/js/src/pjax/busuanzi.js")}function gitalk(){if($("#gitalk-container").length>0){var t=new Gitalk({clientID:"a9ce619db1631dda096d",clientSecret:"7e8f7305d2493c153d210082610329f07f1aa093",repo:"dataiyangu.github.io",owner:"dataiyangu",admin:["dataiyangu"],id:location.pathname});t.render("gitalk-container")}}function eye_js(){$color=$("#canvas").css("background");$("article").css("background",$color);var t=$color;if(t.indexOf("rgb(50, 50, 50)")>=0){$("p").css({color:"#999"});$("a").css({color:"#FF99CC"});$("h1 a").css({color:"#FFFF66"});$("h1").css({color:"#FFFF66"})}else{$("p").css({color:"#666"});$("a:not(.social-share-icon)").css({color:"#555"});$("h1").css({color:"#555"});$(".sidebar a ").css({color:"#999"});$(".header_left a ").css({color:"#999"})}}function article_top_js(){function t(){var t=window.location.pathname;var e=$(".header").css("height");if(t.indexOf("html")>0){$("html,body").animate({scrollTop:e},300)}}setTimeout(t,800)}function donate(){window.onload=function(){var t=document.getElementById("QR");e=document.getElementById("rewardButton");if(e.length>0){e.onclick=function(){"none"===t.style.display?t.style.display="block":t.style.display="none"}}}}function my_scrollReveal_js(){window.scrollReveal=function(t){"use strict";var e=1;var i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}();function o(t){this.options=this.extend(this.defaults,t);this.docElem=this.options.elem;this.styleBank={};if(this.options.init==true)this.init()}o.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",opacity:0,complete:function(){},viewportFactor:.33,reset:false,init:true,elem:t.document.documentElement},init:function(){this.scrolled=false;var o=this;this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]"));this.elems.forEach(function(t,i){var s=t.getAttribute("data-scroll-reveal-id");if(!s){s=e++;t.setAttribute("data-scroll-reveal-id",s)}if(!o.styleBank[s]){o.styleBank[s]=t.getAttribute("style")}o.update(t)});var s=function(t){if(!o.scrolled){o.scrolled=true;i(function(){o._scrollPage()})}};var n=function(){if(o.resizeTimeout){clearTimeout(o.resizeTimeout)}function t(){o._scrollPage();o.resizeTimeout=null}o.resizeTimeout=setTimeout(t,200)};if(this.docElem==t.document.documentElement){t.addEventListener("scroll",s,false);t.addEventListener("resize",n,false)}else{this.docElem.addEventListener("scroll",s,false)}},_scrollPage:function(){var t=this;this.elems.forEach(function(e,i){t.update(e)});this.scrolled=false},parseLanguage:function(t){var e=t.getAttribute("data-scroll-reveal").split(/[, ]+/),i={};function o(t){var e=[],i=["from","the","and","then","but","with"];t.forEach(function(t,o){if(i.indexOf(t)>-1){return}e.push(t)});return e}e=o(e);e.forEach(function(t,o){switch(t){case"enter":i.enter=e[o+1];return;case"after":i.after=e[o+1];return;case"wait":i.after=e[o+1];return;case"move":i.move=e[o+1];return;case"ease":i.move=e[o+1];i.ease="ease";return;case"ease-in":i.move=e[o+1];i.easing="ease-in";return;case"ease-in-out":i.move=e[o+1];i.easing="ease-in-out";return;case"ease-out":i.move=e[o+1];i.easing="ease-out";return;case"over":i.over=e[o+1];return;default:return}});return i},update:function(t){var e=this;var i=this.genCSS(t);var o=this.styleBank[t.getAttribute("data-scroll-reveal-id")];if(o!=null)o+=";";else o="";if(!t.getAttribute("data-scroll-reveal-initialized")){t.setAttribute("style",o+i.initial);t.setAttribute("data-scroll-reveal-initialized",true)}if(!this.isElementInViewport(t,this.options.viewportFactor)){if(this.options.reset){t.setAttribute("style",o+i.initial+i.reset)}return}if(t.getAttribute("data-scroll-reveal-complete"))return;if(this.isElementInViewport(t,this.options.viewportFactor)){t.setAttribute("style",o+i.target+i.transition);if(!this.options.reset){setTimeout(function(){if(o!=""){t.setAttribute("style",o)}else{t.removeAttribute("style")}t.setAttribute("data-scroll-reveal-complete",true);e.options.complete(t)},i.totalDuration)}return}},genCSS:function(t){var e=this.parseLanguage(t),i,o;if(e.enter){if(e.enter=="top"||e.enter=="bottom"){i=e.enter;o="y"}if(e.enter=="left"||e.enter=="right"){i=e.enter;o="x"}}else{if(this.options.enter=="top"||this.options.enter=="bottom"){i=this.options.enter;o="y"}if(this.options.enter=="left"||this.options.enter=="right"){i=this.options.enter;o="x"}}if(i=="top"||i=="left"){if(e.move){e.move="-"+e.move}else{e.move="-"+this.options.move}}var s=e.move||this.options.move,n=e.over||this.options.over,r=e.after||this.options.after,a=e.easing||this.options.easing,l=e.opacity||this.options.opacity;var c="-webkit-transition: -webkit-transform "+n+" "+a+" "+r+",  opacity "+n+" "+a+" "+r+";"+"transition: transform "+n+" "+a+" "+r+", opacity "+n+" "+a+" "+r+";"+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;";var d="-webkit-transition: -webkit-transform "+n+" "+a+" 0s,  opacity "+n+" "+a+" "+r+";"+"transition: transform "+n+" "+a+" 0s,  opacity "+n+" "+a+" "+r+";"+"-webkit-perspective: 1000;"+"-webkit-backface-visibility: hidden;";var u="-webkit-transform: translate"+o+"("+s+");"+"transform: translate"+o+"("+s+");"+"opacity: "+l+";";var h="-webkit-transform: translate"+o+"(0);"+"transform: translate"+o+"(0);"+"opacity: 1;";return{transition:c,initial:u,target:h,reset:d,totalDuration:(parseFloat(n)+parseFloat(r))*1e3}},getViewportH:function(){var e=this.docElem["clientHeight"],i=t["innerHeight"];if(this.docElem==t.document.documentElement)return e<i?i:e;else return e},getOffset:function(t){var e=0,i=0;do{if(!isNaN(t.offsetTop)){e+=t.offsetTop}if(!isNaN(t.offsetLeft)){i+=t.offsetLeft}}while(t=t.offsetParent);return{top:e,left:i}},isElementInViewport:function(e,i){var o=this.docElem.scrollTop+this.docElem.offsetTop;if(this.docElem==t.document.documentElement)o=t.pageYOffset;var s=o+this.getViewportH(),n=e.offsetHeight,r=this.getOffset(e).top,a=r+n,i=i||0;return r+n*i<=s&&a>=o||(e.currentStyle?e.currentStyle:t.getComputedStyle(e,null)).position=="fixed"},extend:function(t,e){for(var i in e){if(e.hasOwnProperty(i)){t[i]=e[i]}}return t}};return o}(window);var t=window.location.pathname;if(t.indexOf("html")<0){var e={enter:"right",move:"40px",over:"3s",after:"5",reset:true,init:true};window.scrollReveal=new scrollReveal(e);scrollReveal.init()}}
//rebuild by neat 