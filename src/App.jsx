import React, { useState, useEffect, useRef } from 'react'
import Checkbox from './components/Checkbox'
import { getRandomPassword, getRandomChar } from './utils'
import Slider from './components/Slider'
import Result from './components/Result'

function App() {
  const [password, setPassword] = useState('')
  const [shuffledPassword, setShuffledPassword] = useState('')
  const [length, setLength] = useState(20)
  const [animationEnabled, setAnimationEnabled] = useState(true)
  const alphabets = useRef({})

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
    <div className="app-container">
      <h1>
        <span role="img" aria-label="Key Icon">
          🔑
        </span>
        &nbsp; Password Generator
      </h1>
      <h2>Length: {length} </h2>
      <Slider value={length} onChange={(length) => setLength(length)} />
      <h2>Characters:</h2>
      <div className="input-group">
        <Checkbox
          label="Lowercase (a-z)"
          onChange={(checked) => (alphabets.current.lowercase = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Uppercase (A-Z)"
          onChange={(checked) => (alphabets.current.uppercase = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Numbers (0-9)"
          onChange={(checked) => (alphabets.current.numbers = checked)}
        />
      </div>
      <div className="input-group">
        <Checkbox
          label="Symbols (*!@%_#)"
          onChange={(checked) => (alphabets.current.symbols = checked)}
        />
      </div>
      <h2>Options:</h2>
      <div className="input-group">
        <Checkbox
          label="Animation"
          onChange={(checked) => setAnimationEnabled(checked)}
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

          setPassword(getRandomPassword(alphabets.current, length))
        }}
      >
        Generate
      </button>
      <Result
        text={password}
        displayText={animationEnabled ? shuffledPassword : password}
      />
    </div>
  )
}

export default App