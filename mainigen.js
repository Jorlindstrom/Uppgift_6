
//Check that Javascript file is loaded
console.log("script is loaded");


// //Declare HTML elements
const inputText = document.querySelector("#inputText");
const BtnUppercase = document.querySelector("#btnUppercase");

 BtnUppercase.addEventListener("click", function()
 {
    let text = inputText.value;
    console.log(text.toUpperCase());
    isUpperCase();
 });