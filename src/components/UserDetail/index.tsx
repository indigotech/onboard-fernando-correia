import React from 'react';
import { UserDetailArea } from './style';

interface UserDetailProps {
  title: string;
  data: string;
}

export const UserDetail = ({ title, data }: UserDetailProps): JSX.Element => {
  return (
    <UserDetailArea>
      <h4>{title}:</h4>
      <p>{data}</p>
    </UserDetailArea>
  );
};
