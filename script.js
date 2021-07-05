alert('Please Follow The Instructions For Password Generation')

var specialCharsList = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('')
var upper = "ABCDEFGHIJJLMNOPQRSTUVWXYZ".split('')
var lower = "abcdefghijklmnopqrstuvwxxyz".split('')
var numeric = '1234567890'.split('')

var answers = {}
var nextBtn = document.querySelector('#next')
var generateBtn = document.querySelector("#generate");


nextBtn.addEventListener('click', function() {
  var lengthInput = document.getElementById('length')
  if (lengthInput.value < 8 || lengthInput.value > 128) {
    alert('Length must be between 8 and 128')
  } else {
    answers['length'] = lengthInput.value
    var charSelectWrap = document.querySelector('#char-select')
    charSelectWrap.classList.remove('hide')
    document.getElementById('length-label').classList.add('hide')
    nextBtn.classList.add('hide')
    generateBtn.disabled = false
  }

})


function generatePassword() {
  var uppercaseCheck = document.getElementById('uppercase')
  var lowercaseCheck = document.getElementById('lowercase')
  var numericCheck = document.getElementById('numeric')
  var specialChars = document.getElementById('special-chars')

  answers.uppercase = uppercaseCheck.checked
  answers.lowercase = lowercaseCheck.checked
  answers.numeric = numericCheck.checked 
  answers.symbols = specialChars.checked

  if (answers.uppercase || answers.lowercase || answers.numeric || answers.symbols) {
    var options = []
    if (answers.uppercase) {
      options.push(upper)
    }
    if (answers.lowercase) {
      options.push(lower)
    }
    if (answers.numeric) {
      options.push(numeric)
    }
    if (answers.symbols) {
      options.push(specialCharsList)
    }
    var password = ''
    for (var i = 0; i < answers.length; i++) {
      const randomOption = options[Math.floor(Math.random() * options.length)];
      password += randomOption[Math.floor(Math.random() * randomOption.length)];
    }
  
    document.getElementById('password').value = password
  } else {
    alert('Must select one option')
  }

 
}




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
