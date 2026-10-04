/* =================================
   GLOBAL BACKGROUND MUSIC
   ================================= */

const music = new Audio("/static/birthday.mp3");

music.loop = true;
music.volume = 0.35;


/* Ambil posisi musik sebelumnya */

const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}


/* Simpan posisi musik */

setInterval(() => {

    if (!music.paused) {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }

}, 500);


/* Coba langsung memainkan musik */

music.play().catch(() => {

    console.log(
        "Autoplay diblokir browser."
    );

});