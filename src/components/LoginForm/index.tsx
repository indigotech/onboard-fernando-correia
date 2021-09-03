import { FormEvent, useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/login-validations';
import { ButtonLogin, Container, FormLogin, InputLogin } from './style';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);

    setEmail('');
    setPassword('');

    if (!validEmail || !validPassword) {
      setLoginError(true);
      return;
    }

    console.log({ email, password });
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
