import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
      }

      body {
        background-color: #f3f7f7;
        font-family: 'Rubik', sans-serif;
        color: #39424e;
        font-size: 14px;
      }
    `}
  />
)
