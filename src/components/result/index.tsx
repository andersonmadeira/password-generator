import React from 'react'

import { CopyButton } from '../copy-button'
import { ResultProps } from './types'

export const Result: React.FC<ResultProps> = ({ text, displayText }) =>
  displayText ? (
    <>
      <div className="card">
        <CopyButton text={text} />
        {displayText}
      </div>
    </>
  ) : null

export * from './types'

export default React.memo(Result)
