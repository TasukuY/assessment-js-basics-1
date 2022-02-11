

let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let exclamationMark = '._.\n| |\n| |\n| |\n._.\n _ \n|_|'
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nWelcome to the Password Validator tool!")
console.log(exclamationMark)

reader.question("\nPlease type in the password to validate  ->  ", function(input){
	
    console.log("")

    let password = input.split('')
    let passLength = password.length
    let minLength = 10
    let maxLength = 20
    let validpassLength = false
    let containUppercase = false
    let containSpecialChar = false
    let lengthError = 'The password has to be between 10 - 20 characters long. \n'
    let uppercaseError = 'The password has to contain at least a uppercase letter. \n'
    let specialCharError = 'The password has to contain at least a special character or a number. \n'
    let errorMessage = ''

    //check if the passwords contains uppercase char and special char
    for(let i = 0; i < passLength; i++){
        if(lowerCaseLetters.indexOf(password[i]) === -1 && upperCaseLetters.indexOf(password[i]) === -1){
            containSpecialChar = true
        }else if(upperCaseLetters.indexOf(password[i]) !== -1){
            containUppercase = true
        }
    }

    //check if the passwords is longer than 10 chars and less shorter than 20 chars
    if(passLength >= minLength && passLength <= maxLength){
        validpassLength = true
    }

    //check if there is an error, and make the errorMessage
    if(!validpassLength){
        errorMessage += lengthError
    }
    if(!containSpecialChar){
        errorMessage += specialCharError
    }
    if(!containUppercase){
        errorMessage += uppercaseError
    }

    //log out the message
    if(validpassLength && containSpecialChar && containUppercase){
        console.log(`Your password is successfully created. \n${exclamationMark}\n`)
    }else{
        console.log(`${errorMessage}Please try again...\n`)
    }

	reader.close()

});

