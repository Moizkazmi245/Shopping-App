console.log('Hello card js is working');

const data = localStorage.getItem("cart");
const converting = JSON.parse(data);
console.log(converting);

const output = document.querySelector('#output');

converting.map((item, index) => {
    output.innerHTML += `<div class="cards border border-3 border-white p-5 rounded w-25">
    <h2>Brand : ${item.brand}</h2>
    <h2>Model : ${item.model}</h2>
    <h2>Price : $${item.price}</h2>
    <h3>Quantity : <span><button class="btn btn-primary" onclick=minusQt(${index})>-</button></span><span class="qt-num${index} mx-2">${item.quantity}</span><span><button class="btn btn-primary" onclick=plusQt(${index})>+</button></span></h3>
    <button class="btn btn-primary btn-lg mt-3" onclick=buyNow()>Buy Now</button>
    </div>`;

})

function plusQt(index) {
    let qtNum = document.querySelector(`.qt-num${index}`)
    qtNum.innerHTML ++;
}

function minusQt(index) {
    let qtNum2 = document.querySelector(`.qt-num${index}`)
    if(qtNum2 > "1"){

        qtNum2.innerHTML --;
    }
}
