import { useMutation } from '@apollo/client';
import { createContext, ReactNode, useState } from 'react';
import { LOGIN } from '../utils/apollo-queries';
import { validateEmail, validatePassword } from '../utils/forms-validations';

interface AuthContextData {
  authenticate: (email: string, password: string) => Promise<void>;
  loading: boolean;
  loginError: boolean;
  loggedIn: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  email: string;
  name: string;
}

interface LoginResponseData {
  login: {
    token: string;
    user: User;
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
      window.localStorage.setItem('access_token', token);

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
