import { FormEvent, useState } from 'react';
import { ButtonLogin, Container, FormLogin, InputLogin } from './style';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  function validateEmail(email: string): boolean {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function validatePassword(password: string): boolean {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,}$/;
    return regex.test(password);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);

    if (!validEmail || !validPassword) {
      setEmail('');
      setPassword('');
      setLoginError(true);
      return;
    }

    console.log({ email, password });
    setEmail('');
    setPassword('');
    setLoginError(false);
  }

  return (
    <Container>
      <h1>Bem-vindo(a) à Taqtile!</h1>

      <FormLogin onSubmit={handleSubmit}>
        <label htmlFor='login-form-email'>E-mail</label>
        <InputLogin
          id='login-form-email'
          type='text'
          name='E-mail'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='login-form-password'>Password</label>
        <InputLogin
          id='login-form-password'
          type='password'
          name='Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loginError ? <p style={{ color: 'red' }}>E-mail or Password incorrect</p> : ''}

        <ButtonLogin type='submit'>Entrar</ButtonLogin>
      </FormLogin>
    </Container>
  );
};
