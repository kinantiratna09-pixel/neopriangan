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