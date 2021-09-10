import { Container, UserCard, UserList, UserNavigation } from '../Dashboard/style';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../utils/apollo-queries';
import { useState } from 'react';

interface UsersResponseData {
  users: {
    count: number;
    nodes: {
      id: number;
      email: string;
      name: string;
    }[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      limit: number;
      offset: number;
    };
  };
}

export const Dashboard: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const limit = 12;
  const { data, loading, error } = useQuery(GET_USERS, { variables: { offset, limit } });

  const responseData: UsersResponseData = data;
  const nodes = responseData?.users.nodes;
  const pageInfo = responseData?.users.pageInfo;

  return (
    <Container>
      <h1>User List</h1>
      {loading ? (
        <img src='spinner.gif' height='100px' />
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
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
      {pageInfo?.hasPreviousPage ? (
        <UserNavigation
          onClick={() => {
            setOffset(offset - limit);
          }}
        >
          Prev Page
        </UserNavigation>
      ) : (
        ''
      )}
      {pageInfo?.hasNextPage ? (
        <UserNavigation
          onClick={() => {
            setOffset(offset + limit);
          }}
        >
          Next Page
        </UserNavigation>
      ) : (
        ''
      )}
    </Container>
  );
};
