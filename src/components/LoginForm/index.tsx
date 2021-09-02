import { Container } from './style';

export function LoginForm(): JSX.Element {
  return (
    <Container>
      <h1>Bem-vindo(a) à Taqtile!</h1>

      <form>
        <label htmlFor='login-form-email'>E-mail</label>
        <input id='login-form-email' type='text' name='E-mail' />

        <label htmlFor='login-form-password'>Password</label>
        <input id='login-form-password' type='password' name='Password' />

        <button type='submit'>Entrar</button>
      </form>
    </Container>
  );
}
