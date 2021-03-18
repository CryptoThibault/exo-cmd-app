const readlineSync = require('readline-sync')

const question1 = 'Question 1: Le C++ est un: '
const answer1 = ['language', 'compilateur']
const question2 = 'Question 2: TypeScript est une évolution de Javascript: '
const answer2 = ['vrai', 'faux']
const question3 = 'Question 3: Lire les cours avant de faire les exercices est inutile: '
const answer3 = ['faux', 'vrai']
const question4 = 'Question 4: react.js a été developpé par Google: '
const answer4 = ['faux', 'vrai']
const question5 = 'Question 5: Ethereum est une blockchain publique: '
const answer5 = ['vrai', 'faux']

function passQuestion(question, answer) {
  const index = readlineSync.keyInSelect(answer, question)
  switch (index) {
    case 0:
      console.log('Bonne réponse')
      break
    case 1:
      console.log('Mauvaise réponse')
      break
    default:
      console.log('Réponse invalide')
  }
}
passQuestion(question1, answer1)
passQuestion(question2, answer2)
passQuestion(question3, answer3)
passQuestion(question4, answer4)
passQuestion(question5, answer5)



