let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= slideCount) slideIndex = 0;
    if (index < 0) slideIndex = slideCount - 1;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Automatic slide transition
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);