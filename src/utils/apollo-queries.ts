import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
        role
      }
    }
  }
`;

export const GET_USERS = gql`
  query users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
