import React, { useState, useEffect } from 'react'

import {
  getRandomPassword,
  getRandomChar,
  GenerationOptions,
  Alphabets,
  combineAlphabets,
} from '../utils'
import { Slider, Checkbox, Result, Button } from '../components'
import {
  Container,
  InputGroup,
  Title,
  SubTitle,
  GenerateButton,
} from './styles'

const App: React.FC = () => {
  const [password, setPassword] = useState('')
  const [shuffledPassword, setShuffledPassword] = useState('')
  const [options, setOptions] = useState<GenerationOptions>({
    alphabets: [],
    length: 20,
    animation: true,
  })

  useEffect(() => {
    let charIndex = 0
    const alphabet = combineAlphabets(options.alphabets)

    if (password && options.animation) {
      const shuffleInterval = setInterval(() => {
        if (charIndex > password.length) {
          clearInterval(shuffleInterval)
          return
        }

        const newSufflePassword = [...new Array(password.length)]
          .map((empty, i) =>
            i < charIndex ? password[i] : getRandomChar(alphabet),
          )
          .join('')

        setShuffledPassword(newSufflePassword)

        charIndex++
      }, 30)

      return () => clearInterval(shuffleInterval)
    }
  }, [password, options.animation, options.alphabets])

  return (
    <Container>
      <Title>
        <span role="img" aria-label="Key Icon">
          🔑
        </span>
        &nbsp; Password Generator
      </Title>
      <SubTitle>Length: {options.length} </SubTitle>
      <Slider
        value={options.length}
        onChange={(length: number) =>
          setOptions(options => ({ ...options, length }))
        }
      />
      <SubTitle>Characters:</SubTitle>
      <InputGroup>
        <Checkbox
          label="Lowercase (a-z)"
          onChange={(checked: boolean) => {
            const newAlphabets = checked
              ? [...options.alphabets, Alphabets.Lowercase]
              : options.alphabets.filter(a => a !== Alphabets.Lowercase)

            setOptions(options => ({ ...options, alphabets: newAlphabets }))
          }}
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          label="Uppercase (A-Z)"
          onChange={(checked: boolean) => {
            const newAlphabets = checked
              ? [...options.alphabets, Alphabets.Uppercase]
              : options.alphabets.filter(a => a !== Alphabets.Uppercase)

            setOptions(options => ({ ...options, alphabets: newAlphabets }))
          }}
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          label="Numbers (0-9)"
          onChange={(checked: boolean) => {
            const newAlphabets = checked
              ? [...options.alphabets, Alphabets.Numeric]
              : options.alphabets.filter(a => a !== Alphabets.Numeric)

            setOptions(options => ({ ...options, alphabets: newAlphabets }))
          }}
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          label="Symbols (*!@%_#)"
          onChange={(checked: boolean) => {
            const newAlphabets = checked
              ? [...options.alphabets, Alphabets.Symbols]
              : options.alphabets.filter(a => a !== Alphabets.Symbols)

            setOptions(options => ({ ...options, alphabets: newAlphabets }))
          }}
        />
      </InputGroup>
      <SubTitle>Options:</SubTitle>
      <InputGroup>
        <Checkbox
          label="Animation"
          onChange={(checked: boolean) =>
            setOptions(options => ({ ...options, animation: checked }))
          }
          checked
        />
      </InputGroup>
      <GenerateButton
        type="submit"
        disabled={options.alphabets.length === 0}
        onClick={() => setPassword(getRandomPassword(options))}
      >
        Generate
      </GenerateButton>
      <Result
        text={password}
        displayText={options.animation ? shuffledPassword : password}
      />
    </Container>
  )
}

export default App
