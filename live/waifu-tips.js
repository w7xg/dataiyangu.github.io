// build time:Tue Feb 12 2019 15:06:25 GMT+0800 (China Standard Time)
String.prototype.render=function(e){var t=/(\\)?\{([^\{\}\\]+)(\\)?\}/g,o=true,a=this.replace(t,function(t,a,n,i){if(a||i){return t.replace("\\","")}var s=n.replace(/\s/g,"").split(".");var l=e;var c,r,f;for(c=0,r=s.length;c<r;++c){f=s[c];l=l[f].replace(/\s/g,"").replace(/\s+/g,"");if(!l){o=false;return""}}return l});return o?a:""};function initWidget(e,t){if(sessionStorage.getItem("waifu-display")=="none")return;sessionStorage.removeItem("waifu-text");$("body").append('<div class="waifu">\t\t\t<div class="waifu-tips"></div>\t\t\t<canvas id="live2d" width="300" height="300" class="live2d"></canvas>\t\t\t<div class="waifu-tool">\t\t\t\t<span class="fa fa-lg fa-home"></span>\t\t\t\t<span class="fa fa-lg fa-comment"></span>\t\t\t\t<span class="fa fa-lg fa-paper-plane"></span>\t\t\t\t<span class="fa fa-lg fa-address-book"></span>\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\t\t\t\t<span class="fa fa-lg fa-times"></span>\t\t\t</div>\t\t</div>');var o=/x/,a=document.title,n,i={focus:"o(≧∇≦o) 啊咧，又好了……",blur:"(●—●) 哎呦，崩溃啦！"};console.log(o);o.toString=function(){d("哈哈，你打开了控制台，是想要看看我的秘密吗？",6e3,9);return""};$(document).on("visibilitychange",function(){if(document.hidden){document.title=i.blur;clearTimeout(n)}else{document.title=i.focus;n=setTimeout(function(){document.title=a;d("哇，你又回来了～",6e3,9)},1e3)}});$(document).on("copy",function(){d("你都复制了些什么呀，转载要记得加上出处哦",6e3,9)});$(".waifu-tool .fa-home").click(function(){location.href="/"});$(".waifu-tool .fa-comment").click(function(){u()});$(".waifu-tool .fa-paper-plane").click(function(){var e=document.createElement("script");document.body.appendChild(e);e.src="https://galaxymimi.com/js/asteroids.js"});$(".waifu-tool .fa-address-book").click(function(){h()});$(".waifu-tool .fa-street-view").click(function(){g()});$(".waifu-tool .fa-camera-retro").click(function(){d("照好了嘛，是不是很可爱呢？",6e3,9);window.Live2D.captureName="photo.png";window.Live2D.captureFrame=true});$(".waifu-tool .fa-info-circle").click(function(){window.open("https://github.com/stevenjoezhang/live2d-widget")});$(".waifu-tool .fa-times").click(function(){sessionStorage.setItem("waifu-display","none");d("愿你有一天能与重要的人重逢",2e3,11);setTimeout(function(){$(".waifu").fadeOut(4e3)},1e3)});(function(){var e,t=location.port?location.protocol+"//"+location.hostname+":"+location.port+"/":location.protocol+"//"+location.hostname+"/";if(location.href==t){var o=(new Date).getHours();if(o>23||o<=5){e="你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"}else if(o>5&&o<=7){e="早上好！一日之计在于晨，美好的一天就要开始了"}else if(o>7&&o<=11){e="上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"}else if(o>11&&o<=14){e="中午了，工作了一个上午，现在是午餐时间！"}else if(o>14&&o<=17){e="午后很容易犯困呢，今天的运动目标完成了吗？"}else if(o>17&&o<=19){e="傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～"}else if(o>19&&o<=21){e="晚上好，今天过得怎么样？"}else if(o>21&&o<=23){e=["已经这么晚了呀，早点休息吧，晚安～","深夜时要爱护眼睛呀"]}else{e="好久不见，日子过得好快呢"}}else{if(document.referrer!==""){var a=document.createElement("a");a.href=document.referrer;var n=a.hostname.split(".")[1];if(location.hostname==a.hostname){e='欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>"}else if(n=="baidu"){e='Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+a.search.split("&wd=")[1].split("&")[0]+"</span> 找到的我吗？"}else if(n=="so"){e='Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">'+a.search.split("&q=")[1].split("&")[0]+"</span> 找到的我吗？"}else if(n=="google"){e='Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>"}else{e='Hello! 来自 <span style="color:#0099cc;">'+a.hostname+"</span> 的朋友"}}else{e='欢迎阅读<span style="color:#0099cc;">『'+document.title.split(" - ")[0]+"』</span>"}}d(e,7e3,8)})();var s=false,l=null,c=null,r=["已经过了这么久了呀，日子过得好快呢","使用Chrome可以获得最佳浏览体验哦","嗨～快来逗我玩吧！","拿小拳拳锤你胸口","她性格之奇特，绝非偶然"],f="";if($(".fa-share-alt").is(":hidden"))r.push("记得把小家加入Adblock白名单哦");$(document).mousemove(function(){s=true}).keydown(function(){s=true});setInterval(function(){if(!s){if(!l){l=setInterval(u,25e3)}}else{s=false;clearInterval(l);l=null}},1e3);function u(){if(Math.random()<.6&&r.length>0){d(r[Math.floor(Math.random()*r.length)],6e3,9)}else $.getJSON("https://v1.hitokoto.cn",function(e){var t='这句一言来自 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">{creator}</span> 在 hitokoto.cn 投稿的。';t=t.render({source:e.from,creator:e.creator});d(e.hitokoto,6e3,9);setTimeout(function(){d(t,4e3,9)},6e3)})}function d(e,t,o){if(!e)return;if(!sessionStorage.getItem("waifu-text")||sessionStorage.getItem("waifu-text")<=o){if(c){clearTimeout(c);c=null}if(Array.isArray(e))e=e[Math.floor(Math.random()*e.length)];sessionStorage.setItem("waifu-text",o);$(".waifu-tips").stop().html(e).fadeTo(200,1);c=setTimeout(function(){sessionStorage.removeItem("waifu-text");$(".waifu-tips").fadeTo(1e3,0)},t)}}function p(){if(e===undefined)e="";if(t===undefined)t="";f=t;var o=localStorage.getItem("modelId"),a=localStorage.getItem("modelTexturesId");if(o==null){var o=1;var a=53}m(o,a);$.ajax({cache:true,url:e+"waifu-tips.json",dataType:"json",success:function(e){$.each(e.mouseover,function(e,t){$(document).on("mouseover",t.selector,function(){var e=t.text;if(Array.isArray(t.text))e=t.text[Math.floor(Math.random()*t.text.length)];e=e.render({text:$(this).text()});d(e,4e3,8)})});$.each(e.click,function(e,t){$(document).on("click",t.selector,function(){var e=t.text;if(Array.isArray(t.text))e=t.text[Math.floor(Math.random()*t.text.length)];e=e.render({text:$(this).text()});d(e,4e3,8)})});$.each(e.seasons,function(e,t){var o=new Date,a=t.date.split("-")[0],n=t.date.split("-")[1]||a;if(a.split("/")[0]<=o.getMonth()+1&&o.getMonth()+1<=n.split("/")[0]&&(a.split("/")[1]<=o.getDate()&&o.getDate()<=n.split("/")[1])){var i=t.text;i=i.render({year:o.getFullYear()});r.push(i)}})}})}function m(e,t){localStorage.setItem("modelId",e);if(t===undefined)t=0;localStorage.setItem("modelTexturesId",t);loadlive2d("live2d",f+"/get/?id="+e+"-"+t,console.log("live2d","模型 "+e+"-"+t+" 加载完成"))}function g(){var e=localStorage.getItem("modelId"),t=localStorage.getItem("modelTexturesId");$.ajax({cache:false,url:f+"/rand_textures/?id="+e+"-"+t,dataType:"json",success:function(o){if(o.textures["id"]==1&&(t==1||t==0)){d("我还没有其他衣服呢",4e3,10)}else{d("我的新衣服好看嘛",4e3,10)}m(e,o.textures["id"])}})}function h(){var e=localStorage.getItem("modelId");$.ajax({cache:false,url:f+"/switch/?id="+e,dataType:"json",success:function(e){m(e.model["id"]);d(e.model["message"],4e3,10)}})}p()}
//rebuild by neat 