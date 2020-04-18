import React from 'react'
import CopyButton from './CopyButton'

const Result = ({ animationEnabled, shuffledText, text }) => {
  return (animationEnabled && shuffledText) || text ? (
    <>
      <div className="card">
        <CopyButton text={text} />
        {animationEnabled && shuffledText
          ? shuffledText
          : text
          ? text
          : null}
      </div>
    </>
  ) : null
}

export default Result