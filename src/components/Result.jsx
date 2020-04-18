import React from 'react'
import CopyButton from './CopyButton'

const Result = ({text, displayText }) => {
  return displayText ? (
    <>
      <div className="card">
        <CopyButton text={text} />
        {displayText}
      </div>
    </>
  ) : null
}

export default Result