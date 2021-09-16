import { FormEvent, useContext, useState } from 'react';
import { LoginButton, Wrapper, FormLogin, LoginInput } from './style';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../contexts/auth-context';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, loginError, loggedIn, authenticate } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setEmail('');
    setPassword('');

    await authenticate(email, password);
  }

  return (
    <>
      <Route exact path='/'>
        {loggedIn ? <Redirect to='/dashboard' /> : ''}
      </Route>
      <Wrapper>
        <h1>Bem-vindo(a) à Taqtile!</h1>

        <FormLogin onSubmit={handleSubmit}>
          <label htmlFor='login-form-email'>E-mail</label>
          <LoginInput
            id='login-form-email'
            type='text'
            name='E-mail'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='login-form-password'>Password</label>
          <LoginInput
            id='login-form-password'
            type='password'
            name='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

          <LoginButton type='submit'>{loading ? <img src='spinner.gif' height='20px' /> : 'Entrar'}</LoginButton>
        </FormLogin>
      </Wrapper>
    </>
  );
};
