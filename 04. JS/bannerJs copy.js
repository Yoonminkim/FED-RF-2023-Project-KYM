
const minus = document.querySelector('.prev');
const plus = document.querySelector('.next');
const bannerl = document.getElementsByClassName('.slideshow-area');

let page_num = 0;

function btn_minus(){
  page_num--;
  console.log(minus, page_num, bannerl);
};

function btn_plus(){
  page_num++;
  console.log(plus, page_num, bannerl);
  if(page_num < 3){
    console.log()
  }
};