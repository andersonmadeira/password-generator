import React, { useState } from 'react'
import Checkbox from './components/Checkbox'
import { getRandomPassword, GenerationOptions, copyToClipboard } from './utils'
import Slider from './components/Slider'
import CopyButton from './components/CopyButton'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const initialOptions: GenerationOptions = { length: 20 }
  const [options, setOptions] = useState(initialOptions)

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
        label="lowercase (a-z)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, lowercase: checked },
          })
        }
      />
      <Checkbox
        label="uppercase (A-Z)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, uppercase: checked },
          })
        }
      />
      <Checkbox
        label="numbers (0-9)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, numbers: checked },
          })
        }
      />
      <Checkbox
        label="symbols (*!@%_#)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, symbols: checked },
          })
        }
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
      {generatedPassword ? (
        <>
          <div className="card">
            <CopyButton onClick={() => copyToClipboard(generatedPassword)} />
            {generatedPassword}
          </div>
        </>
      ) : null}
    </div>
  )
}

export default App
