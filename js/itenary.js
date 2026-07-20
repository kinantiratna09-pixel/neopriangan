document.addEventListener('DOMContentLoaded', () => {
    const bookmarkContainer = document.getElementById('bookmarkContainer');
    const emptyBookmarkMsg = document.getElementById('emptyBookmarkMsg');

    if (!bookmarkContainer || !emptyBookmarkMsg) return;

    function loadBookmarks() {
        const saved = localStorage.getItem('bandung_bookmarks');
        let bookmarks = [];
        try {
            bookmarks = saved ? JSON.parse(saved) : [];
        } catch (e) {
            bookmarks = [];
        }

        bookmarkContainer.innerHTML = '';

        if (bookmarks.length === 0) {
            bookmarkContainer.style.display = 'none';
            emptyBookmarkMsg.style.display = 'block';
        } else {
            bookmarkContainer.style.display = 'grid'; // Grid bawaan style.css
            emptyBookmarkMsg.style.display = 'none';

            bookmarks.forEach(item => {
                const card = document.createElement('div');
                card.className = 'destination-premium-card';
                card.style.position = 'relative'; 

                const categoryStr = item.category || 'Destinasi';
                const ratingStr = item.rating || '4.5';
                const imgSrc = item.image || '../image/kawah.png';
                const locStr = item.location || 'Bandung';
                const linkStr = item.link || '#';

                card.innerHTML = `
                    <img src="${imgSrc}" alt="${item.title}" class="card-main-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'">
                    <div class="card-top-tags">
                        <span class="rating-tag"><i class="fa-solid fa-star"></i> ${ratingStr}</span>
                    </div>
                    <div class="card-bottom-info">
                        <span class="category-tag nature">${categoryStr}</span>
                        <h3>${item.title}</h3>
                        <p class="location-text"><i class="fa-solid fa-location-dot"></i> ${locStr}</p>
                    </div>
                    <button class="remove-bookmark-btn" onclick="removeBookmark('${item.id}')" title="Hapus dari Itinerary">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="arrow-action-btn" onclick="location.href='${linkStr}'"><i class="fa-solid fa-arrow-right"></i></button>
                `;
                bookmarkContainer.appendChild(card);
            });
        }
    }

    // Fungsi global untuk menghapus bookmark
    window.removeBookmark = function(id) {
        let saved = localStorage.getItem('bandung_bookmarks');
        if (!saved) return;
        let bookmarks = JSON.parse(saved);
        bookmarks = bookmarks.filter(b => b.id !== id);
        localStorage.setItem('bandung_bookmarks', JSON.stringify(bookmarks));
        loadBookmarks(); // Render ulang setelah dihapus
    };

    // Fungsi global untuk tes menambah (bisa dipanggil dari console atau file lain)
    window.addTestBookmark = function() {
        const testData = [
            { id: '1', title: 'Kawah Putih', category: 'Wisata Alam', location: 'Ciwidey', image: '../image/kawah.png', link: 'rekomen_wisata.html', rating: '4.9' },
            { id: '2', title: 'Jalan Braga', category: 'Heritage & Culture', location: 'Sumur Bandung', image: '../image/braga.png', link: 'rekomen_wisata.html', rating: '4.8' }
        ];
        localStorage.setItem('bandung_bookmarks', JSON.stringify(testData));
        loadBookmarks();
    };

    loadBookmarks();
});
