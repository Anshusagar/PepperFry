let browse_collection_button = document.querySelector("#show-more-button")
browse_collection_button.addEventListener("click", browseCollection)

let display_all_browse_collection = document.querySelector("#third-block-third-part")

function browseCollection() {
    // console.log("Browse Collection")
    display_all_browse_collection.innerHTML = ""
    let html = "";
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
            <div></div>`
    display_all_browse_collection.innerHTML = html
}

// Anshu part
window.addEventListener('load', function () {
    handleData();
  });
  let div = document.querySelector('.res');
  async function handleData() {
    event.preventDefault();
    let data = await fetch('http://localhost:3005/furniture').then((res) =>
      res.json()
    );
    let all = data;
    // console.log(all.type)
    displayData(all);
  }
  
  function displayData(all) {
   
    let html = '';
    for (let i = 0; i < all.length; i++) {
      // console.log(all[i]['name']);
      // console.log(all[i]);
      // console.log(all[i].type)
      html += `<div class="card" style="width: 22rem;">
    <div class="top-part">
        <img class="card-img ml-3 mt-2" style="width: 90%; ;"
            src="${all[i]['img-address']}"
            alt="Card image cap">
        <div class="hidden-div ">
            <button class="Add-to-cart ${all[i].type}" id="${all[i].id}" onClick="movePage()">ADD TO CART</button>
        </div>
    </div>
  
    <div class="card-body col">
        <div class="card-title ">${all[i]['name']}</div>
        <div class="row ">
            <div><a class="casaCraft-link" href="#">Casacraft By PepperFry</a></div>
            <div class="heart"></div>
        </div>
  
        <div class="product-price"><span> ${all[i]['rate']}</span></div>
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
    // console.log(html)
    div.innerHTML = html;
  }
  
  let select = document.querySelector('.form-select');
  let topSelect=document.querySelector('.form-select-1');
  select.addEventListener('change', function (event) {
    console.log(event.target.value);
  
    renderDataByFilter(event.target.value);
  });
  topSelect.addEventListener('change',function(event){
    renderDataByFilter(event.target.value);
  })
  
  async function renderDataByFilter(id) {
    if (id == 1) {
      let data = await fetch(
        'http://localhost:3005/furniture/?_sort=price&_order=asc'
      ).then((res) => res.json());
      console.log(data);
      displayData(data);
    } else if (id == 2) {
      let data = await fetch(
        'http://localhost:3005/furniture/?_sort=price&_order=desc'
      ).then((res) => res.json());
      console.log(data);
      displayData(data);
    }
    else if(id=='Beds'){
        let data = await fetch(
          'http://localhost:3005/Beds'
        ).then((res) => res.json());
        console.log(data);
        displayData(data);
      }
      else if(id=='Chairs'){
        let data = await fetch(
          'http://localhost:3005/Chairs'
        ).then((res) => res.json());
        console.log(data);
        displayData(data);
      }
      else if(id=='Dining'){
        let data = await fetch(
          'http://localhost:3005/Dining'
        ).then((res) => res.json());
        console.log(data);
        displayData(data);
      }
  }
  
  let heart = document.querySelectorAll('.heart');
          for(let i=0;i<heart.length;i++){
              heart[i].addEventListener('click', function () {
              heart[i].classList.toggle('toggle')
  
          })
}

function movePage(type) {
    let id = event.target.id;
    let class_list = event.target.classList;
    let type_name = class_list[1]
    location = `cart.html?id=${id}&type=${type_name}`
}