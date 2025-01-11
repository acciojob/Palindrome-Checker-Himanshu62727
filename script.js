// complete the given function

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Event listener for the button
document.getElementById("checkButton").addEventListener("click", function () {
    const textInput = document.getElementById("textInput").value;
    const resultElement = document.getElementById("result");

    if (textInput.trim() === "") {
        resultElement.textContent = "Please enter some text.";
        resultElement.style.color = "red";
        return;
    }

    const isTextPalindrome = isPalindrome(textInput);

    if (isTextPalindrome) {
        resultElement.textContent = `"${textInput}" is a palindrome!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `"${textInput}" is not a palindrome.`;
        resultElement.style.color = "red";
    }
});
