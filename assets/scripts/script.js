$(document).ready(function () {
    $('.show-number').click(function (event) {
        $('.show-number').addClass('passive');
        $('.hide-number').addClass('active');
        $('.number').addClass('passive');
    });

    $('.main-slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: false,
        touchTreshold: 10,
        waitForAnimate: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.reviews__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        touchTreshold: 10,
        waitForAnimate: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.main-slider__fon').click(clickPrev);

    function clickPrev() {
        $('.slick-next').trigger('click');
        $('.main-slider__fon').toggleClass('passive');
    };



    $('.about-slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });




    $('.about-page__items__li-aqua').click(function (event) {
        $('.submenu-aqua').toggleClass('active');
        $('.arrow-li-aqua').toggleClass('active');
    });

    $('.about-page__items__li-relax').click(function (event) {
        $('.submenu-relax').toggleClass('active');
        $('.arrow-li-relax').toggleClass('active');
    });

    $('.about-page__items__li-eat').click(function (event) {
        $('.submenu-eat').toggleClass('active');
        $('.arrow-li-eat').toggleClass('active');
    });

    $('.about-page__items__li-equipment').click(function (event) {
        $('.submenu-equipment').toggleClass('active');
        $('.arrow-li-equipment').toggleClass('active');
    });

    $('.about-page__items__li-dop').click(function (event) {
        $('.submenu-dop').toggleClass('active');
        $('.arrow-li-dop').toggleClass('active');
    });

    $('.header__burger').click(function (event) {
        $('.header__burger__span').toggleClass('passive', 500);
        $('.header__burger').toggleClass('active');
        $('.header__burger__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('active');
    });

    
});




$(document).ready(function () {
    $('.stock-slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 340,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
})
