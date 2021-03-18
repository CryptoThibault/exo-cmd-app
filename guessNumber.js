const readlineSync = require('readline-sync')
const chalk = require('chalk')

const number = Number(process.argv[2])

function guessNumber(nb) {
  const guess = Number(readlineSync.question('Nombre: '))
  if (guess < nb) { console.log(chalk.red('Nombre trop petit')) }
  else if (guess > nb) { console.log(chalk.red('Nombre trop grand')) }
  else { console.log(chalk.green('Bravo!')); process.exit(0) }
}
while (true) { guessNumber(number) }