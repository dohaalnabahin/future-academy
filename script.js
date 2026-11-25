var R=document.documentElement,E=[].slice.call(document.querySelectorAll('[data-en]')),en=0,S=function(k,v){try{localStorage.setItem(k,v)}catch(e){}},G=function(k){try{return localStorage.getItem(k)}catch(e){return null}};
E.forEach(function(e){e._a=e.innerHTML});
function L(x){en=x;R.lang=x?'en':'ar';R.dir=x?'ltr':'rtl';E.forEach(function(e){e.innerHTML=x?e.dataset.en:e._a});document.getElementById('lg').textContent=x?'عربي':'EN';S('l',x)}
document.getElementById('lg').onclick=function(){L(en?0:1)};if(G('l')==='1')L(1);
var th=document.getElementById('th');th.onclick=function(){var d=R.dataset.theme?R.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;R.dataset.theme=d?'light':'dark';S('t',R.dataset.theme)};if(G('t'))R.dataset.theme=G('t');
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e,i){e.style.transitionDelay=(i%3)*.1+'s';io.observe(e)});
var co=new IntersectionObserver(function(a){a.forEach(function(x){if(!x.isIntersecting)return;var e=x.target,n=+e.dataset.n,t=0;co.unobserve(e);(function f(){t+=.03;e.textContent=Math.round(n*Math.min(t,1));if(t<1)requestAnimationFrame(f)})()})});
document.querySelectorAll('[data-n]').forEach(function(e){co.observe(e)});
var P=[].slice.call(document.querySelectorAll('[data-p]'));
addEventListener('mousemove',function(e){var x=e.clientX-innerWidth/2,y=e.clientY-innerHeight/2;P.forEach(function(p){p.style.translate=x*p.dataset.p+'px '+y*p.dataset.p+'px'})});
var lb=document.getElementById('lb');document.querySelectorAll('.gl img,.ph img').forEach(function(i){i.parentNode.style.cursor='zoom-in';i.onclick=function(){lb.firstChild.src=i.src;lb.classList.add('on')}});lb.onclick=function(){lb.classList.remove('on')};