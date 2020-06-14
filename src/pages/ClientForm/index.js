import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const ClientForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    const request = {
      fullName,
      email,
      password,
      confirmationPassword,
    };

    setFormSubmitted(true);

    console.log({ request, formSubmitted });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <h1>CADASTRO DE CLIENTE</h1>
        <S.Form>
          <Input
            label="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            hasError={formSubmitted && !fullName}
            success={formSubmitted && !!fullName}
          />
          <Input
            label="E-mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            hasError={formSubmitted && !email}
          />
          <Input
            label="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            hasError={formSubmitted && !password}
          />
          <Input
            label="Confirm your password *"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
            type="password"
            hasError={formSubmitted && !confirmationPassword}
          />
          <Button onClick={handleSubmit}>SUBMIT</Button>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};

export default ClientForm;