// const kontrol = document.querySelector(".top");

// kontrol.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target.className === "fa-solid fa-plus") {
//     e.target.previousElementSibling.innerText++;
//     productTotal(e.target);
//     bottom()
//   }
//    else if (e.target.className === "fa-solid fa-minus") {
//     if (e.target.nextElementSibling.innerText > 1) {
//       e.target.nextElementSibling.innerText--;
//       productTotal(e.target);
//       bottom()
//     }
//   } 
//   else if (e.target.className === "remove") {
//     e.target.closest(".box").remove();
//     bottom()
//   }
// });

// const productTotal = (eleman) => {
//   const number = eleman.parentElement.querySelector(".number").innerText;
//   console.log(number);
//   const price =
//     eleman.parentElement.parentElement.querySelector("strong").innerText;
//   const productTotal = (number * price).toFixed(2);
//   console.log(productTotal);
//   eleman.parentElement.parentElement.querySelector(".product-span").innerText =
//     productTotal;
// };

// //* bottom

// const bottom=()=>{
//     const productsTotal = document.querySelectorAll(".product-span");
//     const subTotalValue = [...productsTotal].reduce((acc,item) => acc + number(item.innerText,0));

//     const subTotalKey = document.querySelector(".sub").innerText=subTotalValue.toFixed;

// };


const kontrol = document.querySelector(".top");
const icon = new Audio("./icon.mp3");
const remove = new Audio("./remove.mp3");


kontrol.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.className === "fa-solid fa-plus") {
    e.target.previousElementSibling.innerText++;
    productTotal(e.target);
    bottom();
    icon.play();
  } else if (e.target.className === "fa-solid fa-minus") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      productTotal(e.target);
      bottom();
      icon.play();
    }
  } else if (e.target.className === "remove") {
    e.target.closest(".box").remove();
    bottom();
    remove.play();
  }
  Audio.currentTime = 0;
});

const productTotal = (eleman) => {
  const number = eleman.parentElement.querySelector(".number").innerText;
  console.log(number);
  const price =
    eleman.parentElement.parentElement.querySelector("strong").innerText;
  const productTotal = (number * price).toFixed(2);
  console.log(productTotal);
  eleman.parentElement.parentElement.querySelector(".product-span").innerText =
    productTotal;
};

//* bottom

const bottom = () => {
  const productsTotal = document.querySelectorAll(".product-span");
  const subTotalValue = [...productsTotal].reduce(
    (acc, item) => acc + Number(item.innerText),
    0
  );

  const subTotalKey = (document.querySelector(".sub").innerText =
    "$"+subTotalValue.toFixed(2));

    //* tax
    const taxvalue = subTotalValue * 0.18;
    const taxkey = document.querySelector("#tax .sub").innerText= "$"+taxvalue.toFixed(2);
    //* shipping
    const shippingValue = subTotalValue > 500 || subTotalValue===0  ? 0 : 40;
    const shippingKey = document.querySelector("#shipping .sub").innerText= "$"+shippingValue.toFixed(2);

    //*total
    const totalValue = subTotalValue+taxvalue+shippingValue;
const totalKey = document.querySelector("#total .sub").innerText= "$"+totalValue.toFixed(2);
  };
