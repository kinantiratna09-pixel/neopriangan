document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleksi elemen modal
    const overlay = document.getElementById('cultureModalOverlay');
    const modalImg = document.getElementById('cultureModalImg');
    const modalBadge = document.getElementById('cultureModalBadge');
    const modalTitle = document.getElementById('cultureModalTitle'); // Sudah diperbaiki dari typo sebelumnya
    const modalDesc = document.getElementById('cultureModalDesc');
    
    const listWrap = document.getElementById('cultureModalListWrap');
    const listTitleEl = document.getElementById('cultureModalListTitle');
    const listEl = document.getElementById('cultureModalList');
    
    // Elemen tambahan untuk Fakta Menarik
    const factsTitleEl = document.getElementById('cultureModalFactsTitle');
    const factsDescEl = document.getElementById('cultureModalFactsDesc');

    // 2. Tombol Tutup Modal
    const cultureModalBtnClose = document.getElementById('cultureModalBtnClose');
    const closeIcon = document.getElementById('cultureModalClose');

    // ===== DATA MODAL BUDAYA SUNDA =====
    const cultureModalData = {
        bahasa: {
            img: '../image/aksara-sunda.png',
            badge: 'Bahasa',
            title: 'Bahasa Sunda',
            desc: 'Kenali kosakata dan frasa dasar Bahasa Sunda yang digunakan dalam kehidupan sehari-hari.',
            factsTitle: 'Fakta Menarik',
            facts: 'Bahasa Sunda memiliki aturan tingkatan tutur yang disebut Undak-usuk Basa. Sistem ini mengatur penggunaan kosakata berdasarkan tingkat kesopanan...',
            listTitle: 'Kosakata & Frasa Dasar',
            list: [
                ['Wilujeng enjing', 'Selamat pagi'],
                ['Kumaha damang?', 'Apa kabar?'],
                ['Hatur nuhun', 'Terima kasih'],
                ['Punten', 'Maaf / Permisi']
            ]
        },
        angklung: {
            img: '../image/angklung.png',
            badge: 'Musik',
            title: 'Angklung',
            desc: 'Alat musik tradisional yang terbuat dari bambu dan dimainkan dengan cara digoyangkan.',
            listTitle: 'Fakta Menarik',
            list: [
                ['Asal', 'Jawa Barat'],
                ['Pengakuan', 'Diakui UNESCO sejak 2010']
            ]
        },
        pakaian: {
            img: '../image/baju-adat.jpg',
            badge: 'Busana',
            title: 'Pakaian Adat Sunda',
            desc: 'Ragam pakaian tradisional Sunda yang mencerminkan identitas dan kelas sosial di masa lampau.',
            listTitle: 'Jenis Pakaian',
            list: [
                ['Pangsi', 'Pakaian pria untuk rakyat biasa'],
                ['Kebaya', 'Pakaian khas untuk wanita'],
                ['Menak', 'Pakaian untuk kaum bangsawan']
            ]
        },
        serentaun: {
            img: '../image/serentaun.jpg',
            badge: 'Upacara',
            title: 'Upacara Seren Taun',
            desc: 'Upacara adat syukuran panen padi yang dilakukan setiap tahun oleh masyarakat Sunda tradisional.',
            listTitle: 'Inti Acara',
            list: [
                ['Puncak', 'Penumbukan padi bersama'],
                ['Makna', 'Rasa syukur kepada Tuhan']
            ]
        },
        seblak: {
            img: '../image/seblak.jpg',
            badge: 'Kuliner',
            title: 'Seblak',
            desc: 'Makanan khas Sunda yang dikenal dengan cita rasa pedas dan gurih, terbuat dari kerupuk basah dengan bumbu kencur.',
            listTitle: 'Bahan Utama',
            list: [
                ['Cikur', 'Kencur sebagai bumbu utama'],
                ['Isian', 'Kerupuk, telur, sosis, makaroni']
            ]
        },
        batagor: {
            img: '../image/batagor.jpg',
            badge: 'Kuliner',
            title: 'Batagor',
            desc: 'Singkatan dari Bakso Tahu Goreng, jajanan khas Bandung yang disajikan dengan saus kacang lezat.',
            listTitle: 'Penyajian',
            list: [
                ['Bumbu', 'Saus kacang, kecap, perasan jeruk limau'],
                ['Pelengkap', 'Pangsit goreng renyah']
            ]
        },
        miekocok: {
            img: '../image/miekocok.jpg',
            badge: 'Kuliner',
            title: 'Mie Kocok Bandung',
            desc: 'Hidangan mi kuah kaldu sapi kental dengan kikil, tauge, dan bakso yang disajikan hangat.',
            listTitle: 'Isian Utama',
            list: [
                ['Kikil', 'Potongan urat sapi empuk'],
                ['Mie', 'Mie kuning pipih gepeng']
            ]
        },
        tarimerak: {
            img: '../image/tarimerak.jpg',
            badge: 'Tari',
            title: 'Tari Merak',
            desc: 'Tarian yang diciptakan oleh Raden Tjetje Somantri yang mengadaptasi gerakan burung merak jantan.',
            listTitle: 'Karakteristik',
            list: [
                ['Kostum', 'Bermotif bulu merak dengan sayap'],
                ['Gerakan', 'Anggun, dinamis, dan ceria']
            ]
        },
        wayanggolek: {
            img: '../image/wayanggolek.jpg',
            badge: 'Kesenian',
            title: 'Wayang Golek',
            desc: 'Seni pertunjukan boneka kayu khas Sunda yang menceritakan epik Ramayana atau Mahabharata dengan sentuhan komedi lokal.',
            listTitle: 'Tokoh Ikonik',
            list: [
                ['Cepot', 'Tokoh punakawan yang jenaka dan ikonik'],
                ['Dalang', 'Asep Sunandar Sunarya (Legenda Dalang)']
            ]
        },
        colenak: {
            img: '../image/colenak.jpg',
            badge: 'Kuliner',
            title: 'Colenak',
            desc: 'Kue tradisional berbahan tepung beras yang dimasak di atas cetakan tanah liat dan dibakar dengan kayu.',
            listTitle: 'Varian Populer',
            list: [
                ['Manis', 'Dengan kuah kinca (gula aren & santan)'],
                ['Asin', 'Dengan taburan oncom pedas atau telur']
            ]
        },
        browniesbandung: {
            img: '../image/brownies.jpg',
            badge: 'Kuliner',
            title: 'Brownies Bandung',
            desc: 'Brownies bandung adalah kue cokelat lembut yang dipanggang dengan api atas dan bawah',
            listTitle: 'Asal-Usul',
            list: [
                ['Pencipta', 'Amanda Brownies'],
                ['Tahun', '1995']
            ]
        },
        senibenjang: {
            img: '../image/benang.jpg',
            badge: 'Seni Pertunjukan',
            title: 'Seni Benjang',
            desc: 'Seni benjang adalah seni pertunjukan tradisional Sunda yang menampilkan atraksi ketangkasan dan kekuatan para pemainnya.',
            listTitle: 'Gerakan Khas',
            list: [
                ['Aksi', 'Menyamping dengan kaki lurus sejajar tanah'],
                ['Gerakan', 'Memukul lutut dengan alat (sejenis dayung)']
            ]
        }
    };

    // 3. Fungsi utama untuk membuka modal berdasarkan KEY data
    function openCultureModal(key) {
        const data = cultureModalData[key];
        if (!data || !overlay) return;

        if (modalImg) {
            modalImg.src = data.img;
            modalImg.alt = data.title;
        }
        if (modalBadge) modalBadge.textContent = data.badge;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalDesc) modalDesc.textContent = data.desc;

        if (factsTitleEl && factsDescEl) {
            if (data.facts) {
                factsTitleEl.textContent = data.factsTitle || 'Fakta Menarik';
                factsDescEl.textContent = data.facts;
                factsTitleEl.style.display = 'block';
                factsDescEl.style.display = 'block';
            } else {
                factsTitleEl.style.display = 'none';
                factsDescEl.style.display = 'none';
            }
        }

        if (listWrap && listTitleEl && listEl) {
            if (data.list && data.list.length > 0) {
                listWrap.style.display = 'block';
                listTitleEl.textContent = data.listTitle;
                listEl.innerHTML = data.list.map(item =>
                    `<li><span class="term"><strong>${item[0]}</strong></span><span>: ${item[1]}</span></li>`
                ).join('');
            } else {
                listWrap.style.display = 'none';
            }
        }

        overlay.classList.add('open');
        overlay.style.display = 'flex'; 
    }

    // 4. Fungsi Tutup Modal
    const closeModal = () => {
        if (overlay) {
            overlay.classList.remove('open');
            overlay.style.display = 'none';
        }
    };

    if (cultureModalBtnClose) cultureModalBtnClose.addEventListener('click', closeModal);
    if (closeIcon) closeIcon.addEventListener('click', closeModal);
    
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // 5. Otomatisasi deteksi klik tombol di setiap Card
    const cards = document.querySelectorAll('.culture-p-card-item');
    cards.forEach(card => {
        const titleEl = card.querySelector('h3');
        const btn = card.querySelector('.culture-p-arrow-btn');
        
        if (titleEl && btn) {
            const title = titleEl.textContent.trim().toLowerCase();
            let key = ''; 

            if (title.includes('bahasa')) key = 'bahasa';
            else if (title.includes('angklung')) key = 'angklung';
            else if (title.includes('pakaian')) key = 'pakaian';
            else if (title.includes('seren')) key = 'serentaun';
            else if (title.includes('seblak')) key = 'seblak';
            else if (title.includes('batagor')) key = 'batagor';
            else if (title.includes('kocok')) key = 'miekocok';
            else if (title.includes('merak')) key = 'tarimerak';
            else if (title.includes('wayang')) key = 'wayanggolek';
            else if (title.includes('colenak')) key = 'colenak';
            else if (title.includes('brownies')) key = 'browniesbandung'; 
            else if (title.includes('benjang')) key = 'senibenjang';

            if (key) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    openCultureModal(key);
                });
            } else {
                console.log('Tidak ada key yang cocok untuk judul:', title);
            }
        }
    });

    window.openCultureModal = openCultureModal;
});