

// const profile = {
//     name: "satyam",
//     city: "jabalpur",
//     age: 26,
//     eduction: {
//         school: {
//             5: "Soorwari",
//             9: "convent",
//             highersec: {
//                 eleventh: "narsinghpur",
//                 twelth: "Jabalpur"
//             }
//         },
//         college: {
//             mechanical: "global",
//             city: "jabalpur",
//             jobprep: {
//                 online: "jabalpur",
//                 offlne: "Indore",
//             }
//         }
//     }
// }

const profile = {
    name: "Roopesh",
    city: "Jabalpur",
    age: 22,

    education: {
        school: "sdm hr sec school",
        college: "SRIT Jabalpur",
    }
}
const n = profile.name || "no";
// const rresult = profile.education.school  || "not available"
// const { city } = profile
// const { school } = profile.education
const { address = "Indore" } = profile
console.log(address)
// console.log(profile)