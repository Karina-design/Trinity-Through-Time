let currentVideoIndex = 0;
const videos = [
    "https://www.youtube.com/embed/lbBSlgU6jGI",
    'https://www.youtube.com/embed/VO44ieSBKqc',
    'https://www.youtube.com/embed/byngdomgKHI?t=848',
    'https://www.youtube.com/embed/1lmTs3bXOq4'

];

function changeVideo() {
    const videoPlayer = document.getElementById('video-player');


    currentVideoIndex = (currentVideoIndex + 1) % videos.length;


    videoPlayer.src = videos[currentVideoIndex];
}


function scrollLeft() {
    document.getElementById('shortsWrapper').scrollBy({ left: -220, behavior: 'smooth' });
}

function scrollRight() {
    document.getElementById('shortsWrapper').scrollBy({ left: 220, behavior: 'smooth' });
}
