// function nodejsasyae(main) {
//     setTimeout(() => {
//       console.log("Settime started");
//       main();
//     },5000);
//   }
//   function main() {
//     console.log("main executed");
//   }
//   nodejsasyae(main);
//   console.log("hello");
//   console.log("hello2");

// //   ==============================================================

// function nodejssyae(main){
//       main();
// }
//   function main() {
//     console.log("main executed");
//   }
//   nodejssyae(main);
//   console.log("hello");
//   console.log("hello2");
// // ============================================================================

// function nodejsasync(callback) {
//     setTimeout(() => {
//       console.log("Settime started");
//       callback();
//     }, 5000);
//   }
//   function a() {
//     console.log("a started");
//   }
//   function main() {
//     console.log("main started");
//     nodejsasync(a);
//     nodejsasync(main);
//     console.log("1");
//     console.log("2");
//     console.log("3");
//   }
//   nodejsasync(main);
// // ============================================================================

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