//header scroll

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll',() => { 
    header.classList.toggle('shadow', window.scrollY > 0);   
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


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

//video
document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector("video");
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.load();
                observer.unobserve(video);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(video);
});

