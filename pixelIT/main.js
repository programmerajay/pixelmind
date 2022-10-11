$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else { 
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});		




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 60,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    freeMode:true,
    breakpoints:{
        320:{
            slidesPerView:1,
        }
    }
});

var swiper2 = new Swiper(".testimonials", {
    slidesPerView: 2,
    spaceBetween: 60,
    navigation: {
        nextEl: ".testimonial-swiper-buttons .swiper-button-next",
        prevEl: ".testimonial-swiper-buttons .swiper-button-prev",
    },
    freeMode: true,
    loop: true,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
    },
})

var swiper3 = new Swiper(".infrastructure",{
    slidesPerView: 1,
    navigation: {
        nextEl: ".infrastructure-button .swiper-button-next",
        prevEl: ".infrastructure-button .swiper-button-prev",
    },
    freeMode: true,
    loop: true,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
    },
})

var swiper4 = new Swiper(".membership-plans-swiper",{
    slidesPerView: 3,
    spaceBetween:100,
    navigation: {
        nextEl: ".membership-button .swiper-button-next",
        prevEl: ".membership-button .swiper-button-prev",
    },
    freeMode: true,
    loop: true,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
    },
})