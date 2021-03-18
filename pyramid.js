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
pyramid(size, symb, reverse)