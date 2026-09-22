document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil pilihan bahasa dari memori browser (default: 'en')
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    
    // 2. Ambil semua elemen yang punya atribut data-en dan data-id
    const translatableElements = document.querySelectorAll('[data-en][data-id]');
    
    // 3. Ganti isinya secara otomatis
    translatableElements.forEach(el => {
        const text = el.getAttribute(`data-${savedLang}`);
        if (text) {
            el.innerHTML = text;
        }
    });
});

// kita coba yah
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        // Toggle menu saat tombol diklik
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
        });

        // Tutup menu otomatis jika user mengklik bagian luar layar
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        // Toggle menu saat tombol diklik
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
        });

        // Tutup menu otomatis jika user mengklik bagian luar layar
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });
    }
});