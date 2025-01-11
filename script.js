// complete the given function

function palindrome(str){
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
	return cleanedStr === cleanedStr.split("").reverse().join("");
}
module.exports = palindrome
