const contactsButton = document.querySelector('.write-us-button');
const modalWriteUs = document.querySelector('.modal-write-us');
const closeWriteUs = document.querySelector('.close-write-us');
const form = modalWriteUs.querySelector('form');
const nameField = modalWriteUs.querySelector('[name=name]');
const emailField = modalWriteUs.querySelector('[name=email]');
const messageField = modalWriteUs.querySelector('[name=text]');

contactsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add('modal-show');
  nameField.focus();
});

closeWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove('modal-show');
  nameField.classList.remove('write-us-input-invalid');
  emailField.classList.remove('write-us-input-invalid');
  messageField.classList.remove('write-us-input-invalid');
});

form.addEventListener('submit', function (evt) {
  if (!nameField.value || !nameField.validity.valid) {
    nameField.classList.add('write-us-input-invalid');
    evt.preventDefault();
  } else {
    nameField.classList.remove('write-us-input-invalid');
  }
  if (!emailField.value || !emailField.validity.valid) {
    emailField.classList.add('write-us-input-invalid');
    evt.preventDefault();
  } else {
    emailField.classList.remove('write-us-input-invalid');
  }
  if (!messageField.value) {
    messageField.classList.add('write-us-input-invalid');
    evt.preventDefault();
  } else {
    messageField.classList.remove('write-us-input-invalid');
  }
});

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