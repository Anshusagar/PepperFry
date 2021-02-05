let browse_collection_button = document.querySelector('#show-more-button');
browse_collection_button.addEventListener('click', browseCollection);

let display_all_browse_collection = document.querySelector(
  '#third-block-third-part'
);

function browseCollection() {
  // console.log("Browse Collection")
  display_all_browse_collection.innerHTML = '';
  let html = '';
  html = `<div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1600688693_camila.jpg" alt="logo-of-sofa" />
                <h5>CAMILA</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1610767274_simon.jpg" alt="logo-of-sofa" />
                <h5>SIMON</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1610766956_fuego.jpg" alt="logo-of-sofa" />
                <h5>FUEGO</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1610767130_santiago.jpg" alt="logo-of-sofa" />
                <h5>SANTIAGO</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div></div>
            <div></div>`;
  display_all_browse_collection.innerHTML = html;
}

// Anshu part
window.addEventListener('load', function () {
  handleData();
});
let div = document.querySelector('.res');
async function handleData() {
  event.preventDefault();
  let data = await fetch('http://localhost:3004/furniture').then((res) =>
    res.json()
  );
  let all = data;
  displayData(all);
  addToCart();
  hearts();
}

function addToCart() {
  let AddToCartBtn = document.querySelectorAll('.Add-to-cart');
  console.log(AddToCartBtn);
  for (let i = 0; i < AddToCartBtn.length; i++) {
    AddToCartBtn[i].addEventListener('click', function (event) {
      let btn = event.target;
      var shopItem = btn.parentElement.parentElement.parentElement;
      let imgSrc = shopItem.querySelector('.card-img').src;
      let price = shopItem.querySelector('.price-span').textContent;
      let item_Title = shopItem.querySelector('.card-title').textContent;
      addItemToSideBar(imgSrc, price, item_Title);

      console.log(shopItem);
      console.log(shopItem.querySelector('.card-img').src);
    });
  }
}

function addItemToSideBar(imgsrc, price, itemTitle) {
  // let selectedDiv=document.getElementById('mycart');
  localStorage.setItem('cart',{imgSrc,price,})
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already added to the cart');
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgsrc}" width="100" height="100">
            <span class="cart-item-title">${itemTitle}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName('btn-danger')[0]
    .addEventListener('click', removeCartItem);
  cartRow
    .getElementsByClassName('cart-quantity-input')[0]
    .addEventListener('change', quantityChanged);
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateCartTotal();
// }
// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//   var total = 0
//   for (var i = 0; i < cartRows.length; i++) {
//       var cartRow = cartRows[i]
//       var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//       var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//       var price = parseFloat(priceElement.innerText.replace('$', ''))
//       var quantity = quantityElement.value
//       total = total + (price * quantity)
//   }
//   total = Math.round(total * 100) / 100
//   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }

function displayData(all) {
  let html = '';
  for (let i = 0; i < all.length; i++) {
    // console.log(all[i]['name']);
    // console.log(all[i]);
    html += `<div class="card" style="width: 22rem;">
    <div class="top-part">
        <img class="card-img ml-3 mt-2" style="width: 90%; ;"
            src="${all[i]['img-address']}"
            alt="Card image cap">
        <div class="hidden-div ">
            <button class="Add-to-cart" id="btn-1">ADD TO CART</button>
        </div>
    </div>
  
    <div class="card-body col">
        <div class="card-title ">${all[i]['name']}</div>
        <div class="row d-flex ">
            <div><a class="casaCraft-link" href="#">Casacraft By PepperFry</a></div>
            <div class="heart"></div>
        </div>
  
        <div class="product-price"><span class="price-span"> ${all[i]['rate']}</span></div>
        <div class="product-price-offer">
            <p>Save ₹ 5,999 <span>(36% Off)</span>,Limited Time Offer</p>
        </div>
        <div class="product-cashback"><span>Extra Cashback Worth ₹ 5,000</span></div>
        <div class="row">
            <div><img src="https://ii1.pepperfry.com/images/svg/clip-exp-ship-icon-2018.svg" alt=""></div>
            <div class="product-ship">
                <p>Ships in 1 Day</p>
            </div>
        </div>
    </div>
  </div>`;
    //   html += `       <div class="card m-2" style="width: 18rem;">
    //   <img class="card-img-top" src="${all[i]['img-address']}" alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">${all[i]['name']}</h5>
    //     <p class="card-text">${all[i]['rate']}</p>
    //   </div>
    // </div>`;
  }

  div.innerHTML = html;
}
//its for sorting select
let select = document.querySelector('.form-select');

let topSelect = document.querySelector('.form-select-1');
var topSelectedValue = '';
select.addEventListener('change', function (event) {
  console.log(event.target);

  renderDataByFilterSort(event.target.value, topSelectedValue);
});
topSelect.addEventListener('change', function (event) {
  renderDataByFilter(event.target.value);
  topSelectedValue = event.target.value;
});

async function renderDataByFilter(id) {
  let data = await fetch(`http://localhost:3004/${id}`).then((res) =>
    res.json()
  );
  console.log(data);
  displayData(data);
  addToCart();
  hearts();
}

async function renderDataByFilterSort(id, name) {
  if (id == 1) {
    let data = await fetch(
      `http://localhost:3004/${name}/?_sort=price&_order=asc`
    ).then((res) => res.json());
    console.log(data);
    displayData(data);
    addToCart();
    hearts();
  } else if (id == 2) {
    let data = await fetch(
      `http://localhost:3004/${name}/?_sort=price&_order=desc`
    ).then((res) => res.json());
    console.log(data);
    displayData(data);
    addToCart();
    hearts();
  }
}
function hearts() {
  let heart = document.querySelectorAll('.heart');
  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function () {
      heart[i].classList.toggle('toggle');
    });
  }
}

//---------------------------------------------------
let btnNavs=document.querySelectorAll('.nav-item');
                let divContain=document.querySelectorAll('.div-contain');
                for(let i=0;i<btnNavs.length;i++){
                        btnNavs[i].addEventListener('click',function(){
                                     btnNavs[i].classList.toggle('background-color')
                                    divContain[i].classList.toggle('dis-none')
                                    
                        })
                }

                let btn=document.getElementById('trans');
                console.log( document.querySelector('.side-menu'))
                btn.addEventListener('click',function(){
                      document.querySelector('.side-menu').classList.toggle('translate')
                })
