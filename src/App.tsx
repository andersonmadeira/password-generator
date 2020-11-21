import React, { useState, useEffect, useRef } from 'react'

import { getRandomPassword, getRandomChar, GenerationOptions } from './utils'
import { Slider, Checkbox, Result, Button } from './components'
import styled from '@emotion/styled'

export const InputGroup = styled.div`
  display: block;
`

export const Container = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`

const App: React.FC = () => {
  const [password, setPassword] = useState('')
  const [shuffledPassword, setShuffledPassword] = useState('')
  const [length, setLength] = useState(20)
  const [animationEnabled, setAnimationEnabled] = useState(true)
  const alphabets = useRef<GenerationOptions>()

  useEffect(() => {
    let charIndex = 0
    const selectedAlphabets = { ...alphabets.current }

    if (password && animationEnabled) {
      const shuffleInterval = setInterval(() => {
        if (charIndex > password.length) {
          clearInterval(shuffleInterval)
          return
        }

        const newSufflePassword = [...new Array(password.length)]
          .map((empty, i) =>
            i < charIndex
              ? password[i]
              : getRandomChar(selectedAlphabets || {}),
          )
          .join('')

        setShuffledPassword(newSufflePassword)

        charIndex++
      }, 30)

      return () => clearInterval(shuffleInterval)
    }
  }, [password, animationEnabled])

  return (
    <Container>
      <h1>
        <span role="img" aria-label="Key Icon">
          🔑
        </span>
        &nbsp; Password Generator
      </h1>
      <h2>Length: {length} </h2>
      <Slider value={length} onChange={(length: number) => setLength(length)} />
      <h2>Characters:</h2>
      <InputGroup>
        <Checkbox
          label="Lowercase (a-z)"
          onChange={(checked: boolean) =>
            (alphabets.current.lowercase = checked)
          }
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          label="Uppercase (A-Z)"
          onChange={(checked: boolean) =>
            (alphabets.current.uppercase = checked)
          }
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          label="Numbers (0-9)"
          onChange={(checked: boolean) => (alphabets.current.numbers = checked)}
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          label="Symbols (*!@%_#)"
          onChange={(checked: boolean) => (alphabets.current.symbols = checked)}
        />
      </InputGroup>
      <h2>Options:</h2>
      <InputGroup>
        <Checkbox
          label="Animation"
          onChange={(checked: boolean) => setAnimationEnabled(checked)}
          checked
        />
      </InputGroup>
      <Button
        type="submit"
        onClick={() => {
          if (
            !alphabets.current.lowercase &&
            !alphabets.current.uppercase &&
            !alphabets.current.numbers &&
            !alphabets.current.symbols
          ) {
            alert(
              'Please select at least one set of characters to generate the password!',
            )
            return
          }

          setPassword(getRandomPassword(alphabets.current, length))
        }}
      >
        Generate
      </Button>
      <Result
        text={password}
        displayText={animationEnabled ? shuffledPassword : password}
      />
    </Container>
  )
}

export default App
