
// const addNumV1 = (a, b) => {
//     return a + b;
//   };
  
//   const addNumV2 = (a, b) => a + b;
  
//   console.log(addNumV1(10, 20));
//   console.log(addNumV2(100, 20));





//   function makeUpperCase(input) {
//     return input.toUpperCase();
//   }
  
//   const makeUpperCaseV2 = (input) => input.toUpperCase();
  
//   const trimAndMakeUpperCase = (input) => {
//     const uc = makeUpperCaseV2(input);
//     return uc.trim();
//   };

// Arrow function

// const arroww = (a,b)=>a+b;

// array spread 
// arr = [1,2,3,4,5]
// arr1 = {...arr}
// console.log(arr1)

// function addThreeNumbers(a, b, c) {
//     return a + b + c;
// }

// const numbers = [1, 2, 3];
// const sum = addThreeNumbers(...numbers); // Equivalent to addThreeNumbers(1, 2, 3)
// console.log(sum)


// const addthreenumber = (a,b,c)=>(a+b+c);
// const number = [1,2,3];
// console.log(addthreenumber(...number))

// const arr = [1,2,3,4,5,6,7,8,9]
// for(let i of arr)
// console.log(i)




// function addNumbers(...anything) {
//     console.log("Anything: ", anything);
//     }
  

//     addNumbers("Ali", "Nitin", 10, true, "MH", { name: "Gunjan" }, [1, 2, 3, 4] );

// Rest operator

// function addnumber (...rest){
// console.log(rest)
// }
// addnumber("roopesh",1,2,3,4,5,{name:"roopesh", last:"Vishwakarma"});

const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
  let text = Object.entries(person);
console.log(text)