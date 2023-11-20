let currentUser=JSON.parse(localStorage.getItem('currentUser'))

let username=document.getElementById('username')
let name=document.getElementById('name')
let surname=document.getElementById('surname')
let adress=document.getElementById('adress')
let logout=document.getElementById('logout')
let image=document.querySelector(".profileImg img")

image.src=currentUser.image
username.innerHTML=currentUser.username
name.innerHTML=currentUser.name
surname.innerHTML=currentUser.surName
adress.innerHTML=currentUser.city + ' ' + currentUser.street


logout.addEventListener('click',function(){
    localStorage.removeItem('currentUser')
    window.location.href='index.html'
})