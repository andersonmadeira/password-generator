import React, { useState } from 'react'

interface Props {
  label: string
  onChange?: (checked: boolean) => void
}

const Checkbox: React.FC<Props> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false)
  return (
    <label className="container">
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked)

          if (onChange) onChange(!checked)
        }}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox
