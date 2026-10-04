function createHeart() {

    const heart = document.createElement("div");

    heart.className = "falling-heart";

    const hearts = [
        "💕",
        "💗",
        "💖",
        "♥",
        "🌸"
    ];

    heart.innerText =
        hearts[Math.floor(Math.random() * hearts.length)];


    /* Posisi awal secara horizontal */

    heart.style.left =
        Math.random() * 100 + "%";


    /* Ukuran love */

    heart.style.fontSize =
        (15 + Math.random() * 15) + "px";


    /* Kecepatan jatuh */

    const duration =
        6 + Math.random() * 4;

    heart.style.animationDuration =
        duration + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, (duration + 1) * 1000);

}


/* Munculkan love setiap 1.2 detik */

setInterval(createHeart, 1200);