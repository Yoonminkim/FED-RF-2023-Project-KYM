
// 버튼 대상
const btnMenu = qs('.menu-Btn-1');
// 전체메뉴
const totMenu = qs('.total-menu');
console.log(btnMenu,totMenu);

addEvt(btnMenu,'click',showMenu);

function showMenu(){

    console.log(333);

    totMenu.classList.toggle('on');

    let myI = btnMenu.querySelector('i');

    if(myI.classList.contains('fa-bars'))
        myI.classList.replace('fa-bars','fa-xmark');
    else
        myI.classList.replace('fa-xmark','fa-bars');


} //////// showMenu //////////////////

const mapbtn = qs('.menu-Btn-2');
const smap = qs('.s-map');
const cbtn = qs('.cbtn');
const slide = qsa('.banbox');
const slide1 = qs('.slide1');
const slide2 = qs('.slide2');

console.log(slide);

console.log(mapbtn, smap, cbtn);

addEvt(mapbtn, 'click', ()=>{
    smap.classList.add('on');
    cbtn.classList.add('on');
    document.body.classList.add('on');
});
addEvt(cbtn, 'click', ()=>{
    smap.classList.remove('on');
    cbtn.classList.remove('on');
    document.body.classList.remove('on');
});

console.log(slide[0]);

const mediaQ = window.matchMedia("(max-width: 850px)")
mediaQ.addListener((e) => {
if(e.matches){

    console.log(e.media);

    slide[0].classList.remove('col-4');
    slide[0].classList.add('col-8');
    slide[1].classList.remove('col-4');
    slide[1].classList.add('col-0');

}
else{
    slide[0].classList.add('col-4');
    slide[0].classList.remove('col-8');
    slide[1].classList.add('col-4');
    slide[1].classList.remove('col-0');
}
});

let timer;
let check;

// window.addEventListener('resize', function(){
//     console.log('resize!');

//     this.clearInterval(timer);
//     timer = this.setInterval(function(){
//         console.log('check-size');
//         if(window.innerWidth < 850){
//             slide[0].classList.remove('col-4');
//             slide[0].classList.add('col-8');
//             slide[1].classList.remove('col-4');
//             slide[1].classList.add('col-0');
//         }
//         else{
//             slide[0].classList.add('col-4');
//             slide[0].classList.remove('col-8');
//             slide[1].classList.add('col-4');
//             slide[1].classList.remove('col-0');
//         }
//     },1000);
// });