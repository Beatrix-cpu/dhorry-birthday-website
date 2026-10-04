
const music = parent.document.getElementById("backgroundMusic");



setInterval(() => {


    if (music && !music.paused) {

        localStorage.setItem(
            "musicTime",
            music.currentTime
        );

    }

}, 500);
