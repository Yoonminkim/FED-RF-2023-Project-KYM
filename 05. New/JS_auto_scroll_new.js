
let pg_num = 0;

let sts_wheel = 0;

let total_page;

setTimeout(()=>{window.scrollTo(0,0)},200);

window.addEventListener('wheel', wheelFn);
window.addEventListener('DOMContentLoaded', loadFn);

const indic = document.querySelectorAll('.page-indic li');

function loadFn(){

    console.log('로딩완료');

    total_page = qsa('.page').length;
    console.log('전체페이지수 : ', total_page);

    console.log('indic', indic);

}

function wheelFn(e){

    if(sts_wheel) return;
    sts_wheel = 1;
    setTimeout(()=>{sts_wheel=0},1500);

    let delta = e.wheelDelta;

    if(delta<0) pg_num++
    else pg_num--;

    if(pg_num<0) pg_num = 0;
    if(pg_num>total_page-1) pg_num = total_page-1;

    console.log('페이지번호:', pg_num);
    window.scrollTo(0,window.innerHeight*pg_num);

    chgIndic(pg_num);
}

function chgIndic(pg_num){

    indic.forEach((ele,idx)=>{
        if(idx==pg_num) ele.classList.add('on');
        else ele.classList.remove('on');
    });

}