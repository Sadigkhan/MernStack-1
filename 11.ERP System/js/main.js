const currentUser = JSON.parse(localStorage.getItem('user'));
const sideLinksContainer = document.querySelector('.sideLinksContainer');
const contentContainer = document.querySelector('.contentContainer');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

// console.log(productsLink)


if (currentUser && currentUser.userRole == 'superAdmin') {
    sideLinksContainer.innerHTML = `
         <a href="#" class="list-group-item list-group-item-action py-2 ripple productsLink" aria-current="true">
            Products
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple usersLink" aria-current="true">
            Users
          </a>
          
          
    `
} else if (currentUser && currentUser.userRole == 'admin') {
    sideLinksContainer.innerHTML = `
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            Products
          </a>
          
    `
}
const usersLink = document.querySelector('.usersLink');
usersLink.addEventListener('click', function (e) {
    e.preventDefault();
    fetch("./data/users.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            data.users.forEach(user => {
                contentContainer.innerHTML += `
           <div class="userCard ">
                <div class="userImage">
                    <img src="${user.image}"
                        alt="">
                </div>
                <div class="userDetails">
                    <div class="userName">
                        <h3>${user.username}</h3>
                    </div>
                    <div class="name">
                        <h3>${user.name}</h3>
                    </div>
                    <div class="surname">
                        <h3>${user.surname}</h3>
                    </div>
                    <div class="userRole">
                        <h3>${user.userRole}</h3>
                    </div>
                </div>
            </div>
           `
            });
        })

})

const productsLink = document.querySelector('.productsLink');
productsLink.addEventListener('click', function (e) {
    e.preventDefault();
    contentContainer.innerHTML = '';
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            data.products.forEach(product => {
                contentContainer.innerHTML += `
                <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
                <div class="about-product text-center mt-2"><img src="${product.images[0]}" width="300">
                    <div>
                        <h4>${product.title}</h4>
                    </div>
                </div>
                <div class="stats mt-2">
                    <div class="d-flex justify-content-between p-price"><span>Pro Display XDR</span><span>$5,999</span></div>
                    <div class="d-flex justify-content-between p-price"><span>Pro stand</span><span>$999</span></div>
                    <div class="d-flex justify-content-between p-price"><span>Vesa Mount Adapter</span><span>$199</span></div>
                </div>
                <div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>$7,197.00</span></div>
            </div>  
                `
            })
        });

})


searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    contentContainer.innerHTML = '';
    fetch(`https://dummyjson.com/products/search?q=${searchInput.value}`)
        .then(res => res.json())
        .then(data=>data.products.forEach(product=>{
            console.log(data)
            contentContainer.innerHTML += `
            <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
            <div class="about-product text-center mt-2"><img src="${product.images[0]}" width="300">
                <div>
                    <h4>${product.title}</h4>
                </div>
            </div>
            <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price"><span>Pro Display XDR</span><span>$5,999</span></div>
                <div class="d-flex justify-content-between p-price"><span>Pro stand</span><span>$999</span></div>
                <div class="d-flex justify-content-between p-price"><span>Vesa Mount Adapter</span><span>$199</span></div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>$7,197.00</span></div>
        </div>  
            `
        }));
})

