import React, { useState } from 'react'

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false)
  return (
    <label className="container">
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          console.log('toggleCheck')
          setChecked(!checked)
        }}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox
