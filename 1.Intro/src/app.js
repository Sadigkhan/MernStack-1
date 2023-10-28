let row = document.querySelector("#all-prods .container .row")

let productList = " ";
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(element => {
            productList += `
        <div class="card mb-4" style="width: 18rem;">
        <img class="card-img-top" src="${element.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${element.category}</li>
          <li class="list-group-item">${element.price}$</li>
        </ul>
        <div class="card-body">
          <a href="#" data-id="${element.id}" class="card-link add-basket">Add Basket</a>
        </div>
      </div>
        `
        });
        row.innerHTML = productList;

        let addBtns = document.querySelectorAll(".add-basket")

        addBtns.forEach(addBtn => {
            addBtn.addEventListener("click", function (e) {
                e.preventDefault()
                console.log(e.target.getAttribute("data-id"))
            })
        })


    })