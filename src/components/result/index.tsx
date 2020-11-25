import React from 'react'
import { Card } from '../card'

import { CopyButton } from '../copy-button'
import { ResultProps } from './types'
import { ResultCard } from './styles'

export const Result: React.FC<ResultProps> = ({ text, displayText }) =>
  displayText ? (
    <ResultCard>
      <CopyButton text={text} />
      {displayText}
    </ResultCard>
  ) : null

export * from './types'

export default React.memo(Result)
