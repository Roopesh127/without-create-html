const p = {  name: "Rahul",
  city: "Pune",
  details: {
    isMarried: false,
    isEngaged: false,
  },
};

const p2 = { ...p };

p.name = "Romesh"; // It's not going to affect the first level of data

p.details.isEngaged = true; // It's will change data in both object, since internally objects are maintaining shallow copy or references

console.log("p.details.isEngaged", p.details.isEngaged); // true
console.log("p2.details.isEngaged", p2.details.isEngaged); // true


// ***********************
// shallow copy :- when we are create nested object copy of and object called ahallow copy.


const profile = {
    name: "Sanket",
    city: "Pune",
    state: "MH",
  };
  
  const cpProfile = {
    ...profile,
    isMarried: false,
    isWorking: true,
    isASportsMan: true,
    hobbies: ["cricket", "swimming"],
    graduationYear: 2022,
  };
  
  console.log("Profile: ", profile);
  console.log("cpProfile: ", cpProfile);

//   ******************************************
// Deep Copy

const profile = {
    name: "Sanket",
    city: "Pune",
    state: "MH",
    details: {
      isMarried: false,
      isWorking: true,
      isASportsMan: true,
    },
  };
  
  const cpProfile = structuredClone(profile);
  
  console.log("Profile: ", profile);
  console.log("cpProfile: ", cpProfile);

  