// This is the function we want to test
function isUpperCase(sentence){
	//validate only strings 
	if(typeof(sentence) != "string") return false;
    // if its a string, then test for uppercase
	return (sentence == sentence.toUpperCase());
 
}

module.exports = isUpperCase;


