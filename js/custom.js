$(document).ready(function () {

    $('.wrapp-slides.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["<img src=\"img/nav-prev.png\">", "<img src=\"img/nav-next.png\">"]
    });


    $('.customers-reviews.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: ["<img src=\"img/reviews-prev.png\">", "<img src=\"img/reviews-next.png\">"],
        responsive: {
            1000: {
                items: 2
            },
            0: {
                items: 1
            }
        },
    });

    $('.burger-mobile').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').addClass("show");
    });

    $('.close-mobile-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass("show");
    });

    $('.main-menu-item.production').click(function (e) {
        $('.main-menu-mobile-list .main-menu-item.production .sub-list').toggleClass("show");
    });


    $('.change-photo-wrapper').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            let srcToChange = $(this).attr('data-image');
            console.log(srcToChange);
            $('.main-prod-photo img').attr("src", srcToChange);
            $('.additional-photo .change-photo-wrapper.active').removeClass("active");
            $(this).addClass("active");

        }

    });

    $('.fish-wide').owlCarousel({
        loop: true,
        margin: 80,
        nav: true,
        navText: ["<img src=\"img/nav-prev.png\">", "<img src=\"img/nav-next.png\">"],
        responsive: {
            992: {
                items: 3,
                nav: false,
                margin: 80,
            },
            768: {
                items: 2,
                nav: false,
            },
            570: {
                items: 2,
                nav: false,
            },
            0: {
                items: 1,
                nav: false,
                margin: 20,
            }
        },
    });

    $('.photo-about-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["<img src=\"img/nav-prev.png\">", "<img src=\"img/nav-next.png\">"],
    });

});