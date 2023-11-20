const userForm = document.querySelector('#userForm');
const nameInput = document.querySelector('#name');
const surNameInput = document.querySelector('#surName');
const streetInput = document.querySelector('#street');
const cityInput = document.querySelector('#city');
const passwordInput = document.querySelector('#password');
const usernameInput = document.querySelector('#username');
const imageInput = document.querySelector('#imageInput');

let users = localStorage.getItem('users');


if (users === null) {
    localStorage.setItem("users", JSON.stringify([]));
}


userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === '' || surNameInput.value.trim() === '' || streetInput.value.trim() === '' || cityInput.value.trim() === '') {
        alert('Please fill in all fields');
    } else {
        let users = JSON.parse(localStorage.getItem('users'));
        if (users.find(user => user.username === usernameInput.value)) {
            alert(`${usernameInput.value} is already in the list`);
            return;
        } else {
            let file= imageInput.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                let base64 = reader.result;
                users.push({
                    id: users.length + 1,
                    name: nameInput.value,
                    surName: surNameInput.value,
                    street: streetInput.value,
                    city: cityInput.value,
                    password: passwordInput.value,
                    username: usernameInput.value,
                    image: base64
                })
                localStorage.setItem("users", JSON.stringify(users))
                nameInput.value = '';
                surNameInput.value = '';
                streetInput.value = '';
                cityInput.value = '';
                passwordInput.value = '';
                usernameInput.value = '';
                imageInput.value = '';
            }
            // users.push({
            //     id: users.length + 1,
            //     name: nameInput.value,
            //     surName: surNameInput.value,
            //     street: streetInput.value,
            //     city: cityInput.value,
            //     password: passwordInput.value,
            //     username: usernameInput.value
            // })

            // localStorage.setItem("users", JSON.stringify(users))

            // nameInput.value = '';
            // surNameInput.value = '';
            // streetInput.value = '';
            // cityInput.value = '';
            // passwordInput.value = '';
            // usernameInput.value = '';
            
        }

    }
});