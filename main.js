let video = document.getElementById("video");
let rotation = 0;
let zoom = 1;

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

function zoomIn() {
    zoom += 0.1;
    video.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
}

function zoomOut() {
    zoom -= 0.1;
    video.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
}

function rotateLeft() {
    rotation -= 10;
    video.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
}

function rotateRight() {
    rotation += 10;
    video.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
}
