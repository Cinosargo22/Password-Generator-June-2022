var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "&","(",")","*","+","-",".","/",":",";","<","=",">","?","@",];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
include ="";

function generatePassword() {
  var chaSet = []
  var newPassword = "";
  var lenght;
  var useNumbers;
  var useSpecial;
  var useLower;
  var useUpper;
  //Defining the function & declaring variables
  lenght = window.prompt("How long do you want your password to be?", "");
  // Prompt window to pop up

  if (lenght >= 8 && lenght <= 128) {
    useNumbers = window.confirm("Use Numbers?\n(OK-Yes Cance-No)");
    console.log (useNumbers)
    useSpecial = window.confirm("Use Special Characters?\n(OK-Yes Cancel-No)");
    console.log (useSpecial)
    useLower = window.confirm("Use Lower Case Letters?\n(OK-Yes Cancel-No)");
    console.log (useLower)
    useUpper = window.confirm("Use Upper Case Letters?\n(OK-Yes Cancel-No)");
    console.log (useUpper)
  }
 if(useNumbers.true){
    include += numbers;
 }
if(useNumbers.false){
    include
}
 if(useSpecial.true){
    include += specialCharacters;
 }
 if(useSpecial.false){
    include
 }
 if(useLower.true){
    include += lowerCaseLetters;
 }
 if(useLower.false){
    include
 }
 if(useUpper.true){
    include += upperCaseLetters;
 }
 if(useUpper.false){
    include
 }
return "password"
    
}