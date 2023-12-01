const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const users=[]

const currentUser = JSON.parse(localStorage.getItem('user'));
if(currentUser){
    window.location.href = "index.html";
}

fetch("./data/users.json")
.then(res=>res.json())
.then(data=>users.push(...data.users))
console.log(users)

submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const username = usernameInp.value;
    const password = passwordInp.value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
    
});