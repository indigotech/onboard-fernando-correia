import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 5rem auto;
  font-family: sans-serif;
  color: #4a5568;

  h1 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
  }
`;

export const UserList = styled.div`
  margin: 3rem auto;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 22% 22% 22% 22%;
`;

export const UserCard = styled.div`
  border-radius: 15px;
  background-color: #faf5ff;
  margin-bottom: 2rem;
  padding: 0.25rem 1.5rem;
  border: 1px solid purple;
`;