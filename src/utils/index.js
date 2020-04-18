const alphabetLowercase = 'abcdefghijklmnopqrstuvwxyz'
const alphabetUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetNumbers = '0123456789'
const alphabetSymbols = '!@#$%&*()_`´{[^~]};:/?<>,.=-+'

export function getRandomPassword(
  options = { length: 5, alphabets: {} },
) {
  const alphabet =
    (options.alphabets.lowercase ? alphabetLowercase : '') +
    (options.alphabets.uppercase ? alphabetUppercase : '') +
    (options.alphabets.numbers ? alphabetNumbers : '') +
    (options.alphabets.symbols ? alphabetSymbols : '')
  let result = ''

  for (let i = 0; i < options.length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }

  return result
}

export function getRandomChar(options) {
  const alphabet =
    (options.lowercase ? alphabetLowercase : '') +
    (options.uppercase ? alphabetUppercase : '') +
    (options.numbers ? alphabetNumbers : '') +
    (options.symbols ? alphabetSymbols : '')

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
