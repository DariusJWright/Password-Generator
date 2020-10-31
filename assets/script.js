// get elements
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

const lowerChars = "abcdefghijklmnopqrstuvwxyz".split('');
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const numChars = "1234567890".split('');
const specChars = '!"#$%&()*+,-./:;<>=?@[]\^_`{}|~'.split('');

//function to get the number of characters
const getPasswordLength = () => {
  const pwLength = prompt("How long would you like your password to be? Enter a NUMBER between 8 and 128.");

  if (pwLength < 8 || pwLength > 128 || !pwLength) {
    alert("Please select a number between 8 and 128. Click ok to try again");
    return getPasswordLength();
  }

  choseChars(pwLength);
}

const choseChars = (pwLength) => {
  const lowercase = window.confirm("Would you like to include LOWER CASE LETTERS?");
  const uppercase = window.confirm("Would you like to include UPPERCASE LETTERS?");
  const numeric = window.confirm("Would you like to include NUMERIC CHARACTERS?");
  const special = window.confirm("Would you like to include SPECIAL CHARACTERS?");
  
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

  const criteria = {
    length: pwLength,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  }

  writePassword(criteria);
}

const writePassword = (criteria) => {
  let passwordArr = [];
  while (passwordArr.length < criteria.length) {
    if (criteria.lowercase) {
      passwordArr.push(lowerChars[generateRandom(lowerChars)]);
    }
    if (criteria.uppercase) {
      passwordArr.push(upperChars[generateRandom(upperChars)]);
    }
    if (criteria.numeric) {
      passwordArr.push(numChars[generateRandom(numChars)]);
    }
    if (criteria.special) {
      passwordArr.push(specChars[generateRandom(specChars)]);
    }
  }
  // Write password to the #password input
  passwordText.value = passwordArr.join('');
}

const generateRandom = (chars) => {
  return Math.floor(Math.random() * chars.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordLength);