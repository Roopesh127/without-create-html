// var profile = {
//     uName: "Ankit",
//     uCity: "Morena",
//     uState: "MP",
//   };

//   // ES5 Way
//   var userName = profile.uName;
//   var userCity = profile.uCity;
//   var userState = profile.uState || "MH";
//   var userCountry = profile.uCountry || "India";

//   console.log({ userName, userCity, userState, userCountry }, profile);



//   //ES6 way
//   const profile2 = {
//     uName: "Ankit",
//     uCity: "Morena",
//     uState: "MP",
//   };

//   const { uName, uCity, uState, uPhone = "India" } = profile2;

//   console.log({ uName, uCity, uState, uPhone, profile2 });



//   var newprofile = {
//         firstname:"roopesh",
//         lastname:"Vishwakarma",
//         age:22,
//   }
//   const {firstname,lastname,age,city = "jabalpur"}= newprofile;
// // console.log(firstname)
// // console.log(city)


// const order = {
//     id: 1011,
//     productName: "iPhone 14 Pro Max",
//     brandName: "Apple",
//     price: 145000,
//     condition: "New",
//   };

//   const generateMessage = (data) => {};

//   console.log(generateMessage(order));
//   // Hello Team, I have ordered a new Apple iPhone 14 Pro Max which cost me 145000. Let me know when will i get it?


// //   *******************


//   const order = {
//     id: 1011,
//     productName: "iPhone 14 Pro Max",
//     brandDetails: {
//       brandName: "Apple",
//       origin: "USA",
//       assembledIn: "India",
//     },
//     price: 145000,
//     condition: "New",
//   };

//   const generateMessage = (data) => {};

//   console.log(generateMessage(order));
  // Hello Team, I have ordered a new Apple iPhone 14 Pro Max which cost me 145000. Let me know when will i get it?

  const order = {
    id: 1011,
    productName: "iPhone 14 Pro Max",
    brandDetails: {
      brandName: "Apple",
      origin: "USA",
      assembledIn: "India",
    },
    price: 145000,
    condition: "New",
  };
var{id,productName,brandDetails,price,condition} = order;
console.log(`Hello Team , I have ordered a new $(branddetails.brandName) $(productName) which cost me$(price). Let me know when will i get it?`)