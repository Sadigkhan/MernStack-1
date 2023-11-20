let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let loginForm = document.querySelector('#loginForm');
let users = JSON.parse(localStorage.getItem('users'));

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    let user = users.find(function (user) {
        return user.username === username && user.password === password;
    });
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html';
    } else {
        alert('Username or password is incorrect');
    }
});