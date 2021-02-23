// Turns userInput into a variable
document.getElementById('button').addEventListener('click', age)
const let myage = 15
let answer = 0

function age () {
  do {
    answer = prompt('What is my age?", "Enter your guess here')
    answer = parseInt(answer)
    if (myage === answer) {
      alert('Congrats! You won!')
    } else if (myage < answer) {
      alert('You have to go lower than that!')
    } else if (myage > answer) {
      alert('You have to go higher than that!')
    } else {
      alert('That is not a valid response (use only positive numbers, no letters, or negative numbers)')
    }
  } while (myage !== answer)
}
