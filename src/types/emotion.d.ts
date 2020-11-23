import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      primaryLight: string
      primaryDark: string
      disabled: string
    }
  }
}
