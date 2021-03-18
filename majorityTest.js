const readlineSync = require('readline-sync')
const chalk = require('chalk')
const MAJORITY = 18

function canVote() {
  const firstname = readlineSync.question('Prénom: ')
  const lastname = readlineSync.question('Nom: ')
  const age = Number(readlineSync.question('Age: '))
  if (age < MAJORITY) { console.log(chalk.red(`Désolé, ${firstname} ${lastname}, vous êtes mineur, vous ne pouvez pas voter`)) }
  else { console.log(chalk.green(`${firstname} ${lastname}, vous êtes majeur, vous pouvez voter`)) }
}
while (true) {
  if (readlineSync.keyInYNStrict('Electeur restant ?')) {
    console.log('Nouvel électeur, remplissez le formulaire:')
    canVote()
  } else {
    console.log('Tout les électeurs ont votez.')
    process.exit(0)
  }
}