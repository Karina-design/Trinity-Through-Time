document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    // Your image array
    const images = [
      'entrance hall.webp',
      'geography_building.jpg',
      'Museum Buidling1.webp'
    ];

    
    let currentIndex = 0;
    const mainImage = document.querySelector('.main-image img');
    mainImage.src = images[currentIndex];

    
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      mainImage.src = images[currentIndex];
    });
    
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      mainImage.src = images[currentIndex];
    });
  });

function moveToGeography() {
    const element = document.getElementById("content-text");
    element.scrollIntoView();
  }