let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlideTop() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide-item');
    let dots = document.getElementsByClassName('slider-button');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-item-show');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('current-button');
    }
    slides[slideIndex - 1].classList.add('slide-item-show');
    dots[slideIndex - 1].classList.add('current-button');
}