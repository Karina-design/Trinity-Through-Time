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

const images = ["assets/images/6.jpg", "assets/images/5.jpg", "assets/images/botany.jpg"];
const mainimages = ["assets/images/gmb1.jpeg", "assets/images/gmb4.jpeg", "assets/images/chamber4.JPeG", "assets/images/chamber5.JPeG", "assets/images/stained.jpg", "assets/images/stairs2.jpeg", 'assets/images/spiral.jpeg'];
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

// Make sure this script is at the end of your body or wrapped in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const mainImage = document.getElementById('carousel-image');

    // Image array - replace with your actual image paths
    const carouselImages = [
        'assets/images/gmb1.jpeg',
        'assets/images/gmb4.jpeg',
        'assets/images/chamber4.JPeG', 
        'assets/images/chamber5.JPeG',
        'assets/images/stained.jpg',
        'assets/images/stairs2.jpeg',
        'assets/images/spiral.jpeg'
    ];

    // Track current image
    let currentIndexImage = 0;

    // Function to update image
    function updateImage() {
        mainImage.src = carouselImages[currentIndexImage];
        // You can add a fade transition here if desired
        mainImage.classList.add('fade');
        setTimeout(() => mainImage.classList.remove('fade'), 500);
    }

    // Add click event for previous button
    prevButton.addEventListener('click', function () {
        currentIndexImage = (currentIndexImage - 1 + carouselImages.length) % carouselImages.length;
        updateImage();
        console.log('Previous clicked, showing image', currentIndexImage + 1);
    });

    // Add click event for next button
    nextButton.addEventListener('click', function () {
        currentIndexImage = (currentIndexImage + 1) % carouselImages.length;
        updateImage();
        console.log('Next clicked, showing image', currentIndexImage + 1);
    });

    // Initial image load
    updateImage();
});

setInterval(nextImage, 3000);

updateDots();



function moveToGeography() {
    const element = document.getElementById("carousel-image");
    element.scrollIntoView();
}