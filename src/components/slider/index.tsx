import React, { useState } from 'react'

import { SliderStyled } from './styles'
import { SliderProps } from './types'

export const Slider: React.FC<SliderProps> = ({
  min = 1,
  max = 250,
  value = 25,
  onChange,
}) => {
  const [val, setVal] = useState(value)

  return (
    <SliderStyled
      type="range"
      min={min}
      max={max}
      step="1"
      value={val}
      onChange={event => {
        const newValue = +event.target.value
        setVal(newValue)
        if (onChange) onChange(newValue)
      }}
    />
  )
}

export * from './types'

export default React.memo(Slider)
