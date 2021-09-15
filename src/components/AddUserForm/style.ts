import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 2rem auto;
  font-family: sans-serif;
  color: #4a5568;
`;

export const HeaderCreateUser = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  padding-bottom: 0.5rem;
`;

export const ListUserButton = styled.button`
  width: 100%;
  margin-right: 2rem;
  font-size: x-large;
  padding: 0.5rem 0;
  border-radius: 1rem;
  background-color: #9f7aea;
  color: white;
  cursor: pointer;
`;

export const FormAddUser = styled.form`
  align-items: center;
  justify-content: center;
  max-width: 500px;
  text-align: start;
  margin: 3rem auto;
  color: #718096;
`;

export const InputAddUser = styled.input`
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: large;
  margin: 0.5rem 0 1.5rem 0;
  display: block;
  width: 100%;
  border-radius: 1rem;
  border-color: #718096;
`;

export const SelectUserRole = styled.select`
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: large;
  margin: 0.5rem 0 1.5rem 0;
  display: block;
  width: 100%;
  border-radius: 1rem;
  border-width: 2px;
  border-color: #718096;
`;

export const ButtonAddUser = styled.button`
  width: 100%;
  font-size: x-large;
  padding: 0.5rem 0;
  margin-top: 2rem;
  border-radius: 1rem;
  background-color: #9f7aea;
  color: white;
  cursor: pointer;
`;
