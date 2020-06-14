import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 100%;

  label {
    color: #000;
    font-size: 24px;
    font-weight: bold;
  }

  input {
    padding: 0 12px;
    width: 100%;
    height: 100%;
    border: 0;
    background: #f4f6f8;
    font-size: 28px;
    color: #000;
    font-weight: bold;
  }
`;