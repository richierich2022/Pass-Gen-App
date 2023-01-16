// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//function for checking if its a number
function isNumber(char) {
  if (typeof char !== 'string') {
    return false;
  }

  if (char.trim() === '') {
    return false;
  }

  return !isNaN(char);
}
//range random number
function rantomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var password_len = window.prompt("Please choose password length between 10 to 64 charcters");
  //check if it is a number
  if(isNumber(password_len) != true)
  {
    return alert("please enter a numeric number");
  }
  //checks if the password len is less than 10 or more than 64
  else if(password_len < 10 || password_len > 64)
  {
    return alert("error password length");
  }

  //Select one or more character type using confirm prompt which has okay or cancel
  var Character_type_lowercase = window.confirm("Would you want any Lowercases?");
  var Character_type_Uppercase = window.confirm("Would you want any Uppercases?");
  var Character_type_Numeric = window.confirm("Would you want any Numerics?");
  var Character_type_Special_characters = window.confirm("Would you want any Special characters($@%&*,etc)");
  
  // added a check to see if at least one of the character type is selected
  var logic_gate = Character_type_lowercase || Character_type_Uppercase || Character_type_Special_characters || Character_type_Numeric;
  var choice_arr = [password_len, Character_type_lowercase,Character_type_Uppercase,Character_type_Special_characters,Character_type_Numeric];
  if(logic_gate === false)
  {
    alert("Please select at least one character type");
  }
  //returns two values one of the password parameter and the or choice_arr
  return choice_arr;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
    var choice_arr = getPasswordOptions();//the array contains [password_len, Character_type_lowercase, Character_type_Uppercase, Character_type_Special_characters, Character_type_Numeric]
    var i = 0;
    while(i < choice_arr[0])
    {

    }
    
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);