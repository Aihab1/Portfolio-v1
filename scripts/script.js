var last_scroll_top = 0;
var navbar_open = false;

document.addEventListener('scroll', function () {
    if (window.innerWidth <= 600) {
        if (!navbar_open) {
            scroll_top = $(this).scrollTop();
            if (scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;

            if (scroll_top == 0) {
                document.querySelector('.smart-scroll').style.boxShadow = "none";
            }
            else {
                document.querySelector('.smart-scroll').style.boxShadow = "0px 0px 15px rgb(1, 21, 20)";
            }
        }
    }
    else {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;

        if (scroll_top == 0) {
            document.querySelector('.smart-scroll').style.boxShadow = "none";
        }
        else {
            document.querySelector('.smart-scroll').style.boxShadow = "0px 0px 15px rgb(1, 21, 20)";
        }
    }
});

const navbar = document.querySelector('.hamburger-outer');
const nav_window = document.querySelector('#links-only');
const nav_links = document.querySelectorAll('.nav-link');
const outer_main = document.querySelector('#outer-main');

navbar.addEventListener("click", () => {
    nav_window.classList.toggle('clicked');
    navbar.classList.toggle('clicked');
    outer_main.classList.toggle('clicked');
    navbar_open = !navbar_open;
});
nav_links.forEach(a => a.addEventListener("click", () => {
    nav_window.classList.toggle('clicked');
    navbar.classList.toggle('clicked');
    outer_main.classList.toggle('clicked');
    navbar_open = !navbar_open;
}));
