
let slideIndex = 1;
showSlides(slideIndex);
showSlides_auto();

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  function showSlides_auto() {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides[i]);
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides_auto, 5000); // Change image every 2 seconds
  }


let slideIndex_2 = 1;
showSlides_2(slideIndex_2);
showSlides_auto_2();

function plusSlides_2(n) {
    showSlides_2(slideIndex_2 += n);
  }
  
  // Thumbnail image controls
  function currentSlide_2(n) {
    showSlides_2(slideIndex_2 = n);
  }

function showSlides_2(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow_2");
    if (n > slides.length) {slideIndex_2 = 1}
    if (n < 1) {slideIndex_2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex_2-1].style.display = "block";
  }

  function showSlides_auto_2() {
    let i;
    let slides_2 = document.getElementsByClassName("slideshow_2");
    for (i = 0; i < slides_2.length; i++) {
      slides_2[i].style.display = "none";
    }
    slideIndex_2++;
    if (slideIndex_2 > slides_2.length) {slideIndex_2 = 1}
    slides_2[slideIndex_2-1].style.display = "block";
    setTimeout(showSlides_auto_2, 5000); // Change image every 2 seconds
  }