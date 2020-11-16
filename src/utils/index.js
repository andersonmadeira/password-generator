const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'
const alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetNumbers = '0123456789'
const alphabetSymbols = '!@#$%&*()_`´{[^~]};:/?<>,.=-+'

export function getRandomPassword(alphabets = {}, length) {
  const alphabet =
    (alphabets.lowercase ? alphabetLowercase : '') +
    (alphabets.uppercase ? alphabetUppercase : '') +
    (alphabets.numbers ? alphabetNumbers : '') +
    (alphabets.symbols ? alphabetSymbols : '')
  let result = ''

  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }

  return result
}

export function getRandomChar(alphabets) {
  const alphabet =
    (alphabets.lowercase ? alphabetLowercase : '') +
    (alphabets.uppercase ? alphabetUppercase : '') +
    (alphabets.numbers ? alphabetNumbers : '') +
    (alphabets.symbols ? alphabetSymbols : '')

  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

export function copyToClipboard(text) {
  const inputElem = document.createElement('input')
  inputElem.value = text
  document.body.appendChild(inputElem)

  inputElem.focus()
  inputElem.select()

  document.execCommand('copy')

  document.body.removeChild(inputElem)
}
