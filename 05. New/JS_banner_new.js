// 배너 JS 파일

addEvt(window,"DOMContentLoaded", loadFc);

// 전역변수구역 //////////
// 1. 광클금지상태변수 : 0-허용,1-불허용
let clickSts = 0;
// 2. 슬라이드 이동시간 : 상수로 설정
const TIME_SLIDE = 400;

/* 
    (참고: JS에서 이름짓는 일반규칙)
    1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
    2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
    3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFc() {
    console.log("로딩완료!");

    // 1. 대상선정
    // 1-1.이벤트 대상: .abtn
    const abtn = qsa('.btn_check');
    // 1-2.변경 대상: #slide
    const slide = qs('.slide');

    // 대상확인
    console.log('대상',abtn,slide);

    // 1.5. li리스트에 순번속성 만들어 넣기
    // 만드는이유: 블릿변경 등에 현재 슬라이드 순번 필요!
    // 사용자 정의 속성은 반드시 'data-'로시작해야함!(W3C규칙)
    // data-seq 로 순번 속성을 넣을 것임!
    console.log(slide.querySelectorAll('li'));

    // slide.querySelectorAll('li')
    // .forEach((ele,idx)=>ele.setAttribute('data-seq',idx));
    // // setAttribute(속성명,속성값) -> 속성셋팅 JS내장메서드


    // 2. 이벤트 설정하기 : 버튼요소들 -> forEach()
    abtn.forEach(ele=>addEvt(ele,'click',goSlide));

    // 3. 함수만들기
    function goSlide(){
        // 광클금지 //////////////
        if(clickSts) return;//나가!
        clickSts=1;//잠금!
        setTimeout(()=>clickSts=0,TIME_SLIDE);//해제!


        // 호출확인
        console.log('나야나!',this,
        this.classList.contains('next'));

        // classList.contains(클래스명)
        // 선택요소에 해당클래스가 있으면 true

        // 1. 오른쪽 버튼 여부 알아내기
        let isRight = this.classList.contains('next');

        // 2. 슬라이드 li 새로 읽기
        let eachOne = slide.querySelectorAll('li');

        console.log('eachOne 길이는?',eachOne.length);

        // 3. 버튼분기하기 '.ab2' 이면 오른쪽버튼
        if(isRight){ // 오른쪽버튼
            //1.대상이동하기
            slide.style.left = '-100%';
            //2.트랜지션주기
            slide.style.transition = 
                TIME_SLIDE+'ms ease-in-out';
            // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
            // appendChild(요소)
            setTimeout(() => {
                // 3.맨앞li 맨뒤로 이동
                slide.appendChild(eachOne[0]);
                // 4.slide left값 0
                slide.style.left = '0';
                // 5.트랜지션 없애기
                slide.style.transition = 'none';
            }, TIME_SLIDE);
        } ////// if //////////////
        else{ // 왼쪽버튼
            // 1. 맨뒤li 맨앞으로 이동
            // 놈.놈.놈 -> insertBefore(넣을놈,넣을놈전놈)
            slide.insertBefore(
                eachOne[eachOne.length-1], eachOne[0]);
            // 2. left값 -100% 만들기 : 들어올 준비 위치!
            slide.style.left = '-100%';
            // 3. 트랜지션 없애기
            slide.style.transition = 'none';
            
            // 같은 left값을 동시에 변경하면 효과가 없음!
            // 비동기적으로 처리해야함!
            // -> setTimeout으로 싸주기!
            // 시간은 0이어도 비동기 처리므로 효과있음!

            setTimeout(() => {
                // 4. left값 0으로 들어오기
                slide.style.left = '0';
                
                // 5. 트랜지션주기
                slide.style.transition = 
                    TIME_SLIDE+'ms ease-in-out';
 
            }, 0);


        } /////// else //////////////

    } ////////// goSlide 함수 /////////


} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////