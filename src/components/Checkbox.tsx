import React, { useState } from 'react'

interface Props {
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const Checkbox: React.FC<Props> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <label className="checkbox">
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked)

          if (onChange) onChange(!isChecked)
        }}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  )
}

export default Checkbox
