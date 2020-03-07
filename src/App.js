import React from 'react'
import Checkbox from './components/Checkbox'

function App() {
  return (
    <div className="app-container">
      <h1>Password Generator</h1>
      <Checkbox label="Include numbers characters (0-9)" />
      <Checkbox label="Include uppercase characters (A-Z)" />
      <Checkbox label="Include special characters (*!@%_#)" />
    </div>
  )
}

export default App
