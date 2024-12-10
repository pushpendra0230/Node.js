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

// ===================================================================\

function main(){
    setInterval(() => {
        console.log("sorry");
    },1000);
        
    }
    main();