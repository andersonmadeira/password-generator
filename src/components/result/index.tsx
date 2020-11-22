import React from 'react'
import { Card } from '../card'

import { CopyButton } from '../copy-button'
import { ResultProps } from './types'

export const Result: React.FC<ResultProps> = ({ text, displayText }) =>
  displayText ? (
    <Card>
      <CopyButton text={text} />
      {displayText}
    </Card>
  ) : null

export * from './types'

export default React.memo(Result)
