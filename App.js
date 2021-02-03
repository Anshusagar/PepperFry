
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
}

function displayData(all) {
  let html = '';
  for (let i = 0; i < all.length; i++) {
    console.log(all[i]['name']);
    console.log(all[i]);
    html += `       <div class="card m-2" style="width: 18rem;">
    <img class="card-img-top" src="${all[i]['img-address']}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${all[i]['name']}</h5>
      <p class="card-text">${all[i]['rate']}</p>
    </div>
  </div>`;
  }
  div.innerHTML = html;
}

let select = document.querySelector('.form-select');

select.addEventListener('change', function (event) {
  console.log(event.target.value);

  renderDataByFilter(event.target.value);
});

async function renderDataByFilter(id) {
  if (id == 1) {
    let data = await fetch(
      'http://localhost:3004/furniture/?_sort=price&_order=asc'
    ).then((res) => res.json());
    console.log(data);
    displayData(data)
    
    
  }
  else if (id == 2) {
    let data = await fetch(
      'http://localhost:3004/furniture/?_sort=price&_order=desc'
    ).then((res) => res.json());
    console.log(data);
    displayData(data)
    
    
  }
}
