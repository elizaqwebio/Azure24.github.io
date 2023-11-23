var menubtn = document.getElementById("menubtn");
var sidebar = document.getElementById("sidebar");

sidebar.style.right = "-250px";
menubtn.onclick = function () {
    if (sidebar.style.right == "-250px") {
        sidebar.style.right = "0";
    }
    else {
        sidebar.style.right = "-250px";
    }
}

var swiper = new Swiper(".typeSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 2,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


function clickStart() {
    window.location = "ons.html";
}

function clickGoNow() {
    window.location = "sids.html";
}

function clickhome() {
    window.location = "home.html";
}

function clicklibrary() {
    window.location = "library.html";
}

function clickjust() {
    window.location = "review.html";
}

function clickwhy() {
    window.location = "why.html";
}

