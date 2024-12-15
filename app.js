const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ROG 3",
    price: 1190,
    colors: [
      {
        code: "black",
        img: "./img/lap1.png",
      },
      {
        code: "darkblue",
        img: "./img/lap1-b.png",
      },
    ],
  },
  {
    id: 2,
    title: "ROG STRI",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "./img/lap2.png",
      },
      {
        code: "green",
        img: "./img/lap2-g.png",
      },
    ],
  },
  {
    id: 3,
    title: "DELL",
    price: 1099,
    colors: [
      {
        code: "lightgray",
        img: "./img/lap3.png",
      },
      {
        code: "green",
        img: "./img/lap3-g.png",
      },
    ],
  },
  {
    id: 4,
    title: "msi 11",
    price: 1299,
    colors: [
      {
        code: "black",
        img: "./img/lap4.png",
      },
      {
        code: "black",
        img: "./img/lap4.png",
      },
    ],
  },
  {
    id: 5,
    title: "ROG 7",
    price: 999,
    colors: [
      {
        code: "black",
        img: "./img/lap6.png",
      },
      {
        code: "black",
        img: "./img/lap6.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

   
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
