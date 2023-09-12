// 공통 JS


// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const ec = (x) => document.getElementsByClassName(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => 
ele.addEventListener(evt, fn);
