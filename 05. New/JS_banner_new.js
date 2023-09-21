addEvt(window, "DOMContentLoaded", loadFc);

let clickSts = 0;

const TIME_SLIDE = 400;

function loadFc() {
    console.log("로딩완료!");

    const abtn = qsa(".btn_check");
    const slide1 = qs(".slide1");
    const slide2 = qs(".slide2");

    slide1.querySelectorAll('li').forEach((ele,idx)=>{
        ele.innerHTML += `<h2 class="btxt">${banTxt1[idx]}</h2>`;
    })
    slide2.querySelectorAll('li').forEach((ele,idx)=>{
        ele.innerHTML += `<h2 class="btxt">${banTxt2[idx]}</h2>`;
    })

    abtn.forEach((ele) => addEvt(ele, "click", goSlide));

    function goSlide() {
        if (clickSts) return;
        clickSts = 1;
        setTimeout(() => (clickSts = 0), TIME_SLIDE);

        let isRight = this.classList.contains("next");

        let eachOne1 = slide1.querySelectorAll("li");
        let eachOne2 = slide2.querySelectorAll("li");

        if (isRight) {
            rightSlide();
        } 
        else {

            slide1.style.opacity = "0.8";
            slide2.style.opacity = "0.8";
            
            slide1.style.transition = TIME_SLIDE + "ms ease-in-out";
            slide2.style.transition = TIME_SLIDE + "ms ease-in-out";

            
            setTimeout(() => {
                slide1.insertBefore(eachOne1[eachOne1.length - 1], eachOne1[0]);
                slide2.insertBefore(eachOne2[eachOne2.length - 1], eachOne2[0]);
                
                slide1.style.opacity = "1";
                slide2.style.opacity = "1";
                
                slide1.style.transition = "none";
                slide2.style.transition = "none";
                
            }, TIME_SLIDE);
        }

        clearAuto();
    }

    function rightSlide() {

        slide1.style.left = "-1%";
        slide2.style.left = "-1%";

        slide1.style.opacity = "0.7";
        slide2.style.opacity = "0.7";

        slide1.style.transition = TIME_SLIDE + "ms ease-in-out";
        slide2.style.transition = TIME_SLIDE + "ms ease-in-out";

        setTimeout(() => {
            slide1.appendChild(slide1.querySelectorAll("li")[0]);
            slide2.appendChild(slide2.querySelectorAll("li")[0]);

            slide1.style.left = '0';
            slide2.style.left = '0';
            slide1.style.opacity = "1";
            slide2.style.opacity = "1";

        }, TIME_SLIDE);
    }

    let autoI;
    let autoT;

    function slideAuto(){
        autoI = setInterval(() => {
            rightSlide();
        }, 5000);
    }

    slideAuto();

    function clearAuto() {
        clearInterval(autoI);
        clearTimeout(autoT);
        autoT = setTimeout(slideAuto,5000);
    }
}