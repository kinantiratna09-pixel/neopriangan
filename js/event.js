document.addEventListener('DOMContentLoaded', () => {

            /* ============ Data ============ */
            const CATEGORY_META = {
                budaya: { icon: "🎭", color: "#e08b4f" },
                musik: { icon: "🎵", color: "#9b7cf0" },
                kuliner: { icon: "🍜", color: "#ef7a6d" },
                teknologi: { icon: "💻", color: "#4fc3d1" },
                olahraga: { icon: "🏃", color: "#5fd196" },
                edukasi: { icon: "📚", color: "#f0c15a" },
                seni: { icon: "🖼️", color: "#e089c9" },
                komunitas: { icon: "🤝", color: "#8f9ef0" },
            };


            const EVENTS = [{
                    id: 1,
                    cat: "musik",
                    title: "Bandung Music Festival",
                    img: "music1.jpg",
                    desc: "Festival musik internasional dengan penampilan artis lokal dan mancanegara di panggung utama.",
                    date: "2026-06-15",
                    dateEnd: "2026-06-17",
                    time: "18:00 - 23:00 WIB",
                    location: "Lapangan Gasibu, Bandung",
                    rating: 4.8,
                    reviews: 2140,
                    free: false
                },

                {
                    id: 2,
                    cat: "budaya",
                    title: "Festival Budaya Sunda",
                    img: "budaya1.jpg",
                    desc: "Pagelaran seni tari, pantun, dan wayang golek merayakan warisan budaya Sunda.",
                    date: "2026-03-25",
                    dateEnd: "2026-03-26",
                    time: "08:00 - 17:00 WIB",
                    location: "Gedung Sate, Bandung",
                    rating: 4.7,
                    reviews: 1890,
                    free: true
                },
                {
                    id: 3,
                    cat: "kuliner",
                    title: "Bandung Culinary Week",
                    img: "kuliner1.jpg",
                    desc: "Pekan kuliner khas Bandung menampilkan pedagang kaki lima hingga restoran ternama.",
                    date: "2026-06-07",
                    dateEnd: "2026-06-14",
                    time: "10:00 - 22:00 WIB",
                    location: "Trans Studio Mall, Bandung",
                    rating: 4.6,
                    reviews: 1620,
                    free: false
                },
                {
                    id: 4,
                    cat: "teknologi",
                    title: "Bandung Tech Summit 2026",
                    img: "image/teknologi1.jpg",
                    desc: "Konferensi teknologi terbesar di Jawa Barat, membahas AI, startup, dan inovasi digital.",
                    date: "2026-01-20",
                    time: "08:30 - 16:30 WIB",
                    location: "Bandung Techno Park, Bandung",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 5,
                    cat: "olahraga",
                    title: "Bandung City Run",
                    img: "olahraga1.jpg",
                    desc: "Lari santai keliling kota Bandung yang terbuka untuk umum, keluarga, dan komunitas lari.",
                    date: "2026-05-28",
                    time: "06:00 - 10:00 WIB",
                    location: "Alun-Alun Kota, Bandung",
                    rating: 4.5,
                    reviews: 1540,
                    free: true
                },

                {
                    id: 6,
                    cat: "seni",
                    title: "Bandung Art Exhibition",
                    img: "seni1.jpg",
                    desc: "Pameran seni rupa kontemporer dari seniman muda Bandung dan sekitarnya.",
                    date: "2026-07-05",
                    dateEnd: "2026-07-12",
                    time: "10:00 - 18:00 WIB",
                    location: "Selasar Sunaryo Art Space",
                    rating: 4.4,
                    reviews: 745,
                    free: false
                },
                {
                    id: 7,
                    cat: "musik",
                    title: "Jazz Malam di Braga",
                    img: "musik2.jpg",
                    desc: "Konser jazz intim di jantung kawasan heritage Braga dengan suasana kolonial klasik.",
                    date: "2026-04-11",
                    time: "19:00 - 22:00 WIB",
                    location: "Jalan Braga, Bandung",
                    rating: 4.7,
                    reviews: 890,
                    free: false
                },
                {
                    id: 8,
                    cat: "edukasi",
                    title: "Bandung Book Fair",
                    img: "edukasi1.jpg",
                    desc: "Pameran buku tahunan dengan diskon besar, bedah buku, dan workshop menulis.",
                    date: "2026-02-14",
                    dateEnd: "2026-02-20",
                    time: "09:00 - 21:00 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.6,
                    reviews: 1120,
                    free: true
                },
                {
                    id: 9,
                    cat: "komunitas",
                    title: "Bandung Volunteer Day",
                    img: "komunitas1.jpg",
                    desc: "Aksi bersih kota dan penggalangan dana bersama komunitas relawan se-Bandung Raya.",
                    date: "2026-08-02",
                    time: "07:00 - 12:00 WIB",
                    location: "Taman Tegallega, Bandung",
                    rating: 4.3,
                    reviews: 410,
                    free: true
                },

                {
                    id: 11,
                    cat: "olahraga",
                    title: "West Java MTB Challenge",
                    img: "olahraga2.jpg",
                    desc: "Lomba sepeda gunung menyusuri perbukitan Bandung Utara untuk pehobi dan profesional.",
                    date: "2026-09-14",
                    time: "06:30 - 14:00 WIB",
                    location: "Lembang, Bandung Barat",
                    rating: 4.8,
                    reviews: 520,
                    free: false
                },
                {
                    id: 12,
                    cat: "teknologi",
                    title: "Startup Weekend Bandung",
                    img: "image/teknologi2.jpg",
                    desc: "Kompetisi membangun startup dalam 54 jam bersama mentor dan investor.",
                    date: "2026-05-09",
                    dateEnd: "2026-05-11",
                    time: "17:00 - 21:00 WIB",
                    location: "Co&Co Space, Bandung",
                    rating: 4.6,
                    reviews: 380,
                    free: false
                },
                {
                    id: 13,
                    cat: "budaya",
                    title: "Helaran Cap Go Meh",
                    img: "budaya2.jpg",
                    desc: "Karnaval budaya Tionghoa-Sunda dengan barongsai, liong, dan arak-arakan warna-warni.",
                    date: "2026-02-01",
                    time: "15:00 - 20:00 WIB",
                    location: "Jalan Kelenteng, Bandung",
                    rating: 4.9,
                    reviews: 1980,
                    free: true
                },
                {
                    id: 14,
                    cat: "seni",
                    title: "Mural Fest Kiaracondong",
                    img: "seni2.jpg",
                    desc: "Festival seni mural jalanan menghidupkan tembok-tembok kota bersama seniman lokal.",
                    date: "2026-06-21",
                    time: "08:00 - 18:00 WIB",
                    location: "Kiaracondong, Bandung",
                    rating: 4.4,
                    reviews: 305,
                    free: true
                },
                {
                    id: 15,
                    cat: "musik",
                    title: "Orkestra Kota Kembang",
                    img: "musik3.jpg",
                    desc: "Pertunjukan orkestra klasik oleh musisi muda berbakat Bandung.",
                    date: "2026-04-27",
                    time: "19:30 - 21:30 WIB",
                    location: "Gedung Merdeka, Bandung",
                    rating: 4.7,
                    reviews: 610,
                    free: false
                },
                {
                    id: 16,
                    cat: "edukasi",
                    title: "Sains Populer untuk Anak",
                    img: "edukasi2.jpg",
                    desc: "Rangkaian eksperimen sains interaktif yang dirancang untuk anak-anak usia sekolah.",
                    date: "2026-07-19",
                    time: "09:00 - 12:00 WIB",
                    location: "Museum Geologi, Bandung",
                    rating: 4.5,
                    reviews: 275,
                    free: true
                },
                {
                    id: 17,
                    cat: "musik",
                    title: "Symphony Under The Stars",
                    img: "musik4.jpg",
                    desc: "Konser orkestra di bawah langit malam Bandung.",
                    date: "2026-05-09",
                    time: "18:30 - 21:30 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.9,
                    reviews: 720,
                    free: false
                },
                {
                    id: 18,
                    cat: "musik",
                    title: "Bandung Indie Night",
                    img: "musik5.jpg",
                    desc: "Penampilan band indie favorit Bandung.",
                    date: "2026-05-23",
                    time: "18:00 - 22:30 WIB",
                    location: "IFI Bandung",
                    rating: 4.8,
                    reviews: 980,
                    free: false
                },
                {
                    id: 19,
                    cat: "musik",
                    title: "Acoustic Sunset Session",
                    img: "musik6.jpg",
                    desc: "Musik akustik menemani senja.",
                    date: "2026-05-30",
                    time: "17:00 - 20:00 WIB",
                    location: "Teras Cikapundung",
                    rating: 4.6,
                    reviews: 540,
                    free: false
                },
                {
                    id: 20,
                    cat: "musik",
                    title: "Rock in Bandung",
                    img: "musik7.jpg",
                    desc: "Festival rock bersama band ternama.",
                    date: "2026-07-12",
                    time: "16:00 - 23:00 WIB",
                    location: "Stadion Siliwangi",
                    rating: 4.8,
                    reviews: 1350,
                    free: false
                },
                {
                    id: 21,
                    cat: "musik",
                    title: "Electronic Night Bandung",
                    img: "musik8.jpg",
                    desc: "Festival musik elektronik dan visual show.",
                    date: "2026-08-02",
                    time: "19:00 - 00:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.8,
                    reviews: 1090,
                    free: false
                },
                {
                    id: 22,
                    cat: "musik",
                    title: "Pop Hits Live",
                    img: "musik9.jpg",
                    desc: "Konser lagu pop Indonesia.",
                    date: "2026-08-18",
                    time: "19:00 - 22:00 WIB",
                    location: "Sabuga",
                    rating: 4.7,
                    reviews: 860,
                    free: false
                },
                {
                    id: 23,
                    cat: "musik",
                    title: "Harmony of Bandung",
                    img: "musik10.jpg",
                    desc: "Kolaborasi orkestra dan paduan suara.",
                    date: "2026-09-06",
                    time: "18:30 - 21:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.9,
                    reviews: 790,
                    free: false
                },
                {
                    id: 24,
                    cat: "musik",
                    title: "Folk Music Weekend",
                    img: "musik11.jpg",
                    desc: "Festival musik folk dan akustik.",
                    date: "2026-09-13",
                    time: "15:00 - 21:00 WIB",
                    location: "Dago Tea House",
                    rating: 4.6,
                    reviews: 570,
                    free: false
                },
                {
                    id: 25,
                    cat: "musik",
                    title: "Angklung Harmony Concert",
                    img: "musik12.jpg",
                    desc: "Konser angklung dengan aransemen modern.",
                    date: "2026-09-20",
                    time: "18:00 - 20:30 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 1250,
                    free: false
                },
                {
                    id: 26,
                    cat: "musik",
                    title: "Sundanese Music Celebration",
                    img: "musik13.jpg",
                    desc: "Perpaduan musik tradisional Sunda dan modern.",
                    date: "2026-09-27",
                    time: "17:00 - 20:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.8,
                    reviews: 930,
                    free: false
                },
                {
                    id: 27,
                    cat: "musik",
                    title: "Coffee & Music Night",
                    img: "musik14.jpg",
                    desc: "Live music sambil menikmati kopi lokal.",
                    date: "2026-10-03",
                    time: "19:00 - 22:00 WIB",
                    location: "Braga",
                    rating: 4.6,
                    reviews: 510,
                    free: false
                },
                {
                    id: 28,
                    cat: "musik",
                    title: "Midnight Jazz Session",
                    img: "musik15.jpg",
                    desc: "Jazz eksklusif hingga larut malam.",
                    date: "2026-10-10",
                    time: "20:00 - 23:30 WIB",
                    location: "Braga Citywalk",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 29,
                    cat: "musik",
                    title: "Bandung Choir Festival",
                    img: "musik16.jpg",
                    desc: "Festival paduan suara berbagai komunitas.",
                    date: "2026-10-17",
                    time: "09:00 - 17:00 WIB",
                    location: "Gedung Indonesia Menggugat",
                    rating: 4.7,
                    reviews: 430,
                    free: false
                },
                {
                    id: 30,
                    cat: "musik",
                    title: "Indie Pop Showcase",
                    img: "musik17.jpg",
                    desc: "Musisi indie pop Bandung tampil bersama.",
                    date: "2026-10-24",
                    time: "18:30 - 22:00 WIB",
                    location: "The Hallway Space",
                    rating: 4.7,
                    reviews: 650,
                    free: false
                }, {
                    id: 31,
                    cat: "musik",
                    title: "Music in The Park",
                    img: "musik18.jpg",
                    desc: "Konser santai di taman kota.",
                    date: "2026-10-31",
                    time: "16:00 - 20:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.6,
                    reviews: 590,
                    free: false
                },
                {
                    id: 32,
                    cat: "musik",
                    title: "Weekend Live Music",
                    img: "musik19.jpg",
                    desc: "Hiburan live music akhir pekan.",
                    date: "2026-11-07",
                    time: "18:00 - 21:30 WIB",
                    location: "Cihampelas Walk",
                    rating: 4.5,
                    reviews: 470,
                    free: false
                },
                {
                    id: 33,
                    cat: "musik",
                    title: "Retro Music Night",
                    img: "musik20.jpg",
                    desc: "Lagu-lagu hits era 80-an dan 90-an.",
                    date: "2026-11-14",
                    time: "19:00 - 22:30 WIB",
                    location: "Sudirman Street",
                    rating: 4.7,
                    reviews: 720,
                    free: false
                },
                {
                    id: 34,
                    cat: "musik",
                    title: "Youth Music Festival",
                    img: "musik21.jpg",
                    desc: "Festival musik untuk generasi muda.",
                    date: "2026-11-21",
                    time: "14:00 - 22:00 WIB",
                    location: "ITB Campus Center",
                    rating: 4.8,
                    reviews: 1180,
                    free: false
                },
                {
                    id: 35,
                    cat: "musik",
                    title: "Bandung DJ Experience",
                    img: "musik22.jpg",
                    desc: "DJ lokal dan nasional meramaikan malam Bandung.",
                    date: "2026-11-28",
                    time: "20:00 - 00:00 WIB",
                    location: "Braga",
                    rating: 4.7,
                    reviews: 830,
                    free: false
                },
                {
                    id: 36,
                    cat: "musik",
                    title: "Campus Band Competition",
                    img: "musik23.jpg",
                    desc: "Kompetisi band antaruniversitas.",
                    date: "2026-12-05",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.6,
                    reviews: 540,
                    free: false
                },
                {
                    id: 37,
                    cat: "musik",
                    title: "Music Carnival",
                    img: "musik24.jpg",
                    desc: "Parade musik dan pertunjukan budaya.",
                    date: "2026-12-12",
                    time: "15:00 - 21:00 WIB",
                    location: "Jalan Asia Afrika",
                    rating: 4.8,
                    reviews: 1020,
                    free: false
                },
                {
                    id: 38,
                    cat: "musik",
                    title: "Guitar Heroes Bandung",
                    img: "musik25.jpg",
                    desc: "Festival gitaris terbaik Bandung.",
                    date: "2026-12-19",
                    time: "18:00 - 22:00 WIB",
                    location: "Creative Hub Bandung",
                    rating: 4.7,
                    reviews: 680,
                    free: false
                },
                {
                    id: 39,
                    cat: "musik",
                    title: "Piano Evening Concert",
                    img: "musik26.jpg",
                    desc: "Resital piano klasik dan kontemporer.",
                    date: "2027-01-10",
                    time: "19:00 - 21:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.8,
                    reviews: 590,
                    free: false
                },
                {
                    id: 40,
                    cat: "musik",
                    title: "String Ensemble Night",
                    img: "musik27.jpg",
                    desc: "Pertunjukan ansambel musik gesek.",
                    date: "2027-01-17",
                    time: "18:30 - 21:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.7,
                    reviews: 480,
                    free: false
                }, {
                    id: 41,
                    cat: "musik",
                    title: "City Lights Concert",
                    img: "musik28.jpg",
                    desc: "Konser malam dengan tata cahaya spektakuler.",
                    date: "2027-01-24",
                    time: "18:00 - 22:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.8,
                    reviews: 910,
                    free: false
                },
                {
                    id: 42,
                    cat: "musik",
                    title: "Bandung Buskers Festival",
                    img: "musik29.jpg",
                    desc: "Festival musisi jalanan Bandung.",
                    date: "2027-01-31",
                    time: "15:00 - 20:00 WIB",
                    location: "Braga",
                    rating: 4.6,
                    reviews: 550,
                    free: false
                },
                {
                    id: 43,
                    cat: "musik",
                    title: "Sunset Melody",
                    img: "musik30.jpg",
                    desc: "Musik santai saat matahari terbenam.",
                    date: "2027-02-07",
                    time: "17:00 - 20:00 WIB",
                    location: "Punclut",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 44,
                    cat: "musik",
                    title: "Indie Rock Fest",
                    img: "musik31.jpg",
                    desc: "Festival rock alternatif Bandung.",
                    date: "2027-02-14",
                    time: "18:00 - 23:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 970,
                    free: false
                },
                {
                    id: 45,
                    cat: "musik",
                    title: "Bandung Soundwave",
                    img: "musik32.jpg",
                    desc: "Festival EDM dengan visual spektakuler.",
                    date: "2027-02-21",
                    time: "19:00 - 00:00 WIB",
                    location: "Summarecon Bandung",
                    rating: 4.9,
                    reviews: 1420,
                    free: false
                },
                {
                    id: 46,
                    cat: "musik",
                    title: "Classic Meets Modern",
                    img: "musik33.jpg",
                    desc: "Kolaborasi musik klasik dan pop.",
                    date: "2027-02-28",
                    time: "18:30 - 21:30 WIB",
                    location: "Gedung Sate",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 47,
                    cat: "musik",
                    title: "Open Mic Music Night",
                    img: "musik34.jpg",
                    desc: "Wadah bagi musisi baru untuk tampil.",
                    date: "2027-03-07",
                    time: "19:00 - 22:00 WIB",
                    location: "The Hallway Space",
                    rating: 4.6,
                    reviews: 450,
                    free: false
                },
                {
                    id: 48,
                    cat: "musik",
                    title: "Harmony Weekend",
                    img: "musik35.jpg",
                    desc: "Konser keluarga dengan berbagai genre.",
                    date: "2027-03-14",
                    time: "16:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.7,
                    reviews: 760,
                    free: false
                },
                {
                    id: 49,
                    cat: "musik",
                    title: "Local Artist Showcase",
                    img: "musik36.jpg",
                    desc: "Penampilan musisi lokal Bandung.",
                    date: "2027-03-21",
                    time: "18:00 - 22:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 820,
                    free: false
                },
                {
                    id: 50,
                    cat: "musik",
                    title: "Acoustic Friday",
                    img: "musik37.jpg",
                    desc: "Live acoustic setiap Jumat malam.",
                    date: "2027-03-28",
                    time: "19:00 - 21:30 WIB",
                    location: "Dago",
                    rating: 4.5,
                    reviews: 390,
                    free: false
                }, {
                    id: 51,
                    cat: "musik",
                    title: "Music for Charity",
                    img: "musik38.jpg",
                    desc: "Konser amal bersama musisi Bandung.",
                    date: "2027-04-04",
                    time: "18:00 - 22:00 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.8,
                    reviews: 670,
                    free: false
                },
                {
                    id: 52,
                    cat: "musik",
                    title: "Night of Violin",
                    img: "musik39.jpg",
                    desc: "Pertunjukan solo dan ensemble biola.",
                    date: "2027-04-11",
                    time: "19:00 - 21:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.9,
                    reviews: 610,
                    free: false
                },
                {
                    id: 53,
                    cat: "musik",
                    title: "Bandung Cultural Music",
                    img: "musik40.jpg",
                    desc: "Musik budaya Nusantara dalam satu panggung.",
                    date: "2027-04-18",
                    time: "17:00 - 20:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 960,
                    free: false
                },
                {
                    id: 54,
                    cat: "musik",
                    title: "Youth Orchestra Concert",
                    img: "musik41.jpg",
                    desc: "Penampilan orkestra pelajar Bandung.",
                    date: "2027-04-25",
                    time: "18:00 - 21:00 WIB",
                    location: "Sabuga",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 55,
                    cat: "musik",
                    title: "Jazz & Coffee Festival",
                    img: "musik42.jpg",
                    desc: "Festival jazz dengan kopi khas Bandung.",
                    date: "2027-05-02",
                    time: "16:00 - 22:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 1150,
                    free: false
                },
                {
                    id: 56,
                    cat: "musik",
                    title: "Bandung Melody Fest",
                    img: "musik43.jpg",
                    desc: "Festival musik populer tahunan.",
                    date: "2027-05-09",
                    time: "15:00 - 23:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1630,
                    free: false
                },
                {
                    id: 57,
                    cat: "musik",
                    title: "Urban Beats Festival",
                    img: "musik44.jpg",
                    desc: "Festival hip-hop dan R&B.",
                    date: "2027-05-16",
                    time: "17:00 - 23:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 970,
                    free: false
                },
                {
                    id: 58,
                    cat: "musik",
                    title: "Street Music Weekend",
                    img: "musik45.jpg",
                    desc: "Musisi jalanan menghibur pengunjung.",
                    date: "2027-05-23",
                    time: "15:00 - 20:00 WIB",
                    location: "Jalan Asia Afrika",
                    rating: 4.6,
                    reviews: 530,
                    free: false
                },
                {
                    id: 59,
                    cat: "musik",
                    title: "Pop Culture Concert",
                    img: "musik46.jpg",
                    desc: "Konser musik pop dan budaya kreatif.",
                    date: "2027-05-30",
                    time: "18:00 - 22:00 WIB",
                    location: "Trans Studio Bandung",
                    rating: 4.7,
                    reviews: 860,
                    free: false
                },
                {
                    id: 60,
                    cat: "musik",
                    title: "Instrumental Night",
                    img: "musik47.jpg",
                    desc: "Pertunjukan musik instrumental modern.",
                    date: "2027-06-06",
                    time: "19:00 - 21:00 WIB",
                    location: "Dago Tea House",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                }, {
                    id: 61,
                    cat: "musik",
                    title: "Live Band Marathon",
                    img: "musik48.jpg",
                    desc: "Penampilan puluhan band dalam sehari.",
                    date: "2027-06-13",
                    time: "10:00 - 22:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 1290,
                    free: false
                },
                {
                    id: 62,
                    cat: "musik",
                    title: "Bandung Rhythm Festival",
                    img: "musik49.jpg",
                    desc: "Perayaan berbagai genre musik.",
                    date: "2027-06-20",
                    time: "15:00 - 23:00 WIB",
                    location: "Lapangan Gasibu",
                    rating: 4.9,
                    reviews: 1480,
                    free: false
                },
                {
                    id: 63,
                    cat: "musik",
                    title: "Grand Music Celebration",
                    img: "musik50.jpg",
                    desc: "Festival musik penutup tahun bersama artis ternama.",
                    date: "2027-06-27",
                    time: "18:00 - 23:30 WIB",
                    location: "Lapangan Gasibu",
                    rating: 5.0,
                    reviews: 2150,
                    free: false
                },
                {
                    id: 64,
                    cat: "budaya",
                    title: "Festival Angklung Nusantara",
                    img: "budaya3.jpg",
                    desc: "Pertunjukan angklung dari berbagai komunitas.",
                    date: "2026-07-05",
                    time: "15:00 - 20:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 1280,
                    free: false
                },
                {
                    id: 65,
                    cat: "budaya",
                    title: "Pagelaran Wayang Golek",
                    img: "budaya4.jpg",
                    desc: "Pertunjukan wayang golek khas Sunda.",
                    date: "2026-07-12",
                    time: "19:00 - 22:00 WIB",
                    location: "Rumentang Siang",
                    rating: 4.8,
                    reviews: 920,
                    free: false
                },
                {
                    id: 66,
                    cat: "budaya",
                    title: "Bandung Cultural Festival",
                    img: "budaya5.jpg",
                    desc: "Festival seni dan budaya khas Jawa Barat.",
                    date: "2026-07-18",
                    time: "10:00 - 21:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1760,
                    free: false
                },
                {
                    id: 67,
                    cat: "budaya",
                    title: "Pesta Tari Jaipong",
                    img: "budaya6.jpg",
                    desc: "Penampilan tari Jaipong dari sanggar terbaik.",
                    date: "2026-07-24",
                    time: "18:00 - 21:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                },
                {
                    id: 68,
                    cat: "budaya",
                    title: "Malam Budaya Sunda",
                    img: "budaya7.jpg",
                    desc: "Pertunjukan musik dan tari tradisional.",
                    date: "2026-07-30",
                    time: "18:30 - 21:30 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.7,
                    reviews: 760,
                    free: false
                },
                {
                    id: 69,
                    cat: "budaya",
                    title: "Festival Karinding",
                    img: "budaya8.jpg",
                    desc: "Mengenalkan alat musik tradisional Karinding.",
                    date: "2026-08-02",
                    time: "16:00 - 20:00 WIB",
                    location: "Dago Tea House",
                    rating: 4.8,
                    reviews: 630,
                    free: false
                },
                {
                    id: 70,
                    cat: "budaya",
                    title: "Pameran Batik Priangan",
                    img: "budaya9.jpg",
                    desc: "Pameran batik khas Jawa Barat.",
                    date: "2026-08-08",
                    time: "09:00 - 18:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 71,
                    cat: "budaya",
                    title: "Helaran Budaya Bandung",
                    img: "budaya10.jpg",
                    desc: "Parade budaya berbagai daerah.",
                    date: "2026-08-15",
                    time: "14:00 - 19:00 WIB",
                    location: "Jalan Asia Afrika",
                    rating: 4.9,
                    reviews: 1430,
                    free: false
                },
                {
                    id: 72,
                    cat: "budaya",
                    title: "Festival Kaulinan Barudak",
                    img: "budaya11.jpg",
                    desc: "Permainan tradisional anak Sunda.",
                    date: "2026-08-22",
                    time: "09:00 - 15:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.6,
                    reviews: 480,
                    free: false
                },
                {
                    id: 73,
                    cat: "budaya",
                    title: "Festival Pencak Silat",
                    img: "budaya12.jpg",
                    desc: "Demonstrasi seni bela diri tradisional.",
                    date: "2026-08-29",
                    time: "15:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 74,
                    cat: "budaya",
                    title: "Harmoni Kecapi Suling",
                    img: "budaya13.jpg",
                    desc: "Konser kecapi suling Sunda.",
                    date: "2026-09-05",
                    time: "18:30 - 21:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 920,
                    free: false
                },
                {
                    id: 75,
                    cat: "budaya",
                    title: "Festival Topeng Nusantara",
                    img: "budaya14.jpg",
                    desc: "Pertunjukan tari topeng tradisional.",
                    date: "2026-09-12",
                    time: "16:00 - 21:00 WIB",
                    location: "Gedung Indonesia Menggugat",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 76,
                    cat: "budaya",
                    title: "Pesta Rakyat Bandung",
                    img: "budaya15.jpg",
                    desc: "Hiburan budaya dan UMKM lokal.",
                    date: "2026-09-19",
                    time: "10:00 - 21:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.8,
                    reviews: 1020,
                    free: false
                },
                {
                    id: 77,
                    cat: "budaya",
                    title: "Kirab Budaya Sunda",
                    img: "budaya16.jpg",
                    desc: "Arak-arakan budaya khas Sunda.",
                    date: "2026-09-26",
                    time: "08:00 - 12:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 78,
                    cat: "budaya",
                    title: "Festival Aksara Sunda",
                    img: "budaya17.jpg",
                    desc: "Edukasi aksara dan sastra Sunda.",
                    date: "2026-10-03",
                    time: "09:00 - 16:00 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.7,
                    reviews: 450,
                    free: false
                },
                {
                    id: 79,
                    cat: "budaya",
                    title: "Lomba Tari Tradisional",
                    img: "budaya18.jpg",
                    desc: "Kompetisi tari antarsanggar.",
                    date: "2026-10-10",
                    time: "13:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 80,
                    cat: "budaya",
                    title: "Bandung Heritage Walk",
                    img: "budaya19.jpg",
                    desc: "Jelajah sejarah Kota Bandung.",
                    date: "2026-10-17",
                    time: "07:00 - 11:00 WIB",
                    location: "Braga",
                    rating: 4.9,
                    reviews: 940,
                    free: false
                }, {
                    id: 81,
                    cat: "budaya",
                    title: "Festival Seni Rakyat",
                    img: "budaya20.jpg",
                    desc: "Pentas seni tradisional masyarakat.",
                    date: "2026-10-24",
                    time: "15:00 - 20:00 WIB",
                    location: "Balai Kota",
                    rating: 4.7,
                    reviews: 590,
                    free: false
                },
                {
                    id: 82,
                    cat: "budaya",
                    title: "Malam Dongeng Sunda",
                    img: "budaya21.jpg",
                    desc: "Pertunjukan dongeng tradisional.",
                    date: "2026-10-31",
                    time: "19:00 - 21:00 WIB",
                    location: "Dago Tea House",
                    rating: 4.6,
                    reviews: 390,
                    free: false
                },
                {
                    id: 83,
                    cat: "budaya",
                    title: "Festival Calung Bandung",
                    img: "budaya22.jpg",
                    desc: "Pertunjukan musik calung.",
                    date: "2026-11-07",
                    time: "16:00 - 20:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.8,
                    reviews: 670,
                    free: false
                },
                {
                    id: 84,
                    cat: "budaya",
                    title: "Pekan Budaya Priangan",
                    img: "budaya23.jpg",
                    desc: "Festival budaya khas Priangan.",
                    date: "2026-11-14",
                    time: "10:00 - 20:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1130,
                    free: false
                },
                {
                    id: 85,
                    cat: "budaya",
                    title: "Pameran Kerajinan Sunda",
                    img: "budaya24.jpg",
                    desc: "Menampilkan kerajinan lokal.",
                    date: "2026-11-21",
                    time: "09:00 - 18:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.7,
                    reviews: 510,
                    free: false
                },
                {
                    id: 86,
                    cat: "budaya",
                    title: "Festival Kujang",
                    img: "budaya25.jpg",
                    desc: "Mengenalkan sejarah senjata Kujang.",
                    date: "2026-11-28",
                    time: "10:00 - 17:00 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.7,
                    reviews: 430,
                    free: false
                },
                {
                    id: 87,
                    cat: "budaya",
                    title: "Pesta Budaya Kampung",
                    img: "budaya26.jpg",
                    desc: "Pentas budaya masyarakat lokal.",
                    date: "2026-12-05",
                    time: "15:00 - 20:00 WIB",
                    location: "Kampung Adat Cikondang",
                    rating: 4.8,
                    reviews: 580,
                    free: false
                },
                {
                    id: 88,
                    cat: "budaya",
                    title: "Harmoni Nusantara",
                    img: "budaya27.jpg",
                    desc: "Kolaborasi budaya Indonesia.",
                    date: "2026-12-12",
                    time: "17:00 - 22:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.9,
                    reviews: 1080,
                    free: false
                },
                {
                    id: 89,
                    cat: "budaya",
                    title: "Festival Seni Lukis Tradisional",
                    img: "budaya28.jpg",
                    desc: "Pameran lukisan bertema budaya.",
                    date: "2026-12-19",
                    time: "09:00 - 17:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.7,
                    reviews: 420,
                    free: false
                },
                {
                    id: 90,
                    cat: "budaya",
                    title: "Malam Sastra Sunda",
                    img: "budaya29.jpg",
                    desc: "Pembacaan puisi dan sastra Sunda.",
                    date: "2027-01-09",
                    time: "18:30 - 21:00 WIB",
                    location: "IFI Bandung",
                    rating: 4.6,
                    reviews: 360,
                    free: false
                },
                {
                    id: 91,
                    cat: "budaya",
                    title: "Festival Musik Tradisional",
                    img: "budaya30.jpg",
                    desc: "Pertunjukan alat musik Nusantara.",
                    date: "2027-01-16",
                    time: "16:00 - 21:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 92,
                    cat: "budaya",
                    title: "Pawai Budaya Bandung",
                    img: "budaya31.jpg",
                    desc: "Parade budaya di pusat kota.",
                    date: "2027-01-23",
                    time: "08:00 - 12:00 WIB",
                    location: "Asia Afrika",
                    rating: 4.9,
                    reviews: 1250,
                    free: false
                },
                {
                    id: 93,
                    cat: "budaya",
                    title: "Festival Kampung Kreatif",
                    img: "budaya32.jpg",
                    desc: "Budaya dan ekonomi kreatif.",
                    date: "2027-01-30",
                    time: "10:00 - 19:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 830,
                    free: false
                },
                {
                    id: 94,
                    cat: "budaya",
                    title: "Pesona Budaya Sunda",
                    img: "budaya33.jpg",
                    desc: "Pertunjukan seni Sunda.",
                    date: "2027-02-06",
                    time: "17:00 - 21:00 WIB",
                    location: "Balai Kota",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 95,
                    cat: "budaya",
                    title: "Pekan Wayang Golek",
                    img: "budaya34.jpg",
                    desc: "Pekan pertunjukan wayang golek.",
                    date: "2027-02-13",
                    time: "19:00 - 22:00 WIB",
                    location: "Rumentang Siang",
                    rating: 4.9,
                    reviews: 810,
                    free: false
                },
                {
                    id: 96,
                    cat: "budaya",
                    title: "Festival Busana Tradisional",
                    img: "budaya35.jpg",
                    desc: "Fashion show pakaian adat.",
                    date: "2027-02-20",
                    time: "15:00 - 20:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.7,
                    reviews: 540,
                    free: false
                },
                {
                    id: 97,
                    cat: "budaya",
                    title: "Panggung Seni Bandung",
                    img: "budaya36.jpg",
                    desc: "Pentas seni budaya lokal.",
                    date: "2027-02-27",
                    time: "18:00 - 21:00 WIB",
                    location: "Gasibu",
                    rating: 4.7,
                    reviews: 620,
                    free: false
                },
                {
                    id: 98,
                    cat: "budaya",
                    title: "Festival Keraton Sunda",
                    img: "budaya37.jpg",
                    desc: "Mengenal sejarah kerajaan Sunda.",
                    date: "2027-03-06",
                    time: "10:00 - 17:00 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.8,
                    reviews: 470,
                    free: false
                },
                {
                    id: 99,
                    cat: "budaya",
                    title: "Bandung Heritage Day",
                    img: "budaya38.jpg",
                    desc: "Jelajah bangunan bersejarah.",
                    date: "2027-03-13",
                    time: "08:00 - 15:00 WIB",
                    location: "Braga",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 100,
                    cat: "budaya",
                    title: "Festival Dongeng Anak",
                    img: "budaya39.jpg",
                    desc: "Dongeng budaya untuk anak-anak.",
                    date: "2027-03-20",
                    time: "09:00 - 12:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.7,
                    reviews: 410,
                    free: false
                },
                {
                    id: 101,
                    cat: "budaya",
                    title: "Pesta Adat Sunda",
                    img: "budaya40.jpg",
                    desc: "Upacara adat dan pertunjukan seni.",
                    date: "2027-03-27",
                    time: "14:00 - 20:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 102,
                    cat: "budaya",
                    title: "Festival Etnik Bandung",
                    img: "budaya41.jpg",
                    desc: "Berbagai budaya Nusantara.",
                    date: "2027-04-03",
                    time: "15:00 - 21:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1160,
                    free: false
                },
                {
                    id: 103,
                    cat: "budaya",
                    title: "Harmoni Tradisi",
                    img: "budaya42.jpg",
                    desc: "Kolaborasi budaya lintas generasi.",
                    date: "2027-04-10",
                    time: "18:00 - 21:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.8,
                    reviews: 660,
                    free: false
                },
                {
                    id: 104,
                    cat: "budaya",
                    title: "Festival Cerita Rakyat",
                    img: "budaya43.jpg",
                    desc: "Kisah legenda Sunda.",
                    date: "2027-04-17",
                    time: "18:30 - 20:30 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.6,
                    reviews: 380,
                    free: false
                },
                {
                    id: 105,
                    cat: "budaya",
                    title: "Bandung Art & Culture Expo",
                    img: "budaya44.jpg",
                    desc: "Pameran seni dan budaya.",
                    date: "2027-04-24",
                    time: "10:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1240,
                    free: false
                },
                {
                    id: 106,
                    cat: "budaya",
                    title: "Festival Rampak Kendang",
                    img: "budaya45.jpg",
                    desc: "Pertunjukan rampak kendang.",
                    date: "2027-05-01",
                    time: "17:00 - 20:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 890,
                    free: false
                },
                {
                    id: 107,
                    cat: "budaya",
                    title: "Pameran Fotografi Budaya",
                    img: "budaya46.jpg",
                    desc: "Foto budaya dan tradisi Bandung.",
                    date: "2027-05-08",
                    time: "09:00 - 18:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.7,
                    reviews: 460,
                    free: false
                },
                {
                    id: 108,
                    cat: "budaya",
                    title: "Pekan Sejarah Bandung",
                    img: "budaya47.jpg",
                    desc: "Mengenal sejarah Kota Bandung.",
                    date: "2027-05-15",
                    time: "09:00 - 17:00 WIB",
                    location: "Museum Konferensi Asia Afrika",
                    rating: 4.8,
                    reviews: 710,
                    free: false
                },
                {
                    id: 109,
                    cat: "budaya",
                    title: "Festival Kampung Adat",
                    img: "budaya48.jpg",
                    desc: "Mengenalkan kehidupan kampung adat.",
                    date: "2027-05-22",
                    time: "10:00 - 18:00 WIB",
                    location: "Kampung Cikondang",
                    rating: 4.7,
                    reviews: 530,
                    free: false
                },
                {
                    id: 110,
                    cat: "budaya",
                    title: "Harmoni Angklung",
                    img: "budaya49.jpg",
                    desc: "Pertunjukan angklung massal.",
                    date: "2027-05-29",
                    time: "18:00 - 21:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 1320,
                    free: false
                }, {
                    id: 111,
                    cat: "budaya",
                    title: "Festival Tradisi Nusantara",
                    img: "budaya50.jpg",
                    desc: "Perayaan budaya dari berbagai daerah.",
                    date: "2027-06-05",
                    time: "10:00 - 21:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1410,
                    free: false
                },
                {
                    id: 112,
                    cat: "budaya",
                    title: "Bandung Heritage Festival",
                    img: "budaya51.jpg",
                    desc: "Festival sejarah dan budaya.",
                    date: "2027-06-12",
                    time: "09:00 - 20:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                },
                {
                    id: 113,
                    cat: "budaya",
                    title: "Grand Cultural Celebration",
                    img: "budaya52.jpg",
                    desc: "Festival budaya tahunan terbesar di Bandung.",
                    date: "2027-06-19",
                    time: "10:00 - 22:00 WIB",
                    location: "Lapangan Gasibu",
                    rating: 5.0,
                    reviews: 2050,
                    free: false
                },
                {
                    id: 114,
                    cat: "kuliner",
                    title: "Bandung Culinary Festival",
                    img: "kuliner2.jpg",
                    desc: "Festival kuliner dengan ratusan tenant makanan khas Bandung.",
                    date: "2026-07-06",
                    time: "10:00 - 22:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.9,
                    reviews: 1850,
                    free: false
                },
                {
                    id: 115,
                    cat: "kuliner",
                    title: "Street Food Night",
                    img: "kuliner3.jpg",
                    desc: "Berburu jajanan kaki lima favorit Bandung.",
                    date: "2026-07-12",
                    time: "17:00 - 23:00 WIB",
                    location: "Sudirman Street",
                    rating: 4.8,
                    reviews: 1420,
                    free: false
                },
                {
                    id: 116,
                    cat: "kuliner",
                    title: "Festival Seblak Bandung",
                    img: "kuliner4.jpg",
                    desc: "Menikmati berbagai kreasi seblak dari UMKM lokal.",
                    date: "2026-07-19",
                    time: "10:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 980,
                    free: false
                },
                {
                    id: 117,
                    cat: "kuliner",
                    title: "Pasar Kuliner Nusantara",
                    img: "kuliner5.jpg",
                    desc: "Aneka makanan khas dari berbagai daerah Indonesia.",
                    date: "2026-07-26",
                    time: "10:00 - 21:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 1250,
                    free: false
                },
                {
                    id: 118,
                    cat: "kuliner",
                    title: "Coffee & Culinary Expo",
                    img: "kuliner6.jpg",
                    desc: "Festival kopi lokal dan kuliner kreatif.",
                    date: "2026-08-02",
                    time: "09:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1130,
                    free: false
                },
                {
                    id: 119,
                    cat: "kuliner",
                    title: "Festival Batagor Bandung",
                    img: "kuliner7.jpg",
                    desc: "Menikmati batagor dari berbagai pelaku UMKM.",
                    date: "2026-08-09",
                    time: "11:00 - 20:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.7,
                    reviews: 890,
                    free: false
                },
                {
                    id: 120,
                    cat: "kuliner",
                    title: "Bandung Dessert Fair",
                    img: "kuliner8.jpg",
                    desc: "Festival aneka dessert, pastry, dan es krim.",
                    date: "2026-08-16",
                    time: "10:00 - 21:00 WIB",
                    location: "Paris Van Java",
                    rating: 4.8,
                    reviews: 960,
                    free: false
                },
                {
                    id: 121,
                    cat: "kuliner",
                    title: "Night Culinary Market",
                    img: "kuliner9.jpg",
                    desc: "Wisata kuliner malam dengan live music.",
                    date: "2026-08-23",
                    time: "17:00 - 23:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 1360,
                    free: false
                },
                {
                    id: 122,
                    cat: "kuliner",
                    title: "Festival Mie Nusantara",
                    img: "kuliner10.jpg",
                    desc: "Beragam olahan mie dari seluruh Indonesia.",
                    date: "2026-08-30",
                    time: "10:00 - 20:00 WIB",
                    location: "Cihampelas Walk",
                    rating: 4.7,
                    reviews: 730,
                    free: false
                },
                {
                    id: 123,
                    cat: "kuliner",
                    title: "Bandung BBQ Fest",
                    img: "kuliner11.jpg",
                    desc: "Festival barbecue dan grilled food.",
                    date: "2026-09-06",
                    time: "16:00 - 22:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 940,
                    free: false
                },
                {
                    id: 124,
                    cat: "kuliner",
                    title: "Pasar Jajanan Tradisional",
                    img: "kuliner12.jpg",
                    desc: "Menampilkan jajanan khas Sunda dan Nusantara.",
                    date: "2026-09-13",
                    time: "09:00 - 18:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.7,
                    reviews: 620,
                    free: false
                },
                {
                    id: 125,
                    cat: "kuliner",
                    title: "Festival Sate Nusantara",
                    img: "kuliner13.jpg",
                    desc: "Berbagai jenis sate dari seluruh Indonesia.",
                    date: "2026-09-20",
                    time: "11:00 - 21:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1480,
                    free: false
                },
                {
                    id: 126,
                    cat: "kuliner",
                    title: "Weekend Food Carnival",
                    img: "kuliner14.jpg",
                    desc: "Festival kuliner keluarga setiap akhir pekan.",
                    date: "2026-09-27",
                    time: "10:00 - 22:00 WIB",
                    location: "Summarecon Bandung",
                    rating: 4.8,
                    reviews: 1170,
                    free: false
                },
                {
                    id: 127,
                    cat: "kuliner",
                    title: "Bandung Food Truck Festival",
                    img: "kuliner15.jpg",
                    desc: "Festival food truck dengan menu unik.",
                    date: "2026-10-04",
                    time: "15:00 - 22:00 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.7,
                    reviews: 850,
                    free: false
                },
                {
                    id: 128,
                    cat: "kuliner",
                    title: "Festival Bakso Indonesia",
                    img: "kuliner16.jpg",
                    desc: "Menikmati berbagai jenis bakso khas Nusantara.",
                    date: "2026-10-11",
                    time: "10:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 1090,
                    free: false
                },
                {
                    id: 129,
                    cat: "kuliner",
                    title: "Kopi Priangan Fair",
                    img: "kuliner17.jpg",
                    desc: "Pameran kopi terbaik dari Jawa Barat.",
                    date: "2026-10-18",
                    time: "09:00 - 19:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.9,
                    reviews: 910,
                    free: false
                },
                {
                    id: 130,
                    cat: "kuliner",
                    title: "Festival Kuliner Sunda",
                    img: "kuliner18.jpg",
                    desc: "Menyajikan makanan khas Sunda autentik.",
                    date: "2026-10-25",
                    time: "10:00 - 21:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 1310,
                    free: false
                }, {
                    id: 131,
                    cat: "kuliner",
                    title: "Bandung Street Snack Fest",
                    img: "kuliner19.jpg",
                    desc: "Aneka camilan kekinian dan tradisional.",
                    date: "2026-11-01",
                    time: "10:00 - 20:00 WIB",
                    location: "Braga",
                    rating: 4.7,
                    reviews: 690,
                    free: false
                },
                {
                    id: 132,
                    cat: "kuliner",
                    title: "Pasar Durian Bandung",
                    img: "kuliner20.jpg",
                    desc: "Festival durian dari berbagai daerah.",
                    date: "2026-11-08",
                    time: "10:00 - 21:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 980,
                    free: false
                },
                {
                    id: 133,
                    cat: "kuliner",
                    title: "Festival Martabak",
                    img: "kuliner21.jpg",
                    desc: "Beragam kreasi martabak manis dan telur.",
                    date: "2026-11-15",
                    time: "16:00 - 22:00 WIB",
                    location: "Sudirman Street",
                    rating: 4.8,
                    reviews: 1020,
                    free: false
                },
                {
                    id: 134,
                    cat: "kuliner",
                    title: "Bandung Seafood Festival",
                    img: "kuliner22.jpg",
                    desc: "Aneka hidangan laut segar.",
                    date: "2026-11-22",
                    time: "11:00 - 22:00 WIB",
                    location: "Paskal Hyper Square",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                },
                {
                    id: 135,
                    cat: "kuliner",
                    title: "Festival Roti & Pastry",
                    img: "kuliner23.jpg",
                    desc: "Pameran roti artisan dan pastry premium.",
                    date: "2026-11-29",
                    time: "09:00 - 19:00 WIB",
                    location: "Paris Van Java",
                    rating: 4.7,
                    reviews: 610,
                    free: false
                },
                {
                    id: 136,
                    cat: "kuliner",
                    title: "Nusantara BBQ Carnival",
                    img: "kuliner24.jpg",
                    desc: "Festival barbeque khas Indonesia.",
                    date: "2026-12-06",
                    time: "16:00 - 22:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 880,
                    free: false
                },
                {
                    id: 137,
                    cat: "kuliner",
                    title: "Bandung Ice Cream Fest",
                    img: "kuliner25.jpg",
                    desc: "Festival es krim dengan berbagai rasa unik.",
                    date: "2026-12-13",
                    time: "11:00 - 20:00 WIB",
                    location: "Cihampelas Walk",
                    rating: 4.8,
                    reviews: 790,
                    free: false
                },
                {
                    id: 138,
                    cat: "kuliner",
                    title: "Festival Soto Nusantara",
                    img: "kuliner26.jpg",
                    desc: "Mencicipi berbagai jenis soto Indonesia.",
                    date: "2026-12-20",
                    time: "10:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 930,
                    free: false
                },
                {
                    id: 139,
                    cat: "kuliner",
                    title: "Pasar Kopi Bandung",
                    img: "kuliner27.jpg",
                    desc: "Festival kopi, roasting, dan workshop.",
                    date: "2027-01-10",
                    time: "09:00 - 18:00 WIB",
                    location: "Braga",
                    rating: 4.9,
                    reviews: 860,
                    free: false
                },
                {
                    id: 140,
                    cat: "kuliner",
                    title: "Festival Nasi Goreng",
                    img: "kuliner28.jpg",
                    desc: "Berbagai kreasi nasi goreng khas Indonesia.",
                    date: "2027-01-17",
                    time: "11:00 - 21:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.7,
                    reviews: 720,
                    free: false
                },
                {
                    id: 141,
                    cat: "kuliner",
                    title: "Bandung Tea Festival",
                    img: "kuliner29.jpg",
                    desc: "Festival teh lokal dengan sesi tea tasting.",
                    date: "2027-01-24",
                    time: "09:00 - 18:00 WIB",
                    location: "Dago Tea House",
                    rating: 4.8,
                    reviews: 650,
                    free: false
                },
                {
                    id: 142,
                    cat: "kuliner",
                    title: "Festival Kuliner Pedas",
                    img: "kuliner30.jpg",
                    desc: "Aneka makanan pedas dari UMKM lokal.",
                    date: "2027-01-31",
                    time: "10:00 - 21:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 1010,
                    free: false
                },
                {
                    id: 143,
                    cat: "kuliner",
                    title: "Festival Pecinta Kopi",
                    img: "kuliner31.jpg",
                    desc: "Ajang berkumpulnya pecinta kopi spesialti.",
                    date: "2027-02-07",
                    time: "09:00 - 20:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.9,
                    reviews: 970,
                    free: false
                },
                {
                    id: 144,
                    cat: "kuliner",
                    title: "Bandung Cheese Festival",
                    img: "kuliner32.jpg",
                    desc: "Festival makanan berbahan keju.",
                    date: "2027-02-14",
                    time: "10:00 - 21:00 WIB",
                    location: "Paris Van Java",
                    rating: 4.7,
                    reviews: 630,
                    free: false
                },
                {
                    id: 145,
                    cat: "kuliner",
                    title: "Festival Cokelat Bandung",
                    img: "kuliner33.jpg",
                    desc: "Berbagai olahan cokelat premium.",
                    date: "2027-02-21",
                    time: "10:00 - 20:00 WIB",
                    location: "Trans Studio Bandung",
                    rating: 4.8,
                    reviews: 840,
                    free: false
                },
                {
                    id: 146,
                    cat: "kuliner",
                    title: "Asian Food Expo",
                    img: "kuliner34.jpg",
                    desc: "Kuliner khas Asia dalam satu festival.",
                    date: "2027-02-28",
                    time: "10:00 - 22:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1540,
                    free: false
                },
                {
                    id: 147,
                    cat: "kuliner",
                    title: "Bandung Food Bazaar",
                    img: "kuliner35.jpg",
                    desc: "Bazaar kuliner UMKM Bandung.",
                    date: "2027-03-07",
                    time: "10:00 - 21:00 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.8,
                    reviews: 890,
                    free: false
                },
                {
                    id: 148,
                    cat: "kuliner",
                    title: "Festival Ayam Nusantara",
                    img: "kuliner36.jpg",
                    desc: "Aneka olahan ayam khas Indonesia.",
                    date: "2027-03-14",
                    time: "11:00 - 21:00 WIB",
                    location: "Gasibu",
                    rating: 4.7,
                    reviews: 710,
                    free: false
                },
                {
                    id: 149,
                    cat: "kuliner",
                    title: "Weekend Coffee Market",
                    img: "kuliner37.jpg",
                    desc: "Pasar kopi dan makanan ringan lokal.",
                    date: "2027-03-21",
                    time: "08:00 - 18:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 150,
                    cat: "kuliner",
                    title: "Bandung Sweet Festival",
                    img: "kuliner38.jpg",
                    desc: "Festival makanan dan minuman manis.",
                    date: "2027-03-28",
                    time: "10:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 830,
                    free: false
                }, {
                    id: 151,
                    cat: "kuliner",
                    title: "Festival Kuliner Ramadhan",
                    img: "kuliner39.jpg",
                    desc: "Aneka hidangan berbuka puasa.",
                    date: "2027-04-04",
                    time: "15:00 - 21:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.9,
                    reviews: 1620,
                    free: false
                },
                {
                    id: 152,
                    cat: "kuliner",
                    title: "Bandung Fruit Festival",
                    img: "kuliner40.jpg",
                    desc: "Festival buah segar dan olahannya.",
                    date: "2027-04-11",
                    time: "09:00 - 19:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 153,
                    cat: "kuliner",
                    title: "Nusantara Food Fiesta",
                    img: "kuliner41.jpg",
                    desc: "Kuliner tradisional dari seluruh Indonesia.",
                    date: "2027-04-18",
                    time: "10:00 - 22:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1430,
                    free: false
                },
                {
                    id: 154,
                    cat: "kuliner",
                    title: "Festival Makanan Tradisional",
                    img: "kuliner42.jpg",
                    desc: "Menikmati cita rasa warisan Nusantara.",
                    date: "2027-04-25",
                    time: "10:00 - 20:00 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.8,
                    reviews: 820,
                    free: false
                },
                {
                    id: 155,
                    cat: "kuliner",
                    title: "Bandung Vegan Food Fair",
                    img: "kuliner43.jpg",
                    desc: "Festival makanan sehat berbasis nabati.",
                    date: "2027-05-02",
                    time: "09:00 - 19:00 WIB",
                    location: "Paris Van Java",
                    rating: 4.7,
                    reviews: 590,
                    free: false
                },
                {
                    id: 156,
                    cat: "kuliner",
                    title: "Festival Dessert Nusantara",
                    img: "kuliner44.jpg",
                    desc: "Aneka dessert khas Indonesia.",
                    date: "2027-05-09",
                    time: "10:00 - 20:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 770,
                    free: false
                },
                {
                    id: 157,
                    cat: "kuliner",
                    title: "Bandung Culinary Expo",
                    img: "kuliner45.jpg",
                    desc: "Pameran kuliner dan bisnis makanan.",
                    date: "2027-05-16",
                    time: "09:00 - 21:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1270,
                    free: false
                },
                {
                    id: 158,
                    cat: "kuliner",
                    title: "Festival Sambal Indonesia",
                    img: "kuliner46.jpg",
                    desc: "Berbagai sambal khas Nusantara.",
                    date: "2027-05-23",
                    time: "10:00 - 20:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 910,
                    free: false
                },
                {
                    id: 159,
                    cat: "kuliner",
                    title: "Bandung Pizza Festival",
                    img: "kuliner47.jpg",
                    desc: "Festival pizza artisan dan modern.",
                    date: "2027-05-30",
                    time: "11:00 - 21:00 WIB",
                    location: "Cihampelas Walk",
                    rating: 4.7,
                    reviews: 680,
                    free: false
                },
                {
                    id: 160,
                    cat: "kuliner",
                    title: "Street Coffee Weekend",
                    img: "kuliner48.jpg",
                    desc: "Kopi lokal, live music, dan bazaar UMKM.",
                    date: "2027-06-06",
                    time: "08:00 - 19:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 740,
                    free: false
                },
                {
                    id: 161,
                    cat: "kuliner",
                    title: "Festival Minuman Tradisional",
                    img: "kuliner49.jpg",
                    desc: "Bandrek, bajigur, dan minuman khas Sunda.",
                    date: "2027-06-13",
                    time: "15:00 - 21:00 WIB",
                    location: "Saung Angklung Udjo",
                    rating: 4.9,
                    reviews: 950,
                    free: false
                },
                {
                    id: 162,
                    cat: "kuliner",
                    title: "Bandung Gourmet Week",
                    img: "kuliner50.jpg",
                    desc: "Pekan kuliner premium dari restoran terbaik Bandung.",
                    date: "2027-06-20",
                    time: "11:00 - 22:00 WIB",
                    location: "Paskal Hyper Square",
                    rating: 4.9,
                    reviews: 1390,
                    free: false
                },
                {
                    id: 163,
                    cat: "kuliner",
                    title: "Grand Culinary Celebration",
                    img: "kuliner51.jpg",
                    desc: "Festival kuliner tahunan terbesar di Bandung dengan ratusan tenant.",
                    date: "2027-06-27",
                    time: "10:00 - 22:00 WIB",
                    location: "Lapangan Gasibu",
                    rating: 5.0,
                    reviews: 2180,
                    free: false
                },

                {
                    id: 165,
                    cat: "teknologi",
                    title: "AI Innovation Expo",
                    img: "image/teknologi3.jpg",
                    desc: "Pameran kecerdasan buatan dan teknologi masa depan.",
                    date: "2026-07-12",
                    time: "10:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 980,
                    free: false
                },
                {
                    id: 166,
                    cat: "teknologi",
                    title: "Startup Connect Bandung",
                    img: "image/teknologi4.jpg",
                    desc: "Ajang networking startup dan investor.",
                    date: "2026-07-19",
                    time: "09:00 - 16:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                },
                {
                    id: 167,
                    cat: "teknologi",
                    title: "Web Developer Meetup",
                    img: "image/teknologi5.jpg",
                    desc: "Sharing dan workshop pengembangan web modern.",
                    date: "2026-07-26",
                    time: "13:00 - 17:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.7,
                    reviews: 620,
                    free: false
                },
                {
                    id: 168,
                    cat: "teknologi",
                    title: "Cyber Security Conference",
                    img: "image/teknologi6.jpg",
                    desc: "Seminar keamanan siber bersama para ahli.",
                    date: "2026-08-02",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.9,
                    reviews: 1130,
                    free: false
                },
                {
                    id: 169,
                    cat: "teknologi",
                    title: "Mobile App Festival",
                    img: "teknologi7.jpg",
                    desc: "Pameran aplikasi mobile inovatif.",
                    date: "2026-08-09",
                    time: "10:00 - 18:00 WIB",
                    location: "Trans Studio Bandung",
                    rating: 4.8,
                    reviews: 790,
                    free: false
                },
                {
                    id: 170,
                    cat: "teknologi",
                    title: "UI/UX Design Workshop",
                    img: "teknologi8.jpg",
                    desc: "Belajar merancang antarmuka yang menarik.",
                    date: "2026-08-16",
                    time: "09:00 - 15:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                }, {
                    id: 171,
                    cat: "teknologi",
                    title: "Cloud Computing Day",
                    img: "teknologi9.jpg",
                    desc: "Seminar cloud computing dan DevOps.",
                    date: "2026-08-23",
                    time: "09:00 - 17:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 710,
                    free: false
                },
                {
                    id: 172,
                    cat: "teknologi",
                    title: "Robotics Expo Bandung",
                    img: "teknologi10.jpg",
                    desc: "Pameran robot dan otomatisasi.",
                    date: "2026-08-30",
                    time: "10:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1210,
                    free: false
                },
                {
                    id: 173,
                    cat: "teknologi",
                    title: "Smart City Forum",
                    img: "teknologi11.jpg",
                    desc: "Diskusi solusi kota pintar.",
                    date: "2026-09-06",
                    time: "09:00 - 16:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 174,
                    cat: "teknologi",
                    title: "IoT Innovation Day",
                    img: "teknologi12.jpg",
                    desc: "Inovasi Internet of Things.",
                    date: "2026-09-13",
                    time: "10:00 - 17:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 640,
                    free: false
                },
                {
                    id: 175,
                    cat: "teknologi",
                    title: "Data Science Bootcamp",
                    img: "teknologi13.jpg",
                    desc: "Pelatihan analisis data intensif.",
                    date: "2026-09-20",
                    time: "08:30 - 16:30 WIB",
                    location: "Telkom University",
                    rating: 4.9,
                    reviews: 950,
                    free: false
                },
                {
                    id: 176,
                    cat: "teknologi",
                    title: "Machine Learning Meetup",
                    img: "teknologi14.jpg",
                    desc: "Berbagi ilmu machine learning.",
                    date: "2026-09-27",
                    time: "13:00 - 17:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 720,
                    free: false
                },
                {
                    id: 177,
                    cat: "teknologi",
                    title: "Hackathon Bandung",
                    img: "teknologi15.jpg",
                    desc: "Kompetisi coding 24 jam.",
                    date: "2026-10-04",
                    time: "09:00 - 09:00 WIB",
                    location: "ITB",
                    rating: 4.9,
                    reviews: 1380,
                    free: false
                },
                {
                    id: 178,
                    cat: "teknologi",
                    title: "Game Developer Conference",
                    img: "teknologi16.jpg",
                    desc: "Seminar industri game Indonesia.",
                    date: "2026-10-11",
                    time: "10:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 910,
                    free: false
                },
                {
                    id: 179,
                    cat: "teknologi",
                    title: "Coding for Beginners",
                    img: "teknologi17.jpg",
                    desc: "Workshop dasar pemrograman.",
                    date: "2026-10-18",
                    time: "09:00 - 15:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 540,
                    free: false
                },
                {
                    id: 180,
                    cat: "teknologi",
                    title: "Blockchain Indonesia Meetup",
                    img: "teknologi18.jpg",
                    desc: "Diskusi blockchain dan Web3.",
                    date: "2026-10-25",
                    time: "13:00 - 17:00 WIB",
                    location: "Hotel Hilton Bandung",
                    rating: 4.7,
                    reviews: 610,
                    free: false
                },
                {
                    id: 181,
                    cat: "teknologi",
                    title: "Digital Marketing Tech",
                    img: "teknologi19.jpg",
                    desc: "Teknologi dalam pemasaran digital.",
                    date: "2026-11-01",
                    time: "09:00 - 16:00 WIB",
                    location: "El Hotel Bandung",
                    rating: 4.8,
                    reviews: 670,
                    free: false
                },
                {
                    id: 182,
                    cat: "teknologi",
                    title: "Tech Career Fair",
                    img: "teknologi20.jpg",
                    desc: "Bursa kerja bidang teknologi.",
                    date: "2026-11-08",
                    time: "09:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1090,
                    free: false
                },
                {
                    id: 183,
                    cat: "teknologi",
                    title: "Python Programming Day",
                    img: "teknologi21.jpg",
                    desc: "Workshop pemrograman Python.",
                    date: "2026-11-15",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 184,
                    cat: "teknologi",
                    title: "Open Source Summit",
                    img: "teknologi22.jpg",
                    desc: "Komunitas open source berkumpul.",
                    date: "2026-11-22",
                    time: "10:00 - 17:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 630,
                    free: false
                },
                {
                    id: 185,
                    cat: "teknologi",
                    title: "Women in Tech Bandung",
                    img: "teknologi23.jpg",
                    desc: "Seminar dan networking perempuan di bidang teknologi.",
                    date: "2026-11-29",
                    time: "09:00 - 15:00 WIB",
                    location: "Telkom University",
                    rating: 4.9,
                    reviews: 840,
                    free: false
                },
                {
                    id: 186,
                    cat: "teknologi",
                    title: "Future Tech Expo",
                    img: "teknologi24.jpg",
                    desc: "Pameran inovasi teknologi terbaru.",
                    date: "2026-12-06",
                    time: "10:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1430,
                    free: false
                },
                {
                    id: 187,
                    cat: "teknologi",
                    title: "AR & VR Experience",
                    img: "teknologi25.jpg",
                    desc: "Mengenal teknologi virtual reality.",
                    date: "2026-12-13",
                    time: "10:00 - 18:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 188,
                    cat: "teknologi",
                    title: "Startup Pitch Competition",
                    img: "teknologi26.jpg",
                    desc: "Kompetisi presentasi startup.",
                    date: "2026-12-20",
                    time: "09:00 - 17:00 WIB",
                    location: "ITB Innovation Park",
                    rating: 4.8,
                    reviews: 740,
                    free: false
                },
                {
                    id: 189,
                    cat: "teknologi",
                    title: "Tech Innovation Week",
                    img: "teknologi27.jpg",
                    desc: "Pekan inovasi teknologi Bandung.",
                    date: "2027-01-10",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1240,
                    free: false
                },
                {
                    id: 190,
                    cat: "teknologi",
                    title: "Digital Transformation Forum",
                    img: "teknologi28.jpg",
                    desc: "Transformasi digital untuk bisnis.",
                    date: "2027-01-17",
                    time: "09:00 - 16:00 WIB",
                    location: "Hotel Pullman Bandung",
                    rating: 4.8,
                    reviews: 710,
                    free: false
                }, {
                    id: 191,
                    cat: "teknologi",
                    title: "AI for Education",
                    img: "teknologi29.jpg",
                    desc: "Pemanfaatan AI dalam pendidikan.",
                    date: "2027-01-24",
                    time: "09:00 - 15:00 WIB",
                    location: "Universitas Pendidikan Indonesia",
                    rating: 4.8,
                    reviews: 650,
                    free: false
                },
                {
                    id: 192,
                    cat: "teknologi",
                    title: "Big Data Conference",
                    img: "teknologi30.jpg",
                    desc: "Konferensi analisis big data.",
                    date: "2027-01-31",
                    time: "09:00 - 17:00 WIB",
                    location: "Telkom University",
                    rating: 4.9,
                    reviews: 910,
                    free: false
                },
                {
                    id: 193,
                    cat: "teknologi",
                    title: "Tech Networking Night",
                    img: "teknologi31.jpg",
                    desc: "Malam networking profesional IT.",
                    date: "2027-02-07",
                    time: "18:00 - 21:00 WIB",
                    location: "Braga",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 194,
                    cat: "teknologi",
                    title: "DevOps Meetup",
                    img: "teknologi32.jpg",
                    desc: "Sharing DevOps dan CI/CD.",
                    date: "2027-02-14",
                    time: "13:00 - 17:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 590,
                    free: false
                },
                {
                    id: 195,
                    cat: "teknologi",
                    title: "Flutter Developer Day",
                    img: "teknologi33.jpg",
                    desc: "Workshop pengembangan aplikasi Flutter.",
                    date: "2027-02-21",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 680,
                    free: false
                },
                {
                    id: 196,
                    cat: "teknologi",
                    title: "Android Developer Conference",
                    img: "teknologi34.jpg",
                    desc: "Seminar Android terbaru.",
                    date: "2027-02-28",
                    time: "09:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 197,
                    cat: "teknologi",
                    title: "Tech Leadership Summit",
                    img: "teknologi35.jpg",
                    desc: "Kepemimpinan di industri teknologi.",
                    date: "2027-03-07",
                    time: "09:00 - 16:00 WIB",
                    location: "Hotel Aryaduta Bandung",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 198,
                    cat: "teknologi",
                    title: "Creative Coding Workshop",
                    img: "teknologi36.jpg",
                    desc: "Workshop coding kreatif.",
                    date: "2027-03-14",
                    time: "10:00 - 15:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 480,
                    free: false
                },
                {
                    id: 199,
                    cat: "teknologi",
                    title: "Drone Technology Expo",
                    img: "teknologi37.jpg",
                    desc: "Pameran teknologi drone.",
                    date: "2027-03-21",
                    time: "10:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 960,
                    free: false
                },
                {
                    id: 200,
                    cat: "teknologi",
                    title: "Green Technology Forum",
                    img: "teknologi38.jpg",
                    desc: "Teknologi ramah lingkungan.",
                    date: "2027-03-28",
                    time: "09:00 - 15:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.8,
                    reviews: 570,
                    free: false
                },
                {
                    id: 201,
                    cat: "teknologi",
                    title: "Fintech Innovation Day",
                    img: "teknologi39.jpg",
                    desc: "Inovasi teknologi finansial.",
                    date: "2027-04-04",
                    time: "09:00 - 16:00 WIB",
                    location: "Hotel Hilton Bandung",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 202,
                    cat: "teknologi",
                    title: "Software Engineering Summit",
                    img: "teknologi40.jpg",
                    desc: "Konferensi software engineering.",
                    date: "2027-04-11",
                    time: "09:00 - 17:00 WIB",
                    location: "ITB",
                    rating: 4.9,
                    reviews: 1080,
                    free: false
                },
                {
                    id: 203,
                    cat: "teknologi",
                    title: "Tech Education Expo",
                    img: "teknologi41.jpg",
                    desc: "Pameran pendidikan teknologi.",
                    date: "2027-04-18",
                    time: "10:00 - 18:00 WIB",
                    location: "UPI Bandung",
                    rating: 4.7,
                    reviews: 540,
                    free: false
                },
                {
                    id: 204,
                    cat: "teknologi",
                    title: "Coding Challenge Bandung",
                    img: "teknologi42.jpg",
                    desc: "Kompetisi coding mahasiswa dan umum.",
                    date: "2027-04-25",
                    time: "08:00 - 17:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 850,
                    free: false
                },
                {
                    id: 205,
                    cat: "teknologi",
                    title: "Innovation Startup Fest",
                    img: "teknologi43.jpg",
                    desc: "Festival startup dan teknologi kreatif.",
                    date: "2027-05-02",
                    time: "10:00 - 19:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.9,
                    reviews: 1180,
                    free: false
                },
                {
                    id: 206,
                    cat: "teknologi",
                    title: "Smart Home Expo",
                    img: "teknologi44.jpg",
                    desc: "Pameran teknologi rumah pintar.",
                    date: "2027-05-09",
                    time: "10:00 - 18:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 207,
                    cat: "teknologi",
                    title: "Digital Creator Summit",
                    img: "teknologi45.jpg",
                    desc: "Seminar untuk content creator digital.",
                    date: "2027-05-16",
                    time: "09:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 790,
                    free: false
                },
                {
                    id: 208,
                    cat: "teknologi",
                    title: "E-Commerce Innovation",
                    img: "teknologi46.jpg",
                    desc: "Strategi dan teknologi e-commerce.",
                    date: "2027-05-23",
                    time: "09:00 - 16:00 WIB",
                    location: "El Hotel Bandung",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 209,
                    cat: "teknologi",
                    title: "Future Programmer Camp",
                    img: "teknologi47.jpg",
                    desc: "Pelatihan coding untuk pelajar.",
                    date: "2027-05-30",
                    time: "09:00 - 15:00 WIB",
                    location: "ITB",
                    rating: 4.9,
                    reviews: 930,
                    free: false
                },
                {
                    id: 210,
                    cat: "teknologi",
                    title: "Bandung AI Festival",
                    img: "teknologi48.jpg",
                    desc: "Festival AI dengan demo teknologi terkini.",
                    date: "2027-06-06",
                    time: "10:00 - 19:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1470,
                    free: false
                },
                {
                    id: 211,
                    cat: "teknologi",
                    title: "Tech Innovation Awards",
                    img: "teknologi49.jpg",
                    desc: "Penghargaan inovasi teknologi terbaik.",
                    date: "2027-06-13",
                    time: "18:00 - 21:00 WIB",
                    location: "Hotel Pullman Bandung",
                    rating: 4.8,
                    reviews: 640,
                    free: false
                },
                {
                    id: 212,
                    cat: "teknologi",
                    title: "Future Digital Indonesia",
                    img: "teknologi50.jpg",
                    desc: "Konferensi transformasi digital nasional.",
                    date: "2027-06-20",
                    time: "09:00 - 17:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1390,
                    free: false
                },
                {
                    id: 213,
                    cat: "teknologi",
                    title: "Bandung Digital Expo",
                    img: "teknologi51.jpg",
                    desc: "Pameran teknologi tahunan terbesar di Bandung.",
                    date: "2027-06-27",
                    time: "10:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 5.0,
                    reviews: 2210,
                    free: false
                },
                {
                    id: 214,
                    cat: "olahraga",
                    title: "Bandung Marathon",
                    img: "olahraga1.jpg",
                    desc: "Lomba lari marathon tahunan Kota Bandung.",
                    date: "2026-07-04",
                    time: "05:30 - 11:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.9,
                    reviews: 2180,
                    free: false
                },
                {
                    id: 215,
                    cat: "olahraga",
                    title: "Fun Run Braga",
                    img: "olahraga2.jpg",
                    desc: "Lari santai menyusuri kawasan Braga.",
                    date: "2026-07-11",
                    time: "06:00 - 09:00 WIB",
                    location: "Jalan Braga",
                    rating: 4.8,
                    reviews: 1120,
                    free: false
                },
                {
                    id: 216,
                    cat: "olahraga",
                    title: "Cycling Around Bandung",
                    img: "olahraga3.jpg",
                    desc: "Gowes bersama menjelajahi ikon kota Bandung.",
                    date: "2026-07-18",
                    time: "06:30 - 10:30 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 960,
                    free: false
                },
                {
                    id: 217,
                    cat: "olahraga",
                    title: "Bandung Badminton Open",
                    img: "olahraga4.jpg",
                    desc: "Turnamen bulu tangkis tingkat regional.",
                    date: "2026-07-25",
                    time: "08:00 - 18:00 WIB",
                    location: "GOR Pajajaran",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                },
                {
                    id: 218,
                    cat: "olahraga",
                    title: "Basketball Championship",
                    img: "olahraga5.jpg",
                    desc: "Kompetisi basket antar komunitas.",
                    date: "2026-08-01",
                    time: "09:00 - 20:00 WIB",
                    location: "GOR C-Tra Arena",
                    rating: 4.7,
                    reviews: 790,
                    free: false
                },
                {
                    id: 219,
                    cat: "olahraga",
                    title: "Mini Soccer Cup",
                    img: "olahraga6.jpg",
                    desc: "Turnamen mini soccer antar tim lokal.",
                    date: "2026-08-08",
                    time: "08:00 - 17:00 WIB",
                    location: "Progresif Sport Center",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 220,
                    cat: "olahraga",
                    title: "Bandung Tennis Tournament",
                    img: "olahraga7.jpg",
                    desc: "Kompetisi tenis terbuka.",
                    date: "2026-08-15",
                    time: "08:00 - 16:00 WIB",
                    location: "Lapangan Tenis Siliwangi",
                    rating: 4.7,
                    reviews: 620,
                    free: false
                }, {
                    id: 221,
                    cat: "olahraga",
                    title: "Yoga in The Park",
                    img: "olahraga8.jpg",
                    desc: "Sesi yoga bersama di ruang terbuka.",
                    date: "2026-08-22",
                    time: "07:00 - 09:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.9,
                    reviews: 1010,
                    free: false
                },
                {
                    id: 222,
                    cat: "olahraga",
                    title: "Zumba Festival",
                    img: "olahraga9.jpg",
                    desc: "Senam Zumba bersama instruktur profesional.",
                    date: "2026-08-29",
                    time: "07:00 - 10:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 980,
                    free: false
                },
                {
                    id: 223,
                    cat: "olahraga",
                    title: "Bandung Football League",
                    img: "olahraga10.jpg",
                    desc: "Liga sepak bola komunitas.",
                    date: "2026-09-05",
                    time: "08:00 - 17:00 WIB",
                    location: "Stadion Siliwangi",
                    rating: 4.8,
                    reviews: 930,
                    free: false
                },
                {
                    id: 224,
                    cat: "olahraga",
                    title: "Table Tennis Challenge",
                    img: "olahraga11.jpg",
                    desc: "Turnamen tenis meja terbuka.",
                    date: "2026-09-12",
                    time: "09:00 - 17:00 WIB",
                    location: "GOR Pajajaran",
                    rating: 4.7,
                    reviews: 540,
                    free: false
                },
                {
                    id: 225,
                    cat: "olahraga",
                    title: "Skateboard Competition",
                    img: "olahraga12.jpg",
                    desc: "Kompetisi skateboard untuk pemula dan profesional.",
                    date: "2026-09-19",
                    time: "10:00 - 18:00 WIB",
                    location: "Skatepark Bandung",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 226,
                    cat: "olahraga",
                    title: "BMX Freestyle Show",
                    img: "olahraga13.jpg",
                    desc: "Atraksi dan kompetisi BMX.",
                    date: "2026-09-26",
                    time: "13:00 - 18:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 227,
                    cat: "olahraga",
                    title: "Bandung Hiking Day",
                    img: "olahraga14.jpg",
                    desc: "Pendakian santai bersama komunitas.",
                    date: "2026-10-03",
                    time: "06:00 - 13:00 WIB",
                    location: "Tebing Keraton",
                    rating: 4.9,
                    reviews: 1230,
                    free: false
                },
                {
                    id: 228,
                    cat: "olahraga",
                    title: "Mountain Bike Adventure",
                    img: "olahraga15.jpg",
                    desc: "Jelajah jalur sepeda gunung.",
                    date: "2026-10-10",
                    time: "06:30 - 12:00 WIB",
                    location: "Dago Pakar",
                    rating: 4.8,
                    reviews: 820,
                    free: false
                },
                {
                    id: 229,
                    cat: "olahraga",
                    title: "Bandung Swimming Meet",
                    img: "olahraga16.jpg",
                    desc: "Kejuaraan renang antar klub.",
                    date: "2026-10-17",
                    time: "08:00 - 17:00 WIB",
                    location: "Kolam Renang UPI",
                    rating: 4.7,
                    reviews: 650,
                    free: false
                },
                {
                    id: 230,
                    cat: "olahraga",
                    title: "Kids Sports Festival",
                    img: "olahraga17.jpg",
                    desc: "Festival olahraga untuk anak-anak.",
                    date: "2026-10-24",
                    time: "08:00 - 14:00 WIB",
                    location: "Lapangan Gasibu",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 231,
                    cat: "olahraga",
                    title: "Volleyball Championship",
                    img: "olahraga18.jpg",
                    desc: "Kompetisi bola voli antar klub.",
                    date: "2026-10-31",
                    time: "09:00 - 18:00 WIB",
                    location: "GOR Pajajaran",
                    rating: 4.7,
                    reviews: 610,
                    free: false
                },
                {
                    id: 232,
                    cat: "olahraga",
                    title: "Bandung Trail Run",
                    img: "olahraga19.jpg",
                    desc: "Lomba lari lintas alam.",
                    date: "2026-11-07",
                    time: "06:00 - 12:00 WIB",
                    location: "Dago Pakar",
                    rating: 4.9,
                    reviews: 1180,
                    free: false
                },
                {
                    id: 233,
                    cat: "olahraga",
                    title: "Fitness Challenge",
                    img: "olahraga20.jpg",
                    desc: "Kompetisi kebugaran terbuka.",
                    date: "2026-11-14",
                    time: "09:00 - 16:00 WIB",
                    location: "Ciwalk",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 234,
                    cat: "olahraga",
                    title: "Taekwondo Championship",
                    img: "olahraga21.jpg",
                    desc: "Kejuaraan taekwondo tingkat kota.",
                    date: "2026-11-21",
                    time: "08:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 890,
                    free: false
                },
                {
                    id: 235,
                    cat: "olahraga",
                    title: "Karate Open Tournament",
                    img: "olahraga22.jpg",
                    desc: "Turnamen karate antar dojo.",
                    date: "2026-11-28",
                    time: "08:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 770,
                    free: false
                },
                {
                    id: 236,
                    cat: "olahraga",
                    title: "Archery Competition",
                    img: "olahraga23.jpg",
                    desc: "Kompetisi panahan terbuka.",
                    date: "2026-12-05",
                    time: "08:00 - 15:00 WIB",
                    location: "Lapangan Arcamanik",
                    rating: 4.7,
                    reviews: 590,
                    free: false
                },
                {
                    id: 237,
                    cat: "olahraga",
                    title: "Bandung Equestrian Show",
                    img: "olahraga24.jpg",
                    desc: "Pertunjukan dan lomba berkuda.",
                    date: "2026-12-12",
                    time: "09:00 - 16:00 WIB",
                    location: "Arcamanik",
                    rating: 4.8,
                    reviews: 680,
                    free: false
                },
                {
                    id: 238,
                    cat: "olahraga",
                    title: "Futsal Championship",
                    img: "olahraga25.jpg",
                    desc: "Turnamen futsal antar komunitas.",
                    date: "2026-12-19",
                    time: "08:00 - 18:00 WIB",
                    location: "Progresif Sport Center",
                    rating: 4.8,
                    reviews: 960,
                    free: false
                },
                {
                    id: 239,
                    cat: "olahraga",
                    title: "Bandung CrossFit Games",
                    img: "olahraga26.jpg",
                    desc: "Kompetisi CrossFit.",
                    date: "2027-01-09",
                    time: "09:00 - 16:00 WIB",
                    location: "Gymnasium Bandung",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 240,
                    cat: "olahraga",
                    title: "Sunrise Fun Bike",
                    img: "olahraga27.jpg",
                    desc: "Gowes santai menikmati pagi Bandung.",
                    date: "2027-01-16",
                    time: "06:00 - 10:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                }, {
                    id: 241,
                    cat: "olahraga",
                    title: "Street Basketball 3x3",
                    img: "olahraga28.jpg",
                    desc: "Kompetisi basket 3 lawan 3.",
                    date: "2027-01-23",
                    time: "09:00 - 18:00 WIB",
                    location: "C-Tra Arena",
                    rating: 4.7,
                    reviews: 650,
                    free: false
                },
                {
                    id: 242,
                    cat: "olahraga",
                    title: "Bandung Climbing Festival",
                    img: "olahraga29.jpg",
                    desc: "Kompetisi panjat tebing.",
                    date: "2027-01-30",
                    time: "08:00 - 17:00 WIB",
                    location: "Wall Climbing Arcamanik",
                    rating: 4.8,
                    reviews: 590,
                    free: false
                },
                {
                    id: 243,
                    cat: "olahraga",
                    title: "Sports Expo Bandung",
                    img: "olahraga30.jpg",
                    desc: "Pameran olahraga dan perlengkapan sport.",
                    date: "2027-02-06",
                    time: "10:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.8,
                    reviews: 740,
                    free: false
                },
                {
                    id: 244,
                    cat: "olahraga",
                    title: "Badminton Fun Match",
                    img: "olahraga31.jpg",
                    desc: "Pertandingan persahabatan bulu tangkis.",
                    date: "2027-02-13",
                    time: "08:00 - 14:00 WIB",
                    location: "GOR Pajajaran",
                    rating: 4.7,
                    reviews: 530,
                    free: false
                },
                {
                    id: 245,
                    cat: "olahraga",
                    title: "Bandung Chess Tournament",
                    img: "olahraga32.jpg",
                    desc: "Kejuaraan catur terbuka.",
                    date: "2027-02-20",
                    time: "09:00 - 17:00 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 246,
                    cat: "olahraga",
                    title: "Inline Skate Competition",
                    img: "olahraga33.jpg",
                    desc: "Kompetisi sepatu roda.",
                    date: "2027-02-27",
                    time: "09:00 - 16:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.7,
                    reviews: 510,
                    free: false
                },
                {
                    id: 247,
                    cat: "olahraga",
                    title: "Family Sports Day",
                    img: "olahraga34.jpg",
                    desc: "Hari olahraga bersama keluarga.",
                    date: "2027-03-06",
                    time: "07:00 - 12:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1090,
                    free: false
                },
                {
                    id: 248,
                    cat: "olahraga",
                    title: "Bandung Color Run",
                    img: "olahraga35.jpg",
                    desc: "Lomba lari penuh warna.",
                    date: "2027-03-13",
                    time: "06:00 - 10:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.9,
                    reviews: 1450,
                    free: false
                },
                {
                    id: 249,
                    cat: "olahraga",
                    title: "Aerobic Festival",
                    img: "olahraga36.jpg",
                    desc: "Festival senam aerobik massal.",
                    date: "2027-03-20",
                    time: "07:00 - 10:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.7,
                    reviews: 570,
                    free: false
                },
                {
                    id: 250,
                    cat: "olahraga",
                    title: "Silat Championship",
                    img: "olahraga37.jpg",
                    desc: "Kompetisi pencak silat.",
                    date: "2027-03-27",
                    time: "08:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 251,
                    cat: "olahraga",
                    title: "Bandung Sports Carnival",
                    img: "olahraga38.jpg",
                    desc: "Festival olahraga berbagai cabang.",
                    date: "2027-04-03",
                    time: "09:00 - 20:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1260,
                    free: false
                },
                {
                    id: 252,
                    cat: "olahraga",
                    title: "Running Clinic",
                    img: "olahraga39.jpg",
                    desc: "Pelatihan teknik lari.",
                    date: "2027-04-10",
                    time: "06:00 - 09:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.7,
                    reviews: 450,
                    free: false
                },
                {
                    id: 253,
                    cat: "olahraga",
                    title: "Outdoor Adventure Camp",
                    img: "olahraga40.jpg",
                    desc: "Aktivitas olahraga alam terbuka.",
                    date: "2027-04-17",
                    time: "08:00 - 16:00 WIB",
                    location: "Orchid Forest Cikole",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 254,
                    cat: "olahraga",
                    title: "Bandung Triathlon",
                    img: "olahraga41.jpg",
                    desc: "Kompetisi renang, sepeda, dan lari.",
                    date: "2027-04-24",
                    time: "05:30 - 13:00 WIB",
                    location: "Jatinangor",
                    rating: 4.9,
                    reviews: 1320,
                    free: false
                },
                {
                    id: 255,
                    cat: "olahraga",
                    title: "Martial Arts Festival",
                    img: "olahraga42.jpg",
                    desc: "Festival berbagai bela diri.",
                    date: "2027-05-01",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 720,
                    free: false
                },
                {
                    id: 256,
                    cat: "olahraga",
                    title: "Street Workout Competition",
                    img: "olahraga43.jpg",
                    desc: "Kompetisi calisthenics.",
                    date: "2027-05-08",
                    time: "08:00 - 15:00 WIB",
                    location: "Taman Super Hero",
                    rating: 4.7,
                    reviews: 490,
                    free: false
                },
                {
                    id: 257,
                    cat: "olahraga",
                    title: "Bandung Golf Open",
                    img: "olahraga44.jpg",
                    desc: "Turnamen golf tahunan.",
                    date: "2027-05-15",
                    time: "07:00 - 16:00 WIB",
                    location: "Dago Golf Course",
                    rating: 4.8,
                    reviews: 650,
                    free: false
                },
                {
                    id: 258,
                    cat: "olahraga",
                    title: "Community Cycling Fest",
                    img: "olahraga45.jpg",
                    desc: "Festival sepeda bersama komunitas.",
                    date: "2027-05-22",
                    time: "06:00 - 11:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 830,
                    free: false
                },
                {
                    id: 259,
                    cat: "olahraga",
                    title: "Women Fitness Day",
                    img: "olahraga46.jpg",
                    desc: "Festival kebugaran khusus perempuan.",
                    date: "2027-05-29",
                    time: "08:00 - 12:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 260,
                    cat: "olahraga",
                    title: "Bandung Sports Awards",
                    img: "olahraga47.jpg",
                    desc: "Penghargaan atlet dan komunitas olahraga.",
                    date: "2027-06-05",
                    time: "18:00 - 21:00 WIB",
                    location: "Hotel Pullman Bandung",
                    rating: 4.8,
                    reviews: 540,
                    free: false
                }, {
                    id: 261,
                    cat: "olahraga",
                    title: "Eco Trail Adventure",
                    img: "olahraga48.jpg",
                    desc: "Trail run sambil kampanye lingkungan.",
                    date: "2027-06-12",
                    time: "06:00 - 12:00 WIB",
                    location: "Maribaya",
                    rating: 4.9,
                    reviews: 970,
                    free: false
                },
                {
                    id: 262,
                    cat: "olahraga",
                    title: "National Sports Festival",
                    img: "olahraga49.jpg",
                    desc: "Festival olahraga tingkat nasional.",
                    date: "2027-06-19",
                    time: "08:00 - 20:00 WIB",
                    location: "Stadion Gelora Bandung Lautan Api",
                    rating: 4.9,
                    reviews: 1780,
                    free: false
                },
                {
                    id: 263,
                    cat: "olahraga",
                    title: "Bandung Sports Expo",
                    img: "olahraga50.jpg",
                    desc: "Pameran dan festival olahraga terbesar di Bandung.",
                    date: "2027-06-26",
                    time: "09:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 5.0,
                    reviews: 2250,
                    free: false
                },
                {
                    id: 264,
                    cat: "edukasi",
                    title: "Bandung Education Expo",
                    img: "edukasi1.jpg",
                    desc: "Pameran pendidikan dan kampus terbaik.",
                    date: "2026-07-05",
                    time: "09:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1480,
                    free: false
                },
                {
                    id: 265,
                    cat: "edukasi",
                    img: "edukasi2.jpg",
                    title: "Scholarship Fair",
                    desc: "Informasi beasiswa dalam dan luar negeri.",
                    date: "2026-07-12",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 1020,
                    free: false
                },
                {
                    id: 266,
                    cat: "edukasi",
                    img: "edukasi3.jpg",
                    title: "Career Preparation Workshop",
                    desc: "Persiapan karier dan dunia kerja.",
                    date: "2026-07-19",
                    time: "09:00 - 15:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 890,
                    free: false
                },
                {
                    id: 267,
                    cat: "edukasi",
                    img: "edukasi4.jpg",
                    title: "Public Speaking Class",
                    desc: "Pelatihan berbicara di depan umum.",
                    date: "2026-07-26",
                    time: "13:00 - 17:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 670,
                    free: false
                },
                {
                    id: 268,
                    cat: "edukasi",
                    img: "edukasi5.jpg",
                    title: "Digital Literacy Seminar",
                    desc: "Seminar literasi digital untuk semua usia.",
                    date: "2026-08-02",
                    time: "09:00 - 15:00 WIB",
                    location: "UPI Bandung",
                    rating: 4.8,
                    reviews: 780,
                    free: false
                },
                {
                    id: 269,
                    cat: "edukasi",
                    img: "edukasi6.jpg",
                    title: "English Conversation Day",
                    desc: "Kelas praktik bahasa Inggris interaktif.",
                    date: "2026-08-09",
                    time: "10:00 - 15:00 WIB",
                    location: "IFI Bandung",
                    rating: 4.7,
                    reviews: 610,
                    free: false
                },
                {
                    id: 270,
                    cat: "edukasi",
                    img: "edukasi7.jpg",
                    title: "Science Discovery Fair",
                    desc: "Pameran eksperimen sains menarik.",
                    date: "2026-08-16",
                    time: "09:00 - 17:00 WIB",
                    location: "Puspa IPTEK Sundial",
                    rating: 4.9,
                    reviews: 1130,
                    free: false
                },
                {
                    id: 271,
                    cat: "edukasi",
                    img: "edukasi8.jpg",
                    title: "Math Challenge Bandung",
                    desc: "Kompetisi matematika tingkat pelajar.",
                    date: "2026-08-23",
                    time: "08:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 272,
                    cat: "edukasi",
                    img: "edukasi9.jpg",
                    title: "Youth Leadership Camp",
                    desc: "Pelatihan kepemimpinan bagi generasi muda.",
                    date: "2026-08-30",
                    time: "08:00 - 17:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.9,
                    reviews: 940,
                    free: false
                },
                {
                    id: 273,
                    cat: "edukasi",
                    img: "edukasi10.jpg",
                    title: "Financial Literacy Workshop",
                    desc: "Edukasi pengelolaan keuangan pribadi.",
                    date: "2026-09-06",
                    time: "09:00 - 15:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 274,
                    cat: "edukasi",
                    img: "edukasi11.jpg",
                    title: "Business Startup Class",
                    desc: "Belajar membangun bisnis dari nol.",
                    date: "2026-09-13",
                    time: "09:00 - 16:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 830,
                    free: false
                },
                {
                    id: 275,
                    cat: "edukasi",
                    img: "edukasi12.jpg",
                    title: "Design Thinking Workshop",
                    desc: "Workshop berpikir kreatif dan inovatif.",
                    date: "2026-09-20",
                    time: "09:00 - 15:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 720,
                    free: false
                },
                {
                    id: 276,
                    cat: "edukasi",
                    img: "edukasi13.jpg",
                    title: "Research Symposium",
                    desc: "Seminar hasil penelitian mahasiswa.",
                    date: "2026-09-27",
                    time: "09:00 - 17:00 WIB",
                    location: "ITB",
                    rating: 4.7,
                    reviews: 580,
                    free: false
                },
                {
                    id: 277,
                    cat: "edukasi",
                    img: "edukasi14.jpg",
                    title: "Entrepreneurship Summit",
                    desc: "Seminar kewirausahaan bersama praktisi.",
                    date: "2026-10-04",
                    time: "09:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1180,
                    free: false
                },
                {
                    id: 278,
                    cat: "edukasi",
                    img: "edukasi15.jpg",
                    title: "Study Abroad Expo",
                    desc: "Pameran studi ke luar negeri.",
                    date: "2026-10-11",
                    time: "10:00 - 18:00 WIB",
                    location: "Hilton Bandung",
                    rating: 4.8,
                    reviews: 910,
                    free: false
                },
                {
                    id: 279,
                    cat: "edukasi",
                    img: "edukasi16.jpg",
                    title: "Creative Writing Workshop",
                    desc: "Pelatihan menulis kreatif.",
                    date: "2026-10-18",
                    time: "09:00 - 15:00 WIB",
                    location: "Perpustakaan Kota Bandung",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 280,
                    cat: "edukasi",
                    img: "edukasi17.jpg",
                    title: "Book Fair Bandung",
                    desc: "Festival buku dan literasi.",
                    date: "2026-10-25",
                    time: "09:00 - 20:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.9,
                    reviews: 1390,
                    free: false
                },
                {
                    id: 281,
                    cat: "edukasi",
                    img: "edukasi18.jpg",
                    title: "Robotics for Students",
                    desc: "Workshop robotika bagi pelajar.",
                    date: "2026-11-01",
                    time: "09:00 - 16:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 282,
                    cat: "edukasi",
                    img: "edukasi19.jpg",
                    title: "Green Education Forum",
                    desc: "Edukasi lingkungan dan keberlanjutan.",
                    date: "2026-11-08",
                    time: "09:00 - 15:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.8,
                    reviews: 630,
                    free: false
                },
                {
                    id: 283,
                    cat: "edukasi",
                    img: "edukasi20.jpg",
                    title: "Campus Open House",
                    desc: "Mengenal berbagai program studi kampus.",
                    date: "2026-11-15",
                    time: "09:00 - 16:00 WIB",
                    location: "UPI Bandung",
                    rating: 4.7,
                    reviews: 710,
                    free: false
                },
                {
                    id: 284,
                    cat: "edukasi",
                    img: "edukasi21.jpg",
                    title: "Language Learning Festival",
                    desc: "Belajar berbagai bahasa asing.",
                    date: "2026-11-22",
                    time: "10:00 - 17:00 WIB",
                    location: "IFI Bandung",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 285,
                    cat: "edukasi",
                    img: "edukasi22.jpg",
                    title: "Innovation in Education",
                    desc: "Seminar inovasi pendidikan modern.",
                    date: "2026-11-29",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 670,
                    free: false
                },
                {
                    id: 286,
                    cat: "edukasi",
                    img: "edukasi23.jpg",
                    title: "Teacher Development Seminar",
                    desc: "Pelatihan guru dan tenaga pendidik.",
                    date: "2026-12-06",
                    time: "08:30 - 16:00 WIB",
                    location: "UPI Bandung",
                    rating: 4.9,
                    reviews: 890,
                    free: false
                },
                {
                    id: 287,
                    cat: "edukasi",
                    img: "edukasi24.jpg",
                    title: "National Education Forum",
                    desc: "Forum pendidikan nasional.",
                    date: "2026-12-13",
                    time: "09:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1240,
                    free: false
                },
                {
                    id: 288,
                    cat: "edukasi",
                    img: "edukasi25.jpg",
                    title: "Student Innovation Expo",
                    desc: "Pameran inovasi karya pelajar.",
                    date: "2026-12-20",
                    time: "09:00 - 18:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 780,
                    free: false
                },
                {
                    id: 289,
                    cat: "edukasi",
                    img: "edukasi26.jpg",
                    title: "Coding for Kids",
                    desc: "Workshop coding dasar untuk anak-anak.",
                    date: "2027-01-10",
                    time: "09:00 - 14:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 650,
                    free: false
                },
                {
                    id: 290,
                    cat: "edukasi",
                    img: "edukasi27.jpg",
                    title: "Astronomy Night",
                    desc: "Edukasi astronomi dan pengamatan bintang.",
                    date: "2027-01-17",
                    time: "18:00 - 21:00 WIB",
                    location: "Bosscha Observatory",
                    rating: 4.9,
                    reviews: 1050,
                    free: false
                }, {
                    id: 291,
                    cat: "edukasi",
                    img: "edukasi28.jpg",
                    title: "Debate Competition",
                    desc: "Kompetisi debat tingkat SMA dan mahasiswa.",
                    date: "2027-01-24",
                    time: "08:00 - 17:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 740,
                    free: false
                },
                {
                    id: 292,
                    cat: "edukasi",
                    img: "edukasi29.jpg",
                    title: "Youth Innovation Camp",
                    desc: "Pelatihan inovasi dan kreativitas.",
                    date: "2027-01-31",
                    time: "09:00 - 17:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 293,
                    cat: "edukasi",
                    img: "edukasi30.jpg",
                    title: "STEM Festival Bandung",
                    desc: "Festival sains, teknologi, teknik, dan matematika.",
                    date: "2027-02-07",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1360,
                    free: false
                },
                {
                    id: 294,
                    cat: "edukasi",
                    img: "edukasi31.jpg",
                    title: "Digital Skills Workshop",
                    desc: "Pelatihan keterampilan digital.",
                    date: "2027-02-14",
                    time: "09:00 - 16:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 295,
                    cat: "edukasi",
                    img: "edukasi32.jpg",
                    title: "Photography Masterclass",
                    desc: "Belajar fotografi bersama profesional.",
                    date: "2027-02-21",
                    time: "09:00 - 15:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.7,
                    reviews: 540,
                    free: false
                },
                {
                    id: 296,
                    cat: "edukasi",
                    img: "edukasi33.jpg",
                    title: "Artificial Intelligence Seminar",
                    desc: "Seminar penerapan AI di berbagai bidang.",
                    date: "2027-02-28",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 297,
                    cat: "edukasi",
                    img: "edukasi34.jpg",
                    title: "Personal Branding Class",
                    desc: "Membangun citra diri profesional.",
                    date: "2027-03-07",
                    time: "10:00 - 15:00 WIB",
                    location: "El Hotel Bandung",
                    rating: 4.7,
                    reviews: 590,
                    free: false
                },
                {
                    id: 298,
                    cat: "edukasi",
                    img: "edukasi35.jpg",
                    title: "Future Career Expo",
                    desc: "Pameran peluang karier masa depan.",
                    date: "2027-03-14",
                    time: "09:00 - 17:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.8,
                    reviews: 960,
                    free: false
                },
                {
                    id: 299,
                    cat: "edukasi",
                    img: "edukasi36.jpg",
                    title: "Academic Writing Workshop",
                    desc: "Pelatihan penulisan karya ilmiah.",
                    date: "2027-03-21",
                    time: "09:00 - 15:00 WIB",
                    location: "UPI Bandung",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 300,
                    cat: "edukasi",
                    img: "edukasi37.jpg",
                    title: "Museum Education Day",
                    desc: "Belajar sejarah melalui museum.",
                    date: "2027-03-28",
                    time: "09:00 - 14:00 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 301,
                    cat: "edukasi",
                    img: "edukasi38.jpg",
                    title: "Science for Everyone",
                    desc: "Demonstrasi eksperimen sains interaktif.",
                    date: "2027-04-04",
                    time: "10:00 - 16:00 WIB",
                    location: "Puspa IPTEK Sundial",
                    rating: 4.9,
                    reviews: 920,
                    free: false
                },
                {
                    id: 302,
                    cat: "edukasi",
                    img: "edukasi39.jpg",
                    title: "Future Leaders Forum",
                    desc: "Seminar kepemimpinan generasi muda.",
                    date: "2027-04-11",
                    time: "09:00 - 16:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 303,
                    cat: "edukasi",
                    img: "edukasi40.jpg",
                    title: "Education Technology Expo",
                    desc: "Pameran teknologi pendidikan.",
                    date: "2027-04-18",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 880,
                    free: false
                },
                {
                    id: 304,
                    cat: "edukasi",
                    img: "edukasi41.jpg",
                    title: "Startup for Students",
                    desc: "Edukasi membangun startup sejak kuliah.",
                    date: "2027-04-25",
                    time: "09:00 - 15:00 WIB",
                    location: "ITB Innovation Park",
                    rating: 4.8,
                    reviews: 650,
                    free: false
                },
                {
                    id: 305,
                    cat: "edukasi",
                    img: "edukasi42.jpg",
                    title: "Climate Education Summit",
                    desc: "Edukasi perubahan iklim dan lingkungan.",
                    date: "2027-05-02",
                    time: "09:00 - 16:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 306,
                    cat: "edukasi",
                    img: "edukasi43.jpg",
                    title: "Creative Learning Festival",
                    desc: "Festival pembelajaran kreatif untuk semua usia.",
                    date: "2027-05-09",
                    time: "09:00 - 18:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1070,
                    free: false
                },
                {
                    id: 307,
                    cat: "edukasi",
                    img: "edukasi44.jpg",
                    title: "National Student Conference",
                    desc: "Konferensi ilmiah mahasiswa nasional.",
                    date: "2027-05-16",
                    time: "09:00 - 17:00 WIB",
                    location: "ITB",
                    rating: 4.9,
                    reviews: 1120,
                    free: false
                },
                {
                    id: 308,
                    cat: "edukasi",
                    img: "edukasi45.jpg",
                    title: "Library Week Bandung",
                    desc: "Pekan literasi dan pameran buku.",
                    date: "2027-05-23",
                    time: "09:00 - 18:00 WIB",
                    location: "Perpustakaan Kota Bandung",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 309,
                    cat: "edukasi",
                    img: "edukasi46.jpg",
                    title: "Future Skills Academy",
                    desc: "Pelatihan keterampilan masa depan.",
                    date: "2027-05-30",
                    time: "09:00 - 16:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 790,
                    free: false
                },
                {
                    id: 310,
                    cat: "edukasi",
                    img: "edukasi47.jpg",
                    title: "Education Innovation Awards",
                    desc: "Penghargaan inovasi pendidikan.",
                    date: "2027-06-06",
                    time: "18:00 - 21:00 WIB",
                    location: "Pullman Bandung",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 311,
                    cat: "edukasi",
                    img: "edukasi48.jpg",
                    title: "Bandung Knowledge Festival",
                    desc: "Festival ilmu pengetahuan dan edukasi.",
                    date: "2027-06-13",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1340,
                    free: false
                },
                {
                    id: 312,
                    cat: "edukasi",
                    img: "edukasi49.jpg",
                    title: "International Education Forum",
                    desc: "Forum pendidikan bertaraf internasional.",
                    date: "2027-06-20",
                    time: "09:00 - 17:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1260,
                    free: false
                },
                {
                    id: 313,
                    cat: "edukasi",
                    img: "edukasi50.jpg",
                    title: "Grand Education Expo",
                    desc: "Pameran pendidikan terbesar di Bandung.",
                    date: "2027-06-27",
                    time: "09:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 5.0,
                    reviews: 2180,
                    free: false
                },
                {
                    id: 314,
                    cat: "seni",
                    img: "seni1.jpg",
                    title: "Bandung Art Festival",
                    desc: "Festival seni yang menampilkan karya seniman lokal dan nasional.",
                    date: "2026-07-05",
                    time: "10:00 - 21:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.9,
                    reviews: 1540,
                    free: false
                },
                {
                    id: 315,
                    cat: "seni",
                    img: "seni2.jpg",
                    title: "Contemporary Art Expo",
                    desc: "Pameran seni kontemporer dari berbagai komunitas kreatif.",
                    date: "2026-07-12",
                    time: "10:00 - 19:00 WIB",
                    location: "Selasar Sunaryo Art Space",
                    rating: 4.8,
                    reviews: 980,
                    free: false
                },
                {
                    id: 316,
                    cat: "seni",
                    img: "seni3.jpg",
                    title: "Live Painting Day",
                    desc: "Seniman melukis secara langsung di hadapan pengunjung.",
                    date: "2026-07-19",
                    time: "09:00 - 17:00 WIB",
                    location: "Braga",
                    rating: 4.7,
                    reviews: 720,
                    free: false
                },
                {
                    id: 317,
                    cat: "seni",
                    img: "seni4.jpg",
                    title: "Bandung Sketch Walk",
                    desc: "Jelajah kota sambil menggambar ikon Bandung.",
                    date: "2026-07-26",
                    time: "08:00 - 12:00 WIB",
                    location: "Jalan Braga",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 318,
                    cat: "seni",
                    img: "seni5.jpg",
                    title: "Photography Exhibition",
                    desc: "Pameran fotografi bertema budaya dan alam Bandung.",
                    date: "2026-08-02",
                    time: "09:00 - 18:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.8,
                    reviews: 840,
                    free: false
                },
                {
                    id: 319,
                    cat: "seni",
                    img: "seni6.jpg",
                    title: "Watercolor Workshop",
                    desc: "Workshop melukis dengan teknik cat air.",
                    date: "2026-08-09",
                    time: "10:00 - 15:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 610,
                    free: false
                },
                {
                    id: 320,
                    cat: "seni",
                    img: "seni7.jpg",
                    title: "Street Art Festival",
                    desc: "Festival mural dan graffiti bersama seniman jalanan.",
                    date: "2026-08-16",
                    time: "10:00 - 20:00 WIB",
                    location: "Cikapundung Riverspot",
                    rating: 4.9,
                    reviews: 1260,
                    free: false
                },
                {
                    id: 321,
                    cat: "seni",
                    img: "seni8.jpg",
                    title: "Illustration Fair",
                    desc: "Pameran ilustrasi digital dan tradisional.",
                    date: "2026-08-23",
                    time: "10:00 - 18:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 322,
                    cat: "seni",
                    img: "seni9.jpg",
                    title: "Bandung Craft Expo",
                    desc: "Pameran kerajinan tangan dan karya kreatif.",
                    date: "2026-08-30",
                    time: "09:00 - 19:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 870,
                    free: false
                },
                {
                    id: 323,
                    cat: "seni",
                    img: "seni10.jpg",
                    title: "Sculpture Exhibition",
                    desc: "Pameran karya seni patung kontemporer.",
                    date: "2026-09-06",
                    time: "09:00 - 18:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.9,
                    reviews: 950,
                    free: false
                },
                {
                    id: 324,
                    cat: "seni",
                    img: "seni11.jpg",
                    title: "Pottery Workshop",
                    desc: "Workshop membuat keramik dan tembikar.",
                    date: "2026-09-13",
                    time: "10:00 - 16:00 WIB",
                    location: "Lawangwangi Creative Space",
                    rating: 4.7,
                    reviews: 560,
                    free: false
                },
                {
                    id: 325,
                    cat: "seni",
                    img: "seni12.jpg",
                    title: "Art Market Bandung",
                    desc: "Bazaar karya seni dari seniman lokal.",
                    date: "2026-09-20",
                    time: "10:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 780,
                    free: false
                },
                {
                    id: 326,
                    cat: "seni",
                    img: "seni13.jpg",
                    title: "Digital Art Showcase",
                    desc: "Pameran seni digital dan NFT.",
                    date: "2026-09-27",
                    time: "10:00 - 18:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 327,
                    cat: "seni",
                    img: "seni14.jpg",
                    title: "Bandung Calligraphy Festival",
                    desc: "Festival kaligrafi modern dan tradisional.",
                    date: "2026-10-04",
                    time: "09:00 - 17:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 328,
                    cat: "seni",
                    img: "seni15.jpg",
                    title: "Creative Illustration Camp",
                    desc: "Workshop ilustrasi bersama profesional.",
                    date: "2026-10-11",
                    time: "09:00 - 16:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 640,
                    free: false
                },
                {
                    id: 329,
                    cat: "seni",
                    img: "seni16.jpg",
                    title: "Art & Coffee Weekend",
                    desc: "Menikmati pameran seni sambil menikmati kopi lokal.",
                    date: "2026-10-18",
                    time: "10:00 - 20:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.8,
                    reviews: 720,
                    free: false
                },
                {
                    id: 330,
                    cat: "seni",
                    img: "seni17.jpg",
                    title: "Bandung Canvas Festival",
                    desc: "Festival melukis bersama di ruang terbuka.",
                    date: "2026-10-25",
                    time: "09:00 - 17:00 WIB",
                    location: "Gasibu",
                    rating: 4.9,
                    reviews: 1130,
                    free: false
                },
                {
                    id: 331,
                    cat: "seni",
                    img: "seni18.jpg",
                    title: "Urban Art Exhibition",
                    desc: "Pameran seni urban dan instalasi modern.",
                    date: "2026-11-01",
                    time: "10:00 - 19:00 WIB",
                    location: "Selasar Sunaryo Art Space",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 332,
                    cat: "seni",
                    img: "seni19.jpg",
                    title: "Traditional Art Gallery",
                    desc: "Pameran seni rupa tradisional Nusantara.",
                    date: "2026-11-08",
                    time: "09:00 - 18:00 WIB",
                    location: "Museum Sri Baduga",
                    rating: 4.7,
                    reviews: 590,
                    free: false
                },
                {
                    id: 333,
                    cat: "seni",
                    img: "seni20.jpg",
                    title: "Bandung Creative Fair",
                    desc: "Festival industri kreatif dan seni.",
                    date: "2026-11-15",
                    time: "10:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1280,
                    free: false
                },
                {
                    id: 334,
                    cat: "seni",
                    img: "seni21.jpg",
                    title: "Mural Competition",
                    desc: "Kompetisi mural terbuka untuk seniman muda.",
                    date: "2026-11-22",
                    time: "09:00 - 17:00 WIB",
                    location: "Cikapundung Riverspot",
                    rating: 4.8,
                    reviews: 680,
                    free: false
                },
                {
                    id: 335,
                    cat: "seni",
                    img: "seni22.jpg",
                    title: "Origami Workshop",
                    desc: "Workshop seni melipat kertas.",
                    date: "2026-11-29",
                    time: "10:00 - 15:00 WIB",
                    location: "Perpustakaan Kota Bandung",
                    rating: 4.7,
                    reviews: 490,
                    free: false
                },
                {
                    id: 336,
                    cat: "seni",
                    img: "seni23.jpg",
                    title: "Bandung Drawing Competition",
                    desc: "Kompetisi menggambar tingkat nasional.",
                    date: "2026-12-06",
                    time: "08:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 337,
                    cat: "seni",
                    img: "seni24.jpg",
                    title: "Fine Art Exhibition",
                    desc: "Pameran lukisan dan karya seni rupa terbaik.",
                    date: "2026-12-13",
                    time: "09:00 - 18:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.9,
                    reviews: 970,
                    free: false
                },
                {
                    id: 338,
                    cat: "seni",
                    img: "seni25.jpg",
                    title: "Art Installation Week",
                    desc: "Instalasi seni interaktif di ruang publik.",
                    date: "2026-12-20",
                    time: "10:00 - 21:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 790,
                    free: false
                },
                {
                    id: 339,
                    cat: "seni",
                    img: "seni26.jpg",
                    title: "Bandung Handmade Festival",
                    desc: "Festival karya handmade lokal.",
                    date: "2027-01-10",
                    time: "10:00 - 19:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 710,
                    free: false
                },
                {
                    id: 340,
                    cat: "seni",
                    img: "seni27.jpg",
                    title: "Painting Masterclass",
                    desc: "Belajar teknik melukis bersama seniman profesional.",
                    date: "2027-01-17",
                    time: "09:00 - 15:00 WIB",
                    location: "Lawangwangi Creative Space",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 341,
                    cat: "seni",
                    img: "seni28.jpg",
                    title: "Art for Kids",
                    desc: "Festival seni kreatif untuk anak-anak.",
                    date: "2027-01-24",
                    time: "09:00 - 14:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.9,
                    reviews: 850,
                    free: false
                },
                {
                    id: 342,
                    cat: "seni",
                    img: "seni29.jpg",
                    title: "Creative Photography Walk",
                    desc: "Hunting foto bersama komunitas fotografi.",
                    date: "2027-01-31",
                    time: "07:00 - 11:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 680,
                    free: false
                },
                {
                    id: 343,
                    cat: "seni",
                    img: "seni30.jpg",
                    title: "Bandung Comic & Illustration Expo",
                    desc: "Pameran komik dan ilustrasi lokal.",
                    date: "2027-02-07",
                    time: "10:00 - 19:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.9,
                    reviews: 1120,
                    free: false
                },
                {
                    id: 344,
                    cat: "seni",
                    img: "seni31.jpg",
                    title: "Art Talk Series",
                    desc: "Diskusi bersama seniman dan kurator.",
                    date: "2027-02-14",
                    time: "13:00 - 16:00 WIB",
                    location: "Selasar Sunaryo Art Space",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 345,
                    cat: "seni",
                    img: "seni32.jpg",
                    title: "Ceramic Art Festival",
                    desc: "Festival seni keramik modern.",
                    date: "2027-02-21",
                    time: "09:00 - 18:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 346,
                    cat: "seni",
                    img: "seni33.jpg",
                    title: "Bandung Creative Weekend",
                    desc: "Festival seni dan industri kreatif.",
                    date: "2027-02-28",
                    time: "10:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1040,
                    free: false
                },
                {
                    id: 347,
                    cat: "seni",
                    img: "seni34.jpg",
                    title: "Portrait Drawing Workshop",
                    desc: "Workshop menggambar wajah.",
                    date: "2027-03-07",
                    time: "09:00 - 15:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 470,
                    free: false
                },
                {
                    id: 348,
                    cat: "seni",
                    img: "seni35.jpg",
                    title: "Art Competition Festival",
                    desc: "Kompetisi seni untuk pelajar dan mahasiswa.",
                    date: "2027-03-14",
                    time: "08:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.8,
                    reviews: 740,
                    free: false
                },
                {
                    id: 349,
                    cat: "seni",
                    img: "seni36.jpg",
                    title: "Visual Art Showcase",
                    desc: "Pameran seni visual modern.",
                    date: "2027-03-21",
                    time: "10:00 - 19:00 WIB",
                    location: "Selasar Sunaryo Art Space",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 350,
                    cat: "seni",
                    img: "seni37.jpg",
                    title: "Eco Art Exhibition",
                    desc: "Pameran seni dari bahan daur ulang.",
                    date: "2027-03-28",
                    time: "09:00 - 18:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 630,
                    free: false
                },
                {
                    id: 351,
                    cat: "seni",
                    img: "seni38.jpg",
                    title: "Art & Culture Fair",
                    desc: "Kolaborasi seni modern dan budaya lokal.",
                    date: "2027-04-04",
                    time: "10:00 - 20:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.9,
                    reviews: 1130,
                    free: false
                },
                {
                    id: 352,
                    cat: "seni",
                    img: "seni39.jpg",
                    title: "Bandung Animation Festival",
                    desc: "Festival animasi karya kreator Indonesia.",
                    date: "2027-04-11",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 353,
                    cat: "seni",
                    img: "seni40.jpg",
                    title: "Creative Poster Competition",
                    desc: "Kompetisi desain poster kreatif.",
                    date: "2027-04-18",
                    time: "08:00 - 16:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 510,
                    free: false
                },
                {
                    id: 354,
                    cat: "seni",
                    img: "seni41.jpg",
                    title: "Textile Art Expo",
                    desc: "Pameran seni tekstil dan kain tradisional.",
                    date: "2027-04-25",
                    time: "09:00 - 18:00 WIB",
                    location: "Museum Tekstil Bandung",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 355,
                    cat: "seni",
                    img: "seni42.jpg",
                    title: "Bandung Design Festival",
                    desc: "Festival desain grafis dan komunikasi visual.",
                    date: "2027-05-02",
                    time: "09:00 - 18:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.9,
                    reviews: 1260,
                    free: false
                },
                {
                    id: 356,
                    cat: "seni",
                    img: "seni43.jpg",
                    title: "Creative Art Market",
                    desc: "Bazaar karya seni dan produk kreatif.",
                    date: "2027-05-09",
                    time: "10:00 - 20:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 770,
                    free: false
                },
                {
                    id: 357,
                    cat: "seni",
                    img: "seni44.jpg",
                    title: "Young Artist Showcase",
                    desc: "Pameran karya seniman muda Bandung.",
                    date: "2027-05-16",
                    time: "09:00 - 18:00 WIB",
                    location: "NuArt Sculpture Park",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 358,
                    cat: "seni",
                    img: "seni45.jpg",
                    title: "Bandung Art Symposium",
                    desc: "Seminar perkembangan seni rupa Indonesia.",
                    date: "2027-05-23",
                    time: "09:00 - 16:00 WIB",
                    location: "ITB",
                    rating: 4.8,
                    reviews: 640,
                    free: false
                },
                {
                    id: 359,
                    cat: "seni",
                    img: "seni46.jpg",
                    title: "National Art Competition",
                    desc: "Kompetisi seni tingkat nasional.",
                    date: "2027-05-30",
                    time: "08:00 - 17:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 970,
                    free: false
                },
                {
                    id: 360,
                    cat: "seni",
                    img: "seni47.jpg",
                    title: "Bandung Creative Awards",
                    desc: "Penghargaan bagi seniman dan kreator terbaik.",
                    date: "2027-06-06",
                    time: "18:00 - 21:00 WIB",
                    location: "Pullman Bandung",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 361,
                    cat: "seni",
                    img: "seni48.jpg",
                    title: "Art Innovation Festival",
                    desc: "Festival seni dengan teknologi interaktif.",
                    date: "2027-06-13",
                    time: "10:00 - 20:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.9,
                    reviews: 1150,
                    free: false
                },
                {
                    id: 362,
                    cat: "seni",
                    img: "seni49.jpg",
                    title: "International Art Expo",
                    desc: "Pameran seni internasional di Bandung.",
                    date: "2027-06-20",
                    time: "09:00 - 19:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1380,
                    free: false
                },
                {
                    id: 363,
                    cat: "seni",
                    img: "seni50.jpg",
                    title: "Grand Bandung Art Expo",
                    desc: "Festival seni tahunan terbesar di Kota Bandung.",
                    date: "2027-06-27",
                    time: "10:00 - 21:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 5.0,
                    reviews: 2240,
                    free: false
                },
                {
                    id: 364,
                    cat: "komunitas",
                    img: "komunitas1.jpg",
                    title: "Bandung Community Festival",
                    desc: "Festival yang mempertemukan berbagai komunitas di Bandung.",
                    date: "2026-07-04",
                    time: "09:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1580,
                    free: false
                },
                {
                    id: 365,
                    cat: "komunitas",
                    img: "komunitas2.jpg",
                    title: "Community Gathering Day",
                    desc: "Ajang silaturahmi antar komunitas.",
                    date: "2026-07-11",
                    time: "09:00 - 15:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 920,
                    free: false
                },
                {
                    id: 366,
                    cat: "komunitas",
                    img: "komunitas3.jpg",
                    title: "Volunteer Fair Bandung",
                    desc: "Pameran organisasi sosial dan relawan.",
                    date: "2026-07-18",
                    time: "10:00 - 17:00 WIB",
                    location: "Balai Kota Bandung",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 367,
                    cat: "komunitas",
                    img: "komunitas4.jpg",
                    title: "Car Free Day Meetup",
                    desc: "Kegiatan komunitas saat Car Free Day.",
                    date: "2026-07-25",
                    time: "06:00 - 10:00 WIB",
                    location: "Dago",
                    rating: 4.8,
                    reviews: 1120,
                    free: false
                },
                {
                    id: 368,
                    cat: "komunitas",
                    img: "komunitas5.jpg",
                    title: "Bandung Book Club",
                    desc: "Diskusi buku bersama komunitas literasi.",
                    date: "2026-08-01",
                    time: "14:00 - 17:00 WIB",
                    location: "Perpustakaan Kota Bandung",
                    rating: 4.7,
                    reviews: 620,
                    free: false
                },
                {
                    id: 369,
                    cat: "komunitas",
                    img: "komunitas6.jpg",
                    title: "Photography Community Walk",
                    desc: "Hunting foto bersama komunitas fotografi.",
                    date: "2026-08-08",
                    time: "07:00 - 11:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 370,
                    cat: "komunitas",
                    img: "komunitas7.jpg",
                    title: "Coffee Lovers Meetup",
                    desc: "Kopdar pecinta kopi dan barista.",
                    date: "2026-08-15",
                    time: "16:00 - 20:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 371,
                    cat: "komunitas",
                    img: "komunitas8.jpg",
                    title: "Cycling Community Ride",
                    desc: "Gowes santai bersama komunitas sepeda.",
                    date: "2026-08-22",
                    time: "06:30 - 10:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 372,
                    cat: "komunitas",
                    img: "komunitas9.jpg",
                    title: "Pet Lovers Gathering",
                    desc: "Pertemuan komunitas pecinta hewan peliharaan.",
                    date: "2026-08-29",
                    time: "08:00 - 12:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 373,
                    cat: "komunitas",
                    img: "komunitas10.jpg",
                    title: "Youth Community Forum",
                    desc: "Forum diskusi komunitas anak muda.",
                    date: "2026-09-05",
                    time: "09:00 - 16:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 670,
                    free: false
                },
                {
                    id: 374,
                    cat: "komunitas",
                    img: "komunitas11.jpg",
                    title: "Women Community Meetup",
                    desc: "Gathering komunitas perempuan inspiratif.",
                    date: "2026-09-12",
                    time: "09:00 - 15:00 WIB",
                    location: "El Hotel Bandung",
                    rating: 4.8,
                    reviews: 710,
                    free: false
                },
                {
                    id: 375,
                    cat: "komunitas",
                    img: "komunitas12.jpg",
                    title: "Startup Community Talk",
                    desc: "Diskusi komunitas startup Bandung.",
                    date: "2026-09-19",
                    time: "13:00 - 17:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 376,
                    cat: "komunitas",
                    img: "komunitas13.jpg",
                    title: "Language Exchange Meetup",
                    desc: "Belajar bahasa bersama komunitas internasional.",
                    date: "2026-09-26",
                    time: "15:00 - 18:00 WIB",
                    location: "Braga",
                    rating: 4.7,
                    reviews: 580,
                    free: false
                },
                {
                    id: 377,
                    cat: "komunitas",
                    img: "komunitas14.jpg",
                    title: "Creative Community Fair",
                    desc: "Festival komunitas kreatif Bandung.",
                    date: "2026-10-03",
                    time: "10:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1240,
                    free: false
                },
                {
                    id: 378,
                    cat: "komunitas",
                    img: "komunitas15.jpg",
                    title: "Gardening Community Day",
                    desc: "Berbagi ilmu berkebun dan tanaman hias.",
                    date: "2026-10-10",
                    time: "08:00 - 12:00 WIB",
                    location: "Taman Hutan Raya Djuanda",
                    rating: 4.7,
                    reviews: 490,
                    free: false
                },
                {
                    id: 379,
                    cat: "komunitas",
                    img: "komunitas16.jpg",
                    title: "Eco Community Gathering",
                    desc: "Kegiatan komunitas peduli lingkungan.",
                    date: "2026-10-17",
                    time: "08:00 - 14:00 WIB",
                    location: "Cikapundung Riverspot",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 380,
                    cat: "komunitas",
                    img: "komunitas17.jpg",
                    title: "Board Game Meetup",
                    desc: "Bermain board game bersama komunitas.",
                    date: "2026-10-24",
                    time: "13:00 - 18:00 WIB",
                    location: "Braga Citywalk",
                    rating: 4.8,
                    reviews: 630,
                    free: false
                },
                {
                    id: 381,
                    cat: "komunitas",
                    img: "komunitas18.jpg",
                    title: "Anime & Cosplay Gathering",
                    desc: "Pertemuan komunitas anime dan cosplay.",
                    date: "2026-10-31",
                    time: "10:00 - 18:00 WIB",
                    location: "Cihampelas Walk",
                    rating: 4.9,
                    reviews: 1150,
                    free: false
                },
                {
                    id: 382,
                    cat: "komunitas",
                    img: "komunitas19.jpg",
                    title: "Bandung Music Community",
                    desc: "Sharing dan jamming bersama komunitas musik.",
                    date: "2026-11-07",
                    time: "15:00 - 20:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.8,
                    reviews: 720,
                    free: false
                },
                {
                    id: 383,
                    cat: "komunitas",
                    img: "komunitas20.jpg",
                    title: "Hiking Community Meetup",
                    desc: "Kopdar pecinta hiking dan alam.",
                    date: "2026-11-14",
                    time: "08:00 - 13:00 WIB",
                    location: "Dago Pakar",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 384,
                    cat: "komunitas",
                    img: "komunitas21.jpg",
                    title: "Charity Community Event",
                    desc: "Penggalangan dana bersama komunitas sosial.",
                    date: "2026-11-21",
                    time: "09:00 - 16:00 WIB",
                    location: "Alun-Alun Bandung",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 385,
                    cat: "komunitas",
                    img: "komunitas22.jpg",
                    title: "Bandung Coding Community",
                    desc: "Sharing seputar dunia pemrograman.",
                    date: "2026-11-28",
                    time: "13:00 - 17:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 650,
                    free: false
                },
                {
                    id: 386,
                    cat: "komunitas",
                    img: "komunitas23.jpg",
                    title: "Community Picnic Day",
                    desc: "Piknik santai bersama berbagai komunitas.",
                    date: "2026-12-05",
                    time: "09:00 - 15:00 WIB",
                    location: "Taman Balai Kota",
                    rating: 4.8,
                    reviews: 710,
                    free: false
                },
                {
                    id: 387,
                    cat: "komunitas",
                    img: "komunitas24.jpg",
                    title: "Social Impact Forum",
                    desc: "Diskusi proyek sosial dan pemberdayaan masyarakat.",
                    date: "2026-12-12",
                    time: "09:00 - 16:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 388,
                    cat: "komunitas",
                    img: "komunitas25.jpg",
                    title: "Family Community Festival",
                    desc: "Festival keluarga dan komunitas.",
                    date: "2026-12-19",
                    time: "09:00 - 20:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1320,
                    free: false
                },
                {
                    id: 389,
                    cat: "komunitas",
                    img: "komunitas26.jpg",
                    title: "Bandung Entrepreneurs Meetup",
                    desc: "Kopdar komunitas wirausaha muda.",
                    date: "2027-01-09",
                    time: "10:00 - 15:00 WIB",
                    location: "Telkom University",
                    rating: 4.8,
                    reviews: 680,
                    free: false
                },
                {
                    id: 390,
                    cat: "komunitas",
                    img: "komunitas27.jpg",
                    title: "Creative Hobby Fair",
                    desc: "Festival berbagai komunitas hobi.",
                    date: "2027-01-16",
                    time: "10:00 - 19:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1170,
                    free: false
                },
                {
                    id: 391,
                    cat: "komunitas",
                    img: "komunitas28.jpg",
                    title: "Public Speaking Club",
                    desc: "Latihan public speaking bersama komunitas.",
                    date: "2027-01-23",
                    time: "13:00 - 16:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.7,
                    reviews: 520,
                    free: false
                },
                {
                    id: 392,
                    cat: "komunitas",
                    img: "komunitas29.jpg",
                    title: "Reading Together",
                    desc: "Membaca buku bersama komunitas literasi.",
                    date: "2027-01-30",
                    time: "09:00 - 12:00 WIB",
                    location: "Perpustakaan Kota Bandung",
                    rating: 4.7,
                    reviews: 470,
                    free: false
                },
                {
                    id: 393,
                    cat: "komunitas",
                    img: "komunitas30.jpg",
                    title: "Community Sports Day",
                    desc: "Olahraga bersama lintas komunitas.",
                    date: "2027-02-06",
                    time: "07:00 - 11:00 WIB",
                    location: "Gasibu",
                    rating: 4.8,
                    reviews: 810,
                    free: false
                },
                {
                    id: 394,
                    cat: "komunitas",
                    img: "komunitas31.jpg",
                    title: "Green Action Bandung",
                    desc: "Aksi tanam pohon dan bersih lingkungan.",
                    date: "2027-02-13",
                    time: "08:00 - 12:00 WIB",
                    location: "Babakan Siliwangi",
                    rating: 4.9,
                    reviews: 950,
                    free: false
                },
                {
                    id: 395,
                    cat: "komunitas",
                    img: "komunitas32.jpg",
                    title: "Film Community Meetup",
                    desc: "Nonton dan diskusi film bersama komunitas.",
                    date: "2027-02-20",
                    time: "14:00 - 18:00 WIB",
                    location: "IFI Bandung",
                    rating: 4.8,
                    reviews: 640,
                    free: false
                },
                {
                    id: 396,
                    cat: "komunitas",
                    img: "komunitas33.jpg",
                    title: "Local Business Networking",
                    desc: "Networking pelaku UMKM dan komunitas bisnis.",
                    date: "2027-02-27",
                    time: "10:00 - 16:00 WIB",
                    location: "Hotel Aryaduta Bandung",
                    rating: 4.8,
                    reviews: 730,
                    free: false
                },
                {
                    id: 397,
                    cat: "komunitas",
                    img: "komunitas34.jpg",
                    title: "Digital Creator Gathering",
                    desc: "Pertemuan content creator Bandung.",
                    date: "2027-03-06",
                    time: "13:00 - 18:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.9,
                    reviews: 1080,
                    free: false
                },
                {
                    id: 398,
                    cat: "komunitas",
                    img: "komunitas35.jpg",
                    title: "Nature Lovers Camp",
                    desc: "Kemah bersama komunitas pecinta alam.",
                    date: "2027-03-13",
                    time: "08:00 - 17:00 WIB",
                    location: "Orchid Forest Cikole",
                    rating: 4.9,
                    reviews: 1120,
                    free: false
                },
                {
                    id: 399,
                    cat: "komunitas",
                    img: "komunitas36.jpg",
                    title: "Bandung Volunteers Day",
                    desc: "Hari relawan dengan berbagai kegiatan sosial.",
                    date: "2027-03-20",
                    time: "08:00 - 15:00 WIB",
                    location: "Gedung Sate",
                    rating: 4.9,
                    reviews: 890,
                    free: false
                },
                {
                    id: 400,
                    cat: "komunitas",
                    img: "komunitas37.jpg",
                    title: "Community Bazaar",
                    desc: "Bazaar hasil karya berbagai komunitas.",
                    date: "2027-03-27",
                    time: "10:00 - 20:00 WIB",
                    location: "Braga",
                    rating: 4.8,
                    reviews: 760,
                    free: false
                },
                {
                    id: 401,
                    cat: "komunitas",
                    img: "komunitas38.jpg",
                    title: "Bandung Friendship Festival",
                    desc: "Festival persahabatan lintas komunitas.",
                    date: "2027-04-03",
                    time: "09:00 - 18:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.9,
                    reviews: 1230,
                    free: false
                },
                {
                    id: 402,
                    cat: "komunitas",
                    img: "komunitas39.jpg",
                    title: "Healthy Living Meetup",
                    desc: "Edukasi gaya hidup sehat bersama komunitas.",
                    date: "2027-04-10",
                    time: "08:00 - 12:00 WIB",
                    location: "Taman Lansia",
                    rating: 4.8,
                    reviews: 690,
                    free: false
                },
                {
                    id: 403,
                    cat: "komunitas",
                    img: "komunitas40.jpg",
                    title: "Community Innovation Forum",
                    desc: "Diskusi inovasi dan kolaborasi komunitas.",
                    date: "2027-04-17",
                    time: "09:00 - 16:00 WIB",
                    location: "Bandung Digital Valley",
                    rating: 4.8,
                    reviews: 620,
                    free: false
                },
                {
                    id: 404,
                    cat: "komunitas",
                    img: "komunitas41.jpg",
                    title: "Youth Volunteer Camp",
                    desc: "Pelatihan dan aksi sosial bagi relawan muda.",
                    date: "2027-04-24",
                    time: "08:00 - 17:00 WIB",
                    location: "Lembang",
                    rating: 4.9,
                    reviews: 1010,
                    free: false
                },
                {
                    id: 405,
                    cat: "komunitas",
                    img: "komunitas42.jpg",
                    title: "Bandung Hobby Expo",
                    desc: "Pameran berbagai komunitas hobi.",
                    date: "2027-05-01",
                    time: "10:00 - 20:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1290,
                    free: false
                },
                {
                    id: 406,
                    cat: "komunitas",
                    img: "komunitas43.jpg",
                    title: "Community Leadership Forum",
                    desc: "Seminar kepemimpinan komunitas.",
                    date: "2027-05-08",
                    time: "09:00 - 15:00 WIB",
                    location: "Gedung Merdeka",
                    rating: 4.8,
                    reviews: 610,
                    free: false
                },
                {
                    id: 407,
                    cat: "komunitas",
                    img: "komunitas44.jpg",
                    title: "Social Innovation Festival",
                    desc: "Festival inovasi sosial dan pemberdayaan masyarakat.",
                    date: "2027-05-15",
                    time: "09:00 - 19:00 WIB",
                    location: "Bandung Creative Hub",
                    rating: 4.9,
                    reviews: 980,
                    free: false
                },
                {
                    id: 408,
                    cat: "komunitas",
                    img: "komunitas45.jpg",
                    title: "Bandung Community Awards",
                    desc: "Penghargaan bagi komunitas inspiratif.",
                    date: "2027-05-22",
                    time: "18:00 - 21:00 WIB",
                    location: "Pullman Bandung",
                    rating: 4.8,
                    reviews: 590,
                    free: false
                },
                {
                    id: 409,
                    cat: "komunitas",
                    img: "komunitas46.jpg",
                    title: "Creative Collaboration Day",
                    desc: "Kolaborasi lintas komunitas kreatif.",
                    date: "2027-05-29",
                    time: "10:00 - 18:00 WIB",
                    location: "Kiara Artha Park",
                    rating: 4.8,
                    reviews: 750,
                    free: false
                },
                {
                    id: 410,
                    cat: "komunitas",
                    img: "komunitas47.jpg",
                    title: "Volunteer Appreciation Night",
                    desc: "Malam apresiasi untuk para relawan.",
                    date: "2027-06-05",
                    time: "18:00 - 21:00 WIB",
                    location: "Hilton Bandung",
                    rating: 4.8,
                    reviews: 570,
                    free: false
                },
                {
                    id: 411,
                    cat: "komunitas",
                    img: "komunitas48.jpg",
                    title: "Bandung Community Expo",
                    desc: "Pameran komunitas dan organisasi lokal.",
                    date: "2027-06-12",
                    time: "09:00 - 20:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 4.9,
                    reviews: 1360,
                    free: false
                },
                {
                    id: 412,
                    cat: "komunitas",
                    img: "komunitas49.jpg",
                    title: "Indonesia Community Summit",
                    desc: "Pertemuan komunitas dari berbagai daerah di Indonesia.",
                    date: "2027-06-19",
                    time: "09:00 - 18:00 WIB",
                    location: "Sabuga",
                    rating: 4.9,
                    reviews: 1490,
                    free: false
                },
                {
                    id: 413,
                    cat: "komunitas",
                    img: "../image/komunitas50.jpg",
                    title: "Grand Community Festival",
                    desc: "Festival tahunan terbesar yang mempertemukan seluruh komunitas di Bandung.",
                    date: "2027-06-26",
                    time: "09:00 - 21:00 WIB",
                    location: "Trans Convention Centre",
                    rating: 5.0,
                    reviews: 2310,
                    free: false
                },
            ];

            /* ============ State ============ */
            const state = {
                search: "",
                categories: new Set(),
                sort: "terdekat",
                page: 1,
                perPage: 5,
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

            function translate(key, fallback = '') {
                if (window.getSiteTranslation) {
                    return window.getSiteTranslation(key, fallback);
                }
                return fallback;
            }

            function getCurrentLang() {
                return window.currentSiteLang || localStorage.getItem('siteLang') || 'id';
            }

            function t(textId, fallback) {
                return translate(textId, fallback);
            }

            function translateEventText(text, fallback = text) {
                if (getCurrentLang() !== 'en' || !text) return text || fallback;

                const replacements = [
                    ['Budaya', 'Culture'],
                    ['Sunda', 'Sundanese'],
                    ['Musik', 'Music'],
                    ['Kuliner', 'Culinary'],
                    ['Teknologi', 'Technology'],
                    ['Olahraga', 'Sports'],
                    ['Edukasi', 'Education'],
                    ['Seni', 'Arts'],
                    ['Komunitas', 'Community'],
                    ['Pameran', 'Exhibition'],
                    ['Konser', 'Concert'],
                    ['Lomba', 'Competition'],
                    ['Pekan', 'Week'],
                    ['Pagelaran', 'Performance'],
                    ['Pertunjukan', 'Performance'],
                    ['Aksi', 'Action'],
                    ['Pasar', 'Market'],
                    ['Malam', 'Night'],
                    ['Menyajikan', 'Featuring'],
                    ['Menikmati', 'Enjoying'],
                    ['Berbagi', 'Sharing'],
                    ['Workshop', 'Workshop'],
                    ['Tradisional', 'Traditional'],
                    ['Kreatif', 'Creative'],
                    ['Kota', 'City'],
                    ['Nusantara', 'Archipelago'],
                    ['Ramah', 'Friendly'],
                    ['Jalan', 'Street'],
                    ['Taman', 'Park'],
                    ['Festival', 'Festival'],
                    ['Khusus', 'Special'],
                    ['Sosial', 'Social'],
                    ['Bersama', 'Together'],
                    ['Desain', 'Design'],
                    ['Kopi', 'Coffee'],
                    ['Cokelat', 'Chocolate'],
                    ['Bakso', 'Meatballs'],
                    ['Sate', 'Satay'],
                    ['Bandung', 'Bandung']
                ];


                let translated = String(text);
                replacements.forEach(([from, to]) => {
                    translated = translated.replace(new RegExp(`\\b${from}\\b`, 'g'), to);
                });
                return translated;
            }

            function formatDateLabel(dateValue, locale = getCurrentLang() === 'en' ? 'en-US' : 'id-ID') {
                const opts = { day: '2-digit', month: 'short', year: 'numeric' };
                const start = new Date(dateValue).toLocaleDateString(locale, opts);
                return start;
            }

            function formatEventDate(ev) {
                const locale = getCurrentLang() === 'en' ? 'en-US' : 'id-ID';
                const start = formatDateLabel(ev.date, locale);
                if (ev.dateEnd) {
                    const end = formatDateLabel(ev.dateEnd, locale);
                    return `${start} – ${end}`;
                }
                return start;
            }

            // Guard: kalau halaman ini gak punya elemen inti event (cards + tabs), stop di sini.
            if (!els.cards || !els.tabs) return;

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
                return formatEventDate(ev);
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

                if (els.count) {
                    const countText = t('eventResultsCount', 'Showing {count} events').replace('{count}', filtered.length);
                    els.count.textContent = countText;
                }

                if (pageItems.length === 0) {
                    els.cards.innerHTML = `
        <div class="empty-state">
          <strong>${t('eventNoResultsTitle', 'No matching events yet')}</strong>
          ${t('eventNoResultsDesc', 'Try changing the search keywords or filter categories.')}
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
                const categoryLabel = t(meta.labelKey, meta.labelKey);
                const translatedTitle = translateEventText(ev.title);
                const translatedDesc = translateEventText(ev.desc);
                const translatedLocation = translateEventText(ev.location);
                const imgFile = ev.img ? ev.img.replace(/^(\.\.\/)?image\//, '') : null;
                const thumbSrc = imgFile ? `../image/${imgFile}` : null;
                return `

    <article class="card" data-id="${ev.id}">
    <div class="card__thumb">
        ${thumbSrc ? `<img class="card__thumb-img" src="${thumbSrc}" alt="${translatedTitle}" onerror="this.style.display='none'">` : thumbSVG(ev.cat)}
        <span class="card__badge">${meta.icon} ${categoryLabel}</span>
    </div>
    <div class="card__body">
        <h3 class="card__title">${translatedTitle}</h3>
        <p class="card__desc">${translatedDesc}</p>
        <div class="card__meta">
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${fmtDate(ev)}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>${ev.time}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${translatedLocation}</span>
          ${ev.free ? `<span style="color:var(--gold-bright); font-weight:600;">${t('eventFree', 'Free')}</span>` : ""}
        </div>
      </div>
      <div class="card__side">
        <div class="card__rating">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.63 22 9.24 16.8 14.14 18.18 21 12 17.4 5.82 21 7.2 14.14 2 9.24 8.91 8.63"/></svg>
        ${ev.rating.toFixed(1)}
          <small>(${ev.reviews.toLocaleString("id-ID")})</small>
        </div>
        <button class="card__save ${isSaved ? "saved" : ""}" aria-label="${t('eventSaveAria', 'Save event')}" data-save="${ev.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isSaved ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>
    </article>`;
    }
 
    function bindCardEvents() {
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
    function renderPagination(totalPages) {
        if (!els.pagination) return;
        let html = "";
        html += `<button class="page-btn" data-page="prev" ${state.page === 1 ? "disabled" : ""} aria-label="${t('eventPaginationPrev', 'Previous page')}">‹</button>`;
 
        const pages = [];
        const p = state.page;
        pages.push(1);
        if (p > 3) pages.push("dots");
        for (let i = Math.max(2, p - 1); i <= Math.min(totalPages - 1, p + 1); i++) pages.push(i);
        if (p < totalPages - 2) pages.push("dots");
        if (totalPages > 1) pages.push(totalPages);
 
        pages.forEach(pg => {
            if (pg === "dots") {
                html += `<span class="page-dots">…</span>`;
            } else {
                html += `<button class="page-btn ${pg === p ? "page-btn--active" : ""}" data-page="${pg}">${pg}</button>`;
            }
        });
 
        html += `<button class="page-btn" data-page="next" ${state.page === totalPages ? "disabled" : ""} aria-label="${t('eventPaginationNext', 'Next page')}">›</button>`;
        els.pagination.innerHTML = html;
 
        els.pagination.querySelectorAll(".page-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const val = btn.dataset.page;
                if (val === "prev") state.page = Math.max(1, state.page - 1);
                else if (val === "next") state.page = Math.min(totalPages, state.page + 1);
                else state.page = Number(val);
                render();
                const resultsEl = document.querySelector(".results");
                if (resultsEl) resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });
    }
 
    /* ============ Filters: sidebar checkboxes ============ */
    const sidebarChecks = document.querySelectorAll('.check-row input[data-cat]');
    sidebarChecks.forEach(chk => {
        chk.addEventListener("change", () => {
            if (chk.dataset.cat === "semua") {
                if (chk.checked) {
                    state.categories.clear();
                    sidebarChecks.forEach(c => { if (c.dataset.cat !== "semua") c.checked = false; });
                }
            } else {
                const semuaChk = document.querySelector('.check-row input[data-cat="semua"]');
                if (semuaChk) semuaChk.checked = false;
                if (chk.checked) state.categories.add(chk.dataset.cat);
                else state.categories.delete(chk.dataset.cat);
                if (state.categories.size === 0 && semuaChk) {
                    semuaChk.checked = true;
                }
            }
            syncTabs();
        });
    });
 
    function syncTabs() {
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
    if (els.applyFilters) {
        els.applyFilters.addEventListener("click", () => {
            state.page = 1;
            render();
        });
    }
 
    if (els.resetFilters) {
        els.resetFilters.addEventListener("click", () => {
            state.categories.clear();
            state.search = "";
            if (els.search) els.search.value = "";
            sidebarChecks.forEach(c => { c.checked = c.dataset.cat === "semua"; });
            const dateFrom = document.getElementById("dateFrom");
            if (dateFrom) dateFrom.value = "";
            const locationSelect = document.getElementById("locationSelect");
            if (locationSelect) locationSelect.value = "";
            document.querySelectorAll('input[name="harga"]').forEach(r => r.checked = false);
            syncTabs();
            state.page = 1;
            render();
        });
    }
 
    /* ============ Search ============ */
    let searchTimer;
    if (els.search) {
        els.search.addEventListener("input", (e) => {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                state.search = e.target.value.trim();
                state.page = 1;
                render();
            }, 200);
        });
    }
 
    /* ============ Sort dropdown ============ */
    if (els.sortTrigger && els.sortbox) {
        els.sortTrigger.addEventListener("click", () => {
            const open = els.sortbox.classList.toggle("open");
            els.sortTrigger.setAttribute("aria-expanded", String(open));
        });
    }
 
    if (els.sortMenu) {
        els.sortMenu.querySelectorAll("li").forEach(li => {
            li.addEventListener("click", () => {
                state.sort = li.dataset.value;
                        const labelKey = {
                            terdekat: 'eventSortNearest',
                            terjauh: 'eventSortFarthest',
                            populer: 'eventSortPopular',
                            rating: 'eventSortRating'
                        }[li.dataset.value];
                        if (els.sortLabel) els.sortLabel.textContent = labelKey ? t(labelKey, li.textContent) : li.textContent;
            });
        });
    }
 
    document.addEventListener("click", (e) => {
        if (els.sortbox && !els.sortbox.contains(e.target)) els.sortbox.classList.remove("open");
    });
 
    const defaultSortItem = document.querySelector(`.sortbox__menu li[data-value="terdekat"]`);
    if (defaultSortItem) defaultSortItem.classList.add("active");
 
    /* ============ Hero lantern lights (signature ambient detail) ============ */
    (function initLanterns() {
        const container = document.getElementById("heroLights");
        if (!container) return;
        const count = 26;
        for (let i = 0; i < count; i++) {
            const dot = document.createElement("span");
            dot.className = "lantern-dot";
            dot.style.left = `${Math.random() * 100}%`;
            dot.style.top = `${20 + Math.random() * 70}%`;
            dot.style.animationDelay = `${Math.random() * 3.5}s`;
            dot.style.animationDuration = `${2.8 + Math.random() * 2.4}s`;
            container.appendChild(dot);
        }
    })();
 
    function applyEventTranslations() {
        const heroTitle = document.querySelector('.hero__title');
        const heroSubtitle = document.querySelector('.hero__subtitle');
        const searchInput = document.getElementById('searchInput');
        const sortLabel = document.getElementById('sortLabel');
        const filterHeading = document.querySelector('.panel__head h2');
        const categoryTitle = document.querySelector('.filter-group__title');
        const dateTitle = document.querySelectorAll('.filter-group__title')[1];
        const locationTitle = document.querySelectorAll('.filter-group__title')[2];
        const priceTitle = document.querySelectorAll('.filter-group__title')[3];
        const applyButton = document.getElementById('applyFilters');
        const resetButton = document.getElementById('resetFilters');
        const allTab = document.querySelector('.tab[data-cat="semua"]');
        const locationSelect = document.getElementById('locationSelect');
        const locationPlaceholder = locationSelect?.querySelector('option[value=""]');
        const allCategoryLabel = document.querySelector('.check-row input[data-cat="semua"]')?.closest('.check-row')?.querySelector('span:last-of-type');
        const priceLabels = document.querySelectorAll('.radio-row span:last-of-type');

        if (heroTitle) heroTitle.innerHTML = t('eventHeroTitle', 'All Events in <span>Bandung</span>');
        if (heroSubtitle) heroSubtitle.textContent = t('eventHeroSubtitle', 'Discover exciting events in Bandung, from culture, music, culinary, to technology.');
        if (searchInput) searchInput.placeholder = t('eventSearchPlaceholder', 'Search events, event names, or locations...');
        if (sortLabel) sortLabel.textContent = t('eventSortNearest', 'Nearest Date');
        if (filterHeading) filterHeading.textContent = t('eventFilterTitle', 'Filter Events');
        if (categoryTitle) categoryTitle.textContent = t('eventCategoryTitle', 'Category');
        if (dateTitle) dateTitle.textContent = t('eventDateTitle', 'Date');
        if (locationTitle) locationTitle.textContent = t('eventLocationTitle', 'Location');
        if (priceTitle) priceTitle.textContent = t('eventPriceTitle', 'Ticket Price');
        if (applyButton) applyButton.textContent = t('eventApplyFilters', 'Apply Filters');
        if (resetButton) resetButton.textContent = t('eventReset', 'Reset');
        if (allTab) allTab.textContent = t('eventAllTab', 'All');
        if (allCategoryLabel) allCategoryLabel.textContent = t('eventAllCategories', 'All Categories');
        if (locationPlaceholder) locationPlaceholder.textContent = t('eventLocationPlaceholder', 'Select location');
        if (priceLabels[0]) priceLabels[0].textContent = t('eventFree', 'Free');
        if (priceLabels[1]) priceLabels[1].textContent = t('eventPaid', 'Paid');

        document.querySelectorAll('.tab').forEach(tab => {
            const cat = tab.dataset.cat;
            if (!cat) return;
            if (cat === 'semua') {
                tab.textContent = t('eventAllTab', 'All');
            } else {
                const key = `eventCategory${cat.charAt(0).toUpperCase()}${cat.slice(1)}`;
                tab.textContent = t(key, tab.textContent);
            }
        });

        document.querySelectorAll('#sortMenu li').forEach(li => {
            const key = {
                terdekat: 'eventSortNearest',
                terjauh: 'eventSortFarthest',
                populer: 'eventSortPopular',
                rating: 'eventSortRating'
            }[li.dataset.value];
            if (key) li.textContent = t(key, li.textContent);
        });

        document.querySelectorAll('.filter-group .check-row').forEach((row, index) => {
            const label = row.querySelector('span:last-of-type');
            if (!label) return;
            const cat = row.querySelector('input[data-cat]')?.dataset.cat;
            if (cat && cat !== 'semua') {
                const key = `eventCategory${cat.charAt(0).toUpperCase()}${cat.slice(1)}`;
                label.textContent = t(`eventCategory${cat.charAt(0).toUpperCase()}${cat.slice(1)}`, label.textContent);
            }
        });
    }

    function refreshEventView() {
        applyEventTranslations();
        render();
    }

    document.addEventListener('languagechange', refreshEventView);

    /* ============ Initial render ============ */
    refreshEventView();
 
});