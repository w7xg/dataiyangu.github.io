// build time:Tue Feb 12 2019 15:06:25 GMT+0800 (China Standard Time)
define(function(){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,e,t,u,r){return jQuery.easing[jQuery.easing.def](n,e,t,u,r)},easeInQuad:function(n,e,t,u,r){return u*(e/=r)*e+t},easeOutQuad:function(n,e,t,u,r){return-u*(e/=r)*(e-2)+t},easeInOutQuad:function(n,e,t,u,r){if((e/=r/2)<1)return u/2*e*e+t;return-u/2*(--e*(e-2)-1)+t},easeInCubic:function(n,e,t,u,r){return u*(e/=r)*e*e+t},easeOutCubic:function(n,e,t,u,r){return u*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(n,e,t,u,r){if((e/=r/2)<1)return u/2*e*e*e+t;return u/2*((e-=2)*e*e+2)+t},easeInQuart:function(n,e,t,u,r){return u*(e/=r)*e*e*e+t},easeOutQuart:function(n,e,t,u,r){return-u*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(n,e,t,u,r){if((e/=r/2)<1)return u/2*e*e*e*e+t;return-u/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(n,e,t,u,r){return u*(e/=r)*e*e*e*e+t},easeOutQuint:function(n,e,t,u,r){return u*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(n,e,t,u,r){if((e/=r/2)<1)return u/2*e*e*e*e*e+t;return u/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(n,e,t,u,r){return-u*Math.cos(e/r*(Math.PI/2))+u+t},easeOutSine:function(n,e,t,u,r){return u*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(n,e,t,u,r){return-u/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(n,e,t,u,r){return e==0?t:u*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(n,e,t,u,r){return e==r?t+u:u*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(n,e,t,u,r){if(e==0)return t;if(e==r)return t+u;if((e/=r/2)<1)return u/2*Math.pow(2,10*(e-1))+t;return u/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(n,e,t,u,r){return-u*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(n,e,t,u,r){return u*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(n,e,t,u,r){if((e/=r/2)<1)return-u/2*(Math.sqrt(1-e*e)-1)+t;return u/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(n,e,t,u,r){var a=1.70158;var i=0;var s=u;if(e==0)return t;if((e/=r)==1)return t+u;if(!i)i=r*.3;if(s<Math.abs(u)){s=u;var a=i/4}else var a=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/i))+t},easeOutElastic:function(n,e,t,u,r){var a=1.70158;var i=0;var s=u;if(e==0)return t;if((e/=r)==1)return t+u;if(!i)i=r*.3;if(s<Math.abs(u)){s=u;var a=i/4}else var a=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*e)*Math.sin((e*r-a)*(2*Math.PI)/i)+u+t},easeInOutElastic:function(n,e,t,u,r){var a=1.70158;var i=0;var s=u;if(e==0)return t;if((e/=r/2)==2)return t+u;if(!i)i=r*(.3*1.5);if(s<Math.abs(u)){s=u;var a=i/4}else var a=i/(2*Math.PI)*Math.asin(u/s);if(e<1)return-.5*(s*Math.pow(2,10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/i))+t;return s*Math.pow(2,-10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/i)*.5+u+t},easeInBack:function(n,e,t,u,r,a){if(a==undefined)a=1.70158;return u*(e/=r)*e*((a+1)*e-a)+t},easeOutBack:function(n,e,t,u,r,a){if(a==undefined)a=1.70158;return u*((e=e/r-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(n,e,t,u,r,a){if(a==undefined)a=1.70158;if((e/=r/2)<1)return u/2*(e*e*(((a*=1.525)+1)*e-a))+t;return u/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(n,e,t,u,r){return u-jQuery.easing.easeOutBounce(n,r-e,0,u,r)+t},easeOutBounce:function(n,e,t,u,r){if((e/=r)<1/2.75){return u*(7.5625*e*e)+t}else if(e<2/2.75){return u*(7.5625*(e-=1.5/2.75)*e+.75)+t}else if(e<2.5/2.75){return u*(7.5625*(e-=2.25/2.75)*e+.9375)+t}else{return u*(7.5625*(e-=2.625/2.75)*e+.984375)+t}},easeInOutBounce:function(n,e,t,u,r){if(e<r/2)return jQuery.easing.easeInBounce(n,e*2,0,u,r)*.5+t;return jQuery.easing.easeOutBounce(n,e*2-r,0,u,r)*.5+u*.5+t}})});
//rebuild by neat 