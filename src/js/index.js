$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
    })
})

$('.mobile-menu').click(function() {
    $(this).toggleClass('active-menu')
    $('.mobile-list').slideToggle('fast')
})

$('.pin-close').click(function() {
    $('.map-pin-text').css('display', 'none')
})
