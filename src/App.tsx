import React, { useState } from 'react'
import Checkbox from './components/Checkbox'
import { getRandomPassword, GenerationOptions } from './utils'
import Slider from './components/Slider'

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
        label="special (*!@%_#)"
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
        onClick={() => setGeneratedPassword(getRandomPassword(options))}
      >
        Generate
      </button>
      <div
        className="card"
        style={{ marginTop: 20, fontSize: '1.5em', overflowWrap: 'break-word' }}
      >
        {generatedPassword}
      </div>
    </div>
  )
}

export default App
