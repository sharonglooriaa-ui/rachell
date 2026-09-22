document.addEventListener("DOMContentLoaded", () => {
  const honeycomb = document.getElementById("honeycomb");
  if (!honeycomb) return;

  const items = honeycomb.querySelectorAll(".honey-item");

  // Jarak maksimum pengaruh mouse (dalam pixel)
  const maxDistance = 180;
  // Perbesaran maksimum untuk item yang berada di dekat kursor
  const maxScale = 1.45;
  const minScale = 1.0;

  honeycomb.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;

      // Hitung jarak Euclidean kursor ke pusat item
      const distance = Math.hypot(mouseX - itemCenterX, mouseY - itemCenterY);

      if (distance < maxDistance) {
        // Semakin dekat kursor, semakin besar scale-nya
        const factor = Math.pow((maxDistance - distance) / maxDistance, 1.5);
        const scale = minScale + (maxScale - minScale) * factor;

        item.style.setProperty("--scale", scale.toFixed(3));

        if (distance < 60) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      } else {
        item.style.setProperty("--scale", minScale);
        item.classList.remove("is-active");
      }
    });
  });

  // Riset kembali skala saat kursor keluar area
  honeycomb.addEventListener("mouseleave", () => {
    items.forEach((item) => {
      item.style.setProperty("--scale", minScale);
      item.classList.remove("is-active");
    });
  });
});

// JS untuk efek interaktif umum jika dibutuhkan di kemudian hari
document.addEventListener("DOMContentLoaded", () => {
    console.log("About page ready.");
});

// cobaan yeuh haneut buat eng,ind
// const langEnBtn = document.getElementById('lang-en');
// const langIdBtn = document.getElementById('lang-id');
// const translatableElements = document.querySelectorAll('[data-en][data-id]');

// function setLanguage(lang) {
//     translatableElements.forEach(el => {
//         el.textContent = el.getAttribute(`data-${lang}`);
//     });

//     if (lang === 'id') {
//         langIdBtn.classList.add('active');
//         langEnBtn.classList.remove('active');
//     } else {
//         langEnBtn.classList.add('active');
//         langIdBtn.classList.remove('active');
//     }

//     // Simpan pilihan bahasa ke memori browser
//     localStorage.setItem('preferredLang', lang);
// }

// // Event Listener Tombol
// langEnBtn.addEventListener('click', () => setLanguage('en'));
// langIdBtn.addEventListener('click', () => setLanguage('id'));

// // Cek bahasa tersimpan saat halaman dimuat
// document.addEventListener('DOMContentLoaded', () => {
//     const savedLang = localStorage.getItem('preferredLang') || 'en';
//     setLanguage(savedLang);
// });

// // Lewih haneut
// // Di dalam file about.js atau script switcher kamu
// function setLanguage(lang) {
//     localStorage.setItem('preferredLang', lang); // <-- PENTING: Menyimpan pilihan user
    
//     document.querySelectorAll('[data-en][data-id]').forEach(el => {
//         el.innerHTML = el.getAttribute(`data-${lang}`);
//     });
// }
// Ambil elemen tombol switcher

// Ambil elemen tombol switcher
// 

document.addEventListener("DOMContentLoaded", () => {
  // --- EFEK HONEYCOMB ---
  const honeycomb = document.getElementById("honeycomb");
  if (honeycomb) {
    const items = honeycomb.querySelectorAll(".honey-item");
    const maxDistance = 180;
    const maxScale = 1.45;
    const minScale = 1.0;

    honeycomb.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.hypot(mouseX - itemCenterX, mouseY - itemCenterY);

        if (distance < maxDistance) {
          const factor = Math.pow((maxDistance - distance) / maxDistance, 1.5);
          const scale = minScale + (maxScale - minScale) * factor;

          item.style.setProperty("--scale", scale.toFixed(3));

          if (distance < 60) {
            item.classList.add("is-active");
          } else {
            item.classList.remove("is-active");
          }
        } else {
          item.style.setProperty("--scale", minScale);
          item.classList.remove("is-active");
        }
      });
    });

    honeycomb.addEventListener("mouseleave", () => {
      items.forEach((item) => {
        item.style.setProperty("--scale", minScale);
        item.classList.remove("is-active");
      });
    });
  }

  // --- SWITCHER BAHASA ---
  const langEnBtn = document.getElementById('lang-en');
  const langIdBtn = document.getElementById('lang-id');

  function setLanguage(lang) {
    // 1. Simpan pilihan bahasa ke localStorage
    localStorage.setItem('preferredLang', lang);

    // 2. Ganti teks label / elemen umum
    const translatableElements = document.querySelectorAll('[data-en][data-id]');
    translatableElements.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        el.innerHTML = text;
      }
    });

    // 3. GANTI TEKS PLACEHOLDER INPUT & TEXTAREA (Diperbaiki di sini!)
    const placeholderElements = document.querySelectorAll(`[data-placeholder-${lang}]`);
    placeholderElements.forEach(el => {
      const placeholderText = el.getAttribute(`data-placeholder-${lang}`);
      if (placeholderText) {
        el.setAttribute('placeholder', placeholderText);
      }
    });

    // 4. Atur status tombol active
    if (langEnBtn && langIdBtn) {
      if (lang === 'id') {
        langIdBtn.classList.add('active');
        langEnBtn.classList.remove('active');
      } else {
        langEnBtn.classList.add('active');
        langIdBtn.classList.remove('active');
      }
    }
  }

  // Event Listener Tombol Switcher
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
  }
  if (langIdBtn) {
    langIdBtn.addEventListener('click', () => setLanguage('id'));
  }

  // Muat bahasa tersimpan atau default ke Bahasa Indonesia ('id')
  const savedLang = localStorage.getItem('preferredLang') || 'id';
  setLanguage(savedLang);
});