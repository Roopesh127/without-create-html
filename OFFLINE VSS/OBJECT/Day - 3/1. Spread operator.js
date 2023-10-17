// FIRST METHOD

//By default Its make shallow copy of any Object.

// const profile = {
//     name: "Akshay",
//     city: "Jabalpur",
//     country: "India",
//     datails: {
//         job: true,
//         compony: "tcs",
//         profile: "network Engineer",
//         salary: 45000,
//     }
// }
// I WANT TO CHANGE IN SHALLOW COPY

// const profile1 = { ...profile, name: "Roopesh" }
// console.log(profile1)

// const profile1 = { ...profile };

// I WANT TO CHANGE IN DEEP COPY
// profile1.name = "Roopesh";
// profile1.country = "France";
// profile1.datails.compony = "Infosys"


// console.log(profile1)



// SPREAD OPERATOR SECOND METHOD

// const profile = {
//     name: "Akshay",
//     city: "Jabalpur",
//     country: "India",
//     datails: {
//         job: true,
//         compony: "tcs",
//         profile: "network Engineer",
//         salary: 45000,
//     }
// }
// const p2 = Object.assign({}, profile)
// p2.name = "Roopesh";
// console.log(p2)




const input = {
    name: "Akshay",
    city: "Jabalpur",
    country: "India",
    datails: {
        job: true,
        compony: "tcs",
        profile: "network Engineer",
        salary: 45000,
    }

}


const output = { ...input };
//console.log(output)

output.datails.job = 'rupesh'
console.log(input)





