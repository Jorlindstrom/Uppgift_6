// This is the function we want to test
function isUpperCase(sentence){
	//validate only strings 
	if(typeof(sentence) != "string") return false;
    // if its a string, then test for uppercase
	return (sentence == sentence.toUpperCase());
 
}

module.exports = isUpperCase;

//Check that Javascript file is loaded
// console.log("script is loaded");


// //Declare HTML elements
// const inputText = document.querySelector("#inputText");
// const BtnUppercase = document.querySelector("#btnUppercase");

// BtnUppercase.addEventListener("click", function()
// {
//     let text = inputText.value;
//     console.log(text.toUpperCase());
//     isUpperCase();
// })

//     

//     //inputTodo.value = "";
// };

