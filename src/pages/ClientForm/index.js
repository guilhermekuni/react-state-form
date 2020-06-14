import React, { useState } from 'react';

import Input from '../../components/Input';

import * as S from './styles';

const ClientForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  return (
    <S.Wrapper>
      <S.Container>
        <h1>CADASTRO DE CLIENTE</h1>
        <S.Form>
          <Input
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirm your password"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default ClientForm;