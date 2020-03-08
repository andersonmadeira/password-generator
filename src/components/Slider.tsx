import React, { useState } from 'react'

interface Props {
  min?: number
  max?: number
  value?: number
  onChange?: (value: number) => void
}

const Slider: React.FC<Props> = ({
  min = 1,
  max = 250,
  value = 25,
  onChange,
}) => {
  const [val, setVal] = useState(value)

  return (
    <input
      className="slider"
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

export default Slider
