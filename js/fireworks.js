// build time:Mon Dec 10 2018 15:54:11 GMT+0800 (GMT+08:00)
var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d");var numberOfParticules=30;var pointerX=0;var pointerY=0;var tap="mousedown";var colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"];var setCanvasSize=debounce(function(){canvasEl.width=window.innerWidth*2;canvasEl.height=window.innerHeight*2;canvasEl.style.width=window.innerWidth+"px";canvasEl.style.height=window.innerHeight+"px";canvasEl.getContext("2d").scale(2,2)},500);var render=anime({duration:Infinity,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){if(e.target.id!=="sidebar"&&e.target.id!=="toggle-sidebar"&&e.target.nodeName!=="A"&&e.target.nodeName!=="IMG"){render.play();updateCoords(e);animateParticules(pointerX,pointerY)}},false);setCanvasSize();window.addEventListener("resize",setCanvasSize,false)}function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left;pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var a=anime.random(0,360)*Math.PI/180;var t=anime.random(50,180);var n=[-1,1][anime.random(0,1)]*t;return{x:e.x+n*Math.cos(a),y:e.y+n*Math.sin(a)}}function createParticule(e,a){var t={};t.x=e;t.y=a;t.color=colors[anime.random(0,colors.length-1)];t.radius=anime.random(16,32);t.endPos=setParticuleDirection(t);t.draw=function(){ctx.beginPath();ctx.arc(t.x,t.y,t.radius,0,2*Math.PI,true);ctx.fillStyle=t.color;ctx.fill()};return t}function createCircle(e,a){var t={};t.x=e;t.y=a;t.color="#F00";t.radius=.1;t.alpha=.5;t.lineWidth=6;t.draw=function(){ctx.globalAlpha=t.alpha;ctx.beginPath();ctx.arc(t.x,t.y,t.radius,0,2*Math.PI,true);ctx.lineWidth=t.lineWidth;ctx.strokeStyle=t.color;ctx.stroke();ctx.globalAlpha=1};return t}function renderParticule(e){for(var a=0;a<e.animatables.length;a++){e.animatables[a].target.draw()}}function animateParticules(e,a){var t=createCircle(e,a);var n=[];for(var r=0;r<numberOfParticules;r++){n.push(createParticule(e,a))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:t,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}
//rebuild by neat 