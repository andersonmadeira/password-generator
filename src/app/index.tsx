import React, { useState, useEffect } from 'react'

import {
  getRandomPassword,
  getRandomChar,
  GenerationOptions,
  combineAlphabets,
  availableAlphabets,
} from '../utils'
import { Slider, Checkbox, Result } from '../components'
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
      {availableAlphabets.map(alphabet => (
        <InputGroup key={alphabet.label}>
          <Checkbox
            label={alphabet.label}
            onChange={(checked: boolean) => {
              const newAlphabets = checked
                ? [...options.alphabets, alphabet.value]
                : options.alphabets.filter(a => a !== alphabet.value)

              setOptions(options => ({ ...options, alphabets: newAlphabets }))
            }}
          />
        </InputGroup>
      ))}
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
