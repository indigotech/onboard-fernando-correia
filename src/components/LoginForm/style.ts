import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 5rem auto;
  text-align: center;
  font-family: sans-serif;
`;

export const FormLogin = styled.form`
  text-align: start;
  margin: 5rem 0;
  color: #718096;
`;

export const LoginInput = styled.input`
  padding: 1rem 2rem;
  box-sizing: border-box;
  font-size: large;
  margin: 0.5rem 0 2rem 0;
  display: block;
  width: 100%;
  border-radius: 1rem;
  border-color: #718096;
`;

export const LoginButton = styled.button`
  width: 100%;
  font-size: x-large;
  padding: 0.5rem 0;
  margin-top: 2rem;
  border-radius: 1rem;
  background-color: #9f7aea;
  color: white;
  cursor: pointer;
`;
