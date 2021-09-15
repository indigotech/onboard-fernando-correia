import { FormEvent, useState } from 'react';
import { validateBirthDate, validateEmail, validatePhone } from '../../utils/forms-validations';
import {
  ButtonAddUser,
  Container,
  FormAddUser,
  HeaderCreateUser,
  InputAddUser,
  ListUserButton,
  PageTitle,
  SelectUserRole,
} from './style';

enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

type RoleType = typeof Role[keyof typeof Role];

export const AddUserForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState<RoleType>('' as RoleType);

  const [userCreationError, setUserCreationError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setEmail('');
    setName('');
    setPhone('');
    setBirthDate('');
    setRole('' as RoleType);

    const isValidBirthDate = validateBirthDate(birthDate);
    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);

    if (!isValidBirthDate && !isValidEmail && !isValidPhone) {
      setUserCreationError(true);
      return;
    }

    setUserCreationError(false);
    console.log({ name, email, phone, birthDate, role });
  }

  return (
    <Container>
      <HeaderCreateUser>
        <PageTitle>Create User</PageTitle>
        <a href={'/dashboard'}>
          <ListUserButton>List Users</ListUserButton>
        </a>
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

        <label htmlFor='add-user-birth-date'>Birth Date</label>
        <InputAddUser
          id='add-user-birth-date'
          type='date'
          name='birth-date'
          required
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <label htmlFor='add-user-phone'>Phone</label>
        <InputAddUser
          id='add-user-phone'
          type='tel'
          name='phone'
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

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

        {userCreationError && <p style={{ color: 'red' }}>Birth date, email or phone invalid</p>}

        <ButtonAddUser>Create User</ButtonAddUser>
      </FormAddUser>
    </Container>
  );
};
