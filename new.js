// function asynchronousfxn(callback) {
//     setTimeout(() => {
//         callback();
//     }, 7000);
// }

// function main() {
//     console.log("main started");
//     asynchronousfxn(add);
// }

// function a() {
//     console.log("mai chamatakri function hoon");
// }

// function sub() {
//     console.log("Im subtracting");
//     asynchronousfxn(a);
// }

// function add() {
//     console.log("mai yaaha add kar raha hoon");
//     asynchronousfxn(sub);
// }

// main();
// console.log("hello");



// ===========================================================================



// function asynchronousfxn(callback) { 

//     setTimeout(() => { 
  
//       callback(); 
  
//     }, 7000); 
  
//   } 
  
   
   
  
//   function mohit() { 
  
//     console.log("hey buddy Im mohit the rockstar"); 
  
//   } 
  
//   function uma() { 
  
//     console.log("mere se panga nahi lena ka"); 
  
//   } 
  
//   function pushpendra() { 
  
//     console.log("mere ko kyu toda bhai"); 
  
//   } 
  
//   asynchronousfxn(mohit); 
  
//   asynchronousfxn(uma); 
  
//   asynchronousfxn(pushpendra); 


// ====================================================================

// function asynchronousfxn3000(callback) { 

//     setTimeout(() => { 
  
//       callback(); 
  
//     }, 3000); 
  
//   } 
  
   
   
  
//   function asynchronousfxn(callback) { 
  
//     setTimeout(() => { 
  
//       asynchronousfxn3000(b); 
  
//       callback(); 
  
//     }, 5000); 
  
//   } 
  
//   function b() { 
  
//     console.log("Mai to hoon hi b"); 
  
//   } 
  
//   function main() { 
  
//     console.log("main started"); 
  
//   } 
  
//   asynchronousfxn(main); 
// ======================================================================


// function entryintoregex() {
//     setTimeout(() => {
//       console.log("Ha mai khush hoon");
//       setTimeout(() => {
//         console.log("C programming start hua hai");
//         setTimeout(() => {
//           console.log("ho gai khtam zindigi ise mai hi");
//         }, 2000);
//       }, 3000);
//     }, 5000);
//   }
//   function main() {
//     console.log("yaha se zindigi shur hoti hai");
//     entryintoregex();
//   }
//   main();
// ===================================================================

// function main(){
//     setInterval(() => {
//         console.log("sorry");
//     },1000);
//     }
//     main();
// ========================================================================

// promises 

// let promise = new Promise((resolve, reject) => { 
//     let success = false; 
//     if (success) { 
//       resolve("Operation successfully complete ho chuka hai"); 
//     } else { 
//       reject("Operation failed"); 
//     } 
//   }); 
//   promise 
//     .then((result) => { 
  
//       console.log(result); 
  
//     }) 
//     .catch((e) => { 
  
//       console.log(e); 
  
//     }) 
//     .finally(() => { 
//       console.log("kuch bhi ho mai to chalungha hai"); 
//     });   
// =====================================================================
// function delay(ms) { 
//     return new Promise((resolve, reject) => { 
//       setTimeout(reject, ms); 
//     }); 
//   } 
//   function main() { 
//     console.log("yaha se zindigi shur hoti hai"); 
//     delay(5000) 
//       .then(() => { 
//         console.log("Ha mai khush hoon"); 
//         return delay(3000); 
//       }) 
//       .then(() => { 
//         console.log("C programming start hua hai"); 
//         return delay(2000); 
//       }) 
//       .then(() => { 
//         console.log("ho gai khtam zindigi ise mai hi"); 
//       }) 
//       .catch(() => { 
//         console.log("kuch galat hua hai"); 
//       }) 
//       .finally(() => { 
//         console.log("kuch bhi ho I'll run"); 
//       }); 
//   } 
//   main(); 
// ================================================================
// promise with async await

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms);
//     });
// }
// async function main() {
//     console.log("yaha se zindigi shur hoti hai");
//     try {
//         await delay(5000);   
//         console.log("Ha mai khush hoon");
//         await delay(3000);
//         console.log("C programming start hua hai");
//         await delay(2000);
//         console.log("ho gai khtam zindigi ise mai hi");
//     } catch (error) {
//         console.log(error);
//     }
// }
// function add(a, b) { 
//     return a + b; 
//   } 
//   main(); 
//   console.log("hi"); 
//   console.log(add(3, 4)); 
//   console.log("hello");
// ====================================================================
// async function fetchdata() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
// }
// fetchdata();
// =========================================================================