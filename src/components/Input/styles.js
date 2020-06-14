import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 100%;

  label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 22px;
    font-weight: bold;
  }

  input {
    outline: none;
    border: 0;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    background: #f4f6f8;
    font-size: 26px;
    color: #000;
    font-weight: bold;

    ${({ hasError }) => hasError && css`
      border: 2px solid #d66853;
    `}

    ${({ success }) => success && css`
      border: 2px solid #548c2f;
    `}

    &:focus {
      border: 2px solid #a8d5e2;
    }
  }
`;