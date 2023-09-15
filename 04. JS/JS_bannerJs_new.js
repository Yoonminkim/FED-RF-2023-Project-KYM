let time = 5000;
let slideIndex = 1;

const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');

showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
    
};

function currentSlide(n) {
    showSlides((slideIndex = n));
};

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

function showSlides_auto() {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log(slides[i]);
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    var time_1 = setTimeout(showSlides_auto, time);
    console.log(time_1);
};

let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(n) {
    showSlides_2((slideIndex_2 += n));
};

function currentSlide_2(n) {
    showSlides_2((slideIndex_2 = n));
};

function showSlides_2(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow_2");

    if (n > slides.length) {
        slideIndex_2 = 1;
    }
    if (n < 1) {
        slideIndex_2 = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex_2 - 1].style.display = "block";
};

function showSlides_auto_2() {
    let i;
    let slides_2 = document.getElementsByClassName("slideshow_2");

    for (i = 0; i < slides_2.length; i++) {
        slides_2[i].style.display = "none";
        console.log(slides_2[i]);
    }
    slideIndex_2++;
    if (slideIndex_2 > slides_2.length) {
        slideIndex_2 = 1;
    }
    slides_2[slideIndex_2 - 1].style.display = "block";
    var time_2 = setTimeout(showSlides_auto_2, time);
    console.log(time_2);
};

// 배너 자동 실행 함수

function autoplay() {
    showSlides_auto();
    showSlides_auto_2();
};

autoplay();

// next, prev 버튼을 누르면 기존 흐르던 타이머 시간이 초기화 되는 효과
