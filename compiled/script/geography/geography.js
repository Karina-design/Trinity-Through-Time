function toggleContent(index) {

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.classList.remove('active');
});


tabs[index].classList.add('active');


const contents = document.querySelectorAll('.content');
contents.forEach((content, i) => {
    if (i === index) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
}

const images = ["../../assets/geography/image_1/image 11.jpeg", "../../assets/geography/image_1/image 12.jpeg", "../../assets/geography/image_1/image 13.jpeg"];
const mainimages = ["../../assets/geography/image_1/facade1.jpeg", "../../assets/geography/image_1/facade2.jpeg", "../../assets/geography/image_1/facade3.jpeg"];
let index = 0;

function showImage() {
    document.getElementById("slideshow").src = images[index];
    updateDots();
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function goToSlide(slideIndex) {
    index = slideIndex;
    showImage();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const mainImage = document.getElementById('carousel-image');

const carouselImages = [
'../../assets/geography/image_1/image 3.jpeg',
'../../assets/geography/image_1/image 4.jpeg',
'../../assets/geography/image_1/image 5.jpeg',
'../../assets/geography/image_1/image 6.jpeg',
'../../assets/geography/image_1/image 7.jpeg',
];

let currentIndexImage = 0;

function updateImage() {
mainImage.src = carouselImages[currentIndexImage];

mainImage.classList.add('fade');
setTimeout(() => mainImage.classList.remove('fade'), 500);
}

prevButton.addEventListener('click', function() {
    currentIndexImage = (currentIndexImage - 1 + carouselImages.length) % carouselImages.length;
updateImage();
console.log('Previous clicked, showing image', currentIndexImage + 1);
});

nextButton.addEventListener('click', function() {
    currentIndexImage = (currentIndexImage + 1) % carouselImages.length;
updateImage();
console.log('Next clicked, showing image', currentIndexImage + 1);
});

updateImage();
});

setInterval(nextImage, 3000);

updateDots();



window.onload = function() {
    var iframe = document.getElementById("youtube-video");
    var src = iframe.src;
    iframe.src = ""; // Clear the src attribute
    iframe.src = src; // Set it back, this will force the iframe to reload and start playing
  };
  


function moveToGeography() {
    const element = document.getElementById("carousel-image");
    element.scrollIntoView();
  }