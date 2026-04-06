
// CallBack
// A callback is a function that is passed as an argument to another function and is executed later

// Callback ek function hota hai jo kisi dusre function ko argument ke roop me diya jata hai aur baad me execute hota hai.



// function test(callback) {
//   console.log("Start");
//   callback();
//   console.log("End");
// }

// test(function () {
//   console.log("Callback");
// });




// | Normal Function      | Callback                                |
// | -------------------- | --------------------------------------- |
// | Direct call hota hai | Dusre function ke through call hota hai |
// | Control tumhare paas | Control outer function ke paas          |
// | Sync hota hai mostly | Sync ya async dono ho sakta             |



// CallBack Hell
// 👉 Problem:
// code readable nahi hota ❌
// debugging difficult ❌
// 👉 Isko bolte hain:
// Pyramid of Doom

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);



















