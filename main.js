// main interactions: sticky navbar, scroll reveal, counters, sliders
document.addEventListener('DOMContentLoaded', () => {

    // sticky navbar blur
    const navbar = document.getElementById('navbar');

    function onScroll() {
        if (window.scrollY > 40) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // smooth internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });



    //buwat kondisi navbar
    function isIndexPage() {
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf("/") + 1);
        return file === "" || file === "index.html";
    }

    // language switcher and translation
    const translations = {
        id: {
            navHome: 'Home',
            navAbout: 'About',
            navCategories: 'Categories',
            navTimeline: 'Timeline',
            navEvents: 'Events',
            navMaps: 'Maps',
            btnExplore: 'Explore',
            heroEyebrow: 'WELCOME TO',
            heroTitle: 'Bandung',
            heroSubtitle: 'Creative Smart City',
            heroLead: 'Jelajahi destinasi wisata, kuliner, sejarah, budaya, serta berbagai pengalaman menarik di Kota Bandung dalam satu platform.',
            btnPlan: 'Plan My Trip',
            btnWatch: 'Watch Video',
            aboutSubtitle: 'TENTANG BANDUNG',
            aboutHeading: 'Discover the Soul of Bandung',
            aboutDescription: 'Bandung merupakan kota yang memadukan kreativitas, budaya, alam, kuliner, sejarah, dan teknologi dalam satu pengalaman wisata yang modern, nyaman, dan berkelanjutan.',
            aboutQuote: '“Aku kembali ke Bandung kepada cintaku yang sesungguhnya” <br> -Ir.Soekarno',
            btnExploreDestinations: 'Jelajahi Destinasi',
            btnSeeAllTourism: 'Lihat Semua Wisata',
            btnExploreCulture: 'Jelajahi Budaya Sunda ➔',
            btnSeeAllEvents: 'Lihat Semua Event ➔',
            btnStartQuiz: 'Mulai Kuis Sekarang ➔',
            footerInfoTitle: 'Informasi',
            footerGuide: 'Panduan Wisata',
            footerTransport: 'Transportasi',
            footerFood: 'Kuliner',
            footerStay: 'Akomodasi',
            footerNews: 'Berita & Update'
        },
        en: {
            navHome: 'Home',
            navAbout: 'About',
            navCategories: 'Categories',
            navTimeline: 'Timeline',
            navEvents: 'Events',
            navMaps: 'Maps',
            btnExplore: 'Explore',
            heroEyebrow: 'WELCOME TO',
            heroTitle: 'Bandung',
            heroSubtitle: 'Creative Smart City',
            heroLead: 'Explore Bandung tourist destinations, culinary spots, history, culture, and exciting experiences in one platform.',
            btnPlan: 'Plan My Trip',
            btnWatch: 'Watch Video',
            aboutSubtitle: 'ABOUT BANDUNG',
            aboutHeading: 'Discover the Soul of Bandung',
            aboutDescription: 'Bandung is a city that blends creativity, culture, nature, culinary delights, history, and technology into a modern, comfortable, and sustainable travel experience.',
            aboutQuote: '“I return to Bandung to my truest love” <br> -Ir.Soekarno',
            btnExploreDestinations: 'Explore Destinations',
            btnSeeAllTourism: 'See All Tourism',
            btnExploreCulture: 'Explore Sundanese Culture ➔',
            btnSeeAllEvents: 'See All Events ➔',
            btnStartQuiz: 'Start Quiz Now ➔',
            footerInfoTitle: 'Information',
            footerGuide: 'Travel Guide',
            footerTransport: 'Transportation',
            footerFood: 'Culinary',
            footerStay: 'Accommodation',
            footerNews: 'News & Updates'
        }
    };

    const i18nElements = document.querySelectorAll('[data-i18n-key]');
    const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));
    const langBtns = Array.from(document.querySelectorAll('.lang-btn'));
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    function setTextWithIcon(el, text) {
        const icon = el.querySelector('i');
        if (icon) {
            const iconHTML = icon.outerHTML;
            if (el.firstElementChild === icon) {
                el.innerHTML = iconHTML + ' ' + text;
            } else {
                el.innerHTML = text + ' ' + iconHTML;
            }
        } else {
            el.textContent = text;
        }
    }

    function setLanguage(lang) {
        const current = translations[lang] ? lang : 'id';
        i18nElements.forEach(el => {
            const key = el.dataset.i18nKey;
            const value = translations[current][key];
            if (!value) return;
            if (key === 'aboutQuote' || key === 'aboutHeading') {
                el.innerHTML = value;
            } else {
                setTextWithIcon(el, value);
            }
        });
        langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === current));
        document.documentElement.lang = current === 'en' ? 'en' : 'id';
        localStorage.setItem('siteLang', current);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    function closeMobileMenu() {
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (navToggle) navToggle.classList.remove('active');
        }
    }

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            if (navMenu) navMenu.classList.toggle('open');
            navToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    function updateActiveNav() {
        const sections = document.querySelectorAll('header[id], section[id]');
        let currentSectionId = 'home';
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= 120) {
                currentSectionId = sec.id;
            }
        });
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + currentSectionId);
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
    setLanguage(localStorage.getItem('siteLang') || 'id');

    const watchVideoBtn = document.getElementById('watchVideo');
    if (watchVideoBtn) {
        watchVideoBtn.addEventListener('click', () => {
            window.location.href = 'html/video.html';
        });
    }

    // scroll reveal
    const revealItems = document.querySelectorAll('.glass-card, .destination-card, .cat-card, .timeline-item, .event-card, .testi');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = 1;
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: .15 });
    revealItems.forEach(i => {
        i.style.transform = 'translateY(20px)';
        i.style.opacity = 0;
        revealObserver.observe(i);
    });

    // ===== ANIMASI ANGKA (scramble random dulu, baru settle) =====
    function animateStatNumber(el) {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const duration = 2000;
        const scrambleDuration = 800;
        const startTime = performance.now();

        function frame(now) {
            const elapsed = now - startTime;
            if (elapsed < scrambleDuration) {
                const randomNum = Math.floor(Math.random() * (target * 2)) + 1;
                el.textContent = randomNum + '+';
                requestAnimationFrame(frame);
            } else if (elapsed < duration) {
                const progress = (elapsed - scrambleDuration) / (duration - scrambleDuration);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                el.textContent = current + '+';
                requestAnimationFrame(frame);
            } else {
                el.textContent = target + '+';
            }
        }
        requestAnimationFrame(frame);
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatNumber(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    statNumbers.forEach(el => statObserver.observe(el));

    // events slider
    const eventsSlider = document.getElementById('eventsSlider');
    const prevBtn = document.getElementById('eventsPrev');
    const nextBtn = document.getElementById('eventsNext');
    if (eventsSlider && prevBtn && nextBtn) {
        let idx = 0;

        function show(i) { eventsSlider.style.transform = `translateX(${-i * (eventsSlider.children[0].offsetWidth + 12)}px)` }
        nextBtn.addEventListener('click', () => {
            idx = Math.min(idx + 1, eventsSlider.children.length - 1);
            show(idx);
        });
        prevBtn.addEventListener('click', () => {
            idx = Math.max(idx - 1, 0);
            show(idx);
        });
        window.addEventListener('resize', () => show(idx));
    }

    // hero media rotation
    const heroSlides = Array.from(document.querySelectorAll('.hero-bg'));
    let heroSlideIndex = 0;
    if (heroSlides.length) {
        setInterval(() => {
            heroSlides[heroSlideIndex].classList.remove('active');
            heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
            heroSlides[heroSlideIndex].classList.add('active');
        }, 3000);
    }

    // toggle Explore selected state
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (event) => {
            const href = exploreBtn.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault();
                exploreBtn.classList.toggle('active');
                if (!exploreBtn.classList.contains('active')) {
                    exploreBtn.textContent = 'Explore';
                }
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                exploreBtn.classList.add('active');
            }
        });
    }

    // simple testimonial auto-loop
    const testi = document.getElementById('testiSlider');
    if (testi) {
        let tIdx = 0;
        setInterval(() => {
            tIdx = (tIdx + 1) % testi.children.length;
            testi.style.transform = `translateX(${-tIdx * (testi.children[0].offsetWidth + 16)}px)`
        }, 4000);
    }

    // timeline progress hover auto-scroll small
    const timeline = document.getElementById('timelineTrack');
    if (timeline) {
        timeline.addEventListener('wheel', (e) => {
            e.preventDefault();
            timeline.scrollLeft += e.deltaY;
        });
    }

});

//======fade in animasi timeline sejarah========

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

revealEls.forEach(el => io.observe(el));

// Toggle Vertikal / Horizontal
const btns = document.querySelectorAll('.toggle-btn[data-view]');
const vView = document.getElementById('viewVertical');
const hView = document.getElementById('viewHorizontal');

if (btns.length && vView && hView) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (btn.dataset.view === 'vertical') {
                vView.style.display = 'block';
                hView.style.display = 'none';
            } else {
                vView.style.display = 'none';
                hView.style.display = 'block';
            }
        });
    });
}

// Tombol panah geser horizontal
const hScroll = document.getElementById('hScroll');
const hPrev = document.getElementById('hPrev');
const hNext = document.getElementById('hNext');
if (hScroll && hPrev && hNext) {
    const scrollAmount = 320;
    hPrev.addEventListener('click', () => hScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    hNext.addEventListener('click', () => hScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}
/* ===========================
   ACTIVE NAVBAR ON SCROLL
=========================== */

const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-menu a[href^='#']");

function setActiveMenu() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveMenu);
window.addEventListener("load", setActiveMenu);

//event

/* ============ Data ============ */
const CATEGORY_META = {
    budaya: { label: "Budaya", icon: "🎭", color: "#e08b4f" },
    musik: { label: "Musik", icon: "🎵", color: "#9b7cf0" },
    kuliner: { label: "Kuliner", icon: "🍜", color: "#ef7a6d" },
    teknologi: { label: "Teknologi", icon: "💻", color: "#4fc3d1" },
    olahraga: { label: "Olahraga", icon: "🏃", color: "#5fd196" },
    edukasi: { label: "Edukasi", icon: "📚", color: "#f0c15a" },
    seni: { label: "Seni & Kreatif", icon: "🖼️", color: "#e089c9" },
    komunitas: { label: "Komunitas", icon: "🤝", color: "#8f9ef0" },
};

const EVENTS = [
    { id: 1, cat: "musik", title: "Bandung Music Festival", desc: "Festival musik internasional dengan penampilan artis lokal dan mancanegara di panggung utama.", date: "2026-06-15", dateEnd: "2026-06-17", time: "18:00 - 23:00 WIB", location: "Lapangan Gasibu, Bandung", rating: 4.8, reviews: 2140, free: false },
    { id: 2, cat: "budaya", title: "Festival Budaya Sunda", desc: "Pagelaran seni tari, pantun, dan wayang golek merayakan warisan budaya Sunda.", date: "2026-03-25", time: "08:00 - 17:00 WIB", location: "Gedung Sate, Bandung", rating: 4.7, reviews: 1890, free: true },
    { id: 3, cat: "kuliner", title: "Bandung Culinary Week", desc: "Pekan kuliner khas Bandung menampilkan pedagang kaki lima hingga restoran ternama.", date: "2026-06-07", dateEnd: "2026-06-14", time: "10:00 - 22:00 WIB", location: "Trans Studio Mall, Bandung", rating: 4.6, reviews: 1620, free: false },
    { id: 4, cat: "teknologi", title: "Bandung Tech Summit 2026", desc: "Konferensi teknologi terbesar di Jawa Barat, membahas AI, startup, dan inovasi digital.", date: "2026-01-20", time: "08:30 - 16:30 WIB", location: "Bandung Techno Park, Bandung", rating: 4.9, reviews: 980, free: false },
    { id: 5, cat: "olahraga", title: "Bandung City Run", desc: "Lari santai keliling kota Bandung yang terbuka untuk umum, keluarga, dan komunitas lari.", date: "2026-05-28", time: "06:00 - 10:00 WIB", location: "Alun-Alun Kota, Bandung", rating: 4.5, reviews: 1540, free: true },
    { id: 6, cat: "seni", title: "Bandung Art Exhibition", desc: "Pameran seni rupa kontemporer dari seniman muda Bandung dan sekitarnya.", date: "2026-07-05", dateEnd: "2026-07-12", time: "10:00 - 18:00 WIB", location: "Selasar Sunaryo Art Space", rating: 4.4, reviews: 745, free: false },
    { id: 7, cat: "musik", title: "Jazz Malam di Braga", desc: "Konser jazz intim di jantung kawasan heritage Braga dengan suasana kolonial klasik.", date: "2026-04-11", time: "19:00 - 22:00 WIB", location: "Jalan Braga, Bandung", rating: 4.7, reviews: 890, free: false },
    { id: 8, cat: "edukasi", title: "Bandung Book Fair", desc: "Pameran buku tahunan dengan diskon besar, bedah buku, dan workshop menulis.", date: "2026-02-14", dateEnd: "2026-02-20", time: "09:00 - 21:00 WIB", location: "Balai Kota Bandung", rating: 4.6, reviews: 1120, free: true },
    { id: 9, cat: "komunitas", title: "Bandung Volunteer Day", desc: "Aksi bersih kota dan penggalangan dana bersama komunitas relawan se-Bandung Raya.", date: "2026-08-02", time: "07:00 - 12:00 WIB", location: "Taman Tegallega, Bandung", rating: 4.3, reviews: 410, free: true },
    { id: 10, cat: "kuliner", title: "Kopi & Kriya Weekend", desc: "Pasar akhir pekan menampilkan kedai kopi lokal dan produk kriya tangan.", date: "2026-03-08", time: "09:00 - 20:00 WIB", location: "Kawasan Dago, Bandung", rating: 4.5, reviews: 630, free: true },
    { id: 11, cat: "olahraga", title: "West Java MTB Challenge", desc: "Lomba sepeda gunung menyusuri perbukitan Bandung Utara untuk pehobi dan profesional.", date: "2026-09-14", time: "06:30 - 14:00 WIB", location: "Lembang, Bandung Barat", rating: 4.8, reviews: 520, free: false },
    { id: 12, cat: "teknologi", title: "Startup Weekend Bandung", desc: "Kompetisi membangun startup dalam 54 jam bersama mentor dan investor.", date: "2026-05-09", dateEnd: "2026-05-11", time: "17:00 - 21:00 WIB", location: "Co&Co Space, Bandung", rating: 4.6, reviews: 380, free: false },
    { id: 13, cat: "budaya", title: "Helaran Cap Go Meh", desc: "Karnaval budaya Tionghoa-Sunda dengan barongsai, liong, dan arak-arakan warna-warni.", date: "2026-02-01", time: "15:00 - 20:00 WIB", location: "Jalan Kelenteng, Bandung", rating: 4.9, reviews: 1980, free: true },
    { id: 14, cat: "seni", title: "Mural Fest Kiaracondong", desc: "Festival seni mural jalanan menghidupkan tembok-tembok kota bersama seniman lokal.", date: "2026-06-21", time: "08:00 - 18:00 WIB", location: "Kiaracondong, Bandung", rating: 4.4, reviews: 305, free: true },
    { id: 15, cat: "musik", title: "Orkestra Kota Kembang", desc: "Pertunjukan orkestra klasik oleh musisi muda berbakat Bandung.", date: "2026-04-27", time: "19:30 - 21:30 WIB", location: "Gedung Merdeka, Bandung", rating: 4.7, reviews: 610, free: false },
    { id: 16, cat: "edukasi", title: "Sains Populer untuk Anak", desc: "Rangkaian eksperimen sains interaktif yang dirancang untuk anak-anak usia sekolah.", date: "2026-07-19", time: "09:00 - 12:00 WIB", location: "Museum Geologi, Bandung", rating: 4.5, reviews: 275, free: true },
];

/* ============ State ============ */
const state = {
    search: "",
    categories: new Set(),
    sort: "terdekat",
    page: 1,
    perPage: 6,
    saved: new Set(),
};

const els = {
    cards: document.getElementById("cardsContainer"),
    count: document.getElementById("resultsCount"),
    pagination: document.getElementById("pagination"),
    tabs: document.getElementById("tabs"),
    search: document.getElementById("searchInput"),
    sortbox: document.getElementById("sortbox"),
    sortTrigger: document.getElementById("sortTrigger"),
    sortMenu: document.getElementById("sortMenu"),
    sortLabel: document.getElementById("sortLabel"),
    resetFilters: document.getElementById("resetFilters"),
    applyFilters: document.getElementById("applyFilters"),
};

/* ============ Thumbnail art (generated, no external images) ============ */
function thumbSVG(cat) {
    const meta = CATEGORY_META[cat];
    const c = meta.color;
    return `
  <svg class="card__thumb-art" viewBox="0 0 150 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g${cat}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#0a1130" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="150" height="100" fill="url(#g${cat})"/>
    <circle cx="120" cy="20" r="34" fill="${c}" opacity="0.18"/>
    <circle cx="15" cy="85" r="26" fill="${c}" opacity="0.15"/>
  </svg>`;
}

/* ============ Rendering ============ */
function fmtDate(ev) {
    const opts = { day: "2-digit", month: "short", year: "numeric" };
    const start = new Date(ev.date).toLocaleDateString("id-ID", opts);
    if (ev.dateEnd) {
        const end = new Date(ev.dateEnd).toLocaleDateString("id-ID", opts);
        return `${start} – ${end}`;
    }
    return start;
}

function getFiltered() {
    let list = EVENTS.filter(ev => {
        if (state.categories.size > 0 && !state.categories.has(ev.cat)) return false;
        if (state.search && !ev.title.toLowerCase().includes(state.search.toLowerCase()) &&
            !ev.location.toLowerCase().includes(state.search.toLowerCase())) return false;
        return true;
    });

    switch (state.sort) {
        case "terdekat":
            list = list.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case "terjauh":
            list = list.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case "populer":
            list = list.sort((a, b) => b.reviews - a.reviews);
            break;
        case "rating":
            list = list.sort((a, b) => b.rating - a.rating);
            break;
    }
    return list;
}

function render() {
    const filtered = getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));
    state.page = Math.min(state.page, totalPages);
    const start = (state.page - 1) * state.perPage;
    const pageItems = filtered.slice(start, start + state.perPage);

    els.count.textContent = `Menampilkan ${filtered.length} event`;

    if (pageItems.length === 0) {
        els.cards.innerHTML = `
      <div class="empty-state">
        <strong>Belum ada event yang cocok</strong>
        Coba ubah kata kunci pencarian atau kategori filter kamu.
      </div>`;
    } else {
        els.cards.innerHTML = pageItems.map(cardHTML).join("");
    }

    renderPagination(totalPages);
    bindCardEvents();
}

function cardHTML(ev) {
    const meta = CATEGORY_META[ev.cat];
    const isSaved = state.saved.has(ev.id);
    return `
  <article class="card" data-id="${ev.id}">
    <div class="card__thumb">
      ${thumbSVG(ev.cat)}
      <span class="card__badge">${meta.icon} ${meta.label}</span>
    </div>
    <div class="card__body">
      <h3 class="card__title">${ev.title}</h3>
      <p class="card__desc">${ev.desc}</p>
      <div class="card__meta">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${fmtDate(ev)}</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>${ev.time}</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${ev.location}</span>
        ${ev.free ? `<span style="color:var(--gold-bright); font-weight:600;">Gratis</span>` : ""}
      </div>
    </div>
    <div class="card__side">
      <div class="card__rating">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.63 22 9.24 16.8 14.14 18.18 21 12 17.4 5.82 21 7.2 14.14 2 9.24 8.91 8.63"/></svg>
        ${ev.rating.toFixed(1)}
        <small>(${ev.reviews.toLocaleString("id-ID")})</small>
      </div>
      <button class="card__save ${isSaved ? "saved" : ""}" aria-label="Simpan event" data-save="${ev.id}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>
  </article>`;
}

function bindCardEvents(){
  els.cards.querySelectorAll("[data-save]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.save);
      if (state.saved.has(id)) state.saved.delete(id);
      else state.saved.add(id);
      btn.classList.toggle("saved");
      btn.querySelector("svg").setAttribute("fill", state.saved.has(id) ? "currentColor" : "none");
    });
  });
}

/* ============ Pagination ============ */
function renderPagination(totalPages){
  let html = "";
  html += `<button class="page-btn" data-page="prev" ${state.page===1 ? "disabled" : ""} aria-label="Halaman sebelumnya">‹</button>`;

  const pages = [];
  const p = state.page;
  pages.push(1);
  if (p > 3) pages.push("dots");
  for (let i = Math.max(2, p-1); i <= Math.min(totalPages-1, p+1); i++) pages.push(i);
  if (p < totalPages - 2) pages.push("dots");
  if (totalPages > 1) pages.push(totalPages);

  pages.forEach(pg => {
    if (pg === "dots"){
      html += `<span class="page-dots">…</span>`;
    } else {
      html += `<button class="page-btn ${pg===p ? "page-btn--active" : ""}" data-page="${pg}">${pg}</button>`;
    }
  });

  html += `<button class="page-btn" data-page="next" ${state.page===totalPages ? "disabled" : ""} aria-label="Halaman berikutnya">›</button>`;
  els.pagination.innerHTML = html;

  els.pagination.querySelectorAll(".page-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.page;
      if (val === "prev") state.page = Math.max(1, state.page - 1);
      else if (val === "next") state.page = Math.min(totalPages, state.page + 1);
      else state.page = Number(val);
      render();
      document.querySelector(".results").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ============ Filters: sidebar checkboxes ============ */
const sidebarChecks = document.querySelectorAll('.check-row input[data-cat]');
sidebarChecks.forEach(chk => {
  chk.addEventListener("change", () => {
    if (chk.dataset.cat === "semua"){
      if (chk.checked){
        state.categories.clear();
        sidebarChecks.forEach(c => { if (c.dataset.cat !== "semua") c.checked = false; });
      }
    } else {
      document.querySelector('.check-row input[data-cat="semua"]').checked = false;
      if (chk.checked) state.categories.add(chk.dataset.cat);
      else state.categories.delete(chk.dataset.cat);
      if (state.categories.size === 0){
        document.querySelector('.check-row input[data-cat="semua"]').checked = true;
      }
    }
    syncTabs();
  });
});

function syncTabs(){
  els.tabs.querySelectorAll(".tab").forEach(tab => {
    const cat = tab.dataset.cat;
    const active = (cat === "semua" && state.categories.size === 0) || state.categories.has(cat);
    tab.classList.toggle("tab--active", active);
  });
}

/* ============ Tabs ============ */
els.tabs.addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  const cat = tab.dataset.cat;
  state.categories.clear();
  if (cat !== "semua") state.categories.add(cat);

  sidebarChecks.forEach(c => {
    c.checked = (c.dataset.cat === "semua" && cat === "semua") || c.dataset.cat === cat;
  });

  syncTabs();
  state.page = 1;
  render();
});

/* ============ Apply / Reset ============ */
els.applyFilters.addEventListener("click", () => {
  state.page = 1;
  render();
});

els.resetFilters.addEventListener("click", () => {
  state.categories.clear();
  state.search = "";
  els.search.value = "";
  sidebarChecks.forEach(c => { c.checked = c.dataset.cat === "semua"; });
  document.getElementById("dateFrom").value = "";
  document.getElementById("locationSelect").value = "";
  document.querySelectorAll('input[name="harga"]').forEach(r => r.checked = false);
  syncTabs();
  state.page = 1;
  render();
});

/* ============ Search ============ */
let searchTimer;
els.search.addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = e.target.value.trim();
    state.page = 1;
    render();
  }, 200);
});

/* ============ Sort dropdown ============ */
els.sortTrigger.addEventListener("click", () => {
  const open = els.sortbox.classList.toggle("open");
  els.sortTrigger.setAttribute("aria-expanded", String(open));
});

els.sortMenu.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    state.sort = li.dataset.value;
    els.sortLabel.textContent = li.textContent;
    els.sortMenu.querySelectorAll("li").forEach(l => l.classList.remove("active"));
    li.classList.add("active");
    els.sortbox.classList.remove("open");
    render();
  });
});

document.addEventListener("click", (e) => {
  if (!els.sortbox.contains(e.target)) els.sortbox.classList.remove("open");
});

document.querySelector(`.sortbox__menu li[data-value="terdekat"]`).classList.add("active");

/* ============ Hero lantern lights (signature ambient detail) ============ */
(function initLanterns(){
  const container = document.getElementById("heroLights");
  const count = 26;
  for (let i = 0; i < count; i++){
    const dot = document.createElement("span");
    dot.className = "lantern-dot";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${20 + Math.random() * 70}%`;
    dot.style.animationDelay = `${Math.random() * 3.5}s`;
    dot.style.animationDuration = `${2.8 + Math.random() * 2.4}s`;
    container.appendChild(dot);
  }
})();

/* ============ Initial render ============ */
render();