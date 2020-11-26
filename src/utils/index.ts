export enum Alphabets {
  Lowercase = 'abcdefghijklmnopqrstuvwxyz',
  Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Numeric = '0123456789',
  Symbols = '!@#$%&*()_`´{[^~]};:/?<>,.=-+',
}

export type AlphabetDescriptor = {
  label: string
  value: Alphabets
}

export const availableAlphabets: AlphabetDescriptor[] = [
  {
    label: 'Lowercase (a-z)',
    value: Alphabets.Lowercase,
  },
  {
    label: 'Uppercase (A-Z)',
    value: Alphabets.Uppercase,
  },
  {
    label: 'Numbers (0-9)',
    value: Alphabets.Numeric,
  },
  {
    label: 'Symbols (*!@%_#)',
    value: Alphabets.Symbols,
  },
]

export type GenerationOptions = {
  alphabets: Alphabets[]
  length: number
  animation: boolean
}

export const combineAlphabets = (alphabets: Alphabets[]): string =>
  alphabets.reduce((acc, alphabet) => acc + alphabet, '')

export function getRandomPassword(options: GenerationOptions): string {
  const alphabet = combineAlphabets(options.alphabets)
  let result = ''

  for (let i = 0; i < options.length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }

  console.log('Result: ', result)

  return result
}

export const getRandomChar = (alphabet: string): string =>
  alphabet.charAt(Math.floor(Math.random() * alphabet.length))

export function copyToClipboard(text: string): void {
  const inputElem = document.createElement('input')
  inputElem.value = text
  document.body.appendChild(inputElem)

  inputElem.focus()
  inputElem.select()

  document.execCommand('copy')

  document.body.removeChild(inputElem)
}
