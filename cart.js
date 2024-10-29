console.log('Hello card js is working');

const data = localStorage.getItem("cart");
const converting = JSON.parse(data);
console.log(converting);

let cartItems = converting || [];

function updateLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
const output = document.querySelector('#output');

function renderCart() {
    output.innerHTML = '';
    cartItems.map((item, index) => {
        output.innerHTML += `<div class="cards border border-3 border-white p-5 rounded w-25">
            <h2>Brand : ${item.brand}</h2>
            <h2>Model : ${item.model}</h2>
            <h2>Price : $${item.price}</h2>
            <h3>Quantity : <span><button class="btn btn-primary" onclick="minusQt(${index})">-</button></span><span class="qt-num${index} mx-2">${item.quantity}</span><span><button class="btn btn-primary" onclick="plusQt(${index})">+</button></span></h3>
            <button class="btn btn-danger mt-3" onclick="deleteItem(${index})">Delete</button>
        </div>`;
    });
}

renderCart();

function plusQt(index) {
    let qtNum = document.querySelector(`.qt-num${index}`);
    qtNum.innerHTML = +qtNum.innerHTML + 1;
    cartItems[index].quantity += 1;
    updateLocalStorage();
}

function minusQt(index) {
    let qtNum = document.querySelector(`.qt-num${index}`);
    if (+qtNum.innerHTML > 1) {
        qtNum.innerHTML = +qtNum.innerHTML - 1;
        cartItems[index].quantity -= 1;
        updateLocalStorage();
    }
}

function deleteItem(index) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success mx-2",
            cancelButton: "btn btn-danger mx-2"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            cartItems.splice(index, 1);
            updateLocalStorage();
            renderCart();
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your product is safe :)",
                icon: "error"
            });
        }
    });

}


function buyNow() {
    Swal.fire({
        title: "Your order has been placed successfully.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
    });
}