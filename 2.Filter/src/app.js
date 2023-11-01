let row = document.querySelector("#all-prods .container .row")
let cateqoryContainer = document.getElementById("cateqoryContainer")
let productList = " ";
let cateqoryList = " ";
let url;


const getData=()=>{
  url= "https://fakestoreapi.com/products";
  fetchApi(url).then(res => {
    res.forEach(item => {
      console.log(item)
      productList += `
<div class="card mb-4" style="width: 18rem;">
<img class="card-img-top" src="${item.image}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${item.title}</h5>
  <p class="card-text">${item.description}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${item.category}</li>
  <li class="list-group-item">${item.price}$</li>
</ul>
<div class="card-body">
  <a href="#" data-id="${item.id}" class="card-link add-basket">Add Basket</a>
</div>
</div>
`
    })
    row.innerHTML = productList;
  })


}
getData()

const getCategories = () => {
  url="https://fakestoreapi.com/products/categories"
  fetchApi(url).then(res => {
    res.forEach(item => {
      console.log(item)
      cateqoryList += `
        <li>
        <a href="#" class="nav-link text-white cateqory">
            <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#people-circle"></use>
            </svg>
            ${item}
        </a>
    </li>
        `
    })
    cateqoryContainer.innerHTML = cateqoryList;

    document.querySelectorAll('.cateqory').forEach(item=>{
      item.addEventListener("click",(e)=>{
        e.preventDefault()
          row.innerHTML = " "
          productList = " "
          let param = e.target.innerText.trim()
          url = `https://fakestoreapi.com/products/category/${param}`
          fetchApi(url).then(res => {
            res.forEach(item => {
              console.log(item)
              productList += `
        <div class="card mb-4" style="width: 18rem;">
        <img class="card-img-top" src="${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.category}</li>
          <li class="list-group-item">${item.price}$</li>
        </ul>
        <div class="card-body">
          <a href="#" data-id="${item.id}" class="card-link add-basket">Add Basket</a>
        </div>
        </div>
        `
            })
            row.innerHTML = productList;
          })
      })
    })
  })
  
    
}
getCategories()



async function fetchApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}



// fetchApi(url).then(res => {
//   console.log(res)
// })