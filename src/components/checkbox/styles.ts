import styled from '@emotion/styled'

export const CheckboxLabel = styled.label`
    display: inline-block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;

    font-size: 1.2em;

    .checkbox__checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;

      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    &:hover input ~ .checkbox__checkmark {
      background-color: ${props => props.theme.colors.primaryLight};
    }

    input:checked ~ .checkbox__checkmark {
      background-color: ${props => props.theme.colors.primary};

      &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
      }

      &:after {
        display: block;
      }
    }
  }
`
