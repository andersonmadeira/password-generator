import React from 'react'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { copyToClipboard } from '../utils'

interface Props {
  text: string
  label?: string
}

const CopyButton: React.FC<Props> = ({ text, label = 'copy' }) => {
  return (
    <button className="copy-button" onClick={() => copyToClipboard(text)}>
      <FontAwesomeIcon icon={faCopy} className="copy-button__icon" />
      <span className="copy-button__label">{label}</span>
    </button>
  )
}

export default CopyButton
