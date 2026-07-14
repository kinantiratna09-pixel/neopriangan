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
            pageTitle: 'Neopriangan | Bandung',
            brandText: 'Kota Pintar Kreatif',
            navHome: 'Beranda',
            navAbout: 'Hub',
            navCategories: 'Sejarah',
            navTimeline: 'Sejarah',
            navEvents: 'Acara',
            navMaps: 'Kuis',
            heroEyebrow: 'Selamat Datang',
            heroTitle: '<span class="gradient-bandung">Bandung</span>',
            heroSubtitle: 'Creative Smart City',
            heroLead: 'Jelajahi destinasi wisata, kuliner, sejarah, budaya, serta berbagai pengalaman menarik di Kota <span class="gradient-bandung">Bandung</span> dalam satu platform.',
            btnPlan: 'Rencanakan Perjalanan',
            btnWatch: 'Tonton Video',
            scrollDown: 'Gulir ke bawah',
            btnExplore: 'Jelajahi',

            aboutSubtitle: 'TENTANG <span class="gradient-bandung">Bandung</span>',
            aboutHeading: 'Discover the Soul of <br><span class="gradient-bandung">Bandung</span>',
            aboutDescription: 'Bandung merupakan kota yang memadukan kreativitas, budaya, alam, kuliner, sejarah, dan teknologi dalam satu pengalaman wisata yang modern, nyaman, dan berkelanjutan.',
            aboutQuote: '“Aku kembali ke <span class="gradient-bandung">Bandung</span> kepada cintaku yang sesungguhnya” <br> -Ir.Soekarno',

            sectionEyebrow: 'DESTINASI PILIHAN',
            sectionTitle: 'Tempat Terfavorit <br>di <span class="gradient-bandung">Bandung</span>',
            sectionDesc: 'Kunjungi destinasi ikonik pilihan pelancong dan temukan pengalaman tak terlupakan.',
            rekomendasi: 'Rekomendasi berdasarkan rating & popularitas',
            creative: 'Kreatif',
            creativeDesc: 'Kota kreatif dengan komunitas dan industri kreatif yang berkembang pesat.',
            heritage: 'Heritage',
            heritageDesc: 'Jejak sejarah di setiap sudut kota, dari masa kolonial hingga kemerdekaan.',
            culinary: 'Kuliner',
            culinaryDesc: 'Ragam kuliner khas <span class="gradient-bandung">Bandung</span> yang lezat dan menggugah selera.',
            nature: 'Alam',
            natureDesc: 'Keindahan alam pegunungan, kawah, dan udara yang menyegarkan.',
            smartcity: 'Smart City',
            smartcityDesc: 'Inovasi teknologi untuk pelayanan publik yang modern dan terintegrasi.',
            aboutbanner: '<span class="gradient-bandung">Bandung</span> bergerak menuju kota masa depan',
            bandungcity: 'Dengan kolaborasi masyarakat, teknologi, dan pemerintah, <span class="gradient-bandung">Bandung</span> terus berinovasi menjadi kota yang lebih baik.',
            btnExploreDestinations: 'Jelajahi Destinasi',
            bannerHeading: 'Masih banyak destinasi menarik lainnya!',
            bannerParagraph: 'Temukan lebih dari 150+ destinasi wisata <span class="gradient-bandung">Bandung</span> lengkap dengan rating, lokasi, dan informasi menarik.',
            btnSeeAllTourism: 'Lihat Semua Wisata',

            cultureHubTitle: 'SUNDA CULTURE HUB',
            cultureHubHeading: 'Kenali Budaya Sunda, <br>Jiwa <span class="gradient-bandung">Bandung</span>',
            cultureHubDescription: 'Budaya Sunda adalah bagian tak terpisahkan dari identitas masyarakat <span class="gradient-bandung">Bandung</span> yang ramah, kreatif, dan penuh makna.',
            cultureQuote: '"Ngemban dina kaharmonisan, berkarya dengan kreativitas, menyapa dunia dengan keramahan."',
            cultureQuoteAuthor: '- Nilai Masyarakat Sunda',
            cardculture: 'Bahasa Sunda Mini',
            cardcultureDesc: 'Kenali kosakata dan frasa dasar Bahasa Sunda yang digunakan dalam kehidupan sehari-hari.',
            card2: 'Angklung',
            pAngklung: 'Alat musik tradisional yang telah diakui UNESCO sebagai warisan budaya dunia.',
            card3: 'Tari Jaipong',
            pJaipong: 'Tari khas Sunda yang energik, anggun, dan penuh ekspresi kegembiraan.',
            card4: 'Pakaian Adat Sunda',
            pSunda: 'Keindahan busana tradisional Sunda yang sarat makna dan nilai budaya.',
            card5: 'Nilai Ramah & Kreatif',
            pRamah: 'Keramahan dan kreativitas masyarakat <span class="gradient-bandung">Bandung</span> menjadi jiwa dari setiap karya dan inovasi.',
            btnLearnMoreBlue: 'Pelajari lebih lanjut ➔',
            btnLearnMoreGreen: 'Pelajari lebih lanjut ➔',
            btnLearnMoreOrange: 'Pelajari lebih lanjut ➔',
            btnLearnMorePurple: 'Pelajari lebih lanjut ➔',
            btnLearnMorePink: 'Pelajari lebih lanjut ➔',
            btnExploreCulture: 'Jelajahi Budaya Sunda ➔',

            timelineTitle: 'Bandung TIMELINE',
            timelineHeading: 'Perjalanan Sejarah <br>Kota Kembang',
            timelineDesc: 'Dari masa ke masa, <span class="gradient-bandung">Bandung</span> terus tumbuh menjadi kota yang kreatif, inovatif, dan selalu beradaptasi dengan perubahan zaman.',
            tahun1: '1900 Pendirian landmark kota bersejarah Bandung mulai berkembang sebagai kota modern dengan dibangunnya berbagai bangunan ikonik peninggalan masa kolonial.',
            tahun2: '1950 Perkembangan seni dan pusat budaya Bandung dikenal sebagai pusat kreativitas, seni, dan pendidikan yang melahirkan banyak tokoh serta karya inspiratif.',
            tahun3: '2000 Modernisasi infrastruktur dan tata kota. Transformasi besar-besaran di bidang infrastruktur, transportasi, dan teknologi menjadikan Bandung kota yang semakin maju dan nyaman.',
            tahun4: '2025 Inisiasi global integrasi Smart City. Bandung melangkah menuju kota cerdas yang terintegrasi, berkelanjutan, dan berdaya saing global.',
            labelblue: 'Awal Kota',
            labelgreen: 'Masa Berkembang',
            labelorange: 'Masa Modern',
            labelpurple: 'Masa Depan',
            textbenner: 'Sejarah membentuk masa depan. Dari warisan sejarah hingga inovasi modern, Bandung terus bergerak menjadi kota yang lebih baik untuk semua.',
            btnhistory: 'Pelajari Lebih Lanjut',

            eventtitle: 'ACARA YANG AKAN DATANG',
            eventdes: 'Acara seru yang akan datang, agenda perayaan kreativitas, budaya, dan inovasi terdekat di Kota Bandung.',
            eventdes2: 'Jangan sampai ketinggalan! Catat tanggalnya dan ikut ramaikan Acara di Bandung.',
            eventHeroTitle: 'Semua Event di <span>Bandung</span>',
            eventHeroSubtitle: 'Temukan berbagai event menarik di Bandung, dari budaya, musik, kuliner, hingga teknologi.',
            eventSearchPlaceholder: 'Cari event, nama acara, atau lokasi...',
            eventSortNearest: 'Tanggal Terdekat',
            eventSortFarthest: 'Tanggal Terjauh',
            eventSortPopular: 'Event Populer',
            eventSortRating: 'Rating Tertinggi',
            eventFilterTitle: 'Filter Event',
            eventCategoryTitle: 'Kategori',
            eventAllCategories: 'Semua Kategori',
            eventDateTitle: 'Tanggal',
            eventLocationTitle: 'Lokasi',
            eventLocationPlaceholder: 'Pilih lokasi',
            eventPriceTitle: 'Harga Tiket',
            eventFree: 'Gratis',
            eventPaid: 'Berbayar',
            eventApplyFilters: 'Terapkan Filter',
            eventReset: 'Reset',
            eventAllTab: 'Semua',
            eventResultsCount: 'Menampilkan {count} event',
            eventNoResultsTitle: 'Belum ada event yang cocok',
            eventNoResultsDesc: 'Coba ubah kata kunci pencarian atau kategori filter kamu.',
            eventSaveAria: 'Simpan event',
            eventPaginationPrev: 'Halaman sebelumnya',
            eventPaginationNext: 'Halaman berikutnya',
            eventCategoryBudaya: 'Budaya',
            eventCategoryMusik: 'Musik',
            eventCategoryKuliner: 'Kuliner',
            eventCategoryTeknologi: 'Teknologi',
            eventCategoryOlahraga: 'Olahraga',
            eventCategoryEdukasi: 'Edukasi',
            eventCategorySeni: 'Seni & Kreatif',
            eventCategoryKomunitas: 'Komunitas',
            btnSeeAllEvents: 'Lihat Semua Event ➔',
            btnStartQuiz: 'Mulai Kuis Sekarang ➔',

            footerInfoTitle: 'Informasi',
            footerGuide: 'Panduan Wisata',
            footerTransport: 'Transportasi',
            footerFood: 'Kuliner',
            footerStay: 'Akomodasi',
            footerNews: 'Berita & Pembaruan',
            footerBrandDesc: 'Platform informasi wisata dan budaya Kota <span class="gradient-bandung">Bandung</span> yang kreatif, inovatif, dan terintegrasi untuk semua.',
            footerExplore: 'Jelajahi',
            footerDestinations: 'Destinasi',
            footerEvents: 'Acara',
            footerTimeline: 'Timeline',
            footerQuiz: 'Kuis Interaktif',
            leaderboardTitle: 'Papan Peringkat',
            leaderboardSeeAll: 'Lihat Semua',

            timelinePageTitle: '<span class="gradient-bandung">Perjalanan Waktu</span> Bandung',
            timelinePageSubtitle: 'Melihat Alur Sederhana Perkembangan dari <span class="gradient-bandung">Bandung</span> Tempo Dulu hingga Bandung Era Smart City',
            timelineViewVertical: 'Vertikal',
            timelineViewHorizontal: 'Horizontal',
            timelineHint: 'geser atau pakai tombol panah untuk melihat lebih banyak',
            timelineNavPrev: 'Sebelumnya',
            timelineNavNext: 'Berikutnya',
            timelineItem1Tag: '<span class="gradient-bandung">Bandung</span> Tempo Dulu',
            timelineItem1Desc: '<span class="gradient-bandung">Bandung</span> awalnya merupakan daerah pedalaman. Titik baliknya terjadi ketika Gubernur Jenderal Daendels membangun Jalan Raya Pos (Groote Postweg). Bupati <span class="gradient-bandung">Bandung</span> saat itu, R.A. Wiranatakusumah II, memindahkan ibu kota kabupaten dari Krapyak (Dayeuhkolot) ke situs kota <span class="gradient-bandung">Bandung</span> yang sekarang pada tahun 1810 agar lebih dekat dengan jalur transportasi utama tersebut.',
            timelineItem1Media: 'Foto Bandung Tempo Dulu<br>(Jalan Braga)',
            timelineItem2Tag: 'Modernisasi dan Asia Afrika',
            timelineItem2Desc: 'Jalan Raya Pos bertransformasi menjadi pusat modernisasi dengan arsitektur bergaya Art Deco yang megah, seperti Hotel Savoy Homann dan Gedung Merdeka, hingga dijuluki Parijs van Java. Puncaknya, kawasan ini mencetak sejarah dunia saat menjadi tempat berlangsungnya Konferensi Asia Afrika (KAA) pada April 1955 yang mempersatukan bangsa-bangsa di Asia dan Afrika.',
            timelineItem2Media: 'Foto Konferensi Asia Afrika<br>1955',
            timelineItem3Tag: '<span class="gradient-bandung">Bandung</span> Lautan Api',
            timelineItem3Desc: 'Menolak menyerahkan kota kepada Sekutu dan NICA untuk dijadikan markas militer, sekitar 200.000 penduduk <span class="gradient-bandung">Bandung</span> Selatan membakar rumah mereka sendiri dalam waktu tujuh jam sebelum mengungsi. Peristiwa heroik ini juga menandai gugurnya Mohammad Toha saat meledakkan gudang mesiu sekutu di Dayeuhkolot.',
            timelineItem3Media: 'Monumen Bandung Lautan Api<br>24 Maret 1946',
            timelineItem4Tag: '<span class="gradient-bandung">Bandung</span> Kota Pendidikan',
            timelineItem4Desc: 'Identitas <span class="gradient-bandung">Bandung</span> sebagai kota pendidikan berakar dari dibukanya Technische Hoogeschool te <span class="gradient-bandung">Bandoeng</span> (sekarang ITB) pada 3 Juli 1920 sebagai sekolah tinggi teknik pertama di Hindia Belanda. Kehadiran institusi ini menarik kaum intelektual dari berbagai daerah dan memicu lahirnya berbagai perguruan tinggi besar lainnya yang membentuk karakter akademis kota ini.',
            timelineItem4Media: 'Technische Hoogeschool te Bandoeng<br>(ITB) 1920',
            timelineItem5Tag: '<span class="gradient-bandung">Bandung</span> Kota Kreatif',
            timelineItem5Desc: '<span class="gradient-bandung">Bandung</span> resmi dinobatkan sebagai bagian dari UNESCO Creative Cities Network (UCCN) dalam bidang Design pada Desember 2015. Pengakuan internasional ini didasarkan pada kuatnya ekonomi kreatif yang digerakkan oleh komunitas anak muda, mulai dari industri fashion lokal (distro), musik independen, hingga desain grafis dan arsitektur.',
            timelineItem5Media: 'Bandung Creative Hub',
            timelineItem6Tag: '<span class="gradient-bandung">Bandung</span> Kota Pintar',
            timelineItem6Desc: 'Transformasi <span class="gradient-bandung">Bandung</span> menuju kota pintar diwujudkan melalui integrasi teknologi informasi dalam tata kelola pemerintahan dan pelayanan publik. Langkah besarnya ditandai dengan peresmian <span class="gradient-bandung">Bandung</span> Command Center (BCC) untuk memantau kondisi kota secara real-time, mengintegrasikan data internal, serta mempercepat penanganan pengaduan warga melalui aplikasi digital.',
            timelineItem6Media: 'Bandung Command Center'
        },
        en: {
            pageTitle: 'Neopriangan | Bandung',
            brandText: 'Creative Smart City',
            navHome: 'Home',
            navAbout: 'About',
            navCategories: 'Categories',
            navTimeline: 'Timeline',
            navEvents: 'Events',
            navMaps: 'Maps',
            heroEyebrow: 'WELCOME TO',
            heroTitle: '<span class="gradient-bandung">Bandung</span>',
            heroSubtitle: 'Creative Smart City',
            heroLead: 'Explore Bandung tourist destinations, culinary spots, history, culture, and exciting experiences in one platform.',
            btnPlan: 'Plan My Trip',
            btnWatch: 'Watch Video',
            scrollDown: 'Scroll Down',
            btnExplore: 'Explore',

            aboutSubtitle: 'ABOUT BANDUNG',
            aboutHeading: 'Discover the Soul of <br><span class="gradient-bandung">Bandung</span>',
            aboutDescription: 'Bandung is a city that blends creativity, culture, nature, culinary delights, history, and technology into a modern, comfortable, and sustainable travel experience.',
            aboutQuote: '“I return to Bandung to my truest love” <br> -Ir.Soekarno',

            sectionEyebrow: 'FEATURED DESTINATIONS',
            sectionTitle: 'Favorite Places <br>in <span class="gradient-bandung">Bandung</span>',
            sectionDesc: 'Visit iconic traveler-favorite destinations and discover unforgettable experiences.',
            rekomendasi: 'Recommendations based on ratings & popularity',
            creative: 'Creative',
            creativeDesc: 'A creative city with thriving creative communities and industries.',
            heritage: 'Heritage',
            heritageDesc: 'Historical traces across the city, from colonial times to independence.',
            culinary: 'Culinary',
            culinaryDesc: 'Bandung’s signature cuisine that is delicious and inspiring.',
            nature: 'Nature',
            natureDesc: 'The beauty of mountains, crater lakes, and refreshing air.',
            smartcity: 'Smart City',
            smartcityDesc: 'Technology innovation for modern, integrated public services.',
            aboutbanner: '<span class="gradient-bandung">Bandung</span> moves toward a future city',
            bandungcity: 'Through public, technology, and government collaboration, <span class="gradient-bandung">Bandung</span> keeps innovating to become a better city.',
            btnExploreDestinations: 'Explore Destinations',
            bannerHeading: 'There are many more exciting destinations!',
            bannerParagraph: 'Discover over 150+ Bandung tourism spots complete with ratings, locations, and interesting information.',
            btnSeeAllTourism: 'See All Tourism',

            cultureHubTitle: 'SUNDA CULTURE HUB',
            cultureHubHeading: 'Discover Sundanese Culture, <br>The Soul of <span class="gradient-bandung">Bandung</span>',
            cultureHubDescription: 'Sundanese culture is an integral part of Bandung’s identity, warm, creative, and meaningful.',
            cultureQuote: '"Embrace harmony, create with creativity, greet the world with hospitality."',
            cultureQuoteAuthor: '- Sundanese Community Values',
            cardculture: 'Sundanese Language Mini',
            cardcultureDesc: 'Learn basic Sundanese words and phrases used in everyday life.',
            card2: 'Angklung',
            pAngklung: 'A traditional musical instrument recognized by UNESCO as a world cultural heritage.',
            card3: 'Jaipong Dance',
            pJaipong: 'A dynamic Sundanese dance that is elegant and full of joyful expression.',
            card4: 'Sundanese Traditional Clothing',
            pSunda: 'The beauty of traditional Sundanese attire rich with meaning and cultural value.',
            card5: 'Friendly & Creative Values',
            pRamah: 'Bandung people’s friendliness and creativity are the spirit behind every work and innovation.',
            btnLearnMoreBlue: 'Learn More ➔',
            btnLearnMoreGreen: 'Learn More ➔',
            btnLearnMoreOrange: 'Learn More ➔',
            btnLearnMorePurple: 'Learn More ➔',
            btnLearnMorePink: 'Learn More ➔',
            btnExploreCulture: 'Explore Sundanese Culture ➔',

            timelineTitle: 'Bandung TIMELINE',
            timelineHeading: 'The Historical Journey<br>of Bandung',
            timelineDesc: 'From era to era, <span class="gradient-bandung">Bandung</span> continues to grow into a creative, innovative city that always adapts to changing times.',
            tahun1: '1900 The founding of historic city landmarks as Bandung began developing into a modern city with iconic colonial-era architecture.',
            tahun2: '1950 The growth of arts and culture centers as Bandung became a hub of creativity, arts, and education producing many inspiring figures and works.',
            tahun3: '2000 Modernization of infrastructure and city planning, transforming Bandung into a more advanced and comfortable city.',
            tahun4: '2025 Global smart city integration initiatives, moving Bandung toward a sustainable and globally competitive smart city.',
            labelblue: 'Early City',
            labelgreen: 'Growth Era',
            labelorange: 'Modern Era',
            labelpurple: 'Future Era',
            textbenner: 'History shapes the future. From heritage to modern innovation, Bandung continues moving toward a better city for everyone.',
            btnhistory: 'Learn More',

            eventtitle: 'UPCOMING EVENTS',
            eventdes: 'Exciting upcoming events celebrating creativity, culture, and innovation in Bandung.',
            eventdes2: 'Don\'t miss out! Save the dates and join Bandung\'s events.',
            eventHeroTitle: 'All Events in <span>Bandung</span>',
            eventHeroSubtitle: 'Discover exciting events in Bandung, from culture, music, culinary, to technology.',
            eventSearchPlaceholder: 'Search events, event names, or locations...',
            eventSortNearest: 'Nearest Date',
            eventSortFarthest: 'Farthest Date',
            eventSortPopular: 'Popular Events',
            eventSortRating: 'Highest Rating',
            eventFilterTitle: 'Filter Events',
            eventCategoryTitle: 'Category',
            eventAllCategories: 'All Categories',
            eventDateTitle: 'Date',
            eventLocationTitle: 'Location',
            eventLocationPlaceholder: 'Select location',
            eventPriceTitle: 'Ticket Price',
            eventFree: 'Free',
            eventPaid: 'Paid',
            eventApplyFilters: 'Apply Filters',
            eventReset: 'Reset',
            eventAllTab: 'All',
            eventResultsCount: 'Showing {count} events',
            eventNoResultsTitle: 'No matching events yet',
            eventNoResultsDesc: 'Try changing the search keywords or filter categories.',
            eventSaveAria: 'Save event',
            eventPaginationPrev: 'Previous page',
            eventPaginationNext: 'Next page',
            eventCategoryBudaya: 'Culture',
            eventCategoryMusik: 'Music',
            eventCategoryKuliner: 'Culinary',
            eventCategoryTeknologi: 'Technology',
            eventCategoryOlahraga: 'Sports',
            eventCategoryEdukasi: 'Education',
            eventCategorySeni: 'Arts & Creative',
            eventCategoryKomunitas: 'Community',
            btnSeeAllEvents: 'See All Events ➔',
            btnStartQuiz: 'Start Quiz Now ➔',

            footerInfoTitle: 'Information',
            footerGuide: 'Travel Guide',
            footerTransport: 'Transportation',
            footerFood: 'Culinary',
            footerStay: 'Accommodation',
            footerNews: 'News & Updates',
            footerBrandDesc: 'A tourism and culture information platform for Bandung that is creative, innovative, and integrated for everyone.',
            footerExplore: 'Explore',
            footerDestinations: 'Destinations',
            footerEvents: 'Events',
            footerTimeline: 'Timeline',
            footerQuiz: 'Interactive Quiz',
            leaderboardTitle: 'Leaderboard',
            leaderboardSeeAll: 'See All',

            timelinePageTitle: '<span class="gradient-bandung">Bandung</span> Timeline',
            timelinePageSubtitle: 'A simple look at how <span class="gradient-bandung">Bandung</span> grew from its past into the Smart City era',
            timelineViewVertical: 'Vertical',
            timelineViewHorizontal: 'Horizontal',
            timelineHint: 'drag or use arrow buttons to see more',
            timelineNavPrev: 'Previous',
            timelineNavNext: 'Next',
            timelineItem1Tag: '<span class="gradient-bandung">Bandung</span> in the Old Days',
            timelineItem1Desc: '<span class="gradient-bandung">Bandung</span> began as an inland region. The turning point came when Governor-General Daendels built the Jalan Raya Pos (Groote Postweg). The regent of <span class="gradient-bandung">Bandung</span> at the time, R.A. Wiranatakusumah II, moved the regency capital from Krapyak (Dayeuhkolot) to the current city site in 1810 to be closer to the main transport route.',
            timelineItem1Media: 'Old Bandung Photo<br>(Braga Street)',
            timelineItem2Tag: 'Modernization and Asia-Africa',
            timelineItem2Desc: 'The Jalan Raya Pos transformed into a center of modernization with grand Art Deco architecture, such as Savoy Homann Hotel and Merdeka Building, earning it the nickname Parijs van Java. Its peak came when this area hosted the Asia-Africa Conference (AAC) in April 1955, uniting nations across Asia and Africa.',
            timelineItem2Media: 'Asia-Africa Conference Photo<br>1955',
            timelineItem3Tag: '<span class="gradient-bandung">Bandung</span> Lautan Api',
            timelineItem3Desc: 'Rejecting surrender of the city to the Allies and NICA to serve as a military base, around 200,000 residents of South <span class="gradient-bandung">Bandung</span> burned their own homes within seven hours before evacuating. This heroic event also marked the death of Mohammad Toha when he detonated the Allied ammunition depot at Dayeuhkolot.',
            timelineItem3Media: 'Bandung Lautan Api Monument<br>24 March 1946',
            timelineItem4Tag: '<span class="gradient-bandung">Bandung</span> as an Education City',
            timelineItem4Desc: 'Bandung’s identity as an education city began with the opening of Technische Hoogeschool te <span class="gradient-bandung">Bandoeng</span> (now ITB) on July 3, 1920, as the first technical college in the Dutch East Indies. Its presence attracted intellectuals from many regions and sparked the growth of several major universities that shaped the city’s academic character.',
            timelineItem4Media: 'Technische Hoogeschool te Bandoeng<br>(ITB) 1920',
            timelineItem5Tag: '<span class="gradient-bandung">Bandung</span> Creative City',
            timelineItem5Desc: '<span class="gradient-bandung">Bandung</span> was officially recognized as part of the UNESCO Creative Cities Network (UCCN) in the Design field in December 2015. This international recognition was based on the strength of its creative economy driven by young communities, ranging from local fashion industries (distros) to independent music and graphic design and architecture.',
            timelineItem5Media: 'Bandung Creative Hub',
            timelineItem6Tag: '<span class="gradient-bandung">Bandung</span> Smart City',
            timelineItem6Desc: 'Bandung’s transformation toward a smart city is being realized through the integration of information technology in government and public services. A major milestone was the inauguration of the <span class="gradient-bandung">Bandung</span> Command Center (BCC) to monitor the city in real time, integrate internal data, and accelerate citizen complaint handling through digital applications.',
            timelineItem6Media: 'Bandung Command Center'
        }
    };

    function getTranslationValue(key, fallback = '') {
        const lang = window.currentSiteLang || localStorage.getItem('siteLang') || 'id';
        const current = translations[lang] ? lang : 'id';
        return translations[current][key] || fallback;
    }

    window.siteTranslations = translations;
    window.getSiteTranslation = getTranslationValue;

    const i18nElements = document.querySelectorAll('[data-i18n-key]');
    const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));
    const langBtns = Array.from(document.querySelectorAll('.lang-btn'));
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    function setTextWithIcon(el, text) {
        const icon = el.querySelector('i');
        const containsHtml = /<[^>]+>/.test(text);

        if (!icon) {
            if (containsHtml) el.innerHTML = text;
            else el.textContent = text;
            return;
        }

        if (el.firstElementChild === icon) {
            if (containsHtml) {
                el.innerHTML = icon.outerHTML + ' ' + text;
            } else {
                el.innerHTML = '';
                el.append(icon);
                el.append(' ');
                el.append(document.createTextNode(text));
            }
        } else {
            if (containsHtml) {
                el.innerHTML = text + ' ' + icon.outerHTML;
            } else {
                el.innerHTML = '';
                el.append(document.createTextNode(text));
                el.append(' ');
                el.append(icon);
            }
        }
    }

    function setLanguage(lang) {
        const current = translations[lang] ? lang : 'id';
        i18nElements.forEach(el => {
            const key = el.dataset.i18nKey;
            const value = translations[current][key];
            if (!value) return;
            setTextWithIcon(el, value);
        });
        const pageTitle = translations[current].pageTitle;
        if (pageTitle) document.title = pageTitle;
        langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === current));
        document.documentElement.lang = current === 'en' ? 'en' : 'id';
        window.currentSiteLang = current;
        localStorage.setItem('siteLang', current);
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: current } }));
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