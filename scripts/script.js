var last_scroll_top = 0;
document.addEventListener('scroll', function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
        $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    }
    else {
        $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;

    if(scroll_top == 0){
        document.querySelector('.smart-scroll').style.boxShadow = "none";
    }
    else{
        document.querySelector('.smart-scroll').style.boxShadow = "0px 0px 15px rgb(1, 21, 20)";
    }
});
