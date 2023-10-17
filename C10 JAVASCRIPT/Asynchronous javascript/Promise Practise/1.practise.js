// const myPromise = new Promise((resolve, reject) => {
//     resolve("i am a rider")
// })
// myPromise
//     .then((result) => console.log("result", result))
//     .catch((error) => console.log("error"));

const meripromise = new Promise((reply, reject) => {
    setTimeout(() => {
        console.log("hello mai ab print honga 3 second baad")
    }, 3000)
});
meripromise
    .then