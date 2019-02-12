// build time:Tue Feb 12 2019 15:14:55 GMT+0800 (China Standard Time)
var canvas=document.getElementById("canvas");var ctx=canvas.getContext("2d");var cw=canvas.width=window.innerWidth,cx=cw/2;var ch=canvas.height=window.innerHeight,cy=ch/2;ctx.fillStyle="#ECE9E6";var linesNum=16;var linesRy=[];var requestId=null;function Line(t){this.flag=t;this.a={};this.b={};if(t=="v"){this.a.y=0;this.b.y=ch;this.a.x=randomIntFromInterval(0,ch);this.b.x=randomIntFromInterval(0,ch)}else if(t=="h"){this.a.x=0;this.b.x=cw;this.a.y=randomIntFromInterval(0,cw);this.b.y=randomIntFromInterval(0,cw)}this.va=randomIntFromInterval(25,100)/150;this.vb=randomIntFromInterval(25,100)/150;this.draw=function(){ctx.strokeStyle="#eef2f3";ctx.beginPath();ctx.moveTo(this.a.x,this.a.y);ctx.lineTo(this.b.x,this.b.y);ctx.stroke()};this.update=function(){if(this.flag=="v"){this.a.x+=this.va;this.b.x+=this.vb}else if(t=="h"){this.a.y+=this.va;this.b.y+=this.vb}this.edges()};this.edges=function(){if(this.flag=="v"){if(this.a.x<0||this.a.x>cw){this.va*=-1}if(this.b.x<0||this.b.x>cw){this.vb*=-1}}else if(t=="h"){if(this.a.y<0||this.a.y>ch){this.va*=-1}if(this.b.y<0||this.b.y>ch){this.vb*=-1}}}}for(var i=0;i<linesNum;i++){var flag=i%2==0?"h":"v";var l=new Line(flag);linesRy.push(l)}function Draw(){requestId=window.requestAnimationFrame(Draw);ctx.clearRect(0,0,cw,ch);for(var t=0;t<linesRy.length;t++){var i=linesRy[t];i.draw();i.update()}for(var t=0;t<linesRy.length;t++){var i=linesRy[t];for(var n=t+1;n<linesRy.length;n++){var a=linesRy[n];Intersect2lines(i,a)}}}function Init(){linesRy.length=0;for(var t=0;t<linesNum;t++){var i=t%2==0?"h":"v";var n=new Line(i);linesRy.push(n)}if(requestId){window.cancelAnimationFrame(requestId);requestId=null}cw=canvas.width=window.innerWidth,cx=cw/2;ch=canvas.height=window.innerHeight,cy=ch/2;Draw()}setTimeout(function(){Init();addEventListener("resize",Init,false)},15);function Intersect2lines(t,i){var n=t.a,a=t.b,e=i.a,s=i.b;var r=(s.y-e.y)*(a.x-n.x)-(s.x-e.x)*(a.y-n.y);var h=((s.x-e.x)*(n.y-e.y)-(s.y-e.y)*(n.x-e.x))/r;var c=((a.x-n.x)*(n.y-e.y)-(a.y-n.y)*(n.x-e.x))/r;var v=n.x+h*(a.x-n.x);var l=n.y+h*(a.y-n.y);if(h>0&&c>0){markPoint({x:v,y:l})}}function markPoint(t){ctx.beginPath();ctx.arc(t.x,t.y,2,0,2*Math.PI);ctx.fillStyle="#8e9eab";ctx.fill()}function randomIntFromInterval(t,i){return~~(Math.random()*(i-t+1)+t)}
//rebuild by neat 