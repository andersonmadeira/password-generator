import styled from '@emotion/styled'

export const CopyButtonStyled = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font: 1em Rubik, sans-serif;
  text-transform: uppercase;
  color: #757575;
  padding: 3px 10px;
  opacity: 0.4;
  transition: all 0.5s ease;

  & .copy-button__icon {
    margin-right: 0.4em;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const SvgIcon = styled.svg`
  width: 1em;
  height: 1em;
  margin-right: 0.4em;

  path,
  polygon,
  rect {
    fill: ${props => props.theme.colors.primary};
  }

  circle {
    stroke: ${props => props.theme.colors.primary};
    stroke-width: 1;
  }
`
