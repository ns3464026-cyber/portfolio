(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
var A=[34,211,238],B=[139,92,246];
$$('[data-split]').forEach(function(h){var n=0;$$('.w',h).forEach(function(w){var g=w.classList.contains('grad'),t=w.textContent;w.textContent='';
t.split('').forEach(function(c,j){var s=document.createElement('span'),k=t.length>1?j/(t.length-1):0;s.className='ch';s.textContent=c;s.style.setProperty('--i',n++);
if(g)s.style.color='rgb('+A.map(function(a,i){return Math.round(a+(B[i]-a)*k)}).join(',')+')';w.appendChild(s)})})});
window.addEventListener('load',function(){requestAnimationFrame(function(){document.body.classList.add('ready')})});
setTimeout(function(){document.body.classList.add('ready')},1200);
var rot=$('#rot');
if(rot&&!rm){var W=['Java Backend Developer','Spring Boot Developer','REST API Builder','Microservices Learner','Spring AI Explorer'],wi=0,ci=W[0].length,del=true;
(function tick(){var w=W[wi];rot.textContent=w.slice(0,ci);var d=del?38:75;
if(del){ci--;if(ci<0){del=false;wi=(wi+1)%W.length;ci=0;d=250}}else{ci++;if(ci>W[wi].length){del=true;ci=W[wi].length;d=1700}}setTimeout(tick,d)})()}
var t=$('#term');
if(t){var src='<span class="p">$</span> curl -s localhost:8080/api/developer/nikhil\n{\n  <span class="k">"name"</span>: <span class="s">"Nikhil Sharma"</span>,\n  <span class="k">"role"</span>: <span class="s">"Java Backend Developer"</span>,\n  <span class="k">"stack"</span>: [<span class="s">"Java"</span>, <span class="s">"Spring Boot"</span>, <span class="s">"JPA"</span>, <span class="s">"PostgreSQL"</span>],\n  <span class="k">"learning"</span>: <span class="s">"Spring AI"</span>,\n  <span class="k">"status"</span>: <span class="s">"Open to internships"</span>\n}';
var out=t.querySelector('pre'),cur='<span class="cur"></span>';
if(rm){out.innerHTML=src}else{var tk=src.match(/<[^>]+>|[\s\S]/g),i=0,h='',started=false;
function go(){if(i>=tk.length){out.innerHTML=h+cur;return}var tok=tk[i++];h+=tok;
if(tok.length>1){return go()}out.innerHTML=h+cur;setTimeout(go,tok==='\n'?(i<50?500:90):(i<50?32:10))}
var io0=new IntersectionObserver(function(e){if(e[0].isIntersecting&&!started){started=true;setTimeout(go,1700)}});io0.observe(t)}}
var mq=$('.mq-track');if(mq)mq.innerHTML+=mq.innerHTML;
var cv=$('#bg');
if(cv&&!rm){var x=cv.getContext('2d'),w,hh,P=[],m={x:-999,y:-999},dpr=Math.min(devicePixelRatio||1,2),run=true;
function size(){w=cv.width=innerWidth*dpr;hh=cv.height=innerHeight*dpr;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
var n=Math.round(Math.min(80,innerWidth*innerHeight/17000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*w,y:Math.random()*hh,vx:(Math.random()-.5)*.4*dpr,vy:(Math.random()-.5)*.4*dpr})}
size();addEventListener('resize',size);addEventListener('mousemove',function(e){m.x=e.clientX*dpr;m.y=e.clientY*dpr});
document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run)draw()});
function draw(){if(!run)return;x.clearRect(0,0,w,hh);var L=130*dpr,M=170*dpr;
for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>hh)p.vy*=-1;
var dx=m.x-p.x,dy=m.y-p.y,dm=Math.sqrt(dx*dx+dy*dy);if(dm<M){p.x+=dx*.004;p.y+=dy*.004;x.strokeStyle='rgba(34,211,238,'+(1-dm/M)*.55+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}
x.fillStyle='rgba(139,152,255,.7)';x.beginPath();x.arc(p.x,p.y,1.6*dpr,0,6.3);x.fill();
for(var j=i+1;j<P.length;j++){var q=P[j],ex=p.x-q.x,ey=p.y-q.y,d=Math.sqrt(ex*ex+ey*ey);if(d<L){x.strokeStyle='rgba(139,92,246,'+(1-d/L)*.35+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}}
requestAnimationFrame(draw)}draw()}
var gl=$('.glow');
if(gl&&fine&&!rm){var gx=innerWidth/2,gy=200,tx=gx,ty=gy;addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY});(function f(){gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;gl.style.transform='translate('+gx+'px,'+gy+'px)';requestAnimationFrame(f)})()}
document.addEventListener('mousemove',function(e){var c=e.target.closest&&e.target.closest('.card,.stat');if(c){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
if(fine&&!rm)$$('.btn').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
var pr=$('.prog');function sc(){var h=document.documentElement;pr.style.transform='scaleX('+(h.scrollTop/(h.scrollHeight-h.clientHeight||1))+')'}addEventListener('scroll',sc,{passive:true});sc();
$$('.rv').forEach(function(s){$$(':scope>*',s).forEach(function(c,i){if(!c.classList.contains('grid')&&!c.classList.contains('stats'))c.style.setProperty('--d',i*.09+'s')});
$$(':scope>.grid>*,:scope>.stats>*',s).forEach(function(c,i){c.style.setProperty('--d',.2+i*.1+'s')})});
function count(el){var to=parseFloat(el.dataset.to),dec=+el.dataset.dec||0,suf=el.dataset.suf||'',t0=performance.now();
(function f(n){var k=Math.min((n-t0)/1500,1),e=1-Math.pow(1-k,3);el.textContent=(to*e).toFixed(dec)+suf;if(k<1)requestAnimationFrame(f)})(t0)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var s=e.target;s.classList.add('in');$$('[data-to]',s).forEach(function(c){rm?c.textContent=(+c.dataset.to).toFixed(+c.dataset.dec||0)+(c.dataset.suf||''):count(c)});setTimeout(function(){s.classList.add('done')},2200);io.unobserve(s)}})},{threshold:.12});
$$('.rv').forEach(function(s){io.observe(s)});
var links=$$('nav a[href^="#"]');if(links.length){var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-40% 0px -55% 0px'});$$('section[id]').forEach(function(s){io2.observe(s)})}
var f=$('#filters');
if(f)f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$$('button',f).forEach(function(x){x.classList.remove('on')});b.classList.add('on');
$$('[data-c]').forEach(function(c){var ok=b.dataset.f==='all'||c.dataset.c.split(' ').indexOf(b.dataset.f)>-1;c.style.display=ok?'':'none';if(ok){c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop')}})});
})();
