 document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("destSearch");
            const tabItems = document.querySelectorAll(".dest-tab-item");
            const productCards = document.querySelectorAll(".dest-product-card");
            const visibleCountSpan = document.getElementById("visible-count");

            // Fungsi pembantu untuk menghitung & memperbarui total kartu yang terlihat
            function updateCardCount() {
                let count = 0;
                productCards.forEach(card => {
                    if (card.style.display !== "none") count++;
                });
                if (visibleCountSpan) visibleCountSpan.textContent = count;
            }

            // 1. LIVE SEARCH SYSTEM
            if (searchInput) {
                searchInput.addEventListener("input", function (e) {
                    const keyword = e.target.value.toLowerCase().trim();

                    productCards.forEach(card => {
                        const title = card.querySelector("h3").textContent.toLowerCase();
                        const location = card.querySelector(".dest-loc").textContent.toLowerCase();

                        if (title.includes(keyword) || location.includes(keyword)) {
                            card.style.display = "flex";
                        } else {
                            card.style.display = "none";
                        }
                    });
                    updateCardCount();
                });
            }

            // 2. CATEGORY FILTER TABS SYSTEM
            tabItems.forEach(tab => {
                tab.addEventListener("click", function () {
                    tabItems.forEach(item => item.classList.remove("active"));
                    this.classList.add("active");

                    const filterValue = this.getAttribute("data-filter");

                    productCards.forEach(card => {
                        const cardCategory = card.getAttribute("data-category");

                        if (filterValue === "all" || cardCategory === filterValue) {
                            card.style.display = "flex";
                        } else {
                            card.style.display = "none";
                        }
                    });

                    // Reset isi kolom pencarian setiap kali ganti kategori agar tidak bentrok
                    if (searchInput) searchInput.value = "";
                    updateCardCount();
                });
            });

            // 3. HEART INTERACTIVE BUTTON TOGGLE
            const heartButtons = document.querySelectorAll(".dest-heart-btn");
            heartButtons.forEach(btn => {
                btn.addEventListener("click", function (e) {
                    e.preventDefault();
                    const icon = this.querySelector("i");
                    if (icon.classList.contains("fa-regular")) {
                        icon.className = "fa-solid fa-heart";
                        this.style.color = "#EB5757";
                        this.style.background = "rgba(255, 255, 255, 0.9)";
                    } else {
                        icon.className = "fa-regular fa-heart";
                        this.style.color = "#ffffff";
                        this.style.background = "rgba(255, 255, 255, 0.3)";
                    }
                });
            });
        });