import React, { useState } from 'react'

import { CheckboxLabel } from './styles'
import { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <CheckboxLabel>
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
    </CheckboxLabel>
  )
}

export * from './types'

export default React.memo(Checkbox)
