# Password Generator
For this password generator, I set up a UX flow so that a user can input certain options they would like for their random password. These inlude the length of the password, and whether the password should include uppercase, lowercase, special charsm or numeric chars. 


## UX flow

The user will first see an input box to enter the length of the password. After clicking next, the user sees 4 checkboxes specifying the possible options for the password.


## implementation 

All the possible options for a pw are represented as arrays of chars. e.g. :
`
var specialCharsList = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('')
var upper = "ABCDEFGHIJJLMNOPQRSTUVWXYZ".split('')
var lower = "abcdefghijklmnopqrstuvwxxyz".split('')
var numeric = '1234567890'.split('')
`

I generated the random password by conditionally putting these options in an options array based on the user input. Then looping the length inputed by the user, randomly selecting a char from a random option and appending it to a string, and finally displaying that string in the textbox.