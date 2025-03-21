const images = document.querySelectorAll('.slider .slide');
let currentIndex = 0;

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Optional: auto slide every 5s
setInterval(nextSlide, 5000);
