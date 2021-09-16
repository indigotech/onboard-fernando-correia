import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_USER } from '../../utils/apollo-queries';
import { ListUserButton } from '../AddUserForm/style';
import { HeaderList, PageTitle } from '../Dashboard/style';
import { UserDetail } from '../UserDetail';
import { Wrapper } from './style';

interface UserDetailsProps {
  match: { params: { id: string } };
}

interface User {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
  role: string;
}

interface GetUserResponse {
  user: User;
}

export const UserDetails = ({ match }: UserDetailsProps): JSX.Element => {
  const { data, loading, error } = useQuery(GET_USER, { variables: { id: match.params.id } });

  const responseData: GetUserResponse = data;
  const user: User = responseData?.user;

  function formatDate(date: string): string {
    const dateArray = date.split('-');
    return `${dateArray[2]} / ${dateArray[1]} / ${dateArray[0]}`;
  }

  return (
    <Wrapper>
      <HeaderList>
        <PageTitle>User Details</PageTitle>
        <Link to='/dashboard'>
          <ListUserButton>List Users</ListUserButton>
        </Link>
      </HeaderList>

      {error && <h2>{error.message}</h2>}

      {loading && <img src='/spinner.gif' height='100px' />}

      {!loading && !error && (
        <>
          <h1>{user?.name}</h1>
          <UserDetail title='Email' data={user?.email} />
          <UserDetail title='Data de Nascimento' data={formatDate(user?.birthDate)} />
          <UserDetail title='Contato' data={user?.phone} />
          <UserDetail title='Cargo' data={user?.role} />
        </>
      )}
    </Wrapper>
  );
};
