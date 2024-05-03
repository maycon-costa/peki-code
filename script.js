const audio = document.getElementById("myAudio");
const audioControls = document.getElementById("audioControls");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function setVolume(volume) {
    audio.volume = volume;
}

audioControls.style.display = "flex";
audioControls.style.alignItems = "center";
audioControls.style.marginTop = "10px";