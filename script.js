var getLowercase = function () {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

var getUppercase = function () {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}  

var getNumeric = function () {
  var num = "1234567890";
  return num[Math.floor(Math.random() * num.length)];
}

var getSpecial = function () {
  var spec = '!"#$%&()*+,-./:;<>=?@[]\^_`{}|~';
  return spec[Math.floor(Math.random() * spec.length)];
}

//function to get the number of characters
var getPasswordLength = function() {
  var pwLength = prompt("How long would you like your password to be? Enter a NUMBER between 8 and 128.");
  pwLength = parseInt(pwLength);

  if (pwLength < 8 || pwLength > 128 || !pwLength) {
    alert("Please select a number between 8 and 128. Click ok to try again");
    return getPasswordLength();
  }

  console.log("Your password length is " + pwLength);
  return pwLength;
}

//assign user input criteria to variables
var length = getPasswordLength();
var lowercase = window.confirm("Would you like to include LOWER CASE LETTERS?");
var uppercase = window.confirm("Would you like to include UPPERCASE LETTERS?");
var numeric = window.confirm("Would you like to include NUMERIC CHARACTERS?");
var special = window.confirm("Would you like to include SPECIAL CHARACTERS?");

//ensure the user has selected at least one of the criteria options 
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

lowercase = getLowercase();
uppercase = getUppercase();
numeric = getNumeric();
special =  getSpecial();


var pass = [];
//bit of instruction for the user
alert("Click 'Generate Password' to get your new password");
//function to create the random password
var generatePassword = function(length, lowercase, uppercase, numeric, special) {
  var passLength = length;
  var charactersArray = [{lowercase}, {uppercase}, {numeric}, {special}].filter(pick => Object.values(pick)[0]);
  var characters = lowercase + uppercase + numeric + special;
  for(var i = 0 ; i < passLength.length ; i++) {
    var ranPass = characters[Math.floor(Math.random() * charactersArray.length)];
    pass += characters(ranPass);
  }
  console.log(pass);
  return pass;
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
for(var i = 0 ; i < length.length ; i++) {
  var ranPass = Math.floor(Math.random() * characters.length);
}
