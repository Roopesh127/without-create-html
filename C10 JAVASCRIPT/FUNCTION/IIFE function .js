/**
 * Self callable
 * Only one time call
 * You can't call it explicitely
 */

// Before IIFE
// function onUILoad() {
//     console.log("UI Loaded successfully");
//   }
  
//   onUILoad();
  
  // After IIFE
//   (() => {
//     console.log("UI Loaded inside IIFE");
//   })();
  
//  USE=> Established  one time data base connection.


(()=>{
    console.log("hii VSS")
})();