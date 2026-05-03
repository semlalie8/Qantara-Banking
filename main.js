// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number[data-target]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));

function animateCounter(element, target) {
  let current = 0;
  const duration = 2000;
  const increment = target / (duration / 16);
  const suffix = target >= 100 ? 'K+' : target >= 10 ? 'M+' : '%';

  function update() {
    current += increment;
    if (current >= target) {
      current = target;
      if (target === 15) element.textContent = '15M+';
      else if (target === 10) element.textContent = '$10B+';
      else if (target === 600) element.textContent = '600K+';
      else if (target === 83) element.textContent = '83%';
      return;
    }
    element.textContent = Math.floor(current);
    requestAnimationFrame(update);
  }
  update();
}

// ===== HERO CHART ANIMATION =====
const bars = document.querySelectorAll('.hero-chart .bar');
bars.forEach((bar, i) => {
  bar.style.animationDelay = `${i * 0.1}s`;
});

// ===== WAITLIST FORM =====
function handleWaitlist(e) {
  e.preventDefault();
  const email = document.getElementById('waitlistEmail').value;
  const msg = document.getElementById('formMessage');

  if (email) {
    msg.textContent = `✓ Thank you! ${email} has been added to the Qantara waitlist.`;
    msg.style.display = 'block';
    document.getElementById('waitlistEmail').value = '';

    setTimeout(() => {
      msg.style.display = 'none';
    }, 5000);
  }
}

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PARALLAX ON HERO GLOWS =====
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const glow = document.querySelector('.hero-glow');
  const glow2 = document.querySelector('.hero-glow-2');
  if (glow) glow.style.transform = `translate(${x}px, ${y}px)`;
  if (glow2) glow2.style.transform = `translate(${-x}px, ${-y}px)`;
});
