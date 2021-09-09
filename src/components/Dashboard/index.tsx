import { Container, UserCard, UserList } from '../Dashboard/style';
import data from '../../data.json';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>User List</h1>
      <UserList>
        {data.map((user) => {
          return (
            <UserCard>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </UserCard>
          );
        })}
      </UserList>
    </Container>
  );
};
