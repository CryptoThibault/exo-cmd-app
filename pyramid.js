const size = Number(process.argv[2])
const symb = process.argv[3]
const reverse = process.argv[4]

function pyramid(nb, str, rev) {
  if (rev === '-r') {
    for (i = nb; i > 0; i--) {
      console.log(str.repeat(i))
    }
  } else {
    for (i = 1; i <= nb; i++) {
      console.log(str.repeat(i))
    }
  }
}

if (process.argv.length < 4) {
  console.log('Veuillez spécifier les 2 paramètres : size et string')
  process.exit(0)
}

if (isNaN(process.argv[2])) {
  console.log('Veuillez spécifier seulement un nombre en 1er paramètre')
  process.exit(0)
}
pyramid(size, symb, reverse)