//header scroll
let header = document.querySelector('header');

window.addEventListener('scroll',() => { 
    header.classList.toggle('shadow', window.scrollY > 0);   
});



//Swiper
var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
       
});