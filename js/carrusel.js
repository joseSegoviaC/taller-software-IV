let overlay = document.querySelector('.overlay');
let carrusel = document.querySelector('.carrusel');
let slides = document.querySelectorAll('.carrusel .slide');
let rightArrow = document.querySelector('.rigth-arrow');
let images = document.querySelectorAll('.carrusel .slide img');
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;

function loadSlides(){

    carrusel.style.height='90vh';
    let heightCarrusel = carrusel.offsetHeight;
    
    for (let i = 0; i < images.length; i++) {
        if (images[i].offsetHeight < heightCarrusel) {
            heightCarrusel = images[i].offsetHeight;
        }
        
    }
    carrusel.style.height = heightCarrusel + 'px';

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = carrusel.offsetWidth*-i+'px';
    }
}

function openModal(){
    overlay.style.display = 'block';
    carrusel.style.display = 'block';
    loadSlides();
}

function closeModal(){
    overlay.style.display = 'none';
    carrusel.style.display = 'none';
}

function nextSlide(){
    updateArrowState(1)
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carrusel.offsetWidth +'px';
    }
}

function prevSlide(){
    updateArrowState(-1)
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carrusel.offsetWidth +'px';
    }
}

function updateArrowState(e){
    counter += e;
    if (counter !== 0) {
        leftArrow.style.display = 'flex';
    } else{
        leftArrow.style.display = 'none';
    }
    if (counter == slides.length-1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex';
    }
    rightArrow.style.pointerEvents = 'none';
    leftArrow.style.pointerEvents = 'none';
    setTimeout(()=>{
        rightArrow.style.pointerEvents = 'auto';
        leftArrow.style.pointerEvents = 'auto';
    },900);
}