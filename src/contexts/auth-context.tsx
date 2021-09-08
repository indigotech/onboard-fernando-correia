import { useMutation } from '@apollo/client';
import { createContext, ReactNode, useState } from 'react';
import { LOGIN } from '../utils/apollo-queries';
import { validateEmail, validatePassword } from '../utils/login-validations';

type AuthContextData = {
  authenticate: (email: string, password: string) => Promise<void>;
  loading: boolean;
  loginError: boolean;
  loggedIn: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

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

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [login, { loading }] = useMutation(LOGIN);
  const [loginError, setLoginError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  async function authenticate(email: string, password: string): Promise<void> {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (!isValidEmail || !isValidPassword) {
      setLoginError(true);
      return;
    }

    try {
      const response = await login({ variables: { email, password } });
      const responseData: LoginResponseData = response.data;

      const token = responseData?.login.token.split(' ')[1];
      document.cookie = `access_token=${token}`;

      setLoggedIn(true);
      setLoginError(false);
    } catch (err) {
      setLoginError(true);
    }
  }

  return (
    <AuthContext.Provider value={{ loading, loginError, loggedIn, authenticate }}>{children}</AuthContext.Provider>
  );
}
