const whiskyinfo = [
    { idx: "1", name: "글렌그란트", imgName: "whiskey1", data: "09/20 15:38"},
    { idx: "2", name: "글렌듈란", imgName: "whiskey2", data: "09/20 15:38"},
    { idx: "3", name: "글렌리벳", imgName: "whiskey3", data: "09/20 15:38"},
    { idx: "4", name: "글렌버기", imgName: "whiskey4", data: "09/20 15:38"},
    { idx: "5", name: "글렌엘긴", imgName: "whiskey5", data: "09/20 15:38"},
    { idx: "6", name: "글렌토커스", imgName: "whiskey6", data: "09/20 15:38"},
    { idx: "7", name: "글렌파클라스", imgName: "whiskey7", data: "09/20 15:38"},
    { idx: "8", name: "글렌피딕", imgName: "whiskey8", data: "09/20 15:38"},
    { idx: "9", name: "더프타운", imgName: "whiskey9", data: "09/20 15:38"},
    { idx: "10", name: "링크우드", imgName: "whiskey10", data: "09/20 15:38"},
    { idx: "11", name: "맥켈란", imgName: "whiskey11", data: "09/20 15:38"},
    { idx: "12", name: "모틀락", imgName: "whiskey12", data: "09/20 15:38"},
    { idx: "13", name: "밀튼더프", imgName: "whiskey13", data: "09/20 15:38"},
    { idx: "14", name: "발베니", imgName: "whiskey14", data: "09/20 15:38"},
    { idx: "15", name: "벤리악", imgName: "whiskey15", data: "09/20 15:38"},
    { idx: "16", name: "벤로막", imgName: "whiskey16", data: "09/20 15:38"},
    { idx: "17", name: "카듀", imgName: "whiskey17", data: "09/20 15:38"},
    { idx: "18", name: "크래건모어", imgName: "whiskey18", data: "09/20 15:38"},
    { idx: "19", name: "크라이겔라키", imgName: "whiskey22", data: "09/20 15:38"},
    { idx: "20", name: "탐듀", imgName: "whiskey23", data: "09/20 15:38"},
    { idx: "21", name: "아벨라워", imgName: "whiskey27", data: "09/20 15:38"},
    { idx: "22", name: "글렌알라키", imgName: "whiskey29", data: "09/20 15:38"},
    { idx: "23", name: "탐나불린", imgName: "whiskey30", data: "09/20 15:38"}
];

console.log(whiskyinfo[0].name);

const grdpg = qs('.gridbox');

let hcode = '';

for(let i=0;i<whiskyinfo.length;i++){
    console.log(whiskyinfo[0].name);
    hcode +=
    `<ul>
        <li class="grid-item">
            <a herf="#">
                <img src="../../02. image/spsd/spsd_${i}.jpg">
                <h3 class="whiskey-name" >${whiskyinfo[i].name}</h3>
            </a>
        </li>
    </ul>`
}

grdpg.innerHTML = `${hcode}`;

console.log(hcode);
console.log(whiskyinfo);

const btn_up = qs('#btn_home');

addEvt(btn_up,'click',()=>{
    setTimeout(()=>{window.scrollTo(0,0)},200);
});