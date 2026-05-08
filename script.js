/* =========================================
   Healthies On Main — script.js
   ========================================= */

'use strict';

// ---- MENU DATA ----
const menuData = {
  shakes: [
    {
      name: 'Signature Shake',
      desc: 'Our house blend packed with 24g of protein. Creamy, smooth, and endlessly satisfying.',
      price: 'From $7',
      cal: '~180 cal',
      img: 'https://static.wixstatic.com/media/f819b8_8eef0579cdac4fa7b02c9105c6c3af52~mv2.png'
    },
    {
      name: 'Tropical Fuel',
      desc: 'Mango, pineapple and a full serving of protein. Tastes like vacation, works like a workout.',
      price: 'From $7',
      cal: '~190 cal',
      img: 'https://static.wixstatic.com/media/f819b8_7f6af68a5e4e4e849d552c6aaaa7b55b~mv2.png'
    },
    {
      name: 'Chocolate Dream',
      desc: 'Rich dark chocolate meets 26g of protein. Dessert without the guilt.',
      price: 'From $7',
      cal: '~195 cal',
      img: 'https://static.wixstatic.com/media/f819b8_94fdfb4ecc5f4614ac4c51952b4fb776~mv2.png'
    },
    {
      name: 'Build Your Own',
      desc: 'Pick your base, flavor, and add-ons. Over 20 flavors to mix and match your way.',
      price: 'Custom Order',
      cal: 'Varies',
      img: 'https://static.wixstatic.com/media/f819b8_ee64980ada8b40b6949b636c9aaa7409~mv2.png'
    }
  ],
  teas: [
    {
      name: 'Classic Energizer',
      desc: 'All-natural lift with zero crash. Brewed in-house with real loose-leaf tea.',
      price: 'From $5',
      cal: '~5 cal',
      img: 'https://static.wixstatic.com/media/f819b8_76d6e4afdd7f4b76aea49d0bc5a7e677~mv2.png'
    },
    {
      name: 'Peach Oolong',
      desc: 'Delicate oolong with a fresh peach twist. Light, refreshing, and oh-so-smooth.',
      price: 'From $5',
      cal: '~10 cal',
      img: 'https://static.wixstatic.com/media/f819b8_052d338f5927425091ab2b2a5e225d40~mv2.png'
    },
    {
      name: 'Citrus Burst',
      desc: 'Lemon and orange tea blend loaded with antioxidants. Morning in a cup.',
      price: 'From $5',
      cal: '~8 cal',
      img: 'https://static.wixstatic.com/media/f819b8_745cdf89a26a42e88b046e97f0c89c6d~mv2.png'
    },
    {
      name: 'Tropical Tea',
      desc: 'Island vibes in every sip. Hibiscus, mango, and passion fruit — zero guilt.',
      price: 'From $5',
      cal: '~12 cal',
      img: 'https://static.wixstatic.com/media/f819b8_8eef0579cdac4fa7b02c9105c6c3af52~mv2.png'
    }
  ],
  seasonal: [
    {
      name: 'Cinco De Mayo Special',
      desc: 'A limited-time festive blend bursting with bold flavor. Only here for a season.',
      price: 'From $8',
      cal: '~200 cal',
      img: 'https://static.wixstatic.com/media/f819b8_e32c735b6adf4901919e4da287a09b53~mv2.jpg'
    },
    {
      name: 'Summer Squeeze',
      desc: 'Watermelon and mint — the refreshing summer shake you didn\'t know you needed.',
      price: 'From $8',
      cal: '~185 cal',
      img: 'https://static.wixstatic.com/media/f819b8_94fdfb4ecc5f4614ac4c51952b4fb776~mv2.png'
    },
    {
      name: 'Golden Hour',
      desc: 'Turmeric, honey, and vanilla protein. Anti-inflammatory and absolutely delicious.',
      price: 'From $8',
      cal: '~210 cal',
      img: 'https://static.wixstatic.com/media/f819b8_7f6af68a5e4e4e849d552c6aaaa7b55b~mv2.png'
    },
    {
      name: 'Ask About Today\'s Special',
      desc: 'We rotate seasonal specials weekly. Stop in or follow us on social to see what\'s fresh!',
      price: 'Varies',
      cal: 'Varies',
      img: 'https://static.wixstatic.com/media/f819b8_ee64980ada8b40b6949b636c9aaa7409~mv2.png'
    }
  ]
};

// ---- RENDER MENU ----
function renderMenu(tab) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const items = menuData[tab] || [];

  grid.classList.add('fading');

  setTimeout(() => {
    grid.innerHTML = items.map(item => `
      <div class="menu-card">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-desc">${item.desc}</div>
          <div class="menu-card-price">
            ${item.price}
            <span class="calorie-badge">${item.cal}</span>
          </div>
        </div>
      </div>
    `).join('');

    grid.classList.remove('fading');
  }, 200);
}

// ---- TAB BUTTONS ----
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.tab);
    });
  });

  // Render default tab
  renderMenu('shakes');
}

// ---- MOBILE NAV ----
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

// ---- NAVBAR SCROLL SHADOW ----
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handler = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', handler, { passive: true });
}

// ---- SCROLL REVEAL ----
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- VIP FORM SUBMISSION ----
function initVipForm() {
  const btn = document.getElementById('vipSubmit');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName) {
      alert('Please enter your first name to continue!');
      document.getElementById('firstName').focus();
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      document.getElementById('email').focus();
      return;
    }

    // Success state
    btn.textContent = '🎉 You\'re on the VIP List!';
    btn.style.background = '#D4A017';
    btn.style.cursor = 'default';
    btn.disabled = true;

    // Optional: clear form fields
    ['firstName', 'lastName', 'email', 'phone', 'birthday'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  });
}

// ---- SMOOTH ANCHOR OFFSET (for fixed nav) ----
function initSmoothAnchor() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initMobileNav();
  initNavScroll();
  initScrollReveal();
  initVipForm();
  initSmoothAnchor();
});
