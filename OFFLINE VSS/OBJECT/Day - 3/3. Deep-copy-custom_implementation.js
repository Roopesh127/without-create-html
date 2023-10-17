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

function custom(x) {
    let out = input.datails
    return out;
}
let out1 = custom(input)
console.log(out1.datails.job : "no")
console.log(input)


// function custommethod(x) {
//     let output1 = { ...x };
//     // const output = output1.datails;
//     return output1;
// }
// var output1 = custommethod(input)
// let output2 = output1.datails.compony
// console.log(output2)