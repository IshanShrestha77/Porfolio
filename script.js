const PROJECTS =[
    {
        code: "p.01",
        name: "RAKSHAK 2.0",
        image: "image/rakshak.jpg",
        tagline: "Smart Helmet — Rider Safety System",
        status: "PROTOTYPE — ACTIVE",
        desc: "An intelligent helmet system built to detect crashes, monitor rider vitals, and alert emergency contacts automatically to near by hospitals and police stationsbecause safety gear should think, not just protect.",
        telemetry: ["SYSTEM STATUS: ONLINE", "SENSORS: ACTIVE", "CONTROL SYSTEM: READY"],
        overview: "Rakshak 2.0 is a smart helmet built to reduce response time in two-wheeler accidents by combining impact detection, alerting, and rider-monitoring in one wearable unit.",
        problem: "Delayed emergency response after two-wheeler crashes is a major factor in accident fatalities, especially in areas without immediate access to help.",
        idea: "Build a helmet that can sense a crash the moment it happens and automatically notify emergency contacts with location data — no phone, no manual action required.",
        build: "REPLACE: describe your build process — prototyping the shell, wiring the sensor array, writing the firmware, and testing impact-detection thresholds in the field.",
        tech: ["Arduino / ESP32", "Accelerometer & Gyroscope", "GPS Module", "GSM Module", "C/C++ Firmware"],
        hardware: ["Impact sensor array", "Microcontroller unit", "GPS + GSM module", "Rechargeable battery pack", "Alcohol/gas sensor"],
        software: ["Embedded C firmware", "Threshold-based crash detection logic", "SMS/alert dispatch system"],
        result: "REPLACE: summarize testing results, demo outcomes, or competition/exhibition feedback.",
        role: "Sole designer and builder — concept, circuit design, firmware, and enclosure."
  },
  {
    code: "p.02",
    name: "SKYRO",
    image: "image/skyro.jpg",
    tagline: "Electric Scooter — Personal Mobility",
    status: "PROTOTYPE — IN DEVELOPMENT",
    desc: "A self-built electric scooter platform designed from the ground up — motor, battery, and controller integrated into a lightweight personal mobility system.",
    telemetry: ["MOTOR: CALIBRATING", "BATTERY: MONITORING", "CONTROLLER: READY"],
    overview: "Skyro is a ground-up electric scooter build exploring motor control, battery management, and ride dynamics for compact urban mobility.",
    problem: "REPLACE: what gap or limitation in existing mobility options inspired this build?",
    idea: "Design and build a lightweight electric scooter from raw components rather than a kit — full control over motor, battery, and controller behavior.",
    build: "REPLACE: describe chassis design, motor mounting, battery pack assembly, and controller tuning.",
    tech: ["BLDC Motor Control", "Battery Management (BMS)", "Embedded Controller", "CAD Design"],
    hardware: ["Hub / BLDC motor", "Li-ion battery pack", "Motor controller", "Throttle & braking system"],
    software: ["Motor control firmware", "Battery monitoring logic"],
    result: "REPLACE: summarize test rides, range, top speed, or lessons learned.",
    role: "Sole designer and builder — mechanical design, electronics integration, and testing."
  }
];
const INTERESTS = [
    {icon:"🤖", title:"ROBOTICS", desc:"Building robots,automation system, competition bots, and experimental machines."},
    { icon:"💻", title:"CODING", desc:"Web development, programming, embedded systems, IoT, and software experimentation." },
  { icon:"✈️", title:"AVIATION", desc:"Aircraft, flying, aviation technology, and my long-term passion for aviation." },
  { icon:"🔬", title:"INNOVATION", desc:"Science, engineering, experimentation, and building solutions to real-world problems." }
];

const TECH = [
  {n:"Arduino",c:"Hardware"}, {n:"ESP32",c:"Hardware"}, {n:"C / C++",c:"Language"},
  {n:"Python",c:"Language"}, {n:"HTML",c:"Web"}, {n:"CSS",c:"Web"}, {n:"JavaScript",c:"Web"},
  {n:"IoT",c:"Systems"}, {n:"Electronics",c:"Hardware"}, {n:"Robotics",c:"Systems"},
  {n:"CAD",c:"Design"}, {n:"Embedded Systems",c:"Hardware"}
];

const ACHIEVEMENTS = [
  { year:"2026 — YEAR", title:"Robo Sumo — Regional Round", cat:"Competition", desc:" result, placement, and what the bot was built to do." },
  { year:"2025 — YEAR", title:"Robo Soccer Championship", cat:"Competition", desc:"team, role, and outcome." },
  { year:"2025 — YEAR", title:"Robo Race Circuit", cat:"Competition", desc:"REPLACE: your build and race result." },
  { year:"2024 — YEAR", title:"Science & Engineering Exhibition", cat:"Exhibition", desc:"project shown and recognition received." },
  { year:"2024 — YEAR", title:"Embedded Systems Workshop", cat:"Workshop", desc:"what you learned and built." },
  { year:"2023 — YEAR", title:"Certification / Award", cat:"Certification", desc:" certifying body and what it covers." }

]

const JOURNEY = [
     { label:"LEARN", desc:"Absorbing electronics, code, and the fundamentals of how machines think." },
  { label:"BUILD", desc:"Turning fundamentals into working circuits, prototypes, and first machines." },
  { label:"EXPERIMENT", desc:"Breaking things on purpose to understand where the limits actually are." },
  { label:"COMPETE", desc:"Testing my builds against the clock, the arena, and other engineers." },
  { label:"INNOVATE", desc:"Solving real problems instead of just replicating known solutions." },
  { label:"ENGINEER", desc:"Designing systems with intent — reliability, safety, and scale in mind." },
  { label:"FLY", desc:"Carrying everything I've built toward a future in aviation engineering." }

]

const GOALS = [
    "Become a skilled engineer",
  "Build advanced robotics systems",
  "Continue innovation",
  "Explore aviation technology",
  "Combine engineering and aviation",
  "Work toward my aviation ambitions"
]
document.getElementById('year').textContent = new Date().getFullYear();
const isTouch = matchMedia('(pointer:coarse)').matches;
if(isTouch){ document.body.classList.add('touch'); }
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.registerPlugin(ScrollTrigger);


if(!isTouch){
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`; });
  (function loop(){ rx += (mx-rx)*0.16; ry += (my-ry)*0.16; ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  document.querySelectorAll('a,button,.magnetic').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
  });
}

let soundon = false, actx = null;
function beep(freq,dur,type='sine',vol=0.05){
  if(!soundon) return;
  if(!actx) actx = new (window.AudioContext||window.webkitAudioContext)();
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.value = vol;
  o.connect(g); g.connect(actx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
  o.stop(actx.currentTime + dur);
}
const soundToggle = document.getElementById('sound-toggle');
soundToggle.addEventListener('click',()=>{
  soundon = !soundon;
  soundToggle.dataset.on = soundOn;
  soundToggle.textContent = soundOn ? '🔊' : '🔇';
  if(soundOn) beep(660,0.15,'sine',0.06);
});
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter', ()=>beep(1200,0.04,'sine',0.02));
  el.addEventListener('click', ()=>beep(500,0.08,'triangle',0.04));
});


const loadTl = gsap.timeline();
const lines = gsap.utils.toArray('.load-line');
loadTl.to('.load-title',{opacity:1,duration:.3});
lines.forEach((line,i)=>{
  loadTl.to(line,{opacity:1,duration:.25}, i*0.35+0.3)
        .to('#load-bar-fill',{width:`${(i+1)/lines.length*100}%`,duration:.35},'<')
        .call(()=>line.classList.add('done'));
});
loadTl.to('.load-lines,.load-title,.load-bar-track',{opacity:0,duration:.4,delay:.3})
      .to('#load-welcome',{opacity:1,duration:.5})
      .to('#load-welcome',{opacity:0,duration:.5,delay:.6})
      .to('#loading-screen',{opacity:0,duration:.6,onComplete:()=>{
          document.getElementById('loading-screen').style.display='none';
          playLandingSequence();
        }});
/* ---------- CINEMATIC AIRCRAFT LANDING ---------- */
function playLandingSequence(){
  // build cloud puffs
  buildClouds('cloud-layer-1', 6, 90, 160);
  buildClouds('cloud-layer-2', 8, 50, 110);

  if(reduceMotion){
    gsap.set(['#aircraft-wrap','#runway','#hero-content','#scroll-cue'],{opacity:1});
    gsap.set('#aircraft-wrap',{scale:0.5,top:'50%'});
    revealHeroText();
    return;
  }

  const tl = gsap.timeline({defaults:{ease:'power2.out'}});

  // aircraft appears, distant, lights on
  tl.to('#aircraft-wrap',{opacity:1,scale:.14,duration:.1})
    .to(['.landing-light'],{opacity:1,duration:1.2},'<')
    // long final approach — aircraft grows and descends toward the runway
    .to('#aircraft-wrap',{scale:0.34, top:'30%', left:'46%', duration:2.6, ease:'power1.inOut'})
    .to('#runway',{opacity:1,duration:1.4},'-=1.8')
    .to('#aircraft-wrap',{scale:0.62, top:'46%', left:'50%', duration:2.2, ease:'power2.inOut'},'-=0.6')
    // gear drops for landing
    .to('#gear-nose,#gear-main',{opacity:1,duration:.4},'-=1.4')
    .to('#aircraft-wrap',{scale:0.9, top:'58%', duration:1.4, ease:'power2.in'})
    // flare just before touchdown
    .to('#aircraft-wrap',{scale:1.05, top:'63%', duration:.5, ease:'power1.out'})
    .to('#glow-l,#glow-r',{opacity:.4,duration:.4},'<')
    // touchdown bounce + wheel smoke + runway rush
    .to('#aircraft-wrap',{y:'+=4',duration:.08,repeat:5,yoyo:true},'<')
    .to('#touch-smoke',{opacity:.9,duration:.15},'<')
    .to('#touch-smoke',{opacity:0,duration:1.1},'+=.1')
    .to('#runway',{backgroundPositionY:'+=600',duration:1.6,ease:'power1.in'},'-=1.2')
    // aircraft rolls out, off-screen, fog closes in
    .to('#aircraft-wrap',{scale:1.5, top:'80%', opacity:0, duration:1.4, ease:'power2.in'},'-=0.4')
    .to('#fog-veil',{opacity:1,duration:1},'-=1.2')
    .call(revealHeroText,null,'-=0.3');
}

function buildClouds(id,count,minS,maxS){
  const layer = document.getElementById(id);
  for(let i=0;i<count;i++){
    const c = document.createElement('div');
    c.className='cloud';
    const s = minS + Math.random()*(maxS-minS);
    c.style.width=s+'px'; c.style.height=s*0.5+'px';
    c.style.top = (10+Math.random()*70)+'%';
    c.style.left = (Math.random()*100)+'%';
    layer.appendChild(c);
    gsap.to(c,{ x: (id.includes('1')?'+=220':'-=180'), duration: 14+Math.random()*10, repeat:-1, yoyo:true, ease:'sine.inOut'});
  }
}

function revealHeroText(){
  // split hero name into characters
  const nameEl = document.getElementById('hero-name');
  const text = nameEl.textContent;
  nameEl.innerHTML = [...text].map(ch=>`<span class="char" style="opacity:0;transform:translateY(30px)">${ch===' '?'&nbsp;':ch}</span>`).join('');
  gsap.to('#hero-content',{opacity:1,duration:.4});
  gsap.to('#hero-content .eyebrow',{opacity:1,duration:.6});
  gsap.to(nameEl.querySelectorAll('.char'),{opacity:1,y:0,duration:.7,stagger:0.035,ease:'power3.out'});
  gsap.to('.hero-role',{opacity:1,duration:.8,delay:.5, from:{opacity:0}});
  gsap.fromTo('.hero-sentence',{opacity:0,y:14},{opacity:1,y:0,duration:.8,delay:.9});
  gsap.fromTo('.hero-ctas',{opacity:0,y:14},{opacity:1,y:0,duration:.8,delay:1.15});
  gsap.to('#scroll-cue',{opacity:1,duration:.8,delay:1.4});
}


const nav = document.getElementById('site-nav');
ScrollTrigger.create({ start:80, end:99999, onUpdate:self=>{ nav.classList.toggle('scrolled', self.scroll()>80); } });

const navLinks = gsap.utils.toArray('.nav-links a');
document.querySelectorAll('main section, #hero').forEach(sec=>{
  ScrollTrigger.create({
    trigger:sec, start:'top center', end:'bottom center',
    onToggle: self=>{ if(self.isActive){ navLinks.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+sec.id)); } }
  });
});


gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.to(el,{opacity:1,y:0,duration:1,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 85%'}});
});


document.querySelectorAll('.stat-num').forEach(el=>{
  const target = parseInt(el.dataset.count,10);
  ScrollTrigger.create({
    trigger:el, start:'top 85%', once:true,
    onEnter:()=>{
      const obj={v:0};
      gsap.to(obj,{v:target,duration:1.6,ease:'power2.out',onUpdate:()=>{ el.innerHTML = Math.floor(obj.v)+'<sup>+</sup>'; }});
    }
  });
});


(function(){
  const orb = document.querySelector('.profile-orb');
  for(let i=0;i<14;i++){
    const p=document.createElement('div'); p.className='orb-particle';
    p.style.left=Math.random()*100+'%'; p.style.top=Math.random()*100+'%';
    orb.appendChild(p);
    gsap.to(p,{y:'-=40',opacity:0,duration:3+Math.random()*3,repeat:-1,delay:Math.random()*4,ease:'power1.out',
      onRepeat:()=>{ gsap.set(p,{opacity:.6,top:'100%'}); }});
  }
})();


const interestGrid = document.getElementById('interest-grid');
INTERESTS.forEach((it,i)=>{
  const card = document.createElement('div');
  card.className='interest-card reveal';
  card.innerHTML = `<div class="icard-bg"></div><div class="icard-index mono">0${i+1}</div>
    <div class="icon">${it.icon}</div>
    <div><h3>${it.title}</h3><p>${it.desc}</p></div>`;
  interestGrid.appendChild(card);
  if(!isTouch){
    card.addEventListener('mousemove', e=>{
      const r=card.getBoundingClientRect();
      const px=((e.clientX-r.left)/r.width)*100, py=((e.clientY-r.top)/r.height)*100;
      card.style.setProperty('--mx',px+'%'); card.style.setProperty('--my',py+'%');
      const rx = ((e.clientY-r.top)/r.height - .5) * -10;
      const ry = ((e.clientX-r.left)/r.width - .5) * 10;
      gsap.to(card,{rotateX:rx,rotateY:ry,duration:.4,ease:'power2.out',transformPerspective:700});
    });
    card.addEventListener('mouseleave',()=>gsap.to(card,{rotateX:0,rotateY:0,duration:.6,ease:'power3.out'}));
  }
});




const nodeLayer = document.getElementById('tech-node-layer');
nodeLayer.style.position='absolute'; nodeLayer.style.inset='0';
const nodeEls = [];
TECH.forEach((t,i)=>{
  const el = document.createElement('div');
  el.className='tech-node';
  el.innerHTML = `${t.n}<span class="cat mono">${t.c}</span>`;
  nodeLayer.appendChild(el);
  nodeEls.push({el, x:Math.random(), y:Math.random(), vx:(Math.random()-.5)*0.0006, vy:(Math.random()-.5)*0.0006});
});
const tCanvas = document.getElementById('toolbox-canvas');
const tCtx = tCanvas.getContext('2d');
function sizeToolbox(){
  const wrap = document.getElementById('toolbox-canvas-wrap');
  tCanvas.width = wrap.clientWidth; tCanvas.height = wrap.clientHeight;
}
sizeToolbox();
window.addEventListener('resize', sizeToolbox);
function animateToolbox(){
  const w = tCanvas.width, h = tCanvas.height;
  tCtx.clearRect(0,0,w,h);
  nodeEls.forEach(n=>{
    n.x += n.vx; n.y += n.vy;
    if(n.x<0.04||n.x>0.96) n.vx*=-1;
    if(n.y<0.08||n.y>0.92) n.vy*=-1;
    n.el.style.left = (n.x*100)+'%';
    n.el.style.top = (n.y*100)+'%';
  });
  tCtx.lineWidth = 1;
  for(let i=0;i<nodeEls.length;i++){
    for(let j=i+1;j<nodeEls.length;j++){
      const a=nodeEls[i], b=nodeEls[j];
      const dx=(a.x-b.x)*w, dy=(a.y-b.y)*h;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if(dist < w*0.28){
        tCtx.strokeStyle = `rgba(79,168,255,${0.14*(1-dist/(w*0.28))})`;
        tCtx.beginPath(); tCtx.moveTo(a.x*w,a.y*h); tCtx.lineTo(b.x*w,b.y*h); tCtx.stroke();
      }
    }
  }
  requestAnimationFrame(animateToolbox);
}
animateToolbox();

const timelineEl = document.getElementById('achievement-timeline');
ACHIEVEMENTS.forEach(a=>{
  const item = document.createElement('div');
  item.className='tl-item';
  item.innerHTML = `<div class="tl-dot"></div>
    <div class="tl-year mono">${a.year}</div>
    <div class="tl-title">${a.title}</div>
    <div class="tl-cat mono">${a.cat}</div>
    <div class="tl-desc">${a.desc}</div>`;
  timelineEl.appendChild(item);
});
gsap.utils.toArray('.tl-item').forEach(item=>{
  gsap.to(item,{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:item,start:'top 88%'}});
});


ScrollTrigger.create({
  trigger:'.arena', start:'top 70%', end:'bottom 40%', scrub:1,
  onUpdate: self=>{
    document.querySelector('.arena-track').style.setProperty('--prog', (self.progress*100)+'%');
    document.getElementById('arena-bot').style.left = (self.progress*100)+'%';
  }
});


const journeyRail = document.getElementById('journey-rail');
JOURNEY.forEach((j,i)=>{
  const step = document.createElement('div');
  step.className='journey-step';
  step.innerHTML = `<div class="journey-num mono">0${i+1}</div>
    <div class="journey-label">${j.label}</div>
    <div class="journey-desc">${j.desc}</div>`;
  journeyRail.appendChild(step);
});
gsap.utils.toArray('.journey-step').forEach(step=>{
  gsap.to(step,{opacity:1,x:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:step,start:'top 88%'}});
});


const goalList = document.getElementById('goal-list');
GOALS.forEach((g,i)=>{
  const item = document.createElement('div');
  item.className='goal-item';
  item.innerHTML = `<span class="gnum mono">0${i+1}</span> ${g}`;
  goalList.appendChild(item);
});


ScrollTrigger.create({
  trigger:'#goals-pin', start:'top top', end:'+=220%', pin:true, scrub:1,
  onUpdate: self=>{
    const p = self.progress;
    gsap.set('#atmo-earth',{opacity: 1 - Math.min(p*4,1)});
    gsap.set('#atmo-clouds',{opacity: p<0.25?0: Math.min((p-0.25)*4,1) - Math.max((p-0.55)*4,0)});
    gsap.set('#atmo-sky',{opacity: p<0.5?0: Math.min((p-0.5)*4,1) - Math.max((p-0.8)*4,0)});
    gsap.set('#atmo-strato',{opacity: p<0.75?0: Math.min((p-0.75)*4,1)});
    gsap.set('#goal-plane',{bottom: (8 + p*72)+'%', rotate: -38 + p*10});
    const activeIdx = Math.min(GOALS.length-1, Math.floor(p*GOALS.length));
    document.querySelectorAll('.goal-item').forEach((el,i)=>el.classList.toggle('active', i<=activeIdx));
  }
});

const cockpitForm = document.getElementById('cockpit-form');
const formStatus = document.getElementById('form-status');
const submitBtn = cockpitForm.querySelector('.cockpit-submit');

cockpitForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const endpoint = cockpitForm.getAttribute('action') || '';

  if(!endpoint || endpoint.includes('YOUR_FORM_ID')){
    formStatus.className = 'form-status err';
    formStatus.textContent = 'FORM NOT CONFIGURED — set your Formspree endpoint in index.html (see comment above the form).';
    return;
  }

  const name = document.getElementById('cf-name').value;
  const email = document.getElementById('cf-email').value;
  const msg = document.getElementById('cf-msg').value;

  formStatus.className = 'form-status';
  formStatus.textContent = 'TRANSMITTING...';
  submitBtn.disabled = true;
  beep(400,0.15,'sawtooth',0.04);

  try{
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(cockpitForm)
    });

    if(res.ok){
      formStatus.className = 'form-status ok';
      formStatus.textContent = 'TRANSMISSION RECEIVED — I\u2019ll get back to you soon.';
      cockpitForm.reset();
      beep(900,0.15,'sine',0.05);
    } else {
      const data = await res.json().catch(()=>null);
      const errMsg = data && data.errors ? data.errors.map(x=>x.message).join(', ') : 'Please try again.';
      formStatus.className = 'form-status err';
      formStatus.textContent = 'TRANSMISSION FAILED — ' + errMsg;
    }
  } catch(err){
    formStatus.className = 'form-status err';
    formStatus.textContent = 'TRANSMISSION FAILED — check your connection and try again.';
  } finally {
    submitBtn.disabled = false;
  }
});

/* refresh ScrollTrigger after fonts/layout settle */
window.addEventListener('load', ()=> setTimeout(()=>ScrollTrigger.refresh(), 300));