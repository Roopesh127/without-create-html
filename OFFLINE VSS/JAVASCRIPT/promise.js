// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hello everyone")
//     }, 6000);
//     resolve();
//     reject();
// }).then(() => {
//     console.log("promise is run")
// }).catch(() => {
//     console.log("something went wrong")
// })

// async function runPromise(){
//  const first = await r1().catch(()=>null);
//  if(!first){
//     return;
//  }
// }



// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 6000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//   }
  
//   asyncCall();
  