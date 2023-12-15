const prices=[100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,200,300,400,500];
const pricesContainer=document.querySelector(".prices-container");

let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

const rangeFill = document.querySelector(".range-fill");

prices.forEach((price) => {
    const priceElement=document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent=`$${price}`;
    pricesContainer.appendChild(priceElement);
});


// Function to validate range and update the fill color on slider
function validateRange() {
  let minPrice = parseInt(inputElements[0].value);
  let maxPrice = parseInt(inputElements[1].value);

  if (minPrice > maxPrice) {
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  const minPercentage = ((minPrice - 10) / 490) * 100;
  const maxPercentage = ((maxPrice - 10) / 490) * 100;

  rangeFill.style.left = minPercentage + "%";
  rangeFill.style.width = maxPercentage - minPercentage + "%";

  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;

  const prices=document.querySelectorAll(".price");
  console.log(prices);
  prices.forEach((price)=>{
    console.log(price.innerHTML.slice(1));
      const priceValue=parseInt(price.innerHTML.slice(1));
      if(priceValue>=minPrice && priceValue<=maxPrice){
          price.style.color="green";
      }
      else{
          price.style.color="red";
      }
  })
   
}

const inputElements = document.querySelectorAll("input");

// Add an event listener to each input element
inputElements.forEach((element) => {
  element.addEventListener("input", validateRange);
});

// Initial call to validateRange
validateRange();