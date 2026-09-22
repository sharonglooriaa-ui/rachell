document.addEventListener("DOMContentLoaded", () => {
    // =========================================
    // 1. FILTER KATEGORI PROJECT
    // =========================================
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Hilangkan class active dari semua tombol filter
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                projectCards.forEach(card => {
                    const categories = card.getAttribute("data-category").split(" ");

                    if (filterValue === "all" || categories.includes(filterValue)) {
                        card.style.display = "block";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1)";
                        }, 50);
                    } else {
                        card.style.opacity = "0";
                        card.style.transform = "scale(0.95)";
                        setTimeout(() => {
                            card.style.display = "none";
                        }, 300);
                    }
                });
            });
        });
    }

    // =========================================
    // 2. MODAL DETAIL PROJECT (Dinamis)
    // =========================================
    const modal = document.getElementById("projectModal");
    const modalClose = document.getElementById("modalClose");

    // Jika elemen modal ada di HTML
    if (modal && modalClose) {
        // Buka modal saat kartu diklik
        projectCards.forEach(card => {
            card.addEventListener("click", () => {
                const title = card.querySelector("h3") ? card.querySelector("h3").innerText : "";
                const imgSrc = card.querySelector("img") ? card.querySelector("img").src : "";
                const techList = card.querySelectorAll(".project-tech span");

                // Isi data singkat ke modal
                document.getElementById("modalTitle").innerText = title;
                document.getElementById("modalImg").src = imgSrc;

                // Render tag teknologi di modal
                const modalTechContainer = document.getElementById("modalTech");
                modalTechContainer.innerHTML = "";
                techList.forEach(tech => {
                    const span = document.createElement("span");
                    span.innerText = tech.innerText;
                    modalTechContainer.appendChild(span);
                });

                // Tampilkan Modal
                modal.classList.add("is-open");
                document.body.style.overflow = "hidden"; // Cegah scroll latar belakang
            });
        });

        // Tutup modal saat tombol close diklik
        modalClose.addEventListener("click", closeModal);

        // Tutup modal saat mengklik di luar area konten modal
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Tutup modal dengan tombol Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("is-open")) {
                closeModal();
            }
        });

        function closeModal() {
            modal.classList.remove("is-open");
            document.body.style.overflow = "auto";
        }
    }
});

// anyar keneh
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card-link');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(cardLink => {
            const card = cardLink.querySelector('.project-card');
            const categories = card.getAttribute('data-category').split(' ');

            if (filterValue === 'all' || categories.includes(filterValue)) {
                cardLink.style.display = 'block';
            } else {
                cardLink.style.display = 'none';
            }
        });
    });
});