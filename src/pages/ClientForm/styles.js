import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 80%;
  background: #fff;
  padding: 60px;

  h1 {
    color: #030027;
    font-size: 40px;
  }
`;

export const Form = styled.div`
  margin-top: 20px;
  height: 500px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
`;
