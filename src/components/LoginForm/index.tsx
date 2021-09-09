import { FormEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { validateEmail, validatePassword } from '../../utils/login-validations';
import { ButtonLogin, Container, FormLogin, InputLogin } from './style';

interface LoginResponseData {
  login: {
    token: string;
    user: {
      id: string;
      name: string;
      role: string;
    };
  };
}

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
      login(data: { email: $email, password: $password }) {
        token
        user {
          id
          name
          role
        }
      }
    }
  `;

  const [login] = useMutation(LOGIN);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    setEmail('');
    setPassword('');

    if (!isValidEmail || !isValidPassword) {
      setLoginError(true);
      return;
    }

    try {
      const response = await login({ variables: { email, password } });
      const responseData: LoginResponseData = response.data;

      const token = responseData?.login.token.split(' ')[1];
      document.cookie = `access_token=${token}`;

      setLoginError(false);
    } catch (err) {
      setLoginError(true);
    }
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
