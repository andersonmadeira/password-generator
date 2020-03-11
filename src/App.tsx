import React, { useState, useEffect } from 'react'
import Checkbox from './components/Checkbox'
import {
  getRandomPassword,
  GenerationOptions,
  copyToClipboard,
  getRandomChar,
} from './utils'
import Slider from './components/Slider'
import CopyButton from './components/CopyButton'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [shuffleValue, setShuffleValue] = useState('')
  const [animationEnabled, setAnimationEnabled] = useState(true)
  const [options, setOptions] = useState({
    length: 20,
    alphabets: {},
  } as GenerationOptions)

  useEffect(() => {
    let charIndex = 0

    if (generatedPassword && animationEnabled) {
      const shuffleInterval = setInterval(() => {
        if (charIndex > generatedPassword.length) {
          clearInterval(shuffleInterval)
          return generatedPassword
        }

        const newSuffleValue = [...new Array(generatedPassword.length)]
          .map((empty, i) =>
            i < charIndex
              ? generatedPassword[i]
              : getRandomChar(options.alphabets || {}),
          )
          .join('')

        setShuffleValue(newSuffleValue)

        charIndex++
      }, 30)

      return () => clearInterval(shuffleInterval)
    }
  }, [generatedPassword, animationEnabled, options])

  return (
    <div className="app-container">
      <h1>Password Generator</h1>
      <h2>Length: {options.length} </h2>
      <Slider
        value={options.length}
        onChange={length =>
          setOptions({
            ...options,
            length,
          })
        }
      />
      <h2>Characters:</h2>
      <Checkbox
        label="Lowercase (a-z)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, lowercase: checked },
          })
        }
      />
      <Checkbox
        label="Uppercase (A-Z)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, uppercase: checked },
          })
        }
      />
      <Checkbox
        label="Numbers (0-9)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, numbers: checked },
          })
        }
      />
      <Checkbox
        label="Symbols (*!@%_#)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, symbols: checked },
          })
        }
      />
      <h2>Options:</h2>
      <Checkbox
        label="Animation"
        onChange={checked => setAnimationEnabled(checked)}
        checked
      />
      <button
        className="button"
        style={{ marginTop: 10 }}
        type="submit"
        onClick={() => {
          if (
            !options.alphabets?.lowercase &&
            !options.alphabets?.uppercase &&
            !options.alphabets?.numbers &&
            !options.alphabets?.symbols
          ) {
            alert(
              'Please select at least one set of characters to generate the password!',
            )
            return
          }

          setGeneratedPassword(getRandomPassword(options))
        }}
      >
        Generate
      </button>
      {(animationEnabled && shuffleValue) || generatedPassword ? (
        <>
          <div className="card">
            <CopyButton onClick={() => copyToClipboard(generatedPassword)} />
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
