import { Wrapper, UserCard, UserList, UserNavigationButton } from '../Dashboard/style';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../utils/apollo-queries';
import { useState } from 'react';

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
      <h1>User List</h1>

      {loading && <img src='spinner.gif' height='100px' />}

      {error && <h2>{error.message}</h2>}

      {!loading && !error && (
        <UserList>
          {nodes?.map((user) => {
            return (
              <UserCard key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </UserCard>
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
