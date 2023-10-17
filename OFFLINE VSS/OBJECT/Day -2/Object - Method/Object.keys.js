// Object.keys(...)
const profile = {
    name: "Roopesh",
    city: "Jabalpur",
    age: 22,

    education: {
        school: "sdm hr sec school",
        college: "SRIT Jabalpur",
    }
}
// const output = Object.keys(profile.education)
const output = Object.keys(profile)

console.log(output)
// its called shallow copy only gives first label
