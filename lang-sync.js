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