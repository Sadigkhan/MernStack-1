

// //Function decleration
// // Toplama(1,2)  //Function declerationlarda hoisting logic isleyir
// function Toplama(a,b){

//     const result = a+b;
//     console.log(result)
// }

// // Toplama(1,2)


// // Cixma(10,1)

// //Function Expression - Anonim funksiya //Expressionlarda hoistiong logic islemir
// const Cixma = function(a,b){
//     const result=a-b;
//     console.log(result)
// }

// // Cixma(10,1)

// //Arrow function



// // Vurma(2,4)

// const Vurma = (a,b) =>{
// const result =a*b
// console.log(result)
// }

// // Vurma(2,4)



const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")




function thisKeyWord(){
    console.log(this)
}

const thisKeyWordTwo=()=>{
    console.log(this)
}
const thisKeyWordThree=function(){
    console.log(this)
}
btn1.addEventListener("click",thisKeyWord)
btn2.addEventListener("click",thisKeyWordTwo)
btn3.addEventListener("click",thisKeyWordThree)

