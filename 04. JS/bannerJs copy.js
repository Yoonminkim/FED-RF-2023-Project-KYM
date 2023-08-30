
const minus = document.querySelector('.prev');
const plus = document.querySelector('.next');
const banners = document.querySelectorAll('.banner');

let page_num = 0;

function btn_minus(){
  page_num--;
  console.log(plus, page_num, banners);

  if(page_num <= 0){
    console.log(minus, page_num, banners);
    console.log(banners[page_num]);
    page_num = banners.length;
  };

};

function btn_plus(){
  page_num++;
  console.log(plus, page_num, banners);
  if(page_num >= banners.length){
    console.log(plus, page_num, banners);
    page_num = 0;
  };

};