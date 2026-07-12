document.addEventListener('DOMContentLoaded', () => {

    // timeline progress hover auto-scroll small (untuk elemen #timelineTrack kalau ada)
    const timeline = document.getElementById('timelineTrack');
    if (timeline) {
        timeline.addEventListener('wheel', (e) => {
            e.preventDefault();
            timeline.scrollLeft += e.deltaY;
        });
    }

    //====== fade in animasi timeline sejarah ========
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
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
    }

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

});
