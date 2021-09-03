import { ButtonLogin, Container, FormLogin, InputLogin } from './style';

export const LoginForm: React.FC = () => {
  return (
    <Container>
      <h1>Bem-vindo(a) à Taqtile!</h1>

      <FormLogin>
        <label htmlFor='login-form-email'>E-mail</label>
        <InputLogin id='login-form-email' type='text' name='E-mail' />

        <label htmlFor='login-form-password'>Password</label>
        <InputLogin id='login-form-password' type='password' name='Password' />

        <ButtonLogin type='submit'>Entrar</ButtonLogin>
      </FormLogin>
    </Container>
  );
}
