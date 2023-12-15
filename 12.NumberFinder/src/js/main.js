const number = document.querySelector(".number")
const input = document.querySelector(".numberInp")
const form = document.querySelector(".numberForm")
const winCase = document.querySelector(".winCase")
const loseCase = document.querySelector(".loseCase")
const newGame=document.querySelector(".newGame")
const modal = document.querySelector(".modal")


let remainingNumber = document.querySelector(".remainingNumber")
let chancesLeft = 3
number.textContent = Math.ceil(Math.random() * 10)



console.log(modal.classList)
form.addEventListener("submit", function (e) {
    e.preventDefault()
    
    if (input.value == number.textContent) {
        number.style.display = "block"
        winCase.style.display = "block"
        modal.classList.remove("show")
    } else {
        chancesLeft--

        if (chancesLeft <= 0) {
            number.style.display = "block"
            loseCase.style.display = "block"
            remainingNumber.textContent = 0
            modal.classList.remove("show")

        }else{
            remainingNumber.textContent = chancesLeft
        }
        

    }

})

newGame.addEventListener("click",function(){
    window.location.reload()
})

