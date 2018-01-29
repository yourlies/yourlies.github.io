!function(){var t=20,i=document.getElementById("canv");i.width=window.innerWidth,i.height=window.innerHeight;var e=i.getContext("2d");e.fillStyle="rgba(255, 255, 255, 0)";var n={entity:[]};n.width=i.width,n.height=i.height;var a={simpleHarmonic:function(t,i){return Math.sin(1*t)*i}},h=function(){this.x=0,this.y=0,this.size=0,this.speed=0};h.prototype.drawSnow=function(){this.graph=e.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size),this.graph.addColorStop(0,"hsla(255, 255%, 255%, 1)"),this.graph.addColorStop(1,"hsla(255, 255%, 255%, 0)"),e.moveTo(this.x,this.y),e.fillStyle=this.graph,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI,!0),e.fill()},h.prototype.drawRain=function(){e.beginPath(),e.lineWidth=1,e.strokeStyle="#ddd",e.moveTo(this.x,this.y),e.lineTo(this.x+70,this.y+140),e.stroke()};var r={createFlake:function(){var t=new h;t.y=Math.random()*(n.height+50),t.x=Math.random()*n.width,t.time=Math.random()*(2*Math.PI),t.size=100/(10+100*Math.random())*1.3,t.speed=.15*Math.pow(.8*t.size,2)*1,t.speed=t.speed<1?1:t.speed,n.entity.push(t)},createRain:function(){var t=new h;t.y=Math.random()*(n.height+50),t.x=Math.random()*n.width,t.time=Math.random()*(2*Math.PI),t.size=100/(10+100*Math.random())*1.3,t.speed=1,n.entity.push(t)},renderSnow:function(i){i.time+=.05,i.time=i.time>=2*Math.PI?0:i.time,i.x+=a.simpleHarmonic(i.time,.3*i.size),i.y+=i.speed,i.y>n.height+50&&(i.y=-10-Math.random()*t),i.x>n.width+t&&(i.x=-t),i.x<-t&&(i.x=n.width+t),i.drawSnow()},renderRain:function(i){i.time+=.05,i.x+=7*(i.speed+1*i.time),i.y+=14*(i.speed+1*i.time),i.y>n.height+50&&(i.time=0,i.y=-10-Math.random()*t,i.x=Math.random()*n.width),i.drawRain()}},o={snowy:function(){var t,i=0,a=function(){i>30&&(i=0,r.createFlake()),i++,t=requestAnimationFrame(a),n.entity.length>=5&&cancelAnimationFrame(t)};a();var h=function(){window.requestAnimationFrame(h),e.clearRect(0,0,n.width,n.height),e.fillRect(0,0,n.width,n.height),e.fill();for(var t=0;t<n.entity.length;t++){var i=n.entity[t];r.renderSnow(i)}};h()},rainy:function(){var t,i=0,a=function(){i>30&&(i=0,r.createRain()),i++,t=requestAnimationFrame(a),n.entity.length>=5&&cancelAnimationFrame(t)};a();var h=function(){window.requestAnimationFrame(h),e.clearRect(0,0,n.width,n.height),e.fillRect(0,0,n.width,n.height),e.fill();for(var t=0;t<n.entity.length;t++){var i=n.entity[t];r.renderRain(i)}};h()}};o.rainy()}();