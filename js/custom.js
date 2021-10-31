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

    // $('.main-menu-item.production').click(function (e) {
    //     $('.main-menu-mobile-list .main-menu-item.production .sub-list').toggleClass("show");
    // });


    $('.main-menu-item.production .prod-link').click(function (e) {
        e.preventDefault();
    });


    $('.change-photo-wrapper').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            let srcToChange = $(this).attr('data-image');
            $('.main-prod-photo img').attr("src", srcToChange);
            $('.additional-photo .change-photo-wrapper.active').removeClass("active");
            $(this).addClass("active");

        }

    });

    $('.wp-post-image').parent().addClass("active");

    let mainPhoto = $('.additional-photo .wp-post-image').attr("src");
    $('.main-prod-photo img').attr("src", mainPhoto);

    $(".additional-photo .woocommerce-product-gallery__image a").click(function (e) {
        e.preventDefault();
        let srcToChange = $(this).attr('href');
        console.log(srcToChange);
        $('.main-prod-photo img').attr("src", srcToChange);
        $('.additional-photo .woocommerce-product-gallery__image a.active').removeClass("active");
        $(this).addClass("active");
    });
    $('.header-mini-cart').hover(function (){
        $('.mini-cart-header').toggleClass("show");
    });

    $('.main-product .main-prod-wrapper').each(function (elem, i){
        $(this).hover(function (){
            $('.main-product .main-prod-wrapper').removeClass("central-prod");
            $(this).toggleClass("central-prod");
        });
    });


    $('.fish-wide').owlCarousel({
        loop: true,
        margin: 80,
        nav: true,

        responsive: {
            992: {
                items: 3,
                nav: false,
                navText: ["<img src=\"img/nav-prev.png\">", "<img src=\"img/nav-next.png\">"],
                margin: 80,
            },
            768: {
                items: 2,
                nav: true,
                navText: ["<img src=\"img/ar_left.svg\">", "<img src=\"img/ar_right.svg\">"],
            },
            0: {
                items: 1,
                nav: true,
                margin: 20,
                navText: ["<img src=\"img/ar_left.svg\">", "<img src=\"img/ar_right.svg\">"],
            }
        },
    });



    $('.photo-about-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["<img src=\"img/nav-prev.png\">", "<img src=\"img/nav-next.png\">"],
    });

    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.buy-area-wrapper .cart').on('click', '.button-plus', function (e) {
        incrementValue(e);
    });

    $('.buy-area-wrapper .cart').on('click', '.button-minus', function (e) {
        decrementValue(e);
    });



    $('.header-mini-cart').click(function (e){
        e.preventDefault();
        $('.popup-wrapper').addClass("show");
    });

    $('.popup-wrapper .overlay, .close-popup').click(function (e){
        e.preventDefault();
        $('.popup-wrapper').removeClass("show");
    });

    var price_one;
    var price_two;
    var reg_price;
    $('.single-list-price-get span').each(function (elem, i){
        if(elem == 0){
            price_one = $(this).text();
        }
        else if(elem ==3){
            price_two = $(this).text();
        }
        else if(elem ==1){
            reg_price = $(this).text();
        }


    });

    $('.single-list-price .put-quantity-worm').each(function (elem, i){
        if(elem == 0){
            if(reg_price != price_one){
                $(this).addClass("sale");
                $(this).text(reg_price+" грн");
            }
            else{
                $(this).text("");
            }
        }
        else if(elem ==1){
            $(this).text("~12-15 ШТ");
        }
    });
    $('.single-list-price .put-price').each(function (elem, i){
        if(elem == 0){
            if(reg_price>0){
                var css_price = "content: " + reg_price;
                $(this).addClass("reg-price");
                $('.put-price').prepend("<p class='ssss'>ssss</p>");
                // $(".single-list-price").apppend("<p>" + reg_price + "</p>");
                // $(".put-price.reg-price:before").css("content", reg_price+'!important');
                var string_price = price_one+" грн";
            }

            $(this).text(string_price);
        }
        else if(elem ==1){
            $(this).text(price_two+" грн");
        }
    });

    $(".single-weight").each(function (elem, i) {
        $(this).click(function () {
            $(".single-weight").removeClass("fill");
            $(this).addClass("fill");
        });
    });

    $(".toggle-quantity").click(function (e) {
        e.preventDefault();
        $(".buy-area-wrapper .cart .wrapp-buttons").toggleClass("show");
        $("table.variations .value").removeClass("show");
        $(this).toggleClass("active");
    });
    $(".toggle-choose-pack").click(function (e) {
        e.preventDefault();
        $("table.variations .value").toggleClass("show");
        $(".toggle-quantity").toggleClass("dis");
    });

    if(window.matchMedia('(max-width: 768px)').matches){
        $(".single-weight").each(function (elem, i) {
            $(this).click(function () {
                if (elem == 0){
                    $(".toggle-choose-pack").text("1кг");
                    $("table.variations .value").removeClass("show");
                }
                else {
                    $(".toggle-choose-pack").text("25г");
                    $("table.variations .value").removeClass("show");
                }
                $(".toggle-quantity").css({"display":"none"})
            });
        });
        $(".toggle-quantity").click(function (e) {
            e.preventDefault();
            $(".close-pack-overlay").toggleClass("show");
        });
        $(".close-pack-overlay").click(function (e) {
            e.preventDefault();
            $("table.variations .value.show").removeClass("show");
            $(".buy-area-wrapper .cart .wrapp-buttons.show").removeClass("show");
            $(".close-pack-overlay").removeClass("show");
            $(".toggle-quantity").removeClass("dis");
            $(".toggle-quantity").removeClass("active");
            $(".toggle-quantity").css({"display":"block"})
        });
        $(".first-worm-pack").click(function (e) {
            e.preventDefault();
            $(".buy-area-wrapper .cart .wrapp-buttons").addClass("show");
            $(".toggle-quantity").addClass("active");
            $(".close-pack-overlay").addClass("show");
        });




    }
    $(".description-right-area.prod-11 .put-quantity-worm").each(function (elem, i){
        if (elem == 1){
            $(this).text("25-30 ШТ");
        }
    });

    $(".button-validate").click(function (e) {
        e.preventDefault();
        var formHold = $(".woocommerce-billing-fields__field-wrapper");
        var inputHold = $(".woocommerce-billing-fields__field-wrapper .input-text ");
        var counter =0;
        formHold.find(".input-text").each(function () {

            value = $(this).val();
            if(value.length != 0){
                // $("#place_order").click();
                // console.log("usss")
                counter++;
            }
            else{
                $(this).addClass("wrong");
            }


        });
        if (counter == 4){
            $("#place_order").click();
        }
    });

    var needetText = $(".mini-cart-header .quantity .quan").text();
    $(".mini-cart-header .quantity").text(needetText);

    $('.place_order').click(function (e){
        e.preventDefault();
    });




});