var characterLenght = 8;
var include = [];

var numberCharacters= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "&","(",")","*","+","-",".","/",":",";","<","=",">","?","@",];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

//
var generateBtn = document.querySelector("#generate");

//

generateBtn.addEventListener("click", writePassword);

//
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
    } else {
        passwordTest.value = "";
    }
}
  
function generatePassword () {
    var password = "";
    for (var i = 0; i < characterLenght; i++) {
        var randomIndex = Math.floor(Math.random() *include.length);
        password = password + include[randomIndex];
    }
    return password;

  }

  function getPrompts() {
    include = [];

    characterLenght = parseInt(prompt("How long do you want your password to be? (8 - 128 characters)"));
  
    if(isNaN(characterLenght) || characterLenght <8 || characterLenght > 128) {
        alert("Character must be a number, with 8 to 128 digits.");
    return false;
    }

    if (confirm("Use Lower Case Letters?")) {
        include = include.concat(lowerCaseLetters);
    }
    if (confirm("Use Upper Case Letters?")) {
        include = include.concat(upperCaseLetters);
    }
    if (confirm("Use Special Characters?")) {
        include = include.concat(specialCharacters);
    }
    if (confirm("Use Numbers?")) {
        include = include.concat(numberCharacters);
    }
    return true;
  }

    