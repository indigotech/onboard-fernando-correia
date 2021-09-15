import { Wrapper, UserCard, UserList, UserNavigationButton, PageTitle, HeaderList, CreateUserButton } from './style';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../utils/apollo-queries';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  email: string;
  name: string;
}

interface UsersResponseData {
  users: {
    count: number;
    nodes: User[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      limit: number;
      offset: number;
    };
  };
}

const limit = 12;

export const Dashboard: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useQuery(GET_USERS, { variables: { offset, limit } });

  const responseData: UsersResponseData = data;
  const nodes = responseData?.users.nodes;
  const pageInfo = responseData?.users.pageInfo;

  return (
    <Wrapper>
      <HeaderList>
        <PageTitle>User List</PageTitle>
        <Link to='/add-user'>
          <CreateUserButton>Add User</CreateUserButton>
        </Link>
      </HeaderList>

      {loading && <img src='/spinner.gif' height='100px' />}

      {error && <h2>{error.message}</h2>}

      {!loading && !error && (
        <UserList>
          {nodes?.map((user) => {
            return (
              <Link key={user.id} to={`/dashboard/${user.id}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                <UserCard>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </UserCard>
              </Link>
            );
          })}
        </UserList>
      )}

      {pageInfo?.hasPreviousPage && (
        <UserNavigationButton onClick={() => setOffset(offset - limit)}>Prev Page</UserNavigationButton>
      )}
      {pageInfo?.hasNextPage && (
        <UserNavigationButton onClick={() => setOffset(offset + limit)}>Next Page</UserNavigationButton>
      )}
    </Wrapper>
  );
};
