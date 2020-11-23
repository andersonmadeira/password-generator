import styled from '@emotion/styled'

export const Button = styled.button`
  font-size: 1.2em;

  color: #fff;
  font-weight: 700;

  border: none;
  border-radius: 2px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;

  box-shadow: 0 6px 16px 0 rgba(67, 184, 201, 0.2);
  background: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};

  outline: none;
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }

  &:disabled {
    background: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`
