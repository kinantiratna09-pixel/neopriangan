document.addEventListener('DOMContentLoaded', () => {

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
                { id: 17, cat: "musik", title: "Symphony Under The Stars", desc: "Konser orkestra di bawah langit malam Bandung.", date: "2026-05-09", time: "18:30 - 21:30 WIB", location: "Balai Kota Bandung", rating: 4.9, reviews: 720, free: false },
                { id: 18, cat: "musik", title: "Bandung Indie Night", desc: "Penampilan band indie favorit Bandung.", date: "2026-05-23", time: "18:00 - 22:30 WIB", location: "IFI Bandung", rating: 4.8, reviews: 980, free: false },
                { id: 19, cat: "musik", title: "Acoustic Sunset Session", desc: "Musik akustik menemani senja.", date: "2026-05-30", time: "17:00 - 20:00 WIB", location: "Teras Cikapundung", rating: 4.6, reviews: 540, free: false },
                { id: 20, cat: "musik", title: "Rock in Bandung", desc: "Festival rock bersama band ternama.", date: "2026-07-12", time: "16:00 - 23:00 WIB", location: "Stadion Siliwangi", rating: 4.8, reviews: 1350, free: false },
                { id: 21, cat: "musik", title: "Electronic Night Bandung", desc: "Festival musik elektronik dan visual show.", date: "2026-08-02", time: "19:00 - 00:00 WIB", location: "Trans Convention Centre", rating: 4.8, reviews: 1090, free: false },
                { id: 22, cat: "musik", title: "Pop Hits Live", desc: "Konser lagu pop Indonesia.", date: "2026-08-18", time: "19:00 - 22:00 WIB", location: "Sabuga", rating: 4.7, reviews: 860, free: false },
                { id: 23, cat: "musik", title: "Harmony of Bandung", desc: "Kolaborasi orkestra dan paduan suara.", date: "2026-09-06", time: "18:30 - 21:00 WIB", location: "Gedung Sate", rating: 4.9, reviews: 790, free: false },
                { id: 24, cat: "musik", title: "Folk Music Weekend", desc: "Festival musik folk dan akustik.", date: "2026-09-13", time: "15:00 - 21:00 WIB", location: "Dago Tea House", rating: 4.6, reviews: 570, free: false },
                { id: 25, cat: "musik", title: "Angklung Harmony Concert", desc: "Konser angklung dengan aransemen modern.", date: "2026-09-20", time: "18:00 - 20:30 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 1250, free: false },
                { id: 26, cat: "musik", title: "Sundanese Music Celebration", desc: "Perpaduan musik tradisional Sunda dan modern.", date: "2026-09-27", time: "17:00 - 20:00 WIB", location: "Saung Angklung Udjo", rating: 4.8, reviews: 930, free: false },
                { id: 27, cat: "musik", title: "Coffee & Music Night", desc: "Live music sambil menikmati kopi lokal.", date: "2026-10-03", time: "19:00 - 22:00 WIB", location: "Braga", rating: 4.6, reviews: 510, free: false },
                { id: 28, cat: "musik", title: "Midnight Jazz Session", desc: "Jazz eksklusif hingga larut malam.", date: "2026-10-10", time: "20:00 - 23:30 WIB", location: "Braga Citywalk", rating: 4.8, reviews: 760, free: false },
                { id: 29, cat: "musik", title: "Bandung Choir Festival", desc: "Festival paduan suara berbagai komunitas.", date: "2026-10-17", time: "09:00 - 17:00 WIB", location: "Gedung Indonesia Menggugat", rating: 4.7, reviews: 430, free: false },
                { id: 30, cat: "musik", title: "Indie Pop Showcase", desc: "Musisi indie pop Bandung tampil bersama.", date: "2026-10-24", time: "18:30 - 22:00 WIB", location: "The Hallway Space", rating: 4.7, reviews: 650, free: false },
                { id: 31, cat: "musik", title: "Music in The Park", desc: "Konser santai di taman kota.", date: "2026-10-31", time: "16:00 - 20:00 WIB", location: "Taman Lansia", rating: 4.6, reviews: 590, free: false },
                { id: 32, cat: "musik", title: "Weekend Live Music", desc: "Hiburan live music akhir pekan.", date: "2026-11-07", time: "18:00 - 21:30 WIB", location: "Cihampelas Walk", rating: 4.5, reviews: 470, free: false },
                { id: 33, cat: "musik", title: "Retro Music Night", desc: "Lagu-lagu hits era 80-an dan 90-an.", date: "2026-11-14", time: "19:00 - 22:30 WIB", location: "Sudirman Street", rating: 4.7, reviews: 720, free: false },
                { id: 34, cat: "musik", title: "Youth Music Festival", desc: "Festival musik untuk generasi muda.", date: "2026-11-21", time: "14:00 - 22:00 WIB", location: "ITB Campus Center", rating: 4.8, reviews: 1180, free: false },
                { id: 35, cat: "musik", title: "Bandung DJ Experience", desc: "DJ lokal dan nasional meramaikan malam Bandung.", date: "2026-11-28", time: "20:00 - 00:00 WIB", location: "Braga", rating: 4.7, reviews: 830, free: false },
                { id: 36, cat: "musik", title: "Campus Band Competition", desc: "Kompetisi band antaruniversitas.", date: "2026-12-05", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.6, reviews: 540, free: false },
                { id: 37, cat: "musik", title: "Music Carnival", desc: "Parade musik dan pertunjukan budaya.", date: "2026-12-12", time: "15:00 - 21:00 WIB", location: "Jalan Asia Afrika", rating: 4.8, reviews: 1020, free: false },
                { id: 38, cat: "musik", title: "Guitar Heroes Bandung", desc: "Festival gitaris terbaik Bandung.", date: "2026-12-19", time: "18:00 - 22:00 WIB", location: "Creative Hub Bandung", rating: 4.7, reviews: 680, free: false },
                { id: 39, cat: "musik", title: "Piano Evening Concert", desc: "Resital piano klasik dan kontemporer.", date: "2027-01-10", time: "19:00 - 21:00 WIB", location: "Gedung Merdeka", rating: 4.8, reviews: 590, free: false },
                { id: 40, cat: "musik", title: "String Ensemble Night", desc: "Pertunjukan ansambel musik gesek.", date: "2027-01-17", time: "18:30 - 21:00 WIB", location: "Gedung Merdeka", rating: 4.7, reviews: 480, free: false },
                { id: 41, cat: "musik", title: "City Lights Concert", desc: "Konser malam dengan tata cahaya spektakuler.", date: "2027-01-24", time: "18:00 - 22:00 WIB", location: "Alun-Alun Bandung", rating: 4.8, reviews: 910, free: false },
                { id: 42, cat: "musik", title: "Bandung Buskers Festival", desc: "Festival musisi jalanan Bandung.", date: "2027-01-31", time: "15:00 - 20:00 WIB", location: "Braga", rating: 4.6, reviews: 550, free: false },
                { id: 43, cat: "musik", title: "Sunset Melody", desc: "Musik santai saat matahari terbenam.", date: "2027-02-07", time: "17:00 - 20:00 WIB", location: "Punclut", rating: 4.8, reviews: 810, free: false },
                { id: 44, cat: "musik", title: "Indie Rock Fest", desc: "Festival rock alternatif Bandung.", date: "2027-02-14", time: "18:00 - 23:00 WIB", location: "Sabuga", rating: 4.8, reviews: 970, free: false },
                { id: 45, cat: "musik", title: "Bandung Soundwave", desc: "Festival EDM dengan visual spektakuler.", date: "2027-02-21", time: "19:00 - 00:00 WIB", location: "Summarecon Bandung", rating: 4.9, reviews: 1420, free: false },
                { id: 46, cat: "musik", title: "Classic Meets Modern", desc: "Kolaborasi musik klasik dan pop.", date: "2027-02-28", time: "18:30 - 21:30 WIB", location: "Gedung Sate", rating: 4.8, reviews: 690, free: false },
                { id: 47, cat: "musik", title: "Open Mic Music Night", desc: "Wadah bagi musisi baru untuk tampil.", date: "2027-03-07", time: "19:00 - 22:00 WIB", location: "The Hallway Space", rating: 4.6, reviews: 450, free: false },
                { id: 48, cat: "musik", title: "Harmony Weekend", desc: "Konser keluarga dengan berbagai genre.", date: "2027-03-14", time: "16:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.7, reviews: 760, free: false },
                { id: 49, cat: "musik", title: "Local Artist Showcase", desc: "Penampilan musisi lokal Bandung.", date: "2027-03-21", time: "18:00 - 22:00 WIB", location: "Braga", rating: 4.8, reviews: 820, free: false },
                { id: 50, cat: "musik", title: "Acoustic Friday", desc: "Live acoustic setiap Jumat malam.", date: "2027-03-28", time: "19:00 - 21:30 WIB", location: "Dago", rating: 4.5, reviews: 390, free: false },
                { id: 51, cat: "musik", title: "Music for Charity", desc: "Konser amal bersama musisi Bandung.", date: "2027-04-04", time: "18:00 - 22:00 WIB", location: "Balai Kota Bandung", rating: 4.8, reviews: 670, free: false },
                { id: 52, cat: "musik", title: "Night of Violin", desc: "Pertunjukan solo dan ensemble biola.", date: "2027-04-11", time: "19:00 - 21:00 WIB", location: "Gedung Merdeka", rating: 4.9, reviews: 610, free: false },
                { id: 53, cat: "musik", title: "Bandung Cultural Music", desc: "Musik budaya Nusantara dalam satu panggung.", date: "2027-04-18", time: "17:00 - 20:00 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 960, free: false },
                { id: 54, cat: "musik", title: "Youth Orchestra Concert", desc: "Penampilan orkestra pelajar Bandung.", date: "2027-04-25", time: "18:00 - 21:00 WIB", location: "Sabuga", rating: 4.7, reviews: 560, free: false },
                { id: 55, cat: "musik", title: "Jazz & Coffee Festival", desc: "Festival jazz dengan kopi khas Bandung.", date: "2027-05-02", time: "16:00 - 22:00 WIB", location: "Braga", rating: 4.8, reviews: 1150, free: false },
                { id: 56, cat: "musik", title: "Bandung Melody Fest", desc: "Festival musik populer tahunan.", date: "2027-05-09", time: "15:00 - 23:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1630, free: false },
                { id: 57, cat: "musik", title: "Urban Beats Festival", desc: "Festival hip-hop dan R&B.", date: "2027-05-16", time: "17:00 - 23:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 970, free: false },
                { id: 58, cat: "musik", title: "Street Music Weekend", desc: "Musisi jalanan menghibur pengunjung.", date: "2027-05-23", time: "15:00 - 20:00 WIB", location: "Jalan Asia Afrika", rating: 4.6, reviews: 530, free: false },
                { id: 59, cat: "musik", title: "Pop Culture Concert", desc: "Konser musik pop dan budaya kreatif.", date: "2027-05-30", time: "18:00 - 22:00 WIB", location: "Trans Studio Bandung", rating: 4.7, reviews: 860, free: false },
                { id: 60, cat: "musik", title: "Instrumental Night", desc: "Pertunjukan musik instrumental modern.", date: "2027-06-06", time: "19:00 - 21:00 WIB", location: "Dago Tea House", rating: 4.8, reviews: 620, free: false },
                { id: 61, cat: "musik", title: "Live Band Marathon", desc: "Penampilan puluhan band dalam sehari.", date: "2027-06-13", time: "10:00 - 22:00 WIB", location: "Sabuga", rating: 4.8, reviews: 1290, free: false },
                { id: 62, cat: "musik", title: "Bandung Rhythm Festival", desc: "Perayaan berbagai genre musik.", date: "2027-06-20", time: "15:00 - 23:00 WIB", location: "Lapangan Gasibu", rating: 4.9, reviews: 1480, free: false },
                { id: 63, cat: "musik", title: "Grand Music Celebration", desc: "Festival musik penutup tahun bersama artis ternama.", date: "2027-06-27", time: "18:00 - 23:30 WIB", location: "Lapangan Gasibu", rating: 5.0, reviews: 2150, free: false },
                { id: 64, cat: "budaya", title: "Festival Angklung Nusantara", desc: "Pertunjukan angklung dari berbagai komunitas.", date: "2026-07-05", time: "15:00 - 20:00 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 1280, free: false },
                { id: 65, cat: "budaya", title: "Pagelaran Wayang Golek", desc: "Pertunjukan wayang golek khas Sunda.", date: "2026-07-12", time: "19:00 - 22:00 WIB", location: "Rumentang Siang", rating: 4.8, reviews: 920, free: false },
                { id: 66, cat: "budaya", title: "Bandung Cultural Festival", desc: "Festival seni dan budaya khas Jawa Barat.", date: "2026-07-18", time: "10:00 - 21:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1760, free: false },
                { id: 67, cat: "budaya", title: "Pesta Tari Jaipong", desc: "Penampilan tari Jaipong dari sanggar terbaik.", date: "2026-07-24", time: "18:00 - 21:00 WIB", location: "Gedung Merdeka", rating: 4.8, reviews: 870, free: false },
                { id: 68, cat: "budaya", title: "Malam Budaya Sunda", desc: "Pertunjukan musik dan tari tradisional.", date: "2026-07-30", time: "18:30 - 21:30 WIB", location: "Balai Kota Bandung", rating: 4.7, reviews: 760, free: false },
                { id: 69, cat: "budaya", title: "Festival Karinding", desc: "Mengenalkan alat musik tradisional Karinding.", date: "2026-08-02", time: "16:00 - 20:00 WIB", location: "Dago Tea House", rating: 4.8, reviews: 630, free: false },
                { id: 70, cat: "budaya", title: "Pameran Batik Priangan", desc: "Pameran batik khas Jawa Barat.", date: "2026-08-08", time: "09:00 - 18:00 WIB", location: "Gedung Sate", rating: 4.7, reviews: 520, free: false },
                { id: 71, cat: "budaya", title: "Helaran Budaya Bandung", desc: "Parade budaya berbagai daerah.", date: "2026-08-15", time: "14:00 - 19:00 WIB", location: "Jalan Asia Afrika", rating: 4.9, reviews: 1430, free: false },
                { id: 72, cat: "budaya", title: "Festival Kaulinan Barudak", desc: "Permainan tradisional anak Sunda.", date: "2026-08-22", time: "09:00 - 15:00 WIB", location: "Taman Lansia", rating: 4.6, reviews: 480, free: false },
                { id: 73, cat: "budaya", title: "Festival Pencak Silat", desc: "Demonstrasi seni bela diri tradisional.", date: "2026-08-29", time: "15:00 - 20:00 WIB", location: "Sabuga", rating: 4.8, reviews: 810, free: false },
                { id: 74, cat: "budaya", title: "Harmoni Kecapi Suling", desc: "Konser kecapi suling Sunda.", date: "2026-09-05", time: "18:30 - 21:00 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 920, free: false },
                { id: 75, cat: "budaya", title: "Festival Topeng Nusantara", desc: "Pertunjukan tari topeng tradisional.", date: "2026-09-12", time: "16:00 - 21:00 WIB", location: "Gedung Indonesia Menggugat", rating: 4.7, reviews: 560, free: false },
                { id: 76, cat: "budaya", title: "Pesta Rakyat Bandung", desc: "Hiburan budaya dan UMKM lokal.", date: "2026-09-19", time: "10:00 - 21:00 WIB", location: "Alun-Alun Bandung", rating: 4.8, reviews: 1020, free: false },
                { id: 77, cat: "budaya", title: "Kirab Budaya Sunda", desc: "Arak-arakan budaya khas Sunda.", date: "2026-09-26", time: "08:00 - 12:00 WIB", location: "Braga", rating: 4.8, reviews: 730, free: false },
                { id: 78, cat: "budaya", title: "Festival Aksara Sunda", desc: "Edukasi aksara dan sastra Sunda.", date: "2026-10-03", time: "09:00 - 16:00 WIB", location: "Museum Sri Baduga", rating: 4.7, reviews: 450, free: false },
                { id: 79, cat: "budaya", title: "Lomba Tari Tradisional", desc: "Kompetisi tari antarsanggar.", date: "2026-10-10", time: "13:00 - 18:00 WIB", location: "Sabuga", rating: 4.8, reviews: 610, free: false },
                { id: 80, cat: "budaya", title: "Bandung Heritage Walk", desc: "Jelajah sejarah Kota Bandung.", date: "2026-10-17", time: "07:00 - 11:00 WIB", location: "Braga", rating: 4.9, reviews: 940, free: false },
                { id: 81, cat: "budaya", title: "Festival Seni Rakyat", desc: "Pentas seni tradisional masyarakat.", date: "2026-10-24", time: "15:00 - 20:00 WIB", location: "Balai Kota", rating: 4.7, reviews: 590, free: false },
                { id: 82, cat: "budaya", title: "Malam Dongeng Sunda", desc: "Pertunjukan dongeng tradisional.", date: "2026-10-31", time: "19:00 - 21:00 WIB", location: "Dago Tea House", rating: 4.6, reviews: 390, free: false },
                { id: 83, cat: "budaya", title: "Festival Calung Bandung", desc: "Pertunjukan musik calung.", date: "2026-11-07", time: "16:00 - 20:00 WIB", location: "Saung Angklung Udjo", rating: 4.8, reviews: 670, free: false },
                { id: 84, cat: "budaya", title: "Pekan Budaya Priangan", desc: "Festival budaya khas Priangan.", date: "2026-11-14", time: "10:00 - 20:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1130, free: false },
                { id: 85, cat: "budaya", title: "Pameran Kerajinan Sunda", desc: "Menampilkan kerajinan lokal.", date: "2026-11-21", time: "09:00 - 18:00 WIB", location: "Gedung Sate", rating: 4.7, reviews: 510, free: false },
                { id: 86, cat: "budaya", title: "Festival Kujang", desc: "Mengenalkan sejarah senjata Kujang.", date: "2026-11-28", time: "10:00 - 17:00 WIB", location: "Museum Sri Baduga", rating: 4.7, reviews: 430, free: false },
                { id: 87, cat: "budaya", title: "Pesta Budaya Kampung", desc: "Pentas budaya masyarakat lokal.", date: "2026-12-05", time: "15:00 - 20:00 WIB", location: "Kampung Adat Cikondang", rating: 4.8, reviews: 580, free: false },
                { id: 88, cat: "budaya", title: "Harmoni Nusantara", desc: "Kolaborasi budaya Indonesia.", date: "2026-12-12", time: "17:00 - 22:00 WIB", location: "Gedung Merdeka", rating: 4.9, reviews: 1080, free: false },
                { id: 89, cat: "budaya", title: "Festival Seni Lukis Tradisional", desc: "Pameran lukisan bertema budaya.", date: "2026-12-19", time: "09:00 - 17:00 WIB", location: "NuArt Sculpture Park", rating: 4.7, reviews: 420, free: false },
                { id: 90, cat: "budaya", title: "Malam Sastra Sunda", desc: "Pembacaan puisi dan sastra Sunda.", date: "2027-01-09", time: "18:30 - 21:00 WIB", location: "IFI Bandung", rating: 4.6, reviews: 360, free: false },
                { id: 91, cat: "budaya", title: "Festival Musik Tradisional", desc: "Pertunjukan alat musik Nusantara.", date: "2027-01-16", time: "16:00 - 21:00 WIB", location: "Saung Angklung Udjo", rating: 4.8, reviews: 760, free: false },
                { id: 92, cat: "budaya", title: "Pawai Budaya Bandung", desc: "Parade budaya di pusat kota.", date: "2027-01-23", time: "08:00 - 12:00 WIB", location: "Asia Afrika", rating: 4.9, reviews: 1250, free: false },
                { id: 93, cat: "budaya", title: "Festival Kampung Kreatif", desc: "Budaya dan ekonomi kreatif.", date: "2027-01-30", time: "10:00 - 19:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 830, free: false },
                { id: 94, cat: "budaya", title: "Pesona Budaya Sunda", desc: "Pertunjukan seni Sunda.", date: "2027-02-06", time: "17:00 - 21:00 WIB", location: "Balai Kota", rating: 4.8, reviews: 690, free: false },
                { id: 95, cat: "budaya", title: "Pekan Wayang Golek", desc: "Pekan pertunjukan wayang golek.", date: "2027-02-13", time: "19:00 - 22:00 WIB", location: "Rumentang Siang", rating: 4.9, reviews: 810, free: false },
                { id: 96, cat: "budaya", title: "Festival Busana Tradisional", desc: "Fashion show pakaian adat.", date: "2027-02-20", time: "15:00 - 20:00 WIB", location: "Gedung Sate", rating: 4.7, reviews: 540, free: false },
                { id: 97, cat: "budaya", title: "Panggung Seni Bandung", desc: "Pentas seni budaya lokal.", date: "2027-02-27", time: "18:00 - 21:00 WIB", location: "Gasibu", rating: 4.7, reviews: 620, free: false },
                { id: 98, cat: "budaya", title: "Festival Keraton Sunda", desc: "Mengenal sejarah kerajaan Sunda.", date: "2027-03-06", time: "10:00 - 17:00 WIB", location: "Museum Sri Baduga", rating: 4.8, reviews: 470, free: false },
                { id: 99, cat: "budaya", title: "Bandung Heritage Day", desc: "Jelajah bangunan bersejarah.", date: "2027-03-13", time: "08:00 - 15:00 WIB", location: "Braga", rating: 4.9, reviews: 980, free: false },
                { id: 100, cat: "budaya", title: "Festival Dongeng Anak", desc: "Dongeng budaya untuk anak-anak.", date: "2027-03-20", time: "09:00 - 12:00 WIB", location: "Taman Lansia", rating: 4.7, reviews: 410, free: false },
                { id: 101, cat: "budaya", title: "Pesta Adat Sunda", desc: "Upacara adat dan pertunjukan seni.", date: "2027-03-27", time: "14:00 - 20:00 WIB", location: "Saung Angklung Udjo", rating: 4.8, reviews: 730, free: false },
                { id: 102, cat: "budaya", title: "Festival Etnik Bandung", desc: "Berbagai budaya Nusantara.", date: "2027-04-03", time: "15:00 - 21:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1160, free: false },
                { id: 103, cat: "budaya", title: "Harmoni Tradisi", desc: "Kolaborasi budaya lintas generasi.", date: "2027-04-10", time: "18:00 - 21:00 WIB", location: "Gedung Merdeka", rating: 4.8, reviews: 660, free: false },
                { id: 104, cat: "budaya", title: "Festival Cerita Rakyat", desc: "Kisah legenda Sunda.", date: "2027-04-17", time: "18:30 - 20:30 WIB", location: "Museum Sri Baduga", rating: 4.6, reviews: 380, free: false },
                { id: 105, cat: "budaya", title: "Bandung Art & Culture Expo", desc: "Pameran seni dan budaya.", date: "2027-04-24", time: "10:00 - 20:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1240, free: false },
                { id: 106, cat: "budaya", title: "Festival Rampak Kendang", desc: "Pertunjukan rampak kendang.", date: "2027-05-01", time: "17:00 - 20:00 WIB", location: "Gasibu", rating: 4.9, reviews: 890, free: false },
                { id: 107, cat: "budaya", title: "Pameran Fotografi Budaya", desc: "Foto budaya dan tradisi Bandung.", date: "2027-05-08", time: "09:00 - 18:00 WIB", location: "NuArt Sculpture Park", rating: 4.7, reviews: 460, free: false },
                { id: 108, cat: "budaya", title: "Pekan Sejarah Bandung", desc: "Mengenal sejarah Kota Bandung.", date: "2027-05-15", time: "09:00 - 17:00 WIB", location: "Museum Konferensi Asia Afrika", rating: 4.8, reviews: 710, free: false },
                { id: 109, cat: "budaya", title: "Festival Kampung Adat", desc: "Mengenalkan kehidupan kampung adat.", date: "2027-05-22", time: "10:00 - 18:00 WIB", location: "Kampung Cikondang", rating: 4.7, reviews: 530, free: false },
                { id: 110, cat: "budaya", title: "Harmoni Angklung", desc: "Pertunjukan angklung massal.", date: "2027-05-29", time: "18:00 - 21:00 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 1320, free: false },
                { id: 111, cat: "budaya", title: "Festival Tradisi Nusantara", desc: "Perayaan budaya dari berbagai daerah.", date: "2027-06-05", time: "10:00 - 21:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1410, free: false },
                { id: 112, cat: "budaya", title: "Bandung Heritage Festival", desc: "Festival sejarah dan budaya.", date: "2027-06-12", time: "09:00 - 20:00 WIB", location: "Braga", rating: 4.8, reviews: 870, free: false },
                { id: 113, cat: "budaya", title: "Grand Cultural Celebration", desc: "Festival budaya tahunan terbesar di Bandung.", date: "2027-06-19", time: "10:00 - 22:00 WIB", location: "Lapangan Gasibu", rating: 5.0, reviews: 2050, free: false },
                { id: 114, cat: "kuliner", title: "Bandung Culinary Festival", desc: "Festival kuliner dengan ratusan tenant makanan khas Bandung.", date: "2026-07-06", time: "10:00 - 22:00 WIB", location: "Braga Citywalk", rating: 4.9, reviews: 1850, free: false },
                { id: 115, cat: "kuliner", title: "Street Food Night", desc: "Berburu jajanan kaki lima favorit Bandung.", date: "2026-07-12", time: "17:00 - 23:00 WIB", location: "Sudirman Street", rating: 4.8, reviews: 1420, free: false },
                { id: 116, cat: "kuliner", title: "Festival Seblak Bandung", desc: "Menikmati berbagai kreasi seblak dari UMKM lokal.", date: "2026-07-19", time: "10:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 980, free: false },
                { id: 117, cat: "kuliner", title: "Pasar Kuliner Nusantara", desc: "Aneka makanan khas dari berbagai daerah Indonesia.", date: "2026-07-26", time: "10:00 - 21:00 WIB", location: "Gasibu", rating: 4.8, reviews: 1250, free: false },
                { id: 118, cat: "kuliner", title: "Coffee & Culinary Expo", desc: "Festival kopi lokal dan kuliner kreatif.", date: "2026-08-02", time: "09:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1130, free: false },
                { id: 119, cat: "kuliner", title: "Festival Batagor Bandung", desc: "Menikmati batagor dari berbagai pelaku UMKM.", date: "2026-08-09", time: "11:00 - 20:00 WIB", location: "Alun-Alun Bandung", rating: 4.7, reviews: 890, free: false },
                { id: 120, cat: "kuliner", title: "Bandung Dessert Fair", desc: "Festival aneka dessert, pastry, dan es krim.", date: "2026-08-16", time: "10:00 - 21:00 WIB", location: "Paris Van Java", rating: 4.8, reviews: 960, free: false },
                { id: 121, cat: "kuliner", title: "Night Culinary Market", desc: "Wisata kuliner malam dengan live music.", date: "2026-08-23", time: "17:00 - 23:00 WIB", location: "Braga", rating: 4.8, reviews: 1360, free: false },
                { id: 122, cat: "kuliner", title: "Festival Mie Nusantara", desc: "Beragam olahan mie dari seluruh Indonesia.", date: "2026-08-30", time: "10:00 - 20:00 WIB", location: "Cihampelas Walk", rating: 4.7, reviews: 730, free: false },
                { id: 123, cat: "kuliner", title: "Bandung BBQ Fest", desc: "Festival barbecue dan grilled food.", date: "2026-09-06", time: "16:00 - 22:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 940, free: false },
                { id: 124, cat: "kuliner", title: "Pasar Jajanan Tradisional", desc: "Menampilkan jajanan khas Sunda dan Nusantara.", date: "2026-09-13", time: "09:00 - 18:00 WIB", location: "Gedung Sate", rating: 4.7, reviews: 620, free: false },
                { id: 125, cat: "kuliner", title: "Festival Sate Nusantara", desc: "Berbagai jenis sate dari seluruh Indonesia.", date: "2026-09-20", time: "11:00 - 21:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1480, free: false },
                { id: 126, cat: "kuliner", title: "Weekend Food Carnival", desc: "Festival kuliner keluarga setiap akhir pekan.", date: "2026-09-27", time: "10:00 - 22:00 WIB", location: "Summarecon Bandung", rating: 4.8, reviews: 1170, free: false },
                { id: 127, cat: "kuliner", title: "Bandung Food Truck Festival", desc: "Festival food truck dengan menu unik.", date: "2026-10-04", time: "15:00 - 22:00 WIB", location: "Balai Kota Bandung", rating: 4.7, reviews: 850, free: false },
                { id: 128, cat: "kuliner", title: "Festival Bakso Indonesia", desc: "Menikmati berbagai jenis bakso khas Nusantara.", date: "2026-10-11", time: "10:00 - 20:00 WIB", location: "Sabuga", rating: 4.8, reviews: 1090, free: false },
                { id: 129, cat: "kuliner", title: "Kopi Priangan Fair", desc: "Pameran kopi terbaik dari Jawa Barat.", date: "2026-10-18", time: "09:00 - 19:00 WIB", location: "Braga Citywalk", rating: 4.9, reviews: 910, free: false },
                { id: 130, cat: "kuliner", title: "Festival Kuliner Sunda", desc: "Menyajikan makanan khas Sunda autentik.", date: "2026-10-25", time: "10:00 - 21:00 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 1310, free: false },
                { id: 131, cat: "kuliner", title: "Bandung Street Snack Fest", desc: "Aneka camilan kekinian dan tradisional.", date: "2026-11-01", time: "10:00 - 20:00 WIB", location: "Braga", rating: 4.7, reviews: 690, free: false },
                { id: 132, cat: "kuliner", title: "Pasar Durian Bandung", desc: "Festival durian dari berbagai daerah.", date: "2026-11-08", time: "10:00 - 21:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 980, free: false },
                { id: 133, cat: "kuliner", title: "Festival Martabak", desc: "Beragam kreasi martabak manis dan telur.", date: "2026-11-15", time: "16:00 - 22:00 WIB", location: "Sudirman Street", rating: 4.8, reviews: 1020, free: false },
                { id: 134, cat: "kuliner", title: "Bandung Seafood Festival", desc: "Aneka hidangan laut segar.", date: "2026-11-22", time: "11:00 - 22:00 WIB", location: "Paskal Hyper Square", rating: 4.8, reviews: 870, free: false },
                { id: 135, cat: "kuliner", title: "Festival Roti & Pastry", desc: "Pameran roti artisan dan pastry premium.", date: "2026-11-29", time: "09:00 - 19:00 WIB", location: "Paris Van Java", rating: 4.7, reviews: 610, free: false },
                { id: 136, cat: "kuliner", title: "Nusantara BBQ Carnival", desc: "Festival barbeque khas Indonesia.", date: "2026-12-06", time: "16:00 - 22:00 WIB", location: "Gasibu", rating: 4.8, reviews: 880, free: false },
                { id: 137, cat: "kuliner", title: "Bandung Ice Cream Fest", desc: "Festival es krim dengan berbagai rasa unik.", date: "2026-12-13", time: "11:00 - 20:00 WIB", location: "Cihampelas Walk", rating: 4.8, reviews: 790, free: false },
                { id: 138, cat: "kuliner", title: "Festival Soto Nusantara", desc: "Mencicipi berbagai jenis soto Indonesia.", date: "2026-12-20", time: "10:00 - 20:00 WIB", location: "Sabuga", rating: 4.8, reviews: 930, free: false },
                { id: 139, cat: "kuliner", title: "Pasar Kopi Bandung", desc: "Festival kopi, roasting, dan workshop.", date: "2027-01-10", time: "09:00 - 18:00 WIB", location: "Braga", rating: 4.9, reviews: 860, free: false },
                { id: 140, cat: "kuliner", title: "Festival Nasi Goreng", desc: "Berbagai kreasi nasi goreng khas Indonesia.", date: "2027-01-17", time: "11:00 - 21:00 WIB", location: "Alun-Alun Bandung", rating: 4.7, reviews: 720, free: false },
                { id: 141, cat: "kuliner", title: "Bandung Tea Festival", desc: "Festival teh lokal dengan sesi tea tasting.", date: "2027-01-24", time: "09:00 - 18:00 WIB", location: "Dago Tea House", rating: 4.8, reviews: 650, free: false },
                { id: 142, cat: "kuliner", title: "Festival Kuliner Pedas", desc: "Aneka makanan pedas dari UMKM lokal.", date: "2027-01-31", time: "10:00 - 21:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 1010, free: false },
                { id: 143, cat: "kuliner", title: "Festival Pecinta Kopi", desc: "Ajang berkumpulnya pecinta kopi spesialti.", date: "2027-02-07", time: "09:00 - 20:00 WIB", location: "Braga Citywalk", rating: 4.9, reviews: 970, free: false },
                { id: 144, cat: "kuliner", title: "Bandung Cheese Festival", desc: "Festival makanan berbahan keju.", date: "2027-02-14", time: "10:00 - 21:00 WIB", location: "Paris Van Java", rating: 4.7, reviews: 630, free: false },
                { id: 145, cat: "kuliner", title: "Festival Cokelat Bandung", desc: "Berbagai olahan cokelat premium.", date: "2027-02-21", time: "10:00 - 20:00 WIB", location: "Trans Studio Bandung", rating: 4.8, reviews: 840, free: false },
                { id: 146, cat: "kuliner", title: "Asian Food Expo", desc: "Kuliner khas Asia dalam satu festival.", date: "2027-02-28", time: "10:00 - 22:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1540, free: false },
                { id: 147, cat: "kuliner", title: "Bandung Food Bazaar", desc: "Bazaar kuliner UMKM Bandung.", date: "2027-03-07", time: "10:00 - 21:00 WIB", location: "Balai Kota Bandung", rating: 4.8, reviews: 890, free: false },
                { id: 148, cat: "kuliner", title: "Festival Ayam Nusantara", desc: "Aneka olahan ayam khas Indonesia.", date: "2027-03-14", time: "11:00 - 21:00 WIB", location: "Gasibu", rating: 4.7, reviews: 710, free: false },
                { id: 149, cat: "kuliner", title: "Weekend Coffee Market", desc: "Pasar kopi dan makanan ringan lokal.", date: "2027-03-21", time: "08:00 - 18:00 WIB", location: "Braga", rating: 4.8, reviews: 760, free: false },
                { id: 150, cat: "kuliner", title: "Bandung Sweet Festival", desc: "Festival makanan dan minuman manis.", date: "2027-03-28", time: "10:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 830, free: false },
                { id: 151, cat: "kuliner", title: "Festival Kuliner Ramadhan", desc: "Aneka hidangan berbuka puasa.", date: "2027-04-04", time: "15:00 - 21:00 WIB", location: "Alun-Alun Bandung", rating: 4.9, reviews: 1620, free: false },
                { id: 152, cat: "kuliner", title: "Bandung Fruit Festival", desc: "Festival buah segar dan olahannya.", date: "2027-04-11", time: "09:00 - 19:00 WIB", location: "Gedung Sate", rating: 4.7, reviews: 560, free: false },
                { id: 153, cat: "kuliner", title: "Nusantara Food Fiesta", desc: "Kuliner tradisional dari seluruh Indonesia.", date: "2027-04-18", time: "10:00 - 22:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1430, free: false },
                { id: 154, cat: "kuliner", title: "Festival Makanan Tradisional", desc: "Menikmati cita rasa warisan Nusantara.", date: "2027-04-25", time: "10:00 - 20:00 WIB", location: "Museum Sri Baduga", rating: 4.8, reviews: 820, free: false },
                { id: 155, cat: "kuliner", title: "Bandung Vegan Food Fair", desc: "Festival makanan sehat berbasis nabati.", date: "2027-05-02", time: "09:00 - 19:00 WIB", location: "Paris Van Java", rating: 4.7, reviews: 590, free: false },
                { id: 156, cat: "kuliner", title: "Festival Dessert Nusantara", desc: "Aneka dessert khas Indonesia.", date: "2027-05-09", time: "10:00 - 20:00 WIB", location: "Braga", rating: 4.8, reviews: 770, free: false },
                { id: 157, cat: "kuliner", title: "Bandung Culinary Expo", desc: "Pameran kuliner dan bisnis makanan.", date: "2027-05-16", time: "09:00 - 21:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1270, free: false },
                { id: 158, cat: "kuliner", title: "Festival Sambal Indonesia", desc: "Berbagai sambal khas Nusantara.", date: "2027-05-23", time: "10:00 - 20:00 WIB", location: "Gasibu", rating: 4.8, reviews: 910, free: false },
                { id: 159, cat: "kuliner", title: "Bandung Pizza Festival", desc: "Festival pizza artisan dan modern.", date: "2027-05-30", time: "11:00 - 21:00 WIB", location: "Cihampelas Walk", rating: 4.7, reviews: 680, free: false },
                { id: 160, cat: "kuliner", title: "Street Coffee Weekend", desc: "Kopi lokal, live music, dan bazaar UMKM.", date: "2027-06-06", time: "08:00 - 19:00 WIB", location: "Braga", rating: 4.8, reviews: 740, free: false },
                { id: 161, cat: "kuliner", title: "Festival Minuman Tradisional", desc: "Bandrek, bajigur, dan minuman khas Sunda.", date: "2027-06-13", time: "15:00 - 21:00 WIB", location: "Saung Angklung Udjo", rating: 4.9, reviews: 950, free: false },
                { id: 162, cat: "kuliner", title: "Bandung Gourmet Week", desc: "Pekan kuliner premium dari restoran terbaik Bandung.", date: "2027-06-20", time: "11:00 - 22:00 WIB", location: "Paskal Hyper Square", rating: 4.9, reviews: 1390, free: false },
                { id: 163, cat: "kuliner", title: "Grand Culinary Celebration", desc: "Festival kuliner tahunan terbesar di Bandung dengan ratusan tenant.", date: "2027-06-27", time: "10:00 - 22:00 WIB", location: "Lapangan Gasibu", rating: 5.0, reviews: 2180, free: false },
                { id: 164, cat: "teknologi", title: "Bandung Tech Summit", desc: "Konferensi teknologi dan inovasi digital.", date: "2026-07-05", time: "09:00 - 17:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1520, free: false },
                { id: 165, cat: "teknologi", title: "AI Innovation Expo", desc: "Pameran kecerdasan buatan dan teknologi masa depan.", date: "2026-07-12", time: "10:00 - 18:00 WIB", location: "Sabuga", rating: 4.8, reviews: 980, free: false },
                { id: 166, cat: "teknologi", title: "Startup Connect Bandung", desc: "Ajang networking startup dan investor.", date: "2026-07-19", time: "09:00 - 16:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 870, free: false },
                { id: 167, cat: "teknologi", title: "Web Developer Meetup", desc: "Sharing dan workshop pengembangan web modern.", date: "2026-07-26", time: "13:00 - 17:00 WIB", location: "Bandung Digital Valley", rating: 4.7, reviews: 620, free: false },
                { id: 168, cat: "teknologi", title: "Cyber Security Conference", desc: "Seminar keamanan siber bersama para ahli.", date: "2026-08-02", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.9, reviews: 1130, free: false },
                { id: 169, cat: "teknologi", title: "Mobile App Festival", desc: "Pameran aplikasi mobile inovatif.", date: "2026-08-09", time: "10:00 - 18:00 WIB", location: "Trans Studio Bandung", rating: 4.8, reviews: 790, free: false },
                { id: 170, cat: "teknologi", title: "UI/UX Design Workshop", desc: "Belajar merancang antarmuka yang menarik.", date: "2026-08-16", time: "09:00 - 15:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 560, free: false },
                { id: 171, cat: "teknologi", title: "Cloud Computing Day", desc: "Seminar cloud computing dan DevOps.", date: "2026-08-23", time: "09:00 - 17:00 WIB", location: "Telkom University", rating: 4.8, reviews: 710, free: false },
                { id: 172, cat: "teknologi", title: "Robotics Expo Bandung", desc: "Pameran robot dan otomatisasi.", date: "2026-08-30", time: "10:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1210, free: false },
                { id: 173, cat: "teknologi", title: "Smart City Forum", desc: "Diskusi solusi kota pintar.", date: "2026-09-06", time: "09:00 - 16:00 WIB", location: "Gedung Sate", rating: 4.8, reviews: 690, free: false },
                { id: 174, cat: "teknologi", title: "IoT Innovation Day", desc: "Inovasi Internet of Things.", date: "2026-09-13", time: "10:00 - 17:00 WIB", location: "ITB", rating: 4.8, reviews: 640, free: false },
                { id: 175, cat: "teknologi", title: "Data Science Bootcamp", desc: "Pelatihan analisis data intensif.", date: "2026-09-20", time: "08:30 - 16:30 WIB", location: "Telkom University", rating: 4.9, reviews: 950, free: false },
                { id: 176, cat: "teknologi", title: "Machine Learning Meetup", desc: "Berbagi ilmu machine learning.", date: "2026-09-27", time: "13:00 - 17:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 720, free: false },
                { id: 177, cat: "teknologi", title: "Hackathon Bandung", desc: "Kompetisi coding 24 jam.", date: "2026-10-04", time: "09:00 - 09:00 WIB", location: "ITB", rating: 4.9, reviews: 1380, free: false },
                { id: 178, cat: "teknologi", title: "Game Developer Conference", desc: "Seminar industri game Indonesia.", date: "2026-10-11", time: "10:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 910, free: false },
                { id: 179, cat: "teknologi", title: "Coding for Beginners", desc: "Workshop dasar pemrograman.", date: "2026-10-18", time: "09:00 - 15:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 540, free: false },
                { id: 180, cat: "teknologi", title: "Blockchain Indonesia Meetup", desc: "Diskusi blockchain dan Web3.", date: "2026-10-25", time: "13:00 - 17:00 WIB", location: "Hotel Hilton Bandung", rating: 4.7, reviews: 610, free: false },
                { id: 181, cat: "teknologi", title: "Digital Marketing Tech", desc: "Teknologi dalam pemasaran digital.", date: "2026-11-01", time: "09:00 - 16:00 WIB", location: "El Hotel Bandung", rating: 4.8, reviews: 670, free: false },
                { id: 182, cat: "teknologi", title: "Tech Career Fair", desc: "Bursa kerja bidang teknologi.", date: "2026-11-08", time: "09:00 - 17:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1090, free: false },
                { id: 183, cat: "teknologi", title: "Python Programming Day", desc: "Workshop pemrograman Python.", date: "2026-11-15", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.8, reviews: 760, free: false },
                { id: 184, cat: "teknologi", title: "Open Source Summit", desc: "Komunitas open source berkumpul.", date: "2026-11-22", time: "10:00 - 17:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 630, free: false },
                { id: 185, cat: "teknologi", title: "Women in Tech Bandung", desc: "Seminar dan networking perempuan di bidang teknologi.", date: "2026-11-29", time: "09:00 - 15:00 WIB", location: "Telkom University", rating: 4.9, reviews: 840, free: false },
                { id: 186, cat: "teknologi", title: "Future Tech Expo", desc: "Pameran inovasi teknologi terbaru.", date: "2026-12-06", time: "10:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1430, free: false },
                { id: 187, cat: "teknologi", title: "AR & VR Experience", desc: "Mengenal teknologi virtual reality.", date: "2026-12-13", time: "10:00 - 18:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 690, free: false },
                { id: 188, cat: "teknologi", title: "Startup Pitch Competition", desc: "Kompetisi presentasi startup.", date: "2026-12-20", time: "09:00 - 17:00 WIB", location: "ITB Innovation Park", rating: 4.8, reviews: 740, free: false },
                { id: 189, cat: "teknologi", title: "Tech Innovation Week", desc: "Pekan inovasi teknologi Bandung.", date: "2027-01-10", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1240, free: false },
                { id: 190, cat: "teknologi", title: "Digital Transformation Forum", desc: "Transformasi digital untuk bisnis.", date: "2027-01-17", time: "09:00 - 16:00 WIB", location: "Hotel Pullman Bandung", rating: 4.8, reviews: 710, free: false },
                { id: 191, cat: "teknologi", title: "AI for Education", desc: "Pemanfaatan AI dalam pendidikan.", date: "2027-01-24", time: "09:00 - 15:00 WIB", location: "Universitas Pendidikan Indonesia", rating: 4.8, reviews: 650, free: false },
                { id: 192, cat: "teknologi", title: "Big Data Conference", desc: "Konferensi analisis big data.", date: "2027-01-31", time: "09:00 - 17:00 WIB", location: "Telkom University", rating: 4.9, reviews: 910, free: false },
                { id: 193, cat: "teknologi", title: "Tech Networking Night", desc: "Malam networking profesional IT.", date: "2027-02-07", time: "18:00 - 21:00 WIB", location: "Braga", rating: 4.7, reviews: 520, free: false },
                { id: 194, cat: "teknologi", title: "DevOps Meetup", desc: "Sharing DevOps dan CI/CD.", date: "2027-02-14", time: "13:00 - 17:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 590, free: false },
                { id: 195, cat: "teknologi", title: "Flutter Developer Day", desc: "Workshop pengembangan aplikasi Flutter.", date: "2027-02-21", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.8, reviews: 680, free: false },
                { id: 196, cat: "teknologi", title: "Android Developer Conference", desc: "Seminar Android terbaru.", date: "2027-02-28", time: "09:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 730, free: false },
                { id: 197, cat: "teknologi", title: "Tech Leadership Summit", desc: "Kepemimpinan di industri teknologi.", date: "2027-03-07", time: "09:00 - 16:00 WIB", location: "Hotel Aryaduta Bandung", rating: 4.8, reviews: 610, free: false },
                { id: 198, cat: "teknologi", title: "Creative Coding Workshop", desc: "Workshop coding kreatif.", date: "2027-03-14", time: "10:00 - 15:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 480, free: false },
                { id: 199, cat: "teknologi", title: "Drone Technology Expo", desc: "Pameran teknologi drone.", date: "2027-03-21", time: "10:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 960, free: false },
                { id: 200, cat: "teknologi", title: "Green Technology Forum", desc: "Teknologi ramah lingkungan.", date: "2027-03-28", time: "09:00 - 15:00 WIB", location: "Gedung Sate", rating: 4.8, reviews: 570, free: false },
                { id: 201, cat: "teknologi", title: "Fintech Innovation Day", desc: "Inovasi teknologi finansial.", date: "2027-04-04", time: "09:00 - 16:00 WIB", location: "Hotel Hilton Bandung", rating: 4.8, reviews: 730, free: false },
                { id: 202, cat: "teknologi", title: "Software Engineering Summit", desc: "Konferensi software engineering.", date: "2027-04-11", time: "09:00 - 17:00 WIB", location: "ITB", rating: 4.9, reviews: 1080, free: false },
                { id: 203, cat: "teknologi", title: "Tech Education Expo", desc: "Pameran pendidikan teknologi.", date: "2027-04-18", time: "10:00 - 18:00 WIB", location: "UPI Bandung", rating: 4.7, reviews: 540, free: false },
                { id: 204, cat: "teknologi", title: "Coding Challenge Bandung", desc: "Kompetisi coding mahasiswa dan umum.", date: "2027-04-25", time: "08:00 - 17:00 WIB", location: "Telkom University", rating: 4.8, reviews: 850, free: false },
                { id: 205, cat: "teknologi", title: "Innovation Startup Fest", desc: "Festival startup dan teknologi kreatif.", date: "2027-05-02", time: "10:00 - 19:00 WIB", location: "Bandung Creative Hub", rating: 4.9, reviews: 1180, free: false },
                { id: 206, cat: "teknologi", title: "Smart Home Expo", desc: "Pameran teknologi rumah pintar.", date: "2027-05-09", time: "10:00 - 18:00 WIB", location: "Trans Convention Centre", rating: 4.8, reviews: 620, free: false },
                { id: 207, cat: "teknologi", title: "Digital Creator Summit", desc: "Seminar untuk content creator digital.", date: "2027-05-16", time: "09:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 790, free: false },
                { id: 208, cat: "teknologi", title: "E-Commerce Innovation", desc: "Strategi dan teknologi e-commerce.", date: "2027-05-23", time: "09:00 - 16:00 WIB", location: "El Hotel Bandung", rating: 4.7, reviews: 560, free: false },
                { id: 209, cat: "teknologi", title: "Future Programmer Camp", desc: "Pelatihan coding untuk pelajar.", date: "2027-05-30", time: "09:00 - 15:00 WIB", location: "ITB", rating: 4.9, reviews: 930, free: false },
                { id: 210, cat: "teknologi", title: "Bandung AI Festival", desc: "Festival AI dengan demo teknologi terkini.", date: "2027-06-06", time: "10:00 - 19:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1470, free: false },
                { id: 211, cat: "teknologi", title: "Tech Innovation Awards", desc: "Penghargaan inovasi teknologi terbaik.", date: "2027-06-13", time: "18:00 - 21:00 WIB", location: "Hotel Pullman Bandung", rating: 4.8, reviews: 640, free: false },
                { id: 212, cat: "teknologi", title: "Future Digital Indonesia", desc: "Konferensi transformasi digital nasional.", date: "2027-06-20", time: "09:00 - 17:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1390, free: false },
                { id: 213, cat: "teknologi", title: "Bandung Digital Expo", desc: "Pameran teknologi tahunan terbesar di Bandung.", date: "2027-06-27", time: "10:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 5.0, reviews: 2210, free: false },
                { id: 214, cat: "olahraga", title: "Bandung Marathon", desc: "Lomba lari marathon tahunan Kota Bandung.", date: "2026-07-04", time: "05:30 - 11:00 WIB", location: "Gedung Sate", rating: 4.9, reviews: 2180, free: false },
                { id: 215, cat: "olahraga", title: "Fun Run Braga", desc: "Lari santai menyusuri kawasan Braga.", date: "2026-07-11", time: "06:00 - 09:00 WIB", location: "Jalan Braga", rating: 4.8, reviews: 1120, free: false },
                { id: 216, cat: "olahraga", title: "Cycling Around Bandung", desc: "Gowes bersama menjelajahi ikon kota Bandung.", date: "2026-07-18", time: "06:30 - 10:30 WIB", location: "Gasibu", rating: 4.8, reviews: 960, free: false },
                { id: 217, cat: "olahraga", title: "Bandung Badminton Open", desc: "Turnamen bulu tangkis tingkat regional.", date: "2026-07-25", time: "08:00 - 18:00 WIB", location: "GOR Pajajaran", rating: 4.8, reviews: 870, free: false },
                { id: 218, cat: "olahraga", title: "Basketball Championship", desc: "Kompetisi basket antar komunitas.", date: "2026-08-01", time: "09:00 - 20:00 WIB", location: "GOR C-Tra Arena", rating: 4.7, reviews: 790, free: false },
                { id: 219, cat: "olahraga", title: "Mini Soccer Cup", desc: "Turnamen mini soccer antar tim lokal.", date: "2026-08-08", time: "08:00 - 17:00 WIB", location: "Progresif Sport Center", rating: 4.8, reviews: 810, free: false },
                { id: 220, cat: "olahraga", title: "Bandung Tennis Tournament", desc: "Kompetisi tenis terbuka.", date: "2026-08-15", time: "08:00 - 16:00 WIB", location: "Lapangan Tenis Siliwangi", rating: 4.7, reviews: 620, free: false },
                { id: 221, cat: "olahraga", title: "Yoga in The Park", desc: "Sesi yoga bersama di ruang terbuka.", date: "2026-08-22", time: "07:00 - 09:00 WIB", location: "Taman Lansia", rating: 4.9, reviews: 1010, free: false },
                { id: 222, cat: "olahraga", title: "Zumba Festival", desc: "Senam Zumba bersama instruktur profesional.", date: "2026-08-29", time: "07:00 - 10:00 WIB", location: "Gasibu", rating: 4.8, reviews: 980, free: false },
                { id: 223, cat: "olahraga", title: "Bandung Football League", desc: "Liga sepak bola komunitas.", date: "2026-09-05", time: "08:00 - 17:00 WIB", location: "Stadion Siliwangi", rating: 4.8, reviews: 930, free: false },
                { id: 224, cat: "olahraga", title: "Table Tennis Challenge", desc: "Turnamen tenis meja terbuka.", date: "2026-09-12", time: "09:00 - 17:00 WIB", location: "GOR Pajajaran", rating: 4.7, reviews: 540, free: false },
                { id: 225, cat: "olahraga", title: "Skateboard Competition", desc: "Kompetisi skateboard untuk pemula dan profesional.", date: "2026-09-19", time: "10:00 - 18:00 WIB", location: "Skatepark Bandung", rating: 4.8, reviews: 760, free: false },
                { id: 226, cat: "olahraga", title: "BMX Freestyle Show", desc: "Atraksi dan kompetisi BMX.", date: "2026-09-26", time: "13:00 - 18:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 690, free: false },
                { id: 227, cat: "olahraga", title: "Bandung Hiking Day", desc: "Pendakian santai bersama komunitas.", date: "2026-10-03", time: "06:00 - 13:00 WIB", location: "Tebing Keraton", rating: 4.9, reviews: 1230, free: false },
                { id: 228, cat: "olahraga", title: "Mountain Bike Adventure", desc: "Jelajah jalur sepeda gunung.", date: "2026-10-10", time: "06:30 - 12:00 WIB", location: "Dago Pakar", rating: 4.8, reviews: 820, free: false },
                { id: 229, cat: "olahraga", title: "Bandung Swimming Meet", desc: "Kejuaraan renang antar klub.", date: "2026-10-17", time: "08:00 - 17:00 WIB", location: "Kolam Renang UPI", rating: 4.7, reviews: 650, free: false },
                { id: 230, cat: "olahraga", title: "Kids Sports Festival", desc: "Festival olahraga untuk anak-anak.", date: "2026-10-24", time: "08:00 - 14:00 WIB", location: "Lapangan Gasibu", rating: 4.8, reviews: 730, free: false },
                { id: 231, cat: "olahraga", title: "Volleyball Championship", desc: "Kompetisi bola voli antar klub.", date: "2026-10-31", time: "09:00 - 18:00 WIB", location: "GOR Pajajaran", rating: 4.7, reviews: 610, free: false },
                { id: 232, cat: "olahraga", title: "Bandung Trail Run", desc: "Lomba lari lintas alam.", date: "2026-11-07", time: "06:00 - 12:00 WIB", location: "Dago Pakar", rating: 4.9, reviews: 1180, free: false },
                { id: 233, cat: "olahraga", title: "Fitness Challenge", desc: "Kompetisi kebugaran terbuka.", date: "2026-11-14", time: "09:00 - 16:00 WIB", location: "Ciwalk", rating: 4.7, reviews: 560, free: false },
                { id: 234, cat: "olahraga", title: "Taekwondo Championship", desc: "Kejuaraan taekwondo tingkat kota.", date: "2026-11-21", time: "08:00 - 18:00 WIB", location: "Sabuga", rating: 4.8, reviews: 890, free: false },
                { id: 235, cat: "olahraga", title: "Karate Open Tournament", desc: "Turnamen karate antar dojo.", date: "2026-11-28", time: "08:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 770, free: false },
                { id: 236, cat: "olahraga", title: "Archery Competition", desc: "Kompetisi panahan terbuka.", date: "2026-12-05", time: "08:00 - 15:00 WIB", location: "Lapangan Arcamanik", rating: 4.7, reviews: 590, free: false },
                { id: 237, cat: "olahraga", title: "Bandung Equestrian Show", desc: "Pertunjukan dan lomba berkuda.", date: "2026-12-12", time: "09:00 - 16:00 WIB", location: "Arcamanik", rating: 4.8, reviews: 680, free: false },
                { id: 238, cat: "olahraga", title: "Futsal Championship", desc: "Turnamen futsal antar komunitas.", date: "2026-12-19", time: "08:00 - 18:00 WIB", location: "Progresif Sport Center", rating: 4.8, reviews: 960, free: false },
                { id: 239, cat: "olahraga", title: "Bandung CrossFit Games", desc: "Kompetisi CrossFit.", date: "2027-01-09", time: "09:00 - 16:00 WIB", location: "Gymnasium Bandung", rating: 4.8, reviews: 610, free: false },
                { id: 240, cat: "olahraga", title: "Sunrise Fun Bike", desc: "Gowes santai menikmati pagi Bandung.", date: "2027-01-16", time: "06:00 - 10:00 WIB", location: "Gasibu", rating: 4.8, reviews: 870, free: false },
                { id: 241, cat: "olahraga", title: "Street Basketball 3x3", desc: "Kompetisi basket 3 lawan 3.", date: "2027-01-23", time: "09:00 - 18:00 WIB", location: "C-Tra Arena", rating: 4.7, reviews: 650, free: false },
                { id: 242, cat: "olahraga", title: "Bandung Climbing Festival", desc: "Kompetisi panjat tebing.", date: "2027-01-30", time: "08:00 - 17:00 WIB", location: "Wall Climbing Arcamanik", rating: 4.8, reviews: 590, free: false },
                { id: 243, cat: "olahraga", title: "Sports Expo Bandung", desc: "Pameran olahraga dan perlengkapan sport.", date: "2027-02-06", time: "10:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 4.8, reviews: 740, free: false },
                { id: 244, cat: "olahraga", title: "Badminton Fun Match", desc: "Pertandingan persahabatan bulu tangkis.", date: "2027-02-13", time: "08:00 - 14:00 WIB", location: "GOR Pajajaran", rating: 4.7, reviews: 530, free: false },
                { id: 245, cat: "olahraga", title: "Bandung Chess Tournament", desc: "Kejuaraan catur terbuka.", date: "2027-02-20", time: "09:00 - 17:00 WIB", location: "Balai Kota Bandung", rating: 4.8, reviews: 620, free: false },
                { id: 246, cat: "olahraga", title: "Inline Skate Competition", desc: "Kompetisi sepatu roda.", date: "2027-02-27", time: "09:00 - 16:00 WIB", location: "Kiara Artha Park", rating: 4.7, reviews: 510, free: false },
                { id: 247, cat: "olahraga", title: "Family Sports Day", desc: "Hari olahraga bersama keluarga.", date: "2027-03-06", time: "07:00 - 12:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1090, free: false },
                { id: 248, cat: "olahraga", title: "Bandung Color Run", desc: "Lomba lari penuh warna.", date: "2027-03-13", time: "06:00 - 10:00 WIB", location: "Gedung Sate", rating: 4.9, reviews: 1450, free: false },
                { id: 249, cat: "olahraga", title: "Aerobic Festival", desc: "Festival senam aerobik massal.", date: "2027-03-20", time: "07:00 - 10:00 WIB", location: "Alun-Alun Bandung", rating: 4.7, reviews: 570, free: false },
                { id: 250, cat: "olahraga", title: "Silat Championship", desc: "Kompetisi pencak silat.", date: "2027-03-27", time: "08:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 690, free: false },
                { id: 251, cat: "olahraga", title: "Bandung Sports Carnival", desc: "Festival olahraga berbagai cabang.", date: "2027-04-03", time: "09:00 - 20:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1260, free: false },
                { id: 252, cat: "olahraga", title: "Running Clinic", desc: "Pelatihan teknik lari.", date: "2027-04-10", time: "06:00 - 09:00 WIB", location: "Taman Lansia", rating: 4.7, reviews: 450, free: false },
                { id: 253, cat: "olahraga", title: "Outdoor Adventure Camp", desc: "Aktivitas olahraga alam terbuka.", date: "2027-04-17", time: "08:00 - 16:00 WIB", location: "Orchid Forest Cikole", rating: 4.9, reviews: 980, free: false },
                { id: 254, cat: "olahraga", title: "Bandung Triathlon", desc: "Kompetisi renang, sepeda, dan lari.", date: "2027-04-24", time: "05:30 - 13:00 WIB", location: "Jatinangor", rating: 4.9, reviews: 1320, free: false },
                { id: 255, cat: "olahraga", title: "Martial Arts Festival", desc: "Festival berbagai bela diri.", date: "2027-05-01", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.8, reviews: 720, free: false },
                { id: 256, cat: "olahraga", title: "Street Workout Competition", desc: "Kompetisi calisthenics.", date: "2027-05-08", time: "08:00 - 15:00 WIB", location: "Taman Super Hero", rating: 4.7, reviews: 490, free: false },
                { id: 257, cat: "olahraga", title: "Bandung Golf Open", desc: "Turnamen golf tahunan.", date: "2027-05-15", time: "07:00 - 16:00 WIB", location: "Dago Golf Course", rating: 4.8, reviews: 650, free: false },
                { id: 258, cat: "olahraga", title: "Community Cycling Fest", desc: "Festival sepeda bersama komunitas.", date: "2027-05-22", time: "06:00 - 11:00 WIB", location: "Braga", rating: 4.8, reviews: 830, free: false },
                { id: 259, cat: "olahraga", title: "Women Fitness Day", desc: "Festival kebugaran khusus perempuan.", date: "2027-05-29", time: "08:00 - 12:00 WIB", location: "Gasibu", rating: 4.8, reviews: 760, free: false },
                { id: 260, cat: "olahraga", title: "Bandung Sports Awards", desc: "Penghargaan atlet dan komunitas olahraga.", date: "2027-06-05", time: "18:00 - 21:00 WIB", location: "Hotel Pullman Bandung", rating: 4.8, reviews: 540, free: false },
                { id: 261, cat: "olahraga", title: "Eco Trail Adventure", desc: "Trail run sambil kampanye lingkungan.", date: "2027-06-12", time: "06:00 - 12:00 WIB", location: "Maribaya", rating: 4.9, reviews: 970, free: false },
                { id: 262, cat: "olahraga", title: "National Sports Festival", desc: "Festival olahraga tingkat nasional.", date: "2027-06-19", time: "08:00 - 20:00 WIB", location: "Stadion Gelora Bandung Lautan Api", rating: 4.9, reviews: 1780, free: false },
                { id: 263, cat: "olahraga", title: "Bandung Sports Expo", desc: "Pameran dan festival olahraga terbesar di Bandung.", date: "2027-06-26", time: "09:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 5.0, reviews: 2250, free: false },
                { id: 264, cat: "edukasi", title: "Bandung Education Expo", desc: "Pameran pendidikan dan kampus terbaik.", date: "2026-07-05", time: "09:00 - 17:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1480, free: false },
                { id: 265, cat: "edukasi", title: "Scholarship Fair", desc: "Informasi beasiswa dalam dan luar negeri.", date: "2026-07-12", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.8, reviews: 1020, free: false },
                { id: 266, cat: "edukasi", title: "Career Preparation Workshop", desc: "Persiapan karier dan dunia kerja.", date: "2026-07-19", time: "09:00 - 15:00 WIB", location: "Telkom University", rating: 4.8, reviews: 890, free: false },
                { id: 267, cat: "edukasi", title: "Public Speaking Class", desc: "Pelatihan berbicara di depan umum.", date: "2026-07-26", time: "13:00 - 17:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 670, free: false },
                { id: 268, cat: "edukasi", title: "Digital Literacy Seminar", desc: "Seminar literasi digital untuk semua usia.", date: "2026-08-02", time: "09:00 - 15:00 WIB", location: "UPI Bandung", rating: 4.8, reviews: 780, free: false },
                { id: 269, cat: "edukasi", title: "English Conversation Day", desc: "Kelas praktik bahasa Inggris interaktif.", date: "2026-08-09", time: "10:00 - 15:00 WIB", location: "IFI Bandung", rating: 4.7, reviews: 610, free: false },
                { id: 270, cat: "edukasi", title: "Science Discovery Fair", desc: "Pameran eksperimen sains menarik.", date: "2026-08-16", time: "09:00 - 17:00 WIB", location: "Puspa IPTEK Sundial", rating: 4.9, reviews: 1130, free: false },
                { id: 271, cat: "edukasi", title: "Math Challenge Bandung", desc: "Kompetisi matematika tingkat pelajar.", date: "2026-08-23", time: "08:00 - 16:00 WIB", location: "ITB", rating: 4.8, reviews: 760, free: false },
                { id: 272, cat: "edukasi", title: "Youth Leadership Camp", desc: "Pelatihan kepemimpinan bagi generasi muda.", date: "2026-08-30", time: "08:00 - 17:00 WIB", location: "Bandung Creative Hub", rating: 4.9, reviews: 940, free: false },
                { id: 273, cat: "edukasi", title: "Financial Literacy Workshop", desc: "Edukasi pengelolaan keuangan pribadi.", date: "2026-09-06", time: "09:00 - 15:00 WIB", location: "Gedung Sate", rating: 4.8, reviews: 690, free: false },
                { id: 274, cat: "edukasi", title: "Business Startup Class", desc: "Belajar membangun bisnis dari nol.", date: "2026-09-13", time: "09:00 - 16:00 WIB", location: "Telkom University", rating: 4.8, reviews: 830, free: false },
                { id: 275, cat: "edukasi", title: "Design Thinking Workshop", desc: "Workshop berpikir kreatif dan inovatif.", date: "2026-09-20", time: "09:00 - 15:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 720, free: false },
                { id: 276, cat: "edukasi", title: "Research Symposium", desc: "Seminar hasil penelitian mahasiswa.", date: "2026-09-27", time: "09:00 - 17:00 WIB", location: "ITB", rating: 4.7, reviews: 580, free: false },
                { id: 277, cat: "edukasi", title: "Entrepreneurship Summit", desc: "Seminar kewirausahaan bersama praktisi.", date: "2026-10-04", time: "09:00 - 17:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1180, free: false },
                { id: 278, cat: "edukasi", title: "Study Abroad Expo", desc: "Pameran studi ke luar negeri.", date: "2026-10-11", time: "10:00 - 18:00 WIB", location: "Hilton Bandung", rating: 4.8, reviews: 910, free: false },
                { id: 279, cat: "edukasi", title: "Creative Writing Workshop", desc: "Pelatihan menulis kreatif.", date: "2026-10-18", time: "09:00 - 15:00 WIB", location: "Perpustakaan Kota Bandung", rating: 4.7, reviews: 520, free: false },
                { id: 280, cat: "edukasi", title: "Book Fair Bandung", desc: "Festival buku dan literasi.", date: "2026-10-25", time: "09:00 - 20:00 WIB", location: "Braga Citywalk", rating: 4.9, reviews: 1390, free: false },
                { id: 281, cat: "edukasi", title: "Robotics for Students", desc: "Workshop robotika bagi pelajar.", date: "2026-11-01", time: "09:00 - 16:00 WIB", location: "Telkom University", rating: 4.8, reviews: 810, free: false },
                { id: 282, cat: "edukasi", title: "Green Education Forum", desc: "Edukasi lingkungan dan keberlanjutan.", date: "2026-11-08", time: "09:00 - 15:00 WIB", location: "Gedung Sate", rating: 4.8, reviews: 630, free: false },
                { id: 283, cat: "edukasi", title: "Campus Open House", desc: "Mengenal berbagai program studi kampus.", date: "2026-11-15", time: "09:00 - 16:00 WIB", location: "UPI Bandung", rating: 4.7, reviews: 710, free: false },
                { id: 284, cat: "edukasi", title: "Language Learning Festival", desc: "Belajar berbagai bahasa asing.", date: "2026-11-22", time: "10:00 - 17:00 WIB", location: "IFI Bandung", rating: 4.8, reviews: 620, free: false },
                { id: 285, cat: "edukasi", title: "Innovation in Education", desc: "Seminar inovasi pendidikan modern.", date: "2026-11-29", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.8, reviews: 670, free: false },
                { id: 286, cat: "edukasi", title: "Teacher Development Seminar", desc: "Pelatihan guru dan tenaga pendidik.", date: "2026-12-06", time: "08:30 - 16:00 WIB", location: "UPI Bandung", rating: 4.9, reviews: 890, free: false },
                { id: 287, cat: "edukasi", title: "National Education Forum", desc: "Forum pendidikan nasional.", date: "2026-12-13", time: "09:00 - 17:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1240, free: false },
                { id: 288, cat: "edukasi", title: "Student Innovation Expo", desc: "Pameran inovasi karya pelajar.", date: "2026-12-20", time: "09:00 - 18:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 780, free: false },
                { id: 289, cat: "edukasi", title: "Coding for Kids", desc: "Workshop coding dasar untuk anak-anak.", date: "2027-01-10", time: "09:00 - 14:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 650, free: false },
                { id: 290, cat: "edukasi", title: "Astronomy Night", desc: "Edukasi astronomi dan pengamatan bintang.", date: "2027-01-17", time: "18:00 - 21:00 WIB", location: "Bosscha Observatory", rating: 4.9, reviews: 1050, free: false },
                { id: 291, cat: "edukasi", title: "Debate Competition", desc: "Kompetisi debat tingkat SMA dan mahasiswa.", date: "2027-01-24", time: "08:00 - 17:00 WIB", location: "ITB", rating: 4.8, reviews: 740, free: false },
                { id: 292, cat: "edukasi", title: "Youth Innovation Camp", desc: "Pelatihan inovasi dan kreativitas.", date: "2027-01-31", time: "09:00 - 17:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 810, free: false },
                { id: 293, cat: "edukasi", title: "STEM Festival Bandung", desc: "Festival sains, teknologi, teknik, dan matematika.", date: "2027-02-07", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1360, free: false },
                { id: 294, cat: "edukasi", title: "Digital Skills Workshop", desc: "Pelatihan keterampilan digital.", date: "2027-02-14", time: "09:00 - 16:00 WIB", location: "Telkom University", rating: 4.8, reviews: 690, free: false },
                { id: 295, cat: "edukasi", title: "Photography Masterclass", desc: "Belajar fotografi bersama profesional.", date: "2027-02-21", time: "09:00 - 15:00 WIB", location: "NuArt Sculpture Park", rating: 4.7, reviews: 540, free: false },
                { id: 296, cat: "edukasi", title: "Artificial Intelligence Seminar", desc: "Seminar penerapan AI di berbagai bidang.", date: "2027-02-28", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.9, reviews: 980, free: false },
                { id: 297, cat: "edukasi", title: "Personal Branding Class", desc: "Membangun citra diri profesional.", date: "2027-03-07", time: "10:00 - 15:00 WIB", location: "El Hotel Bandung", rating: 4.7, reviews: 590, free: false },
                { id: 298, cat: "edukasi", title: "Future Career Expo", desc: "Pameran peluang karier masa depan.", date: "2027-03-14", time: "09:00 - 17:00 WIB", location: "Trans Convention Centre", rating: 4.8, reviews: 960, free: false },
                { id: 299, cat: "edukasi", title: "Academic Writing Workshop", desc: "Pelatihan penulisan karya ilmiah.", date: "2027-03-21", time: "09:00 - 15:00 WIB", location: "UPI Bandung", rating: 4.7, reviews: 520, free: false },
                { id: 300, cat: "edukasi", title: "Museum Education Day", desc: "Belajar sejarah melalui museum.", date: "2027-03-28", time: "09:00 - 14:00 WIB", location: "Museum Sri Baduga", rating: 4.8, reviews: 610, free: false },
                { id: 301, cat: "edukasi", title: "Science for Everyone", desc: "Demonstrasi eksperimen sains interaktif.", date: "2027-04-04", time: "10:00 - 16:00 WIB", location: "Puspa IPTEK Sundial", rating: 4.9, reviews: 920, free: false },
                { id: 302, cat: "edukasi", title: "Future Leaders Forum", desc: "Seminar kepemimpinan generasi muda.", date: "2027-04-11", time: "09:00 - 16:00 WIB", location: "Gedung Sate", rating: 4.8, reviews: 730, free: false },
                { id: 303, cat: "edukasi", title: "Education Technology Expo", desc: "Pameran teknologi pendidikan.", date: "2027-04-18", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.8, reviews: 880, free: false },
                { id: 304, cat: "edukasi", title: "Startup for Students", desc: "Edukasi membangun startup sejak kuliah.", date: "2027-04-25", time: "09:00 - 15:00 WIB", location: "ITB Innovation Park", rating: 4.8, reviews: 650, free: false },
                { id: 305, cat: "edukasi", title: "Climate Education Summit", desc: "Edukasi perubahan iklim dan lingkungan.", date: "2027-05-02", time: "09:00 - 16:00 WIB", location: "Gedung Merdeka", rating: 4.8, reviews: 690, free: false },
                { id: 306, cat: "edukasi", title: "Creative Learning Festival", desc: "Festival pembelajaran kreatif untuk semua usia.", date: "2027-05-09", time: "09:00 - 18:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1070, free: false },
                { id: 307, cat: "edukasi", title: "National Student Conference", desc: "Konferensi ilmiah mahasiswa nasional.", date: "2027-05-16", time: "09:00 - 17:00 WIB", location: "ITB", rating: 4.9, reviews: 1120, free: false },
                { id: 308, cat: "edukasi", title: "Library Week Bandung", desc: "Pekan literasi dan pameran buku.", date: "2027-05-23", time: "09:00 - 18:00 WIB", location: "Perpustakaan Kota Bandung", rating: 4.7, reviews: 560, free: false },
                { id: 309, cat: "edukasi", title: "Future Skills Academy", desc: "Pelatihan keterampilan masa depan.", date: "2027-05-30", time: "09:00 - 16:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 790, free: false },
                { id: 310, cat: "edukasi", title: "Education Innovation Awards", desc: "Penghargaan inovasi pendidikan.", date: "2027-06-06", time: "18:00 - 21:00 WIB", location: "Pullman Bandung", rating: 4.8, reviews: 620, free: false },
                { id: 311, cat: "edukasi", title: "Bandung Knowledge Festival", desc: "Festival ilmu pengetahuan dan edukasi.", date: "2027-06-13", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1340, free: false },
                { id: 312, cat: "edukasi", title: "International Education Forum", desc: "Forum pendidikan bertaraf internasional.", date: "2027-06-20", time: "09:00 - 17:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1260, free: false },
                { id: 313, cat: "edukasi", title: "Grand Education Expo", desc: "Pameran pendidikan terbesar di Bandung.", date: "2027-06-27", time: "09:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 5.0, reviews: 2180, free: false },
                { id: 314, cat: "seni", title: "Bandung Art Festival", desc: "Festival seni yang menampilkan karya seniman lokal dan nasional.", date: "2026-07-05", time: "10:00 - 21:00 WIB", location: "NuArt Sculpture Park", rating: 4.9, reviews: 1540, free: false },
                { id: 315, cat: "seni", title: "Contemporary Art Expo", desc: "Pameran seni kontemporer dari berbagai komunitas kreatif.", date: "2026-07-12", time: "10:00 - 19:00 WIB", location: "Selasar Sunaryo Art Space", rating: 4.8, reviews: 980, free: false },
                { id: 316, cat: "seni", title: "Live Painting Day", desc: "Seniman melukis secara langsung di hadapan pengunjung.", date: "2026-07-19", time: "09:00 - 17:00 WIB", location: "Braga", rating: 4.7, reviews: 720, free: false },
                { id: 317, cat: "seni", title: "Bandung Sketch Walk", desc: "Jelajah kota sambil menggambar ikon Bandung.", date: "2026-07-26", time: "08:00 - 12:00 WIB", location: "Jalan Braga", rating: 4.8, reviews: 690, free: false },
                { id: 318, cat: "seni", title: "Photography Exhibition", desc: "Pameran fotografi bertema budaya dan alam Bandung.", date: "2026-08-02", time: "09:00 - 18:00 WIB", location: "NuArt Sculpture Park", rating: 4.8, reviews: 840, free: false },
                { id: 319, cat: "seni", title: "Watercolor Workshop", desc: "Workshop melukis dengan teknik cat air.", date: "2026-08-09", time: "10:00 - 15:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 610, free: false },
                { id: 320, cat: "seni", title: "Street Art Festival", desc: "Festival mural dan graffiti bersama seniman jalanan.", date: "2026-08-16", time: "10:00 - 20:00 WIB", location: "Cikapundung Riverspot", rating: 4.9, reviews: 1260, free: false },
                { id: 321, cat: "seni", title: "Illustration Fair", desc: "Pameran ilustrasi digital dan tradisional.", date: "2026-08-23", time: "10:00 - 18:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 730, free: false },
                { id: 322, cat: "seni", title: "Bandung Craft Expo", desc: "Pameran kerajinan tangan dan karya kreatif.", date: "2026-08-30", time: "09:00 - 19:00 WIB", location: "Sabuga", rating: 4.8, reviews: 870, free: false },
                { id: 323, cat: "seni", title: "Sculpture Exhibition", desc: "Pameran karya seni patung kontemporer.", date: "2026-09-06", time: "09:00 - 18:00 WIB", location: "NuArt Sculpture Park", rating: 4.9, reviews: 950, free: false },
                { id: 324, cat: "seni", title: "Pottery Workshop", desc: "Workshop membuat keramik dan tembikar.", date: "2026-09-13", time: "10:00 - 16:00 WIB", location: "Lawangwangi Creative Space", rating: 4.7, reviews: 560, free: false },
                { id: 325, cat: "seni", title: "Art Market Bandung", desc: "Bazaar karya seni dari seniman lokal.", date: "2026-09-20", time: "10:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 780, free: false },
                { id: 326, cat: "seni", title: "Digital Art Showcase", desc: "Pameran seni digital dan NFT.", date: "2026-09-27", time: "10:00 - 18:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 690, free: false },
                { id: 327, cat: "seni", title: "Bandung Calligraphy Festival", desc: "Festival kaligrafi modern dan tradisional.", date: "2026-10-04", time: "09:00 - 17:00 WIB", location: "Gedung Merdeka", rating: 4.7, reviews: 520, free: false },
                { id: 328, cat: "seni", title: "Creative Illustration Camp", desc: "Workshop ilustrasi bersama profesional.", date: "2026-10-11", time: "09:00 - 16:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 640, free: false },
                { id: 329, cat: "seni", title: "Art & Coffee Weekend", desc: "Menikmati pameran seni sambil menikmati kopi lokal.", date: "2026-10-18", time: "10:00 - 20:00 WIB", location: "Braga Citywalk", rating: 4.8, reviews: 720, free: false },
                { id: 330, cat: "seni", title: "Bandung Canvas Festival", desc: "Festival melukis bersama di ruang terbuka.", date: "2026-10-25", time: "09:00 - 17:00 WIB", location: "Gasibu", rating: 4.9, reviews: 1130, free: false },
                { id: 331, cat: "seni", title: "Urban Art Exhibition", desc: "Pameran seni urban dan instalasi modern.", date: "2026-11-01", time: "10:00 - 19:00 WIB", location: "Selasar Sunaryo Art Space", rating: 4.8, reviews: 760, free: false },
                { id: 332, cat: "seni", title: "Traditional Art Gallery", desc: "Pameran seni rupa tradisional Nusantara.", date: "2026-11-08", time: "09:00 - 18:00 WIB", location: "Museum Sri Baduga", rating: 4.7, reviews: 590, free: false },
                { id: 333, cat: "seni", title: "Bandung Creative Fair", desc: "Festival industri kreatif dan seni.", date: "2026-11-15", time: "10:00 - 20:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1280, free: false },
                { id: 334, cat: "seni", title: "Mural Competition", desc: "Kompetisi mural terbuka untuk seniman muda.", date: "2026-11-22", time: "09:00 - 17:00 WIB", location: "Cikapundung Riverspot", rating: 4.8, reviews: 680, free: false },
                { id: 335, cat: "seni", title: "Origami Workshop", desc: "Workshop seni melipat kertas.", date: "2026-11-29", time: "10:00 - 15:00 WIB", location: "Perpustakaan Kota Bandung", rating: 4.7, reviews: 490, free: false },
                { id: 336, cat: "seni", title: "Bandung Drawing Competition", desc: "Kompetisi menggambar tingkat nasional.", date: "2026-12-06", time: "08:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 730, free: false },
                { id: 337, cat: "seni", title: "Fine Art Exhibition", desc: "Pameran lukisan dan karya seni rupa terbaik.", date: "2026-12-13", time: "09:00 - 18:00 WIB", location: "NuArt Sculpture Park", rating: 4.9, reviews: 970, free: false },
                { id: 338, cat: "seni", title: "Art Installation Week", desc: "Instalasi seni interaktif di ruang publik.", date: "2026-12-20", time: "10:00 - 21:00 WIB", location: "Braga", rating: 4.8, reviews: 790, free: false },
                { id: 339, cat: "seni", title: "Bandung Handmade Festival", desc: "Festival karya handmade lokal.", date: "2027-01-10", time: "10:00 - 19:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 710, free: false },
                { id: 340, cat: "seni", title: "Painting Masterclass", desc: "Belajar teknik melukis bersama seniman profesional.", date: "2027-01-17", time: "09:00 - 15:00 WIB", location: "Lawangwangi Creative Space", rating: 4.8, reviews: 620, free: false },
                { id: 341, cat: "seni", title: "Art for Kids", desc: "Festival seni kreatif untuk anak-anak.", date: "2027-01-24", time: "09:00 - 14:00 WIB", location: "Taman Lansia", rating: 4.9, reviews: 850, free: false },
                { id: 342, cat: "seni", title: "Creative Photography Walk", desc: "Hunting foto bersama komunitas fotografi.", date: "2027-01-31", time: "07:00 - 11:00 WIB", location: "Braga", rating: 4.8, reviews: 680, free: false },
                { id: 343, cat: "seni", title: "Bandung Comic & Illustration Expo", desc: "Pameran komik dan ilustrasi lokal.", date: "2027-02-07", time: "10:00 - 19:00 WIB", location: "Bandung Creative Hub", rating: 4.9, reviews: 1120, free: false },
                { id: 344, cat: "seni", title: "Art Talk Series", desc: "Diskusi bersama seniman dan kurator.", date: "2027-02-14", time: "13:00 - 16:00 WIB", location: "Selasar Sunaryo Art Space", rating: 4.7, reviews: 520, free: false },
                { id: 345, cat: "seni", title: "Ceramic Art Festival", desc: "Festival seni keramik modern.", date: "2027-02-21", time: "09:00 - 18:00 WIB", location: "NuArt Sculpture Park", rating: 4.8, reviews: 610, free: false },
                { id: 346, cat: "seni", title: "Bandung Creative Weekend", desc: "Festival seni dan industri kreatif.", date: "2027-02-28", time: "10:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1040, free: false },
                { id: 347, cat: "seni", title: "Portrait Drawing Workshop", desc: "Workshop menggambar wajah.", date: "2027-03-07", time: "09:00 - 15:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 470, free: false },
                { id: 348, cat: "seni", title: "Art Competition Festival", desc: "Kompetisi seni untuk pelajar dan mahasiswa.", date: "2027-03-14", time: "08:00 - 17:00 WIB", location: "Sabuga", rating: 4.8, reviews: 740, free: false },
                { id: 349, cat: "seni", title: "Visual Art Showcase", desc: "Pameran seni visual modern.", date: "2027-03-21", time: "10:00 - 19:00 WIB", location: "Selasar Sunaryo Art Space", rating: 4.8, reviews: 690, free: false },
                { id: 350, cat: "seni", title: "Eco Art Exhibition", desc: "Pameran seni dari bahan daur ulang.", date: "2027-03-28", time: "09:00 - 18:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 630, free: false },
                { id: 351, cat: "seni", title: "Art & Culture Fair", desc: "Kolaborasi seni modern dan budaya lokal.", date: "2027-04-04", time: "10:00 - 20:00 WIB", location: "Gedung Merdeka", rating: 4.9, reviews: 1130, free: false },
                { id: 352, cat: "seni", title: "Bandung Animation Festival", desc: "Festival animasi karya kreator Indonesia.", date: "2027-04-11", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 980, free: false },
                { id: 353, cat: "seni", title: "Creative Poster Competition", desc: "Kompetisi desain poster kreatif.", date: "2027-04-18", time: "08:00 - 16:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 510, free: false },
                { id: 354, cat: "seni", title: "Textile Art Expo", desc: "Pameran seni tekstil dan kain tradisional.", date: "2027-04-25", time: "09:00 - 18:00 WIB", location: "Museum Tekstil Bandung", rating: 4.8, reviews: 620, free: false },
                { id: 355, cat: "seni", title: "Bandung Design Festival", desc: "Festival desain grafis dan komunikasi visual.", date: "2027-05-02", time: "09:00 - 18:00 WIB", location: "Bandung Digital Valley", rating: 4.9, reviews: 1260, free: false },
                { id: 356, cat: "seni", title: "Creative Art Market", desc: "Bazaar karya seni dan produk kreatif.", date: "2027-05-09", time: "10:00 - 20:00 WIB", location: "Braga", rating: 4.8, reviews: 770, free: false },
                { id: 357, cat: "seni", title: "Young Artist Showcase", desc: "Pameran karya seniman muda Bandung.", date: "2027-05-16", time: "09:00 - 18:00 WIB", location: "NuArt Sculpture Park", rating: 4.8, reviews: 690, free: false },
                { id: 358, cat: "seni", title: "Bandung Art Symposium", desc: "Seminar perkembangan seni rupa Indonesia.", date: "2027-05-23", time: "09:00 - 16:00 WIB", location: "ITB", rating: 4.8, reviews: 640, free: false },
                { id: 359, cat: "seni", title: "National Art Competition", desc: "Kompetisi seni tingkat nasional.", date: "2027-05-30", time: "08:00 - 17:00 WIB", location: "Sabuga", rating: 4.9, reviews: 970, free: false },
                { id: 360, cat: "seni", title: "Bandung Creative Awards", desc: "Penghargaan bagi seniman dan kreator terbaik.", date: "2027-06-06", time: "18:00 - 21:00 WIB", location: "Pullman Bandung", rating: 4.8, reviews: 610, free: false },
                { id: 361, cat: "seni", title: "Art Innovation Festival", desc: "Festival seni dengan teknologi interaktif.", date: "2027-06-13", time: "10:00 - 20:00 WIB", location: "Bandung Creative Hub", rating: 4.9, reviews: 1150, free: false },
                { id: 362, cat: "seni", title: "International Art Expo", desc: "Pameran seni internasional di Bandung.", date: "2027-06-20", time: "09:00 - 19:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1380, free: false },
                { id: 363, cat: "seni", title: "Grand Bandung Art Expo", desc: "Festival seni tahunan terbesar di Kota Bandung.", date: "2027-06-27", time: "10:00 - 21:00 WIB", location: "Trans Convention Centre", rating: 5.0, reviews: 2240, free: false },
                { id: 364, cat: "komunitas", title: "Bandung Community Festival", desc: "Festival yang mempertemukan berbagai komunitas di Bandung.", date: "2026-07-04", time: "09:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1580, free: false },
                { id: 365, cat: "komunitas", title: "Community Gathering Day", desc: "Ajang silaturahmi antar komunitas.", date: "2026-07-11", time: "09:00 - 15:00 WIB", location: "Gasibu", rating: 4.8, reviews: 920, free: false },
                { id: 366, cat: "komunitas", title: "Volunteer Fair Bandung", desc: "Pameran organisasi sosial dan relawan.", date: "2026-07-18", time: "10:00 - 17:00 WIB", location: "Balai Kota Bandung", rating: 4.8, reviews: 810, free: false },
                { id: 367, cat: "komunitas", title: "Car Free Day Meetup", desc: "Kegiatan komunitas saat Car Free Day.", date: "2026-07-25", time: "06:00 - 10:00 WIB", location: "Dago", rating: 4.8, reviews: 1120, free: false },
                { id: 368, cat: "komunitas", title: "Bandung Book Club", desc: "Diskusi buku bersama komunitas literasi.", date: "2026-08-01", time: "14:00 - 17:00 WIB", location: "Perpustakaan Kota Bandung", rating: 4.7, reviews: 620, free: false },
                { id: 369, cat: "komunitas", title: "Photography Community Walk", desc: "Hunting foto bersama komunitas fotografi.", date: "2026-08-08", time: "07:00 - 11:00 WIB", location: "Braga", rating: 4.8, reviews: 760, free: false },
                { id: 370, cat: "komunitas", title: "Coffee Lovers Meetup", desc: "Kopdar pecinta kopi dan barista.", date: "2026-08-15", time: "16:00 - 20:00 WIB", location: "Braga Citywalk", rating: 4.8, reviews: 730, free: false },
                { id: 371, cat: "komunitas", title: "Cycling Community Ride", desc: "Gowes santai bersama komunitas sepeda.", date: "2026-08-22", time: "06:30 - 10:00 WIB", location: "Gasibu", rating: 4.8, reviews: 810, free: false },
                { id: 372, cat: "komunitas", title: "Pet Lovers Gathering", desc: "Pertemuan komunitas pecinta hewan peliharaan.", date: "2026-08-29", time: "08:00 - 12:00 WIB", location: "Taman Lansia", rating: 4.9, reviews: 980, free: false },
                { id: 373, cat: "komunitas", title: "Youth Community Forum", desc: "Forum diskusi komunitas anak muda.", date: "2026-09-05", time: "09:00 - 16:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 670, free: false },
                { id: 374, cat: "komunitas", title: "Women Community Meetup", desc: "Gathering komunitas perempuan inspiratif.", date: "2026-09-12", time: "09:00 - 15:00 WIB", location: "El Hotel Bandung", rating: 4.8, reviews: 710, free: false },
                { id: 375, cat: "komunitas", title: "Startup Community Talk", desc: "Diskusi komunitas startup Bandung.", date: "2026-09-19", time: "13:00 - 17:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 620, free: false },
                { id: 376, cat: "komunitas", title: "Language Exchange Meetup", desc: "Belajar bahasa bersama komunitas internasional.", date: "2026-09-26", time: "15:00 - 18:00 WIB", location: "Braga", rating: 4.7, reviews: 580, free: false },
                { id: 377, cat: "komunitas", title: "Creative Community Fair", desc: "Festival komunitas kreatif Bandung.", date: "2026-10-03", time: "10:00 - 20:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1240, free: false },
                { id: 378, cat: "komunitas", title: "Gardening Community Day", desc: "Berbagi ilmu berkebun dan tanaman hias.", date: "2026-10-10", time: "08:00 - 12:00 WIB", location: "Taman Hutan Raya Djuanda", rating: 4.7, reviews: 490, free: false },
                { id: 379, cat: "komunitas", title: "Eco Community Gathering", desc: "Kegiatan komunitas peduli lingkungan.", date: "2026-10-17", time: "08:00 - 14:00 WIB", location: "Cikapundung Riverspot", rating: 4.8, reviews: 690, free: false },
                { id: 380, cat: "komunitas", title: "Board Game Meetup", desc: "Bermain board game bersama komunitas.", date: "2026-10-24", time: "13:00 - 18:00 WIB", location: "Braga Citywalk", rating: 4.8, reviews: 630, free: false },
                { id: 381, cat: "komunitas", title: "Anime & Cosplay Gathering", desc: "Pertemuan komunitas anime dan cosplay.", date: "2026-10-31", time: "10:00 - 18:00 WIB", location: "Cihampelas Walk", rating: 4.9, reviews: 1150, free: false },
                { id: 382, cat: "komunitas", title: "Bandung Music Community", desc: "Sharing dan jamming bersama komunitas musik.", date: "2026-11-07", time: "15:00 - 20:00 WIB", location: "Bandung Creative Hub", rating: 4.8, reviews: 720, free: false },
                { id: 383, cat: "komunitas", title: "Hiking Community Meetup", desc: "Kopdar pecinta hiking dan alam.", date: "2026-11-14", time: "08:00 - 13:00 WIB", location: "Dago Pakar", rating: 4.8, reviews: 760, free: false },
                { id: 384, cat: "komunitas", title: "Charity Community Event", desc: "Penggalangan dana bersama komunitas sosial.", date: "2026-11-21", time: "09:00 - 16:00 WIB", location: "Alun-Alun Bandung", rating: 4.9, reviews: 980, free: false },
                { id: 385, cat: "komunitas", title: "Bandung Coding Community", desc: "Sharing seputar dunia pemrograman.", date: "2026-11-28", time: "13:00 - 17:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 650, free: false },
                { id: 386, cat: "komunitas", title: "Community Picnic Day", desc: "Piknik santai bersama berbagai komunitas.", date: "2026-12-05", time: "09:00 - 15:00 WIB", location: "Taman Balai Kota", rating: 4.8, reviews: 710, free: false },
                { id: 387, cat: "komunitas", title: "Social Impact Forum", desc: "Diskusi proyek sosial dan pemberdayaan masyarakat.", date: "2026-12-12", time: "09:00 - 16:00 WIB", location: "Gedung Merdeka", rating: 4.8, reviews: 620, free: false },
                { id: 388, cat: "komunitas", title: "Family Community Festival", desc: "Festival keluarga dan komunitas.", date: "2026-12-19", time: "09:00 - 20:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1320, free: false },
                { id: 389, cat: "komunitas", title: "Bandung Entrepreneurs Meetup", desc: "Kopdar komunitas wirausaha muda.", date: "2027-01-09", time: "10:00 - 15:00 WIB", location: "Telkom University", rating: 4.8, reviews: 680, free: false },
                { id: 390, cat: "komunitas", title: "Creative Hobby Fair", desc: "Festival berbagai komunitas hobi.", date: "2027-01-16", time: "10:00 - 19:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1170, free: false },
                { id: 391, cat: "komunitas", title: "Public Speaking Club", desc: "Latihan public speaking bersama komunitas.", date: "2027-01-23", time: "13:00 - 16:00 WIB", location: "Bandung Creative Hub", rating: 4.7, reviews: 520, free: false },
                { id: 392, cat: "komunitas", title: "Reading Together", desc: "Membaca buku bersama komunitas literasi.", date: "2027-01-30", time: "09:00 - 12:00 WIB", location: "Perpustakaan Kota Bandung", rating: 4.7, reviews: 470, free: false },
                { id: 393, cat: "komunitas", title: "Community Sports Day", desc: "Olahraga bersama lintas komunitas.", date: "2027-02-06", time: "07:00 - 11:00 WIB", location: "Gasibu", rating: 4.8, reviews: 810, free: false },
                { id: 394, cat: "komunitas", title: "Green Action Bandung", desc: "Aksi tanam pohon dan bersih lingkungan.", date: "2027-02-13", time: "08:00 - 12:00 WIB", location: "Babakan Siliwangi", rating: 4.9, reviews: 950, free: false },
                { id: 395, cat: "komunitas", title: "Film Community Meetup", desc: "Nonton dan diskusi film bersama komunitas.", date: "2027-02-20", time: "14:00 - 18:00 WIB", location: "IFI Bandung", rating: 4.8, reviews: 640, free: false },
                { id: 396, cat: "komunitas", title: "Local Business Networking", desc: "Networking pelaku UMKM dan komunitas bisnis.", date: "2027-02-27", time: "10:00 - 16:00 WIB", location: "Hotel Aryaduta Bandung", rating: 4.8, reviews: 730, free: false },
                { id: 397, cat: "komunitas", title: "Digital Creator Gathering", desc: "Pertemuan content creator Bandung.", date: "2027-03-06", time: "13:00 - 18:00 WIB", location: "Bandung Creative Hub", rating: 4.9, reviews: 1080, free: false },
                { id: 398, cat: "komunitas", title: "Nature Lovers Camp", desc: "Kemah bersama komunitas pecinta alam.", date: "2027-03-13", time: "08:00 - 17:00 WIB", location: "Orchid Forest Cikole", rating: 4.9, reviews: 1120, free: false },
                { id: 399, cat: "komunitas", title: "Bandung Volunteers Day", desc: "Hari relawan dengan berbagai kegiatan sosial.", date: "2027-03-20", time: "08:00 - 15:00 WIB", location: "Gedung Sate", rating: 4.9, reviews: 890, free: false },
                { id: 400, cat: "komunitas", title: "Community Bazaar", desc: "Bazaar hasil karya berbagai komunitas.", date: "2027-03-27", time: "10:00 - 20:00 WIB", location: "Braga", rating: 4.8, reviews: 760, free: false },
                { id: 401, cat: "komunitas", title: "Bandung Friendship Festival", desc: "Festival persahabatan lintas komunitas.", date: "2027-04-03", time: "09:00 - 18:00 WIB", location: "Kiara Artha Park", rating: 4.9, reviews: 1230, free: false },
                { id: 402, cat: "komunitas", title: "Healthy Living Meetup", desc: "Edukasi gaya hidup sehat bersama komunitas.", date: "2027-04-10", time: "08:00 - 12:00 WIB", location: "Taman Lansia", rating: 4.8, reviews: 690, free: false },
                { id: 403, cat: "komunitas", title: "Community Innovation Forum", desc: "Diskusi inovasi dan kolaborasi komunitas.", date: "2027-04-17", time: "09:00 - 16:00 WIB", location: "Bandung Digital Valley", rating: 4.8, reviews: 620, free: false },
                { id: 404, cat: "komunitas", title: "Youth Volunteer Camp", desc: "Pelatihan dan aksi sosial bagi relawan muda.", date: "2027-04-24", time: "08:00 - 17:00 WIB", location: "Lembang", rating: 4.9, reviews: 1010, free: false },
                { id: 405, cat: "komunitas", title: "Bandung Hobby Expo", desc: "Pameran berbagai komunitas hobi.", date: "2027-05-01", time: "10:00 - 20:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1290, free: false },
                { id: 406, cat: "komunitas", title: "Community Leadership Forum", desc: "Seminar kepemimpinan komunitas.", date: "2027-05-08", time: "09:00 - 15:00 WIB", location: "Gedung Merdeka", rating: 4.8, reviews: 610, free: false },
                { id: 407, cat: "komunitas", title: "Social Innovation Festival", desc: "Festival inovasi sosial dan pemberdayaan masyarakat.", date: "2027-05-15", time: "09:00 - 19:00 WIB", location: "Bandung Creative Hub", rating: 4.9, reviews: 980, free: false },
                { id: 408, cat: "komunitas", title: "Bandung Community Awards", desc: "Penghargaan bagi komunitas inspiratif.", date: "2027-05-22", time: "18:00 - 21:00 WIB", location: "Pullman Bandung", rating: 4.8, reviews: 590, free: false },
                { id: 409, cat: "komunitas", title: "Creative Collaboration Day", desc: "Kolaborasi lintas komunitas kreatif.", date: "2027-05-29", time: "10:00 - 18:00 WIB", location: "Kiara Artha Park", rating: 4.8, reviews: 750, free: false },
                { id: 410, cat: "komunitas", title: "Volunteer Appreciation Night", desc: "Malam apresiasi untuk para relawan.", date: "2027-06-05", time: "18:00 - 21:00 WIB", location: "Hilton Bandung", rating: 4.8, reviews: 570, free: false },
                { id: 411, cat: "komunitas", title: "Bandung Community Expo", desc: "Pameran komunitas dan organisasi lokal.", date: "2027-06-12", time: "09:00 - 20:00 WIB", location: "Trans Convention Centre", rating: 4.9, reviews: 1360, free: false },
                { id: 412, cat: "komunitas", title: "Indonesia Community Summit", desc: "Pertemuan komunitas dari berbagai daerah di Indonesia.", date: "2027-06-19", time: "09:00 - 18:00 WIB", location: "Sabuga", rating: 4.9, reviews: 1490, free: false },
                { id: 413, cat: "komunitas", title: "Grand Community Festival", desc: "Festival tahunan terbesar yang mempertemukan seluruh komunitas di Bandung.", date: "2027-06-26", time: "09:00 - 21:00 WIB", location: "Trans Convention Centre", rating: 5.0, reviews: 2310, free: false },
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

                if (els.count) els.count.textContent = `Menampilkan ${filtered.length} event`;

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
        html += `<button class="page-btn" data-page="prev" ${state.page === 1 ? "disabled" : ""} aria-label="Halaman sebelumnya">‹</button>`;
 
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
 
        html += `<button class="page-btn" data-page="next" ${state.page === totalPages ? "disabled" : ""} aria-label="Halaman berikutnya">›</button>`;
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
                if (els.sortLabel) els.sortLabel.textContent = li.textContent;
                els.sortMenu.querySelectorAll("li").forEach(l => l.classList.remove("active"));
                li.classList.add("active");
                if (els.sortbox) els.sortbox.classList.remove("open");
                render();
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
 
    /* ============ Initial render ============ */
    render();
 
});