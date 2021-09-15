import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1080px;
  margin: 2rem auto;
  font-family: sans-serif;
  color: #4a5568;
`;

export const HeaderList = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  padding-bottom: 0.5rem;
`;

export const CreateUserButton = styled.button`
  width: 100%;
  margin-right: 2rem;
  font-size: x-large;
  padding: 0.5rem 0;
  border-radius: 1rem;
  background-color: #9f7aea;
  color: white;
  cursor: pointer;
`;

export const UserList = styled.div`
  margin: 1.5rem auto;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 30% 30% 30%;
`;

export const UserCard = styled.div`
  border-radius: 15px;
  background-color: #faf5ff;
  margin-bottom: 2rem;
  padding: 0.25rem 1.5rem;
  border: 1px solid purple;
`;

export const UserNavigationButton = styled.button`
  width: 20%;
  margin-right: 2rem;
  font-size: x-large;
  padding: 0.5rem 0;
  border-radius: 1rem;
  background-color: #9f7aea;
  color: white;
  cursor: pointer;
`;
