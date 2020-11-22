export enum Alphabets {
  Lowercase = 'abcdefghijklmnopqrstuvwxyz',
  Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Numeric = '0123456789',
  Symbols = '!@#$%&*()_`´{[^~]};:/?<>,.=-+',
}

export type GenerationOptions = {
  lowercase?: boolean
  uppercase?: boolean
  numeric?: boolean
  symbols?: boolean
  length: number
}

export function getRandomPassword(options: GenerationOptions): string {
  const alphabet =
    (options.lowercase ? Alphabets.Lowercase : '') +
    (options.uppercase ? Alphabets.Uppercase : '') +
    (options.numeric ? Alphabets.Numeric : '') +
    (options.symbols ? Alphabets.Symbols : '')
  let result = ''

  for (let i = 0; i < options.length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }

  console.log('Result: ', result)

  return result
}

export function getRandomChar(options: GenerationOptions): string {
  const alphabet =
    (options.lowercase ? Alphabets.Lowercase : '') +
    (options.uppercase ? Alphabets.Uppercase : '') +
    (options.numeric ? Alphabets.Numeric : '') +
    (options.symbols ? Alphabets.Symbols : '')

  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

export function copyToClipboard(text: string): void {
  const inputElem = document.createElement('input')
  inputElem.value = text
  document.body.appendChild(inputElem)

  inputElem.focus()
  inputElem.select()

  document.execCommand('copy')

  document.body.removeChild(inputElem)
}
