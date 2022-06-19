
var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

generateBtn.addEventListener("click", writePassword);


var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword () {


var characterSet = [];
var generatedPassword = "";
var lenght;
var useNumbers;
var useSpecial;
var useLower;
var useUpper;


lenght = window.prompt( "How long do you want your password to be?", "");

if ( lenght >= 8 && lenght <= 128 ) {
useNumbers = window.confirm( "Use Numbers?\n(OK-Yes Cancel-No)" );
useSpecial = window.confirm( "Use Special Characters?\n(OK-Yes Cancel-No)" );
useLower = window.confirm( "Use Lower Case Letters?\n(OK-Yes Cancel-No)" );
useUpper = window.confirm( "Use Upper Case Letters?\n(OK-Yes Cancel-No)" );
}
}


if ( useNumbers || useSpecial || useLower || useUpper ) {
    if ( useNumbers ) {
        characterSet = characterSet.concat( numbers );
    }
    if ( useSpecial ) {
        characterSet = characterSet.concat( specialCharacters );
    }
    if ( useLower ) {
        characterSet = characterSet.concat( lowerCaseLetters );
    }
    if ( useUpper ) {
        characterSet = characterSet.concat( upperCaseLetters );
    }
}
