$(function(){

$('.slider_content, .news_item').slick({
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    infinite: false,
    initialSlide: 1,
    speed: 800,
});

$('select').styler()

$('.header_menu-btn').on('click', function(){
    $('.menu ul').slideToggle();
});


});