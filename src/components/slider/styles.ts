import styled from '@emotion/styled'

export const SliderStyled = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border-width: 3px;
    border-color: #afafaf;
    border-style: solid;
    cursor: pointer;
    transition: border-width 200ms ease-in-out, border-color 200ms ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    border-width: 4px;
    border-color: ${props => props.theme.colors.primary};
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border-width: 3px;
    border-color: #afafaf;
    border-style: solid;
    cursor: pointer;
    transition: border-width 200ms ease-in-out, border-color 200ms ease-in-out;
  }

  &::-moz-range-thumb:hover {
    border-width: 4px;
    border-color: ${props => props.theme.colors.primary};
  }
`
