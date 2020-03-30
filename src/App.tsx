import React, { useState, useEffect, useRef } from 'react'
import Checkbox from './components/Checkbox'
import { getRandomPassword, GenerationOptions, getRandomChar } from './utils'
import Slider from './components/Slider'
import CopyButton from './components/CopyButton'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [shuffleValue, setShuffleValue] = useState('')
  const [selectedLength, setSelectedLength] = useState(20)
  const [animationEnabled, setAnimationEnabled] = useState(true)
  const options = useRef<GenerationOptions>({
    length: selectedLength,
    alphabets: {},
  })

  useEffect(() => {
    let charIndex = 0
    const generationOptions: GenerationOptions = {
      ...options.current,
      alphabets: { ...options.current.alphabets },
    }

    if (generatedPassword && animationEnabled) {
      const shuffleInterval = setInterval(() => {
        if (charIndex > generatedPassword.length) {
          clearInterval(shuffleInterval)
          return
        }

        const newSuffleValue = [...new Array(generatedPassword.length)]
          .map((empty, i) =>
            i < charIndex
              ? generatedPassword[i]
              : getRandomChar(generationOptions.alphabets || {}),
          )
          .join('')

        setShuffleValue(newSuffleValue)

        charIndex++
      }, 30)

      return () => clearInterval(shuffleInterval)
    }
  }, [generatedPassword, animationEnabled])

  return (
    <div className="app-container">
      <h1>
        <span role="img" aria-label="Key Icon">
          🔑
        </span>
        &nbsp; Password Generator
      </h1>
      <h2>Length: {selectedLength} </h2>
      <Slider
        value={selectedLength}
        onChange={length => setSelectedLength(length)}
      />
      <h2>Characters:</h2>
      <div className="input-group">
        <Checkbox
          label="Lowercase (a-z)"
          onChange={checked => (options.current.alphabets.lowercase = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Uppercase (A-Z)"
          onChange={checked => (options.current.alphabets.uppercase = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Numbers (0-9)"
          onChange={checked => (options.current.alphabets.numbers = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Symbols (*!@%_#)"
          onChange={checked => (options.current.alphabets.symbols = checked)}
        />
      </div>
      <h2>Options:</h2>
      <div className="input-group">
        <Checkbox
          label="Animation"
          onChange={checked => setAnimationEnabled(checked)}
          checked
        />
      </div>
      <button
        className="button"
        type="submit"
        onClick={() => {
          if (
            !options.current.alphabets.lowercase &&
            !options.current.alphabets.uppercase &&
            !options.current.alphabets.numbers &&
            !options.current.alphabets.symbols
          ) {
            alert(
              'Please select at least one set of characters to generate the password!',
            )
            return
          }

          options.current.length = selectedLength
          setGeneratedPassword(getRandomPassword(options.current))
        }}
      >
        Generate
      </button>
      {(animationEnabled && shuffleValue) || generatedPassword ? (
        <>
          <div className="card">
            <CopyButton text={generatedPassword} />
            {animationEnabled && shuffleValue
              ? shuffleValue
              : generatedPassword
              ? generatedPassword
              : null}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default App
