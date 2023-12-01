const numbers=[1,2,3,4,5,6,7,8]

//Task1 
// Daxil edilmis indeksdeki elementi silen ve yeni array qaytaran funksiya yazin
// function removeElement(index){
//         let newArr=[];
//         for(let i=0;i<numbers.length;i++){
//             if(i!=index){
//                 newArr.push(numbers[i])
//             }
//         }
//         return newArr;
// }

//with array methods
// function removeElement(index){
//     let newArr=numbers.filter((item,i)=>i!=index)
//     return newArr;
// }

// console.log(removeElement(2))

//Task2
//Verilmis araliqdaki elementleri silen ve yeni array qaytaran funksiya yazin
// function removeRange(start,end){
//     let newArr=[];
//     for(let i=0;i<numbers.length;i++){
//         if(i<start || i>end){
//             newArr.push(numbers[i])
//         }
//     }
//     return newArr;
// }

//with array methods
// function removeRange(start,end){
//     let newArr=numbers.filter((item,i)=>i<start || i>end)
//     return newArr;
// }
// console.log(removeRange(2,4))

//Task3
//Arrayin elementlerini tersden yazdiran funksiyani yazin
// function reverseArray(){
//     let newArr=[];
//     for(let i=numbers.length-1;i>=0;i--){
//         newArr.push(numbers[i])
//     }
//     return newArr;
// }

//with array methods

// function reverseArray(){
//     let newArr=numbers.reverse()
//     return newArr;
// }

// console.log(reverseArray())

//Task4
const elements=["1","abc",3,"two","2"]
// VErilmis arrayin icindeki elementlerden reqeme civrilmesi mumkun olanlari tapsin ve yeni array qaytarsin
// function findNumbers(){
//     let newArr=[];
//     for(let i=0;i<elements.length;i++){
//         if(!isNaN(elements[i])){
//             newArr.push(elements[i])
//         }
//     }
//     return newArr;
// }

//with array methods
// function findNumbers(){
//     let newArr=elements.filter(item=>!isNaN(item))
//     return newArr;
// }


// console.log(findNumbers())


//Task 5
//Numbers arrayindeki cut reqemleri tapib yeni arraye menimseden funksiya yazin

// function sumOfEvenNumbers(){
//     let newArr=[];
//     let sum=0
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]%2==0){
//             sum+=numbers[i]
//         }
//     }
//     newArr.push(sum)

//     return newArr;
// }

//with array methods
function sumOfEvenNumbers(){
    let newArr=numbers.filter(item=>item%2==0)
    let sum=newArr.reduce((a,b)=>a+b)
    return sum;
}
// console.log(sumOfEvenNumbers())
