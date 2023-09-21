
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