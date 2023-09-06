
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