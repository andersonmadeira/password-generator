import React from 'react'

import { copyToClipboard } from '../../utils'
import { CopyButtonStyled, SvgIcon } from './styles'
import { CopyButtonProps } from './types'

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  label = 'copy',
}) => (
  <CopyButtonStyled onClick={() => copyToClipboard(text)}>
    <SvgIcon viewBox="0 0 20 20">
      <path d="M17.391,2.406H7.266c-0.232,0-0.422,0.19-0.422,0.422v3.797H3.047c-0.232,0-0.422,0.19-0.422,0.422v10.125c0,0.232,0.19,0.422,0.422,0.422h10.125c0.231,0,0.422-0.189,0.422-0.422v-3.797h3.797c0.232,0,0.422-0.19,0.422-0.422V2.828C17.812,2.596,17.623,2.406,17.391,2.406 M12.749,16.75h-9.28V7.469h3.375v5.484c0,0.231,0.19,0.422,0.422,0.422h5.483V16.75zM16.969,12.531H7.688V3.25h9.281V12.531z"></path>
    </SvgIcon>
    <span className="copy-button__label">{label}</span>
  </CopyButtonStyled>
)

export * from './types'

export default React.memo(CopyButton)
