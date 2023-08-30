// const  profile = {
//     firstname : "Roopesh",
//     lastname : "Vishwakarma",
//     age : 22,
//     city: "Jabalpur"
// }
// // console.log(profile.firstname)
// const{firstname,lastname,city,age,state="madhya - pradesh"} = profile
// console.log(firstname,state)

const car = {
    name1: "Fortuner",
    model:"top 310",
    launching_year :2023,
    hp: 200,
    engine : {
        type: "Turbo++",
        tourque:215,
    }
}
const{name1,model,launching_year,hp,engine,}=car;
console.log(`hello friend I bought  new car that name is ${name1} , and its model is ${model}, its latest car which is launching year is ${launching_year}, its engine type is ${engine.type} and its engine tourque is ${engine.tourque}.`)