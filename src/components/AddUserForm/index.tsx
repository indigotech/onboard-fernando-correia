import { useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { ADD_USER } from '../../utils/apollo-queries';
import { validateBirthDate, validateEmail, validatePassword, validatePhone } from '../../utils/forms-validations';
import {
  ButtonAddUser,
  Wrapper,
  FormAddUser,
  HeaderCreateUser,
  InputAddUser,
  ListUserButton,
  PageTitle,
  SelectUserRole,
} from './style';

interface UserCreationErrorData {
  birthDateError: boolean;
  emailError: boolean;
  phoneError: boolean;
  passwordError: boolean;
}

enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export type RoleType = typeof Role[keyof typeof Role];

export const AddUserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<RoleType>();
  const [password, setPassword] = useState('');

  const [createUser] = useMutation(ADD_USER);
  const [userCreationError, setUserCreationError] = useState<UserCreationErrorData | null>();
  const [addUserError, setAddUserError] = useState('');
  const [addUserSuccess, setAddUserSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setEmail('');
    setName('');
    setPhone('');
    setBirthDate('');
    setRole(undefined);
    setPassword('');

    const isValidBirthDate = validateBirthDate(birthDate);
    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);
    const isValidPassword = validatePassword(password);

    if (!isValidBirthDate || !isValidEmail || !isValidPhone || !isValidPassword) {
      const error: UserCreationErrorData = {
        birthDateError: !isValidBirthDate,
        emailError: !isValidEmail,
        phoneError: !isValidPhone,
        passwordError: !isValidPassword,
      };
      setUserCreationError(error);
      return;
    }

    setUserCreationError(null);
    try {
      await createUser({ variables: { data: { name, email, phone, birthDate, password, role } } });
      setAddUserSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAddUserError(err.message);
      }
    }
  }

  return (
    <>
      <Route exact path='/add-user'>
        {addUserSuccess ? <Redirect to='/dashboard' /> : ''}
      </Route>
      <Wrapper>
        <HeaderCreateUser>
          <PageTitle>Create User</PageTitle>
          <Link to='/dashboard'>
            <ListUserButton>List Users</ListUserButton>
          </Link>
        </HeaderCreateUser>
        <FormAddUser onSubmit={handleSubmit}>
          <label htmlFor='add-user-name'>Name</label>
          <InputAddUser
            id='add-user-name'
            type='text'
            name='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor='add-user-email'>E-mail</label>
          <InputAddUser
            id='add-user-email'
            type='text'
            name='E-mail'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {userCreationError?.emailError && <p style={{ color: 'red' }}>Email invalid</p>}

          <label htmlFor='add-user-birth-date'>Birth Date</label>
          <InputAddUser
            id='add-user-birth-date'
            type='date'
            name='birth-date'
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {userCreationError?.birthDateError && <p style={{ color: 'red' }}>Birth date invalid</p>}

          <label htmlFor='add-user-phone'>Phone</label>
          <InputAddUser
            id='add-user-phone'
            type='tel'
            name='phone'
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {userCreationError?.phoneError && <p style={{ color: 'red' }}>Phone invalid</p>}

          <label htmlFor='add-user-role'>Role</label>
          <SelectUserRole
            id='add-user-role'
            name='role'
            required
            value={role}
            onChange={(e) => setRole(e.target.value as RoleType)}
          >
            <option />
            <option value={Role.USER}>user</option>
            <option value={Role.ADMIN}>admin</option>
          </SelectUserRole>

          <label htmlFor='login-form-password'>Password</label>
          <InputAddUser
            id='login-form-password'
            type='password'
            name='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {userCreationError?.passwordError && <p style={{ color: 'red' }}>Password invalid</p>}

          {addUserError && <p style={{ color: 'red' }}>{addUserError}</p>}

          <ButtonAddUser>Create User</ButtonAddUser>
        </FormAddUser>
      </Wrapper>
    </>
  );
};
