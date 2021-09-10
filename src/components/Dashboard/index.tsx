import { Container, UserCard, UserList, UserNavigation } from '../Dashboard/style';
import datajson from '../../data.json';
import { useLazyQuery, useQuery } from '@apollo/client';
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
  const limit = 15;
  const { data, error } = useQuery(GET_USERS, { variables: { offset, limit } });

  const responseData: UsersResponseData = data;
  const nodes = responseData?.users.nodes;
  const pageInfo = responseData?.users.pageInfo;

  console.log(data);
  console.log(error);

  return (
    <Container>
      <h1>User List</h1>
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
