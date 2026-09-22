/* =========================================
   FALLING TITLE
========================================= */

const title = document.getElementById("heroTitle");

const text = title.textContent.trim();

title.innerHTML = "";


/*
    Pecah berdasarkan KATA, bukan berdasarkan
    karakter secara langsung.

    Dengan begini:
    "Rachell Helena Sharon Gloria"

    tetap dianggap sebagai 4 kata yang
    tidak boleh terpotong sembarangan.
*/

const words = text.split(" ");


words.forEach((word, wordIndex) => {

    const wordWrapper = document.createElement("span");

    wordWrapper.classList.add("title-word");


    [...word].forEach((character, charIndex) => {

        const letter = document.createElement("span");

        letter.classList.add("title-letter");

        letter.textContent = character;


        /*
            Delay setiap huruf.
        */

        letter.style.animationDelay =
            `${(wordIndex * 0.18) + (charIndex * 0.035)}s`;


        wordWrapper.appendChild(letter);

    });


    title.appendChild(wordWrapper);


    /*
        Tambahkan spasi setelah kata.
    */

    if (wordIndex < words.length - 1) {

        const space = document.createTextNode(" ");

        title.appendChild(space);

    }

});



/* =========================================
   CARTOON REVEAL
========================================= */

const imageContainer =
    document.getElementById("imageContainer");


/*
    Saat halaman pertama dibuka,
    kartun benar-benar tersembunyi.
*/

imageContainer.style.setProperty(
    "--mouse-x",
    "-200px"
);

imageContainer.style.setProperty(
    "--mouse-y",
    "-200px"
);


/*
    Ketika cursor masuk ke foto.
*/

imageContainer.addEventListener(
    "mouseenter",
    (event) => {

        const rect =
            imageContainer.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        imageContainer.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        imageContainer.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    }
);


/*
    Cursor bergerak di atas foto.
*/

imageContainer.addEventListener(
    "mousemove",
    (event) => {

        const rect =
            imageContainer.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        imageContainer.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        imageContainer.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    }
);


/*
    Cursor keluar dari foto.

    Kartun langsung disembunyikan lagi.
*/

imageContainer.addEventListener(
    "mouseleave",
    () => {

        imageContainer.style.setProperty(
            "--mouse-x",
            "-200px"
        );

        imageContainer.style.setProperty(
            "--mouse-y",
            "-200px"
        );

    }
);

// yuk cobain responsif
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      // Menambah / menghapus class 'active' saat diklik
      navMenu.classList.toggle("active");
    });
  }
});