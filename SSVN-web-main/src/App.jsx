import React, {useEffect, useState} from 'react';
import './styles.css';

const IMG = {
  hero: '/images/council.png',
  award: '/images/award.jpg',
  leaders: '/images/leaders.png',
  council: '/images/council.png',
  music: '/images/music.png',
  graduation: '/images/graduation.png',
  sports: '/images/sports.png',
  science: '/images/science.png',
  card1: '/images/card1.png',
  card2: '/images/card2.png',
  card3: '/images/card3.png',
  card4: '/images/card4.png'
};

const gallery=[
  {title:'Achievements & Recognition',images:[IMG.award,'/images/achivements.png']},
  {title:'Campus Life',images:[IMG.leaders,'/images/team.png']},
  {title:'Graduation Day',images:[IMG.graduation,IMG.hero]},
  {title:'Sports & Teamwork',images:[IMG.sports,'/images/sport2.png','/images/sport3.png']},
  {title:'Science & Innovation',images:[IMG.science,'/images/innovation.png']},
  {title:'Arts & Music',images:[IMG.music]}
];

function App(){
 const [menu,setMenu]=useState(false); const [light,setLight]=useState(null); const [gallerySlides,setGallerySlides]=useState(()=>gallery.map(()=>0)); const [scrolled,setScrolled]=useState(false); const [whatsAppBottom,setWhatsAppBottom]=useState(24);
 useEffect(()=>{const f=()=>setScrolled(scrollY>30);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
 useEffect(()=>{const placeWhatsApp=()=>{const footer=document.getElementById('site-footer');if(!footer){setWhatsAppBottom(24);return;}const footerTop=footer.getBoundingClientRect().top;setWhatsAppBottom(Math.max(24,innerHeight-footerTop+20));};placeWhatsApp();addEventListener('scroll',placeWhatsApp,{passive:true});addEventListener('resize',placeWhatsApp);return()=>{removeEventListener('scroll',placeWhatsApp);removeEventListener('resize',placeWhatsApp);};},[]);
 useEffect(()=>{const timer=setInterval(()=>setGallerySlides(current=>current.map((slide,index)=>(slide+1)%gallery[index].images.length)),4000);return()=>clearInterval(timer)},[]);
 useEffect(()=>{if(!light)return;const onKeyDown=event=>{if(event.key==='Escape')setLight(null);if(event.key==='ArrowLeft')stepLight(-1);if(event.key==='ArrowRight')stepLight(1)};addEventListener('keydown',onKeyDown);return()=>removeEventListener('keydown',onKeyDown)},[light]);
 const go=(id)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
 const stepLight=(direction)=>setLight(current=>{if(!current)return current;const images=gallery[current.categoryIndex].images;return {...current,slideIndex:(current.slideIndex+direction+images.length)%images.length};});
 return <div className="app">
  <div className="topbar"><a className="location-line" href="https://www.google.com/maps/search/?api=1&query=Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh" target="_blank" rel="noreferrer" aria-label="Open Chemudulanka, Alamuru Mandal in Google Maps"><svg className="location-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.7"/></svg><span>Chemudulanka, Alamuru Mandal, Andhra Pradesh</span></a><div className="social-links"><a className="facebook-link" href="https://www.facebook.com/ssvn02/" target="_blank" rel="noreferrer" aria-label="Visit us on Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.3H9.4V13h2.7v8h3.1Z"/></svg></a><a className="youtube-link" href="https://www.youtube.com/@srishirdisaividyaniketan-c4468" target="_blank" rel="noreferrer" aria-label="Visit us on YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.2V8.8l5.6 3.2-5.6 3.2Z"/></svg></a><a className="instagram-link" href="https://www.instagram.com/srishirdisaividyaniketan/?hl=en" target="_blank" rel="noreferrer" aria-label="Visit us on Instagram" title="Instagram"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><defs><linearGradient id="instagramGradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse"><stop className="insta-stop insta-stop-one" offset="0"/><stop className="insta-stop insta-stop-two" offset=".5"/><stop className="insta-stop insta-stop-three" offset="1"/></linearGradient></defs><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="instagram-dot" cx="17.7" cy="6.5" r=".8"/></svg></a></div></div>
  <header className={scrolled?'header scrolled':'header'}><div className="navwrap">
   <button className="brand" onClick={()=>go('home')}><img className="brandmark" src="/images/logo.jpg" alt="Sri Shirdi Sai Vidya Niketan logo"/><span><b>SRI SHIRDI SAI</b><small>VIDYA NIKETAN</small></span></button>
   <nav className={menu?'nav open':'nav'}>{['home','about','learning','life','gallery','contact'].map((x)=><button key={x} onClick={()=>go(x)}>{x==='life'?'Student Life':x[0].toUpperCase()+x.slice(1)}</button>)}<button className="apply" onClick={()=>go('contact')}>Enquire Now ↗</button></nav>
   <button className="hamb" onClick={()=>setMenu(!menu)}>{menu?'✕':'☰'}</button>
  </div></header>

  <main>
   <section id="home" className="hero">
    <div className="orb o1"/><div className="orb o2"/>
    <div className="hero-content reveal"><div className="eyebrow">CBSE DAY CUM RESIDENTIAL SCHOOL • EST. 1994</div><h1>Where <span>curiosity</span><br/>becomes confidence.</h1><p>A school with a soul — nurturing individual brilliance, meaningful learning, strong values and collective progress.</p><div className="hero-actions"><button className="primary" onClick={()=>go('about')}>Explore Our School <span>→</span></button><button className="ghost" onClick={()=>go('gallery')}>See Campus Life <span>◉</span></button></div><div className="hero-stats"><div><b>30+</b><span>Years of experience</span></div><div><b>4+</b><span>Campuses / learning spaces</span></div><div><b>72+</b><span>Awards & wins</span></div></div></div>
    <div className="hero-art"><div className="blob"><img src={IMG.hero} alt="Sri Shirdi Sai Vidya Niketan students"/></div><div className="float-card fc1">✦ <b>Learn</b><small>through experience</small></div><div className="float-card fc2">🎓 <b>Grow</b><small>with confidence</small></div><div className="scribble">INDIVIDUAL<br/><span>BRILLIANCE</span></div></div>
   </section>

   <section className="ticker"><div>✦ INDIVIDUAL BRILLIANCE • COLLECTIVE PROGRESS ✦</div><div>✦ INDIVIDUAL BRILLIANCE • COLLECTIVE PROGRESS ✦</div></section>

   <section id="about" className="section about"><div className="section-head"><div><span className="kicker">01 — OUR STORY</span><h2>A 21st-century school<br/><i>with a soul.</i></h2></div><p>Education here goes beyond marks and ranks. We discover each child's potential and create the space, support and experiences needed to turn that potential into real talent.</p></div><div className="about-grid"><div className="about-image"><img src={IMG.leaders} alt="Students and teachers"/><span className="image-tag">School Community</span></div><div className="about-copy"><p>Sri Shirdi Sai Vidya Niketan believes every child is unique. Our approach blends academic content with experiences that cultivate skills, mindsets and literacies for lifelong learning.</p><div className="feature-list"><article><b>01</b><div><h3>Personalised learning</h3><p>Teaching adapts to the learner, not the other way around.</p></div></article><article><b>02</b><div><h3>Values & character</h3><p>Trust, transparency, discipline and empathy are part of everyday school life.</p></div></article><article><b>03</b><div><h3>Beyond the classroom</h3><p>Sports, arts, outdoor learning and projects make learning come alive.</p></div></article></div></div></div></section>

   <section id="learning" className="section learning"><div className="center-head"><span className="kicker">02 — LEARNING</span><h2>Learning that feels <i>alive.</i></h2><p>From foundational years to middle and high school, students learn to connect, succeed, thrive and own the future.</p></div><div className="cards"><Card img={IMG.card1} title="Power of Education" text="Unlocking potential through purposeful learning and strong foundations."/><Card img={IMG.card2} title="Global Awareness" text="Diverse communities and experiences help students understand the wider world."/><Card img={IMG.card3} title="Lifelong Learning" text="Igniting curiosity, creativity and a passion for discovery."/><Card img={IMG.card4} title="Curiosity Leads" text="Encouraging students to ask, explore, experiment and create."/></div></section>

   <section id="life" className="life"><div className="life-image"><img src={IMG.sports} alt="Students playing volleyball"/></div><div className="life-copy"><span className="kicker">03 — STUDENT LIFE</span><h2>More than a classroom.<br/><i>A community.</i></h2><p>Students are encouraged to participate, collaborate and discover new interests through sports, arts, music, outdoor learning and school activities.</p><div className="life-pills"><span>⚽ Sports</span><span>🎨 Arts</span><span>🎵 Music</span><span>🔬 Science</span><span>🌱 Outdoor Learning</span></div><button className="darkbtn" onClick={()=>go('gallery')}>Explore Student Life →</button></div></section>

   <section id="gallery" className="section gallery"><div className="section-head"><div><span className="kicker">04 — SPOTLIGHT</span><h2>Moments that<br/><i>stay with us.</i></h2></div><p>Real moments from the school community — achievements, celebrations, creativity, teamwork and learning outside the classroom.</p></div><div className="gallery-grid">{gallery.map(({images,title},i)=><button className={'gallery-item gi'+i} key={title} onClick={()=>setLight({categoryIndex:i,slideIndex:gallerySlides[i]})}><img src={images[gallerySlides[i]]} alt={title}/><span><small>{String(i+1).padStart(2,'0')}</small>{title}<b>↗</b></span></button>)}</div></section>

   <section className="quote"><div className="quote-mark">“</div><p>We want more in our students — more skills, more meaningful learning, more values and more leaders to build a safer and harmonious community.</p><span>— Sri Shirdi Sai Vidya Niketan</span></section>

   <section id="contact" className="contact"><div><span className="kicker">05 — CONNECT</span><h2>Come see where<br/><i>learning happens.</i></h2><p>Explore the campus, understand our programmes and connect with the school community.</p></div><div className="contact-card"><div><a className="address-map-label" href="https://www.google.com/maps/search/?api=1&query=3-201%2C%20Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh%20533234" target="_blank" rel="noreferrer">VISIT ↗</a><a className="address-link" href="https://www.google.com/maps/search/?api=1&query=3-201%2C%20Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh%20533234" target="_blank" rel="noreferrer" aria-label="Open the school address in Google Maps">3-201, Chemudulanka,<br/>Alamuru Mandal,<br/>Andhra Pradesh — 533234</a></div><div><span>CONTACT</span><div className="contact-details"><a className="contact-detail" href="mailto:srishirdisaividyaniketan@gmail.com"><span aria-hidden="true">✉</span>srishirdisaividyaniketan@gmail.com</a><a className="contact-detail" href="tel:+919491415244"><span aria-hidden="true">☎</span>94914 15244</a><a className="contact-detail" href="tel:+919441252244"><span aria-hidden="true">☎</span>94412 52244</a></div></div></div></section>
  </main>
  <footer id="site-footer"><div className="footer-brand"><img className="brandmark" src="/images/logo.jpg" alt="Sri Shirdi Sai Vidya Niketan logo"/><div><b>SRI SHIRDI SAI VIDYA NIKETAN</b><small>Individual Brilliance, Collective Progress.</small></div></div><div className="footer-links"><button onClick={()=>go('about')}>About</button><button onClick={()=>go('learning')}>Learning</button><button onClick={()=>go('gallery')}>Gallery</button></div><small>© {new Date().getFullYear()} Sri Shirdi Sai Vidya Niketan. Redesign concept.</small></footer>
  <a className="whatsapp-float" style={{bottom:whatsAppBottom}} href="https://wa.me/919491415244" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.7l6.5-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-4-.5-5.7-1.6l-.4-.2-3.8 1 1-3.7-.3-.4A10.2 10.2 0 1 1 16 26.4Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.4 8.4 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.2-.2-.5-.4Z"/></svg></a>
  {light&&<div className="lightbox" onClick={()=>setLight(null)} role="dialog" aria-modal="true" aria-label={`${gallery[light.categoryIndex].title} gallery`}><button className="lightbox-close" onClick={()=>setLight(null)} aria-label="Close gallery">×</button>{gallery[light.categoryIndex].images.length>1&&<button className="lightbox-prev" onClick={event=>{event.stopPropagation();stepLight(-1)}} aria-label="Previous image">‹</button>}<figure className="lightbox-content" onClick={event=>event.stopPropagation()}><img src={gallery[light.categoryIndex].images[light.slideIndex]} alt={gallery[light.categoryIndex].title}/><figcaption>{gallery[light.categoryIndex].title}</figcaption></figure>{gallery[light.categoryIndex].images.length>1&&<button className="lightbox-next" onClick={event=>{event.stopPropagation();stepLight(1)}} aria-label="Next image">›</button>}</div>}
 </div>
}
function Card({img,title,text}){return <article className="learn-card"><div className="learn-img"><img src={img} alt=""/></div><div><small>LEARNING EXPERIENCE</small><h3>{title}</h3><p>{text}</p></div></article>}
export default App;
