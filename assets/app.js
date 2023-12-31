// Toggle Basket
let cartToggle = document.querySelector('.basket > .btn')

cartToggle.addEventListener("click", openCart)

function openCart() {
    let element = document.querySelector(".basket .dropdown");
    element.classList.toggle("active");
}


// Get Product
let products = [];

function getProduct(productId) {
    let product = document.getElementById(productId);
    let productName = product.querySelector('.title h3').innerHTML
    let productSize = parseFloat(product.querySelector('.title span').innerHTML);
    let productPrice = parseFloat(product.querySelector('.price span').innerHTML);
    let productImage = product.querySelector('.image img').src

    products.push({
        name: productName,
        price: productPrice,
        image: productImage,
        size: productSize
    });

    pushToCart();
}


// Push To Cart
function pushToCart() {
    let basketItems = document.querySelector(".basket .list_items");
    let basketTotal = document.querySelector(".basket .dropdown .bottom .price span");
    let basketCount = document.querySelector(".basket > .btn .count");
    let subTotalCount = document.querySelector(".basket .sub_total .count");
    var deleteButton = document.querySelector(".list_items .delete");
    var priceTag = document.querySelector(".basket > .btn .price_tag");


    basketItems.innerHTML = "";
    let total = 0;

    products.forEach((item, index) => {
        let productItem = document.createElement("li");
        productItem.classList.add("item");

        productItem.innerHTML = `
            <div class="image">
                <img src="${item.image}" alt="">
            </div>
            <div class="details">
                <span class="count">x1</span>
                <div class="product_title">
                    <h3>${item.name}</h3>
                    <span class="size">size: ${item.size}cm</span>
                </div>
                <div class="price">
                    <span>${item.price}</span>
                    <sup>$</sup>
                </div>
            </div>
            <div class="delete">
                <img src="./assets/images/delete-btn.svg" width="24" alt="">
            </div>
        `
        ;

        basketItems.appendChild(productItem);
        total += item.price;
    });


    basketCount.innerHTML = basketItems.childElementCount
    subTotalCount.innerHTML = basketItems.childElementCount
    basketTotal.innerHTML = total

    // priceTag.innerHTML = `${basketCount}`;
    console.log(basketItems.childNodes.length);
    // console.log(basketItems.childElementCount);    
}

// Delete from Cart
function deleteFromCart(productId) {
    let product = document.getElementById(productId);
    console.log(product)
}
