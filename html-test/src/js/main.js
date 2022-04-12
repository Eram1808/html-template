$('.banner__inner-list, .testimonial__list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    //autoplay: true,
    autoplaySpeed: 3000,
});
$(".blog__cards").not(".slick-initialized").slick({
    infinite: false,
    speed: 800,
    //slidesToScroll: 3,
    //variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // {
        //     breakpoint: 767,
        //     settings: "unslick"
        // }
    ],
});
if ($(window).width() <= 1023) {
    $(".menu-icon").on("click", function(e) {
        $(this).toggleClass('active-menu');
        $(".menu__inner").animate({
            width: "toggle"
        });
        $("body").toggleClass("overflow-hidden");
    });


}
if ($(window).width() >= 1023) {
    new WOW().init();
}



//Get the button
var mybutton = document.getElementById("myBtn");
var header = document.getElementById("menu");
var sticky = header.offsetTop;

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {
    scrollFunction();
    stickyMenuFunction();
}

function stickyMenuFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}