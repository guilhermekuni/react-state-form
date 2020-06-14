import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button.attrs(({ loading, disabled }) => ({
  type: 'submit',
  disabled: loading || disabled,
}))`
  border: 0;
  height: 50px;
  width: 200px;
  padding: 0 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020887;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${(props) => props.loading
    && css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export default Button;
