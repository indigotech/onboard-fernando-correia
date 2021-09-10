import { FormEvent, useState } from 'react';
import {
  ButtonAddUser,
  Container,
  FormAddUser,
  HeaderCreateUser,
  InputAddUser,
  ListUserButton,
  PageTitle,
} from './style';

export const AddUserForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

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
        <InputAddUser
          id='add-user-role'
          type='text'
          name='role'
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <ButtonAddUser>Create User</ButtonAddUser>
      </FormAddUser>
    </Container>
  );
};
