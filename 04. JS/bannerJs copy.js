
const minus = document.querySelector('.prev');
const plus = document.querySelector('.next');
const banners = document.querySelectorAll('.banner');

let page_num = 0;

function btn_minus(){
  page_num--;
  console.log(plus, page_num, banners);
  switch (page_num) {

    case page_num <=0 :
        page_num = banners.length;
      break;
    case 0 :
        banners[0].style.display = 'block';
        banners[1].style.display = 'none';
      break;
    case 1 :
        banners[1].style.display = 'block';
      break;   
    case 2 :
        banners[2].style.display = 'block';
      break;
    case 3 :
        banners[3].style.display = 'block';
      break;
    case 4 :
        banners[4].style.display = 'block';
      break;
    case 5 :
        banners[5].style.display = 'block';
      break;
    };

  }
  if(page_num <= 0){
    console.log(minus, page_num, banners);
    console.log(banners[page_num]);
    page_num = banners.length;
  };

function btn_plus(){
  page_num++;
  console.log(plus, page_num, banners);
  if(page_num >= banners.length){
    console.log(plus, page_num, banners);
    page_num = 0;
  };

};