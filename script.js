/* ════════════════════════════════════════════
   ACTIVE NAV LINK ON SCROLL
   ════════════════════════════════════════════ */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActive() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 90;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').replace('#', '');

      if (href === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActive);
  setActive();
})();


/* ════════════════════════════════════════════
   HOBBY GALLERY
   ════════════════════════════════════════════ */
const store = {
  reading: { label: 'Reading E-books', emoji: '📚', images: [
    { src: 'ReadingBook1.jpg',  label: '' },
    { src: 'ReadingBook2.jpg',  label: '' },
    { src: 'ReadingBook3.jpg',  label: '' },
    { src: 'ReadingBook4.jpg',  label: '' },
    { src: 'ReadingBook5.jpg',  label: '' },
    { src: 'ReadingBook6.jpg',  label: '' },
    { src: 'ReadingBook7.jpg',  label: '' },
    { src: 'ReadingBook8.jpg',  label: '' },
    { src: 'ReadingBook9.jpg',  label: '' },
    { src: 'ReadingBook10.jpg', label: '' },
    { src: 'ReadingBook11.jpg', label: '' },
    { src: 'ReadingBook12.jpg', label: '' },
  ]},
  movies: { label: 'Watching Movies', emoji: '🎬', images: [
    { src: 'Drama1.jpg',       label: '' },
    { src: 'Drama2.jpg',       label: '' },
    { src: 'Drama3.jpg',       label: '' },
    { src: 'Drama4.jpg',       label: '' },
    { src: 'Drama5.jpg',       label: '' },
    { src: 'HorrorMovie1.jpg', label: '' },
    { src: 'HorrorMovie2.jpg', label: '' },
    { src: 'HorrorMovie3.jpg', label: '' },
    { src: 'HorrorMovie4.jpg', label: '' },
    { src: 'HorrorMovie5.jpg', label: '' },
    { src: 'Kdrama1.jpg',      label: '' },
    { src: 'Kdrama2.jpg',      label: '' },
    { src: 'Kdrama3.jpg',      label: '' },
    { src: 'Kdrama4.jpg',      label: '' },
    { src: 'Kdrama5.jpg',      label: '' },
  ]},
  eating: { label: 'Eating', emoji: '🍜', images: [
    { src: 'Eat1.jpg', label: '' },
    { src: 'Eat2.jpg', label: '' },
    { src: 'Eat3.jpg', label: '' },
    { src: 'Eat4.jpg', label: '' },
    { src: 'Eat5.jpg', label: '' },
    { src: 'Eat6.jpg', label: '' },
    { src: 'Eat7.jpg', label: '' },
    { src: 'Eat8.jpg', label: '' },
    { src: 'Eat9.jpg', label: '' },
  ]},
  music: { label: 'Listen Music', emoji: '🎵', images: [
    { src: 'Music1.jpg',  label: '' },
    { src: 'Music2.jpg',  label: '' },
    { src: 'Music3.jpg',  label: '' },
    { src: 'Music4.jpg',  label: '' },
    { src: 'Music5.jpg',  label: '' },
    { src: 'Music6.jpg',  label: '' },
    { src: 'Music7.jpg',  label: '' },
    { src: 'Music8.jpg',  label: '' },
    { src: 'Music9.jpg',  label: '' },
    { src: 'Music10.jpg', label: '' },
  ]},
  photography: { label: 'Photography', emoji: '📸', images: [
    { src: 'Pic1.jpg', label: '' },
    { src: 'Pic2.jpg', label: '' },
    { src: 'Pic3.jpg', label: '' },
    { src: 'Pic4.jpg', label: '' },
    { src: 'Pic5.jpg', label: '' },
    { src: 'Pic6.jpg', label: '' },
    { src: 'Pic7.jpg',       label: '' },
  ]},
  travelling: { label: 'Travelling', emoji: '✈️', images: [
    { src: 'Travel1.jpg', label: '' },
    { src: 'Travel2.jpg', label: '' },
    { src: 'Travel3.jpg', label: '' },
    { src: 'Travel4.jpg', label: '' },
    { src: 'Travel5.jpg', label: '' },
    { src: 'Travel6.jpg', label: '' },
    { src: 'Travel7.jpg', label: '' },
  ]},
};

let currentKey = null;

/* ── Open gallery ── */
function openGallery(key) {
  currentKey = key;
  const data = store[key];
  document.getElementById('lightboxTitle').textContent = data.label;
  renderGallery(key);
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── Render gallery grid ── */
function renderGallery(key) {
  const grid = document.getElementById('galleryGrid');
  const data = store[key];
  grid.innerHTML = '';

  if (data.images.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">${data.emoji}</div>
        <p>No photos yet for <strong style="color:var(--text)">${data.label}</strong>.</p>
        <p style="font-size:0.75rem">No photos have been added yet.</p>
      </div>`;
  } else {
    data.images.forEach((img) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `<img src="${img.src}" alt="${img.label || ''}" loading="lazy">`;
      item.onclick = () => openImgViewer(img.src);
      grid.appendChild(item);
    });
  }
}

/* ── Close gallery ── */
function closeGallery(e) {
  if (e.target === document.getElementById('lightboxOverlay')) closeGalleryBtn();
}
function closeGalleryBtn() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentKey = null;
}

/* ── Full image viewer ── */
function openImgViewer(src) {
  document.getElementById('imgViewerImg').src = src;
  document.getElementById('imgViewer').classList.add('open');
}
function closeImgViewer() {
  document.getElementById('imgViewer').classList.remove('open');
}


/* ════════════════════════════════════════════
   CERTIFICATE LIGHTBOX
   ════════════════════════════════════════════ */
const certs = [
  { src: 'Champion.jpg',            label: 'Champion'                     },
  { src: '2nd Runner Up.png',       label: '2nd Runner Up'                },
  { src: '1st Runner Up.png',       label: '1st Runner Up'                },
  { src: '1st Runner Up(1).png',    label: '1st Runner Up'                },
  { src: 'CertofPublication.png',   label: 'Certificate of Publication'   },
  { src: 'CertofParticipation.png', label: 'Certificate of Participation' },
];

let certIndex = 0;

/* ── Open cert lightbox ── */
function openCert(src, label) {
  certIndex = certs.findIndex(c => c.src === src);
  if (certIndex === -1) certIndex = 0;
  renderCert();
  document.getElementById('certOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ── Render current cert ── */
function renderCert() {
  const c = certs[certIndex];
  document.getElementById('certLbImg').src             = c.src;
  document.getElementById('certLbImg').alt             = c.label;
  document.getElementById('certLbCaption').textContent = c.label;
  document.getElementById('certLbCounter').textContent = `${certIndex + 1} / ${certs.length}`;
}

/* ── Navigate certs ── */
function shiftCert(dir) {
  certIndex = (certIndex + dir + certs.length) % certs.length;
  renderCert();
}

/* ── Close cert lightbox ── */
function closeCert(e) {
  if (e.target !== document.getElementById('certOverlay')) return;
  closeCertDirect();
}
function closeCertDirect() {
  document.getElementById('certOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

const projectData = {
  hi5: {
    status: 'Ongoing',
    title: 'Hi5 Portal Enrollment System',
    desc: 'An online enrollment system designed to streamline the student registration process for Don Servillano Platon Memorial National High School.',
    placeholder: '🎓',
    image: 'Hi5Portal.jpg',
    tech: [
      { label: 'React', cls: 'tp-react' },
      { label: 'TypeScript', cls: 'tp-typescript' },
      { label: 'Laravel', cls: 'tp-laravel' },
      { label: 'PostgreSQL', cls: 'tp-postgresql' },
      { label: 'Python', cls: 'tp-python' },
    ],
    title: 'About the Project',
    features: [
      'AI-powered at-risk student prediction using machine learning',
      'Auto-sectioning with gender and classification awareness',
      'Grade upload and SF9-compliant academic records management',
      'Role-based access: Admin, Registrar, Teacher, Student',
      'Account lockout after failed login attempts',
      'Dark mode, unified registrar theme, toast notifications'
    ],
    repo: 'https://github.com/ArlanB12/Hi5-Portal'
  },
  inv: {
    status: 'Ongoing',
    title: "Platonian's Inventory Management System",
    desc: "A web-based inventory system built for the Platonian's store, designed to manage products, track stock levels in real time, and generate detailed inventory reports. Features a complete CRUD interface with low-stock alerts and data export capabilities.",
    placeholder: '🗄️',
    image: 'Platonians Inventory.png',
    tech: [
      { label: 'PHP 8', cls: 'tp-php' },
      { label: 'MySQL', cls: 'tp-mysql' },
      { label: 'JavaScript', cls: 'tp-js' },
      { label: 'Bootstrap 5', cls: 'tp-bootstrap' },
      { label: 'XAMPP', cls: 'tp-xampp'},
    ],
    title:'About the Project',
    features: [
      '4-tier accountability system for full asset traceability',
      '13-type notification system for item events',
      '24-hour automated backup with configurable retention',
      'DepEd-compliant bulk asset ID label printing',
    ],
    repo: 'https://github.com/ArlanB12/PlatoniansSchoolAssets'
  }
};

function openProjModal(key) {
  const p = projectData[key];
  document.getElementById('pmStatus').textContent = p.status;
  document.getElementById('pmTitle').textContent = p.title;
  document.getElementById('pmDesc').textContent = p.desc;
  const placeholder = document.getElementById('pmPlaceholder');
if (p.image) {
  placeholder.style.backgroundImage = `url('${p.image}')`;
  placeholder.style.backgroundSize = 'cover';
  placeholder.style.backgroundPosition = 'center';
  placeholder.textContent = '';
} else {
  placeholder.style.backgroundImage = '';
  placeholder.textContent = p.placeholder;
}

  document.getElementById('pmRepo').href = p.repo;
  document.getElementById('pmTech').innerHTML =
    p.tech.map(t => `<span class="tp ${t.cls}">${t.label}</span>`).join('');
  document.getElementById('pmFeatures').innerHTML =
    p.features.map(f => `<div class="pm-feature"><span class="pm-feature-dot"></span>${f}</div>`).join('');
  document.getElementById('projModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjModal() {
  document.getElementById('projModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjModal(); });
/* ════════════════════════════════════════════
   KEYBOARD SHORTCUTS
   ════════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {

  /* ── Cert lightbox ── */
  const certOverlay = document.getElementById('certOverlay');
  if (certOverlay && certOverlay.classList.contains('active')) {
    if (e.key === 'Escape')     { closeCertDirect(); return; }
    if (e.key === 'ArrowRight') { shiftCert(1);      return; }
    if (e.key === 'ArrowLeft')  { shiftCert(-1);     return; }
  }

  /* ── Full image viewer ── */
  const imgViewer = document.getElementById('imgViewer');
  if (imgViewer && imgViewer.classList.contains('open')) {
    if (e.key === 'Escape') { closeImgViewer(); return; }
  }

  /* ── Hobby gallery ── */
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
    if (e.key === 'Escape') { closeGalleryBtn(); return; }
  }

});

/* ══════════════════════════════════════
   EDUCATION CARD ANIMATION
══════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".edu-card");

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = `0.6s ease ${index * 0.12}s`;

    observer.observe(card);

    /* Click pulse effect */
    card.addEventListener("click", () => {
      card.style.transform = "scale(0.98)";
      setTimeout(()=>{
        card.style.transform = "scale(1)";
      },150);
    });

  });

});


/* ════════════════════════════════════════════
   CONTACT FORM
   ════════════════════════════════════════════ */
function submitContactForm() {
  const name = document.getElementById('cfName').value.trim();
  const email = document.getElementById('cfEmail').value.trim();
  const message = document.getElementById('cfMessage').value.trim();

  if (!name || !email || !message) return;

  const subject = encodeURIComponent('Portfolio Message from ' + name);
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n\n' +
    'Message:\n' + message
  );

  window.location.href =
    `mailto:micaella.nodado@gmail.com?subject=${subject}&body=${body}`;
}


/* ════════════════════════════════════════════
   DARK / LIGHT MODE
   ════════════════════════════════════════════ */
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');

  const isLight = body.classList.toggle('light-mode');

  icon.textContent = isLight ? '🌙' : '🔆';
 
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}


/* ════════════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════════════ */
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const btn = document.getElementById('mobileMenuBtn');

  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('mobileMenuBtn').classList.remove('open');
}


/* ════════════════════════════════════════════
   PAGE LOAD SETTINGS
   ════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Restore theme */
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');

    const icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = '🌙';
  }

  /* Close mobile menu outside click */
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mobileNav');
    const btn = document.getElementById('mobileMenuBtn');

    if (
      nav &&
      btn &&
      !nav.contains(e.target) &&
      !btn.contains(e.target)
    ) {
      nav.classList.remove('open');
      btn.classList.remove('open');
    }
  });

});