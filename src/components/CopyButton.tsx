import React from 'react'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  onClick?: () => void
}

const CopyButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="copy-button"
      onClick={() => (onClick ? onClick() : null)}
    >
      <FontAwesomeIcon icon={faCopy} className="copy-button__icon" />
      <span className="copy-button__label">copy</span>
    </button>
  )
}

export default CopyButton
