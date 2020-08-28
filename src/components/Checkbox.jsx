import React, { useState } from 'react'

const Checkbox = ({ label, checked = false, onChange }) => {
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

export default React.memo(Checkbox)
