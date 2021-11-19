import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);

const slider = () => {

    const swiper = new Swiper('.swiper', {

        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
}

export default slider

//  переходим на swiper.js -> Get started -> набираем в консоли команлу npm install swiper
// вставляем в index.html копированный урл к файлу mincss
// https://swiperjs.com/demos https://codesandbox.io/s/d4vlk?file=/index.html