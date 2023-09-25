

let observer = new IntersectionObserver((e)=>{
    
    e.forEach((ele)=>{
        if(ele.isIntersecting){
            console.log('보여!')
            ele.target.style.opacity = 1;
        }
        else{
            console.log('안보여!')
            ele.target.style.opacity = 0;
        }
    });
    
});

let page = document.querySelectorAll('div');
let text = document.querySelectorAll('h1');
observer.observe(page[0]);
observer.observe(page[1]);
observer.observe(page[2]);