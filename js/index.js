new Swiper('.swiper-box_mobile', {
    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,
    breakpoints: {
        650: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 1.6,
        },
        350: {
            slidesPerView: 1.2,
        },
        0: {
            slidesPerView: 1,
        }
    },
});

new Swiper('.lawyers__card-box', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    freeMode: true,
    breakpoints: {
        332: {
            slidesPerView: 'auto',
        },
        0: {
            slidesPerView: 1,
        }
    }
});

new Swiper('.reviews__card-box', {
    slidesPerView: 2,
    spaceBetween: 24,
    freeMode: true,
    navigation: {
        prevEl: '.reviews__button_prev',
        nextEl: '.reviews__button_next',
    },
    breakpoints: {
        1289: {
            slidesPerView: 'auto',
        },
        966: {
            slidesPerView: 1.5,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

new Swiper('.materials__card-box', {
    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,
    breakpoints: {
        980: {
            slidesPerView: 3,
        },
        666: {
            slidesPerView: 2,
        },
        390: {
            slidesPerView: 1.3,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav__list');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navList.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});