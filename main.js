/**
 * Sri Shirdi Sai Educational Institutions, Chemudulanka
 * Main Flagship Portal JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initStatCounters();
  initEnquiryForm();
});

/* ==========================================================================
   1. Sticky Header
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
  });

  const navLinks = navMenu.querySelectorAll('.nav-link, .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.textContent = '☰';
    });
  });
}

/* ==========================================================================
   3. Animated Stat Counters
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.metric-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 1800;
          const step = Math.ceil(target / 40);

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              counter.textContent = target.toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = count.toLocaleString() + suffix;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) observer.observe(metricsSection);
}

/* ==========================================================================
   4. Fast Admission Enquiry Form
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('campus-enquiry-form');
  const statusMsg = document.getElementById('form-status-msg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('enq-name')?.value || 'Student/Parent';
    const phone = document.getElementById('enq-phone')?.value || '';
    const wing = document.getElementById('enq-wing')?.value || 'General';

    if (statusMsg) {
      statusMsg.innerHTML = `✅ Thank you, <strong>${name}</strong>! Your enquiry for <strong>${wing}</strong> has been registered. Our admissions coordinator will contact you at <strong>${phone}</strong> shortly.`;
      statusMsg.className = 'form-status-msg success';
      statusMsg.style.display = 'block';
    }

    form.reset();
  });
}
