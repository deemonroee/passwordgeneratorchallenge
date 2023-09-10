// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);

}

function generatePassword() {
  var userChoice = prompt('Choose a password length between 8 and 128 characters');
  var includeNum = window.confirm ('Would you like to add numbers to your password?');
  var includeLower = window.confirm ('Would you like lowercase letters in your password?');
  var includeUpper = window.confirm ('Would you like upper case letters in your password?');
  var includeSpecial = window.confirm ('Would you like any special characters in your password?');
  var newPassword = []; 

  if (userChoice >= 8 && userChoice <= 128) {
    if (includeNum) {
      newPassword += generateRandomNum();
    }
    if (includeLower) {
      newPassword += generateRandomLower();
    }
    if (includeUpper) {
      newPassword += generateRandomUpper();
    }
    if (includeSpecial) {
      newPassword += generateRandomSpecial();
   
    }
    while (newPassword.length < userChoice) {
      newPassword += generateRandomCharacters();
    }
    return newPassword
  } else {
    alert('Invalid selection. Please choose a length within guidelines.');
  }
}

  function generateRandomNum() {
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    return num[Math.floor(Math.random() * num.length)];
  }

  function generateRandomLower() {
    var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return lower[Math.floor(Math.random() * lower.length)];
  }

  function generateRandomUpper() {
    var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return upper[Math.floor(Math.random() * upper.length)]; 
  }

  function generateRandomSpecial() {
    var special = ['!', '@', '#', '$', '%', '&', '^', '*', '-', '_', '=', '+', '~']; 
    return special[Math.floor(Math.random() * special.length)];
  }

  function generateRandomCharacters() {
    var randomChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '&', '^', '*', '-', '_', '=', '+', '~']; 
    return randomChar[Math.floor(Math.random() * randomChar.length)];
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


