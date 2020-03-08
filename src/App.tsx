import React, { useState } from 'react'
import Checkbox from './components/Checkbox'
import { getRandomPassword, GenerationOptions } from './utils'

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const baseOptions: GenerationOptions = { length: 20 }
  const [options, setOptions] = useState(baseOptions)

  return (
    <div className="app-container">
      <h1>Password Generator</h1>
      <Checkbox
        label="lowercase chars (a-z)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, lowercase: checked },
          })
        }
      />
      <Checkbox
        label="uppercase chars (A-Z)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, uppercase: checked },
          })
        }
      />
      <Checkbox
        label="numbers chars (0-9)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, numbers: checked },
          })
        }
      />
      <Checkbox
        label="special chars (*!@%_#)"
        onChange={checked =>
          setOptions({
            ...options,
            alphabets: { ...options.alphabets, symbols: checked },
          })
        }
      />
      <button
        type="submit"
        onClick={() => setGeneratedPassword(getRandomPassword(options))}
      >
        Generate
      </button>
      <p>Result: {generatedPassword}</p>
    </div>
  )
}

export default App
