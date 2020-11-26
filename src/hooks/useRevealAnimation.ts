import { useEffect, useRef, useState } from 'react'

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
  const alphabetUsed = useRef(alphabet)

  useEffect(() => {
    alphabetUsed.current = alphabet
  }, [alphabet])

  useEffect(() => {
    let charIndex = 0

    if (text && alphabetUsed.current) {
      const shuffleInterval = setInterval(() => {
        if (charIndex > text.length) {
          clearInterval(shuffleInterval)
          return
        }

        const newTemporaryText = [...new Array(text.length)]
          .map((empty, i) =>
            i < charIndex ? text[i] : getRandomChar(alphabetUsed.current),
          )
          .join('')

        setTemporaryText(newTemporaryText)

        charIndex++
      }, 30)

      return () => clearInterval(shuffleInterval)
    }
  }, [text])

  return {
    temporaryText,
  }
}
