// ===== MODAL BUDAYA SUNDA =====
const cultureModalData = {
    bahasa: {
        img: 'image/aksara-sunda.png',
        badge: 'Bahasa',
        title: 'Bahasa Sunda Mini',
        desc: 'Kenali kosakata dan frasa dasar Bahasa Sunda yang digunakan dalam kehidupan sehari-hari.',
        listTitle: 'Kosakata & Frasa Dasar',
        list: [
            ['Wilujeng enjing', 'Selamat pagi'],
            ['Wilujeng siang', 'Selamat siang'],
            ['Wilujeng sonten', 'Selamat sore'],
            ['Kumaha damang?', 'Apa kabar?'],
            ['Alhamdulillah, damang', 'Alhamdulillah, baik'],
            ['Hatur nuhun', 'Terima kasih'],
            ['Mangga', 'Silakan'],
            ['Punten', 'Maaf']
        ]
    },
    angklung: {
        img: 'image/angklung.png',
        badge: 'Musik',
        title: 'Angklung',
        desc: 'Alat musik tradisional yang telah diakui UNESCO sebagai warisan budaya dunia. Angklung dimainkan dengan cara digoyangkan sehingga tabung bambu di dalamnya menghasilkan nada.',
        listTitle: null,
        list: []
    },
    jaipong: {
        img: 'image/tari-jaipong.png',
        badge: 'Tari',
        title: 'Tari Jaipong',
        desc: 'Tari khas Sunda yang energik, anggun, dan penuh ekspresi kegembiraan. Jaipong lahir dari perpaduan pencak silat, wayang golek, dan ketuk tilu.',
        listTitle: null,
        list: []
    },
    pakaian: {
        img: 'image/baju-adat.jpg',
        badge: 'Busana',
        title: 'Pakaian Adat Sunda',
        desc: 'Keindahan busana tradisional Sunda yang sarat makna dan nilai budaya, seperti Kebaya Sunda untuk perempuan dan Pangsi untuk laki-laki.',
        listTitle: null,
        list: []
    },
    ramah: {
        img: 'image/budaya-sunda.png',
        badge: 'Nilai',
        title: 'Nilai Ramah & Kreatif',
        desc: 'Keramahan dan kreativitas masyarakat Bandung menjadi jiwa dari setiap karya dan inovasi, tercermin dalam semboyan Silih Asih, Silih Asah, Silih Asuh.',
        listTitle: null,
        list: []
    }
};

function openCultureModal(key) {
    const data = cultureModalData[key];
    if (!data) return;

    document.getElementById('cultureModalImg').src = data.img;
    document.getElementById('cultureModalBadge').textContent = data.badge;
    document.getElementById('cultureModalTitle').textContent = data.title;
    document.getElementById('cultureModalDesc').textContent = data.desc;

    const listWrap = document.getElementById('cultureModalListWrap');
    const listTitleEl = document.getElementById('cultureModalListTitle');
    const listEl = document.getElementById('cultureModalList');

    if (data.list && data.list.length > 0) {
        listWrap.style.display = 'block';
        listTitleEl.textContent = data.listTitle;
        listEl.innerHTML = data.list.map(item =>
            `<li><span class="term">${item[0]}</span><span>: ${item[1]}</span></li>`
        ).join('');
    } else {
        listWrap.style.display = 'none';
    }

    document.getElementById('cultureModalOverlay').classList.add('active');
}

window.openCultureModal = openCultureModal;

const cultureModalOverlay = document.getElementById('cultureModalOverlay');
const cultureModalClose = document.getElementById('cultureModalClose');
const cultureModalBtnClose = document.getElementById('cultureModalBtnClose');

if (cultureModalOverlay) {
    cultureModalClose.addEventListener('click', () => cultureModalOverlay.classList.remove('active'));
    cultureModalBtnClose.addEventListener('click', () => cultureModalOverlay.classList.remove('active'));
    cultureModalOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'cultureModalOverlay') cultureModalOverlay.classList.remove('active');
    });
}