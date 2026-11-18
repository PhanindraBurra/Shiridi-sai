const fs = require('fs');
const path = require('path');

const cssContent = fs.readFileSync('SSVN-web-main/src/styles.css', 'utf-8');

const ssvnHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <meta name="description" content="Sri Shirdi Sai Vidya Niketan — Individual Brilliance, Collective Progress. CBSE Day Cum Residential School Chemudulanka."/>
  <title>Sri Shirdi Sai Vidya Niketan | CBSE School, Chemudulanka</title>
  <link rel="icon" type="image/jpeg" href="./images/logo.jpg" />
  <style>
    ${cssContent}
    /* Group Navigation Banner */
    .group-nav-pill {
      background: #f59e0b;
      color: #0b1e16 !important;
      font-weight: 800 !important;
      border-radius: 9999px !important;
      padding: 6px 14px !important;
      font-size: 11px !important;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .group-nav-pill:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(245, 158, 11, 0.5);
    }
  </style>
</head>
<body>
  <div class="app">
    <div class="topbar">
      <div style="display:flex;align-items:center;gap:12px;">
        <a class="group-nav-pill" href="../../index.html" target="_top" title="Return to Sri Shirdi Sai Educational Institutions Main Portal">
          <span>🏛️</span> Main Group Portal
        </a>
        <a class="location-line" href="https://www.google.com/maps/search/?api=1&query=Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh" target="_blank" rel="noreferrer" aria-label="Open Chemudulanka, Alamuru Mandal in Google Maps">
          <svg class="location-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.7"/></svg>
          <span>Chemudulanka, Alamuru Mandal, Andhra Pradesh</span>
        </a>
      </div>
      <div class="social-links">
        <a class="facebook-link" href="https://www.facebook.com/ssvn02/" target="_blank" rel="noreferrer" aria-label="Visit us on Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.3H9.4V13h2.7v8h3.1Z"/></svg>
        </a>
        <a class="youtube-link" href="https://www.youtube.com/@srishirdisaividyaniketan-c4468" target="_blank" rel="noreferrer" aria-label="Visit us on YouTube" title="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.2V8.8l5.6 3.2-5.6 3.2Z"/></svg>
        </a>
        <a class="instagram-link" href="https://www.instagram.com/srishirdisaividyaniketan/?hl=en" target="_blank" rel="noreferrer" aria-label="Visit us on Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><defs><linearGradient id="instagramGradient" x1="4" y1="20" x2="20" y2="4" gradientUnits="userSpaceOnUse"><stop class="insta-stop insta-stop-one" offset="0"/><stop class="insta-stop insta-stop-two" offset=".5"/><stop class="insta-stop insta-stop-three" offset="1"/></linearGradient></defs><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="instagram-dot" cx="17.7" cy="6.5" r=".8"/></svg>
        </a>
      </div>
    </div>

    <header class="header" id="main-header">
      <div class="navwrap">
        <a class="brand" href="#home" style="text-decoration:none;">
          <img class="brandmark" src="./images/logo.jpg" alt="Sri Shirdi Sai Vidya Niketan logo"/>
          <span><b>SRI SHIRDI SAI</b><small>VIDYA NIKETAN</small></span>
        </a>
        <nav class="nav" id="nav-menu">
          <button onclick="scrollToSection('home')">Home</button>
          <button onclick="scrollToSection('about')">About</button>
          <button onclick="scrollToSection('learning')">Learning</button>
          <button onclick="scrollToSection('life')">Student Life</button>
          <button onclick="scrollToSection('gallery')">Gallery</button>
          <button onclick="scrollToSection('contact')">Contact</button>
          <button class="apply" onclick="scrollToSection('contact')">Enquire Now ↗</button>
        </nav>
        <button class="hamb" id="hamb-btn" aria-label="Toggle menu">☰</button>
      </div>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="orb o1"></div><div class="orb o2"></div>
        <div class="hero-content reveal">
          <div class="eyebrow">CBSE DAY CUM RESIDENTIAL SCHOOL • EST. 1994</div>
          <h1>Where <span>curiosity</span><br/>becomes confidence.</h1>
          <p>A school with a soul — nurturing individual brilliance, meaningful learning, strong values and collective progress.</p>
          <div class="hero-actions">
            <button class="primary" onclick="scrollToSection('about')">Explore Our School <span>→</span></button>
            <button class="ghost" onclick="scrollToSection('gallery')">See Campus Life <span>◉</span></button>
          </div>
          <div class="hero-stats">
            <div><b>30+</b><span>Years of experience</span></div>
            <div><b>4+</b><span>Campuses / learning spaces</span></div>
            <div><b>72+</b><span>Awards & wins</span></div>
          </div>
        </div>
        <div class="hero-art">
          <div class="blob"><img src="./images/council.png" alt="Sri Shirdi Sai Vidya Niketan students"/></div>
          <div class="float-card fc1">✦ <b>Learn</b><small>through experience</small></div>
          <div class="float-card fc2">🎓 <b>Grow</b><small>with confidence</small></div>
          <div class="scribble">INDIVIDUAL<br/><span>BRILLIANCE</span></div>
        </div>
      </section>

      <section class="ticker">
        <div>✦ INDIVIDUAL BRILLIANCE • COLLECTIVE PROGRESS ✦</div>
        <div>✦ INDIVIDUAL BRILLIANCE • COLLECTIVE PROGRESS ✦</div>
      </section>

      <section id="about" class="section about">
        <div class="section-head">
          <div>
            <span class="kicker">01 — OUR STORY</span>
            <h2>A 21st-century school<br/><i>with a soul.</i></h2>
          </div>
          <p>Education here goes beyond marks and ranks. We discover each child's potential and create the space, support and experiences needed to turn that potential into real talent.</p>
        </div>
        <div class="about-grid">
          <div class="about-image">
            <img src="./images/leaders.png" alt="Students and teachers"/>
            <span class="image-tag">School Community</span>
          </div>
          <div class="about-copy">
            <p>Sri Shirdi Sai Vidya Niketan believes every child is unique. Our approach blends academic content with experiences that cultivate skills, mindsets and literacies for lifelong learning.</p>
            <div class="feature-list">
              <article>
                <b>01</b>
                <div><h3>Personalised learning</h3><p>Teaching adapts to the learner, not the other way around.</p></div>
              </article>
              <article>
                <b>02</b>
                <div><h3>Values & character</h3><p>Trust, transparency, discipline and empathy are part of everyday school life.</p></div>
              </article>
              <article>
                <b>03</b>
                <div><h3>Beyond the classroom</h3><p>Sports, arts, outdoor learning and projects make learning come alive.</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="learning" class="section learning">
        <div class="center-head">
          <span class="kicker">02 — LEARNING</span>
          <h2>Learning that feels <i>alive.</i></h2>
          <p>From foundational years to middle and high school, students learn to connect, succeed, thrive and own the future.</p>
        </div>
        <div class="cards">
          <article class="learn-card">
            <div class="learn-img"><img src="./images/card1.png" alt="Power of Education"/></div>
            <div><small>LEARNING EXPERIENCE</small><h3>Power of Education</h3><p>Unlocking potential through purposeful learning and strong foundations.</p></div>
          </article>
          <article class="learn-card">
            <div class="learn-img"><img src="./images/card2.png" alt="Global Awareness"/></div>
            <div><small>LEARNING EXPERIENCE</small><h3>Global Awareness</h3><p>Diverse communities and experiences help students understand the wider world.</p></div>
          </article>
          <article class="learn-card">
            <div class="learn-img"><img src="./images/card3.png" alt="Lifelong Learning"/></div>
            <div><small>LEARNING EXPERIENCE</small><h3>Lifelong Learning</h3><p>Igniting curiosity, creativity and a passion for discovery.</p></div>
          </article>
          <article class="learn-card">
            <div class="learn-img"><img src="./images/card4.png" alt="Curiosity Leads"/></div>
            <div><small>LEARNING EXPERIENCE</small><h3>Curiosity Leads</h3><p>Encouraging students to ask, explore, experiment and create.</p></div>
          </article>
        </div>
      </section>

      <section id="life" class="life">
        <div class="life-image"><img src="./images/sports.png" alt="Students playing volleyball"/></div>
        <div class="life-copy">
          <span class="kicker">03 — STUDENT LIFE</span>
          <h2>More than a classroom.<br/><i>A community.</i></h2>
          <p>Students are encouraged to participate, collaborate and discover new interests through sports, arts, music, outdoor learning and school activities.</p>
          <div class="life-pills">
            <span>⚽ Sports</span><span>🎨 Arts</span><span>🎵 Music</span><span>🔬 Science</span><span>🌱 Outdoor Learning</span>
          </div>
          <button class="darkbtn" onclick="scrollToSection('gallery')">Explore Student Life →</button>
        </div>
      </section>

      <section id="gallery" class="section gallery">
        <div class="section-head">
          <div><span class="kicker">04 — SPOTLIGHT</span><h2>Moments that<br/><i>stay with us.</i></h2></div>
          <p>Real moments from the school community — achievements, celebrations, creativity, teamwork and learning outside the classroom.</p>
        </div>
        <div class="gallery-grid" id="gallery-container">
          <!-- Gallery items rendered by JS -->
        </div>
      </section>

      <section class="quote">
        <div class="quote-mark">“</div>
        <p>We want more in our students — more skills, more meaningful learning, more values and more leaders to build a safer and harmonious community.</p>
        <span>— Sri Shirdi Sai Vidya Niketan</span>
      </section>

      <section id="contact" class="contact">
        <div>
          <span class="kicker">05 — CONNECT</span>
          <h2>Come see where<br/><i>learning happens.</i></h2>
          <p>Explore the campus, understand our programmes and connect with the school community.</p>
        </div>
        <div class="contact-card">
          <div>
            <a class="address-map-label" href="https://www.google.com/maps/search/?api=1&query=3-201%2C%20Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh%20533234" target="_blank" rel="noreferrer">VISIT ↗</a>
            <a class="address-link" href="https://www.google.com/maps/search/?api=1&query=3-201%2C%20Chemudulanka%2C%20Alamuru%20Mandal%2C%20Andhra%20Pradesh%20533234" target="_blank" rel="noreferrer">3-201, Chemudulanka,<br/>Alamuru Mandal,<br/>Andhra Pradesh — 533234</a>
          </div>
          <div>
            <span>CONTACT</span>
            <div class="contact-details">
              <a class="contact-detail" href="mailto:srishirdisaividyaniketan@gmail.com"><span aria-hidden="true">✉</span>srishirdisaividyaniketan@gmail.com</a>
              <a class="contact-detail" href="tel:+919491415244"><span aria-hidden="true">☎</span>+91 94914 15244</a>
              <a class="contact-detail" href="tel:+919441252244"><span aria-hidden="true">☎</span>+91 94412 52244</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer id="site-footer">
      <div class="footer-brand">
        <img class="brandmark" src="./images/logo.jpg" alt="Sri Shirdi Sai Vidya Niketan logo"/>
        <div><b>SRI SHIRDI SAI VIDYA NIKETAN</b><small>Individual Brilliance, Collective Progress.</small></div>
      </div>
      <div class="footer-links">
        <button onclick="scrollToSection('about')">About</button>
        <button onclick="scrollToSection('learning')">Learning</button>
        <button onclick="scrollToSection('gallery')">Gallery</button>
        <a href="../../index.html" target="_top">🏛️ Main Institutions Portal</a>
      </div>
      <small>© 2026 Sri Shirdi Sai Vidya Niketan. Chemudulanka, Alamuru Mandal.</small>
    </footer>

    <a class="whatsapp-float" id="wa-float" href="https://wa.me/919491415244" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.7l6.5-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-2 0-4-.5-5.7-1.6l-.4-.2-3.8 1 1-3.7-.3-.4A10.2 10.2 0 1 1 16 26.4Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.4 8.4 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.2-.2-.5-.4Z"/></svg>
    </a>

    <!-- Lightbox Modal -->
    <div id="lightbox-modal" class="lightbox" style="display:none;" onclick="closeLightbox()">
      <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close gallery">×</button>
      <button class="lightbox-prev" id="lightbox-prev-btn" onclick="stepLightbox(-1, event)" aria-label="Previous image">‹</button>
      <figure class="lightbox-content" onclick="event.stopPropagation()">
        <img id="lightbox-img" src="" alt=""/>
        <figcaption id="lightbox-caption"></figcaption>
      </figure>
      <button class="lightbox-next" id="lightbox-next-btn" onclick="stepLightbox(1, event)" aria-label="Next image">›</button>
    </div>
  </div>

  <script>
    const galleryData = [
      { title: 'Achievements & Recognition', images: ['./images/award.jpg', './images/achivements.png'] },
      { title: 'Campus Life', images: ['./images/leaders.png', './images/team.png'] },
      { title: 'Graduation Day', images: ['./images/graduation.png', './images/council.png'] },
      { title: 'Sports & Teamwork', images: ['./images/sports.png', './images/sport2.png', './images/sport3.png'] },
      { title: 'Science & Innovation', images: ['./images/science.png', './images/innovation.png'] },
      { title: 'Arts & Music', images: ['./images/music.png'] }
    ];

    let currentSlideIndices = galleryData.map(() => 0);
    let activeLightbox = null;

    function renderGallery() {
      const container = document.getElementById('gallery-container');
      container.innerHTML = galleryData.map((item, i) => \`
        <button class="gallery-item gi\${i}" onclick="openLightbox(\${i})">
          <img id="gallery-img-\${i}" src="\${item.images[currentSlideIndices[i]]}" alt="\${item.title}"/>
          <span>
            <small>\${String(i + 1).padStart(2, '0')}</small>
            \${item.title}
            <b>↗</b>
          </span>
        </button>
      \`).join('');
    }

    renderGallery();

    // Auto-cycle gallery images every 4 seconds
    setInterval(() => {
      galleryData.forEach((item, i) => {
        if (item.images.length > 1) {
          currentSlideIndices[i] = (currentSlideIndices[i] + 1) % item.images.length;
          const imgElem = document.getElementById('gallery-img-' + i);
          if (imgElem) {
            imgElem.src = item.images[currentSlideIndices[i]];
          }
        }
      });
    }, 4000);

    // Lightbox handlers
    function openLightbox(categoryIndex) {
      activeLightbox = { categoryIndex, slideIndex: currentSlideIndices[categoryIndex] };
      updateLightbox();
      document.getElementById('lightbox-modal').style.display = 'grid';
    }

    function closeLightbox() {
      document.getElementById('lightbox-modal').style.display = 'none';
      activeLightbox = null;
    }

    function stepLightbox(delta, event) {
      if (event) event.stopPropagation();
      if (!activeLightbox) return;
      const images = galleryData[activeLightbox.categoryIndex].images;
      activeLightbox.slideIndex = (activeLightbox.slideIndex + delta + images.length) % images.length;
      updateLightbox();
    }

    function updateLightbox() {
      if (!activeLightbox) return;
      const item = galleryData[activeLightbox.categoryIndex];
      const img = document.getElementById('lightbox-img');
      const caption = document.getElementById('lightbox-caption');
      const prevBtn = document.getElementById('lightbox-prev-btn');
      const nextBtn = document.getElementById('lightbox-next-btn');

      img.src = item.images[activeLightbox.slideIndex];
      img.alt = item.title;
      caption.textContent = item.title;

      if (item.images.length > 1) {
        prevBtn.style.display = 'grid';
        nextBtn.style.display = 'grid';
      } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      }
    }

    window.addEventListener('keydown', (e) => {
      if (!activeLightbox) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });

    // Mobile Hamburger
    const hambBtn = document.getElementById('hamb-btn');
    const navMenu = document.getElementById('nav-menu');
    hambBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hambBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    function scrollToSection(id) {
      navMenu.classList.remove('open');
      hambBtn.textContent = '☰';
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // Scroll header & WhatsApp bottom adjustment
    window.addEventListener('scroll', () => {
      const header = document.getElementById('main-header');
      if (window.scrollY > 30) header.classList.add('scrolled');
      else header.classList.remove('scrolled');

      const footer = document.getElementById('site-footer');
      const waFloat = document.getElementById('wa-float');
      if (footer && waFloat) {
        const footerTop = footer.getBoundingClientRect().top;
        const bottomOffset = Math.max(24, window.innerHeight - footerTop + 20);
        waFloat.style.bottom = bottomOffset + 'px';
      }
    });
  </script>
</body>
</html>`;

// Write to SSVN-web-main/dist/index.html and SSVN-web-main/index.html
if (!fs.existsSync('SSVN-web-main/dist')) fs.mkdirSync('SSVN-web-main/dist');
fs.writeFileSync('SSVN-web-main/dist/index.html', ssvnHtml, 'utf-8');
fs.writeFileSync('SSVN-web-main/index.html', ssvnHtml, 'utf-8');

// Copy images to SSVN-web-main/dist/images
if (!fs.existsSync('SSVN-web-main/dist/images')) {
  fs.cpSync('SSVN-web-main/images', 'SSVN-web-main/dist/images', { recursive: true });
}

console.log('SSVN static build created successfully in both root and dist!');

