import React, { useState, useEffect, useRef } from 'react'
import Checkbox from './components/Checkbox'
import { getRandomPassword, getRandomChar } from './utils'
import Slider from './components/Slider'
import CopyButton from './components/CopyButton'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [shuffleValue, setShuffleValue] = useState('')
  const [length, setLength] = useState(20)
  const [animationEnabled, setAnimationEnabled] = useState(true)
  const alphabets = useRef({})

  useEffect(() => {
    let charIndex = 0
    const selectedAlphabets = { ...alphabets.current }

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
              : getRandomChar(selectedAlphabets || {}),
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
      <h2>Length: {length} </h2>
      <Slider
        value={length}
        onChange={length => setLength(length)}
      />
      <h2>Characters:</h2>
      <div className="input-group">
        <Checkbox
          label="Lowercase (a-z)"
          onChange={checked => (alphabets.current.lowercase = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Uppercase (A-Z)"
          onChange={checked => (alphabets.current.uppercase = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Numbers (0-9)"
          onChange={checked => (alphabets.current.numbers = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Symbols (*!@%_#)"
          onChange={checked => (alphabets.current.symbols = checked)}
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

          setGeneratedPassword(getRandomPassword(alphabets.current, length))
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
