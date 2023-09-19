
const grdpg = qs('.gridbox');

let hcode = '';

for(let i=1;i<10;i++){

    hcode +=
    `<ul>
        <li class="grid-item">
            <img src="../02. image/banner_${i}.jpg">
        </li>
    </ul>`
}

grdpg.innerHTML = hcode;

console.log(hcode);

