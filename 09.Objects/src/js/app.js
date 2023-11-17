const userForm = document.querySelector('#userForm');
const nameInput = document.querySelector('#name');
const surNameInput = document.querySelector('#surName');
const streetInput = document.querySelector('#street');
const cityInput = document.querySelector('#city');

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
        if (users.find(user => user.name === nameInput.value && user.surName === surNameInput.value)) {
            alert(`${nameInput.value} is already in the list`);
            return;
        } else {
            users.push({
                id: users.length + 1,
                name: nameInput.value,
                surName: surNameInput.value,
                street: streetInput.value,
                city: cityInput.value
            })

            localStorage.setItem("users", JSON.stringify(users))
        }

    }
});