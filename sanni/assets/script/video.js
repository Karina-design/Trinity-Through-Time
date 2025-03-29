let currentVideoIndex = 0;
const videos = [
  'https://www.youtube.com/embed/4F5X_-VXefA' ,
  'https://www.youtube.com/embed/C0m7Hj7zw-w?start=183', 
  'https://www.youtube.com/embed/byngdomgKHI?t=848',    
  'https://www.youtube.com/embed/4ULsP1YD3HM'   
  
];

function changeVideo() {
  const videoPlayer = document.getElementById('video-player');
  

  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  

  videoPlayer.src = videos[currentVideoIndex];
}



