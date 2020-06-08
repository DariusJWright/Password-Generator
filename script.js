//prompts to ask for pw criteria to include, special chars, numbers, cases
//add selected criteria to pw
//min length: 8 char, max: 128
//validate input with conditional. at least one char type selected
//produce random pw that matches selected criteria
//display pw

//arrays for pw criteria
var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var lowercaseArray = lowercase.split[""];

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercaseArray = uppercase.split[""];

var numbers = "1234567890";
  var numbersArray = numbers.split[""];
  
var special = '!"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  var specialArray = special.split[""];

//function to get the number of characters
var getPasswordLength = function() {
  var pwLength = prompt("How long would you like your password to be? Enter a NUMBER between 8 and 128.");
  pwLength = parseInt(pwLength);

  while (!pwLength) {
      pwLength = prompt("How long would you like your password to be? Enter a NUMBER between 8 and 128.");
      pwLength = parseInt(pwLength);
  }

  if (pwLength < 8 || pwLength > 128) {
    alert("Please select a number between 8 and 128. Click ok to try again");
    return getPasswordLength();
  }

  console.log("Your password length is " + pwLength);
  return pwLength;
}

//assign user input to variables
var length = getPasswordLength();
var lowercase = window.confirm("Would you like to include LOWER CASE LETTERS?");
var uppercase = window.confirm("Would you like to include UPPERCASE LETTERS?");
var numeric = window.confirm("Would you like to include NUMERIC CHARACTERS?");
var special = window.confirm("Would you like to include SPECIAL CHARACTERS?");

//ensure the user has selected at least one of the options for criteria
while (!lowercase && !uppercase && !numeric && !special) {  
  alert("You must select at least ONE option.");
  lowercase = window.confirm("Would you like to include LOWER CASE LETTERS?");
  uppercase = window.confirm("Would you like to include UPPERCASE LETTERS?");
  numeric = window.confirm("Would you like to include NUMERIC CHARACTERS?");
  special = window.confirm("Would you like to include SPECIAL CHARACTERS?");

  if (lowercase || uppercase || numeric || special) {
    break;
  }
}

//bit of instruction for the user
alert("Click 'Generate Password' to get your new password");

//function to create the random password
var generatePassword = function() {
  var passwordLength = parseInt(length);
  var randomPassword = "";
  var characters = [lowercaseArray, uppercaseArray, numbersArray, specialArray];
  
  console.log(passwordLength);
  console.log(typeof(passwordLength));

  for(var i = 0 ; i < passwordLength ; i++) {
    var random = password [Math.floor(Math.random() * characters.length)];
    randomPassword += random;
  }
  console.log(characters);
  return randomPassword;
}


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
