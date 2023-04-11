$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        items: 6,
        loop: true,
        margin: 10,
        nav: true,
        center: true,
        dots: false,
        autoplay: true,
        slideBy: 3,
        autoplaytimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                center: false
            },
            1200: {
                items: 4,
                nav: true
            }
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 800) {
        $('#top').css({
            'bottom': '20px'
        })
    } else {
        $('#top').css({
            'bottom': '-80px'
        })
    }
})
$(document).ready(function() {
    $('#top').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        })
    })
})

$('.tt').tooltip('show');
$('.po').popover({
    trigger: 'hover'
})
$('.po').popover('show');

$('.tot').toast('show');