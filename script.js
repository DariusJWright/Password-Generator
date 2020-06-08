//prompts to ask for pw criteria to include, special chars, numbers, cases
//add selected criteria to pw
//min length: 8 char, max: 128
//validate input with conditional. at least one char type selected
//produce random pw that matches selected criteria
//display pw
var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var lowercaseArray = lowercase.split[""];

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercaseArray = uppercase.split[""];

var numbers = "1234567890";
  var numbersArray = numbers.split[""];
  
var special = '!"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  var specialArray = special.split[""];

var getPasswordLength = function() {
  var length = "";

  while (length === "" || name === null) {
      length = prompt("How long would you like your password to be? Enter a NUMBER between 8 and 128.");
  }

  if (length < 8 || length > 128) {
    alert("Please select a number between 8 and 128. Click ok to try again");
    return getPasswordLength();
  }

  console.log("Your password length is " + length);
  return length;
}

var passwordInfo = {
  length: getPasswordLength(),
  lowercase: window.confirm("Would you like to include LOWER CASE LETTERS?"),
  uppercase: window.confirm("Would you like to include UPPERCASE LETTERS?"),
  numeric: window.confirm("Would you like to include NUMERIC CHARACTERS?"),
  special: window.confirm("Would you like to include SPECIAL CHARACTERS?")
}

function generatePassword() {
  var password = "";
  var characters = [lowercaseArray, uppercaseArray, numbersArray, specialArray];
  
  for(var i = 0 ; i < passwordInfo.length; i++) {
    password = (Math.floor(Math.random() * characters.length));
  }
  return password;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
