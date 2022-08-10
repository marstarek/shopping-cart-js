// import {shopItemsData} from './Data.js';
var shopItemsData = [
  {
       id: "1",
       name: "Casual Shirt",
       price: 45,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
       img: "images/img-1.jpg",
  },
  {
       id: "2",
       name: "Office Shirt",
       price: 100,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
       img: "images/img-2.jpg",
  },
  {
       id: "3",
       name: "T Shirt",
       price: 25,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
       img: "images/img-3.jpg",
  },
  {
       id: "4",
       name: "Mens Suit",
       price: 300,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
       img: "images/img-4.jpg",
  },
  {
       id: "5",
       name: "Mens Suit",
       price: 300,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
       img: "./images/prod (1).jpg",
  },
  {
       id: "6",
       name: "Mens Suit",
       price: 300,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
       img: "./images/prod (2).jpg",
  },
  {
       id: "7",
       name: "Remax RPP-96",
       price: 300,
       desc: "Amazfit GTS 2 Mini ( 1.55 ) Bluetooth Smartwatch -Flamingo",
       img: "./images/prod (3).jpg",
  },
  {
       id: "8",
       name: "Silicone Sport",
       price: 300,
       desc: "Remax RPP-96 Power Bank - 10000mAh - Black",
       img: "./images/prod (4).jpg",
  },
  {
       id: "9",
       name: "Mobile Phone",
       price: 300,
       desc: "Nokia - 1.8-inch Dual SIM Mobile Phone - Dark Grey",
       img: "./images/prod (5).jpg",
  },
];
let shop = document.getElementById("shop");
var basket=[]
let fevo = []
let renderShop = () => {
  return (shop.innerHTML = shopItemsData.map((shopcard) => {
    let { id, name, price, desc, img } = shopcard;
    let look = basket.find((elm) => elm.id===id) || []
return ( `
<div  id=prod-id-${id}  class="col card-holder">
<div class="card h-100">
  <div class="love-icon">
  <i class="bi bi-heart-fill"></i>
  </div>
  <img src="${img}"data-bs-toggle="modal" data-bs-target="#exampleModal-${id}"  class="card-img-top" alt="./images/prod (1).jpg">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${desc}</p>
  </div>
  <div class="d-inline-flex justify-content-center">
    <div class="">
      <i class="bi bi-star-fill " ></i>
      <i class="bi bi-star-fill" ></i>
      <i class="bi bi-star-fill" ></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
    </div>
  </div>
  <div class="d-flex justify-content-around align-items-center py-1">
    <div>
      <p class="m-0">${price}$</p>
    </div>
    
  </div>
</div>
</div>

<div class="modal fade" id="exampleModal-${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${img}"  class="card-img-top" alt="./images/prod (1).jpg">
      <p class="">${desc}</p>
      <div class="d-flex justify-content-around align-items-center py-1">
    <div>
    
      <p class="m-0">${price}$</p>
    </div>
    <div>
      <button onclick="increment(${id})" class="btn fw-bold fs-4 ">+</button>
    </div>
    <div>
<p id=${id} class="prod-quantity m-0"> ${look.item===undefined?0:look.item}</p>
    </div>
    <div>
      <button onclick="decrement(${id})" class="btn fw-bold fs-4 ">-</button>
    </div>
  </div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">add to ♥ </button>
      </div>
    </div>
  </div>
</div>
`)


     }).join(""))
}
renderShop()


let fevoBtn = document.querySelectorAll('.love-icon i');
let starBtn = document.querySelectorAll('.bi-star-fill')
fevoBtn.forEach(heartbtn => {
     heartbtn.addEventListener('click', (e) => {
       e.target.classList.toggle("red");
       fevorID=e.target.parentElement.parentElement.parentElement.id
       addToFevo(fevorID)
     });
});
starBtn.forEach(heartbtn => {
     heartbtn.addEventListener('click', (e) => {
          e.target.classList.toggle("yellow")
     });
});

function increment  (id) {
  let selectedId = id;
  let search = basket.find((x) => x.id === selectedId);
  if (search === undefined) {
    basket.push({
      id: selectedId,
      item:1
    })
  } else {
    search.item += 1;
    update(selectedId);
  }
}
function decrement (id)  {
  let selectedId = id;
  let search = basket.find((x) => x.id === selectedId);
  if (search === undefined) {
    return
  }
 else if (search.item === 0) return; else {
    search.item -= 1;
    update(selectedId)
  }
  basket = basket.filter((x) => x.item !==0) 
}



let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calc()
}


let calc = () => { 
  let cartamount = document.querySelector(".cart-amount");
 cartamount.innerHTML = basket.map((x) => x.item).reduce((acc, item) => acc +item, 0);
}






let addToFevo = (id) => {
  let selectedId = id;
   let search = fevo.find((x) => x === selectedId);
if (search===undefined) {
  fevo.push(selectedId)
} else {
  for (var i = 0; i < fevo.length; i++) {
    if (fevo[i] === selectedId) {
        var spliced = fevo.splice(i, 1);
    }
}
  }
}
  

