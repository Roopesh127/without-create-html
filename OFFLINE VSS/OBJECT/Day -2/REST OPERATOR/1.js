const profile = {
    name: "Roopesh",
    city: "Jabalpur",
    age: 22,

    education: {
        school: "sdm hr sec school",
        college: "SRIT Jabalpur",
    }
}
// const { name, ...other } = profile
const { school, ...other } = profile.education
console.log(other)