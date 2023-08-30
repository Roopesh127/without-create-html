// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];

// // Legacy way
// let filteredArrV1 = [];
// for (let item of arr) {
//   if (item % 3 === 0 || item % 5 === 0) {
//     filteredArrV1.push(item);
//   }
// }

// console.log("FilteredArrV1: ", filteredArrV1);

// // ES6 Way
// const filteredArrV2 = arr.filter((item) => item % 3 === 0 || item % 5 === 0);

// const filteredArrV3 = arr.filter((item) => {
//   if (item % 3 === 0 || item % 5 === 0) {
//     return true;
//   }
//   return false;
// });

// console.log("filteredArrV2: ", filteredArrV2);
// console.log("filteredArrV3: ", filteredArrV3);


// const arr = [1,2,3,4,5,6,7,8,9]

// const arr1 = arr.filter((item)=>{
//     if(item>2)
// return false;
// } )
// console.log(arr1)

// question :- price is more than 500 & categeries  === electronics


// ********************************************************************

const products = [
    {
      "name": "Smartphone",
      "price": 499.99,
      "category": "Electronics",
      "description": "High-end smartphone with advanced features."
    },
    {
      "name": "Laptop",
      "price": 799.00,
      "category": "Electronics",
      "description": "Powerful laptop for work and entertainment."
    },
    {
      "name": "Designer Watch",
      "price": 299.50,
      "category": "Fashion",
      "description": "Elegant watch with a unique design."
    },
    {
      "name": "Gaming Console",
      "price": 349.99,
      "category": "Electronics",
      "description": "Next-gen gaming console for immersive gameplay."
    },
    {
      "name": "Digital Camera",
      "price": 599.95,
      "category": "Electronics",
      "description": "High-resolution camera for stunning photography."
    }
  ]
const new1 = products.filter(item => item.category === "Electronics" && item.price > 500);

console.log(new1);


