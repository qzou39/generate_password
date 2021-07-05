// Assignment code here

// var anObject = {
//   'property': 4,
// }

var specialChars = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var answers = {}
var index = 0
var inputs = document.querySelector('.card-header').querySelectorAll('input')
var nextBtn = document.querySelector('#next')


nextBtn.addEventListener('click', function() {
  answers[inputs[index].id] = inputs[index].value
  index++
  console.log(answers)
})

function generatePassword() {


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function startPasswordGeneration() {
  document.getElementById('length').classList.remove('hide')
  document.getElementById('length').parentElement.classList.remove('hide')
  document.getElementById('next').classList.remove('hide')
  generateBtn.disabled = true
  alert('Please Follow The Instructions For Password Generation')

}

// Add event listener to generate button
generateBtn.addEventListener("click", startPasswordGeneration);
