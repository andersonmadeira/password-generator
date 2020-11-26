import { useEffect, useState } from 'react'

import { getRandomChar } from '../utils'

export type RevealAnimationParams = {
  alphabet: string
  text: string
}

export type RevealAnimationReturn = {
  temporaryText: string
}

export function useRevealAnimation({
  alphabet,
  text,
}: RevealAnimationParams): RevealAnimationReturn {
  const [temporaryText, setTemporaryText] = useState('')

  useEffect(() => {
    let charIndex = 0

    if (text) {
      const shuffleInterval = setInterval(() => {
        if (charIndex > text.length) {
          clearInterval(shuffleInterval)
          return
        }

        const newTemporaryText = [...new Array(text.length)]
          .map((empty, i) =>
            i < charIndex ? text[i] : getRandomChar(alphabet),
          )
          .join('')

        setTemporaryText(newTemporaryText)

        charIndex++
      }, 30)

      return () => clearInterval(shuffleInterval)
    }
  }, [text, alphabet])

  return {
    temporaryText,
  }
}
