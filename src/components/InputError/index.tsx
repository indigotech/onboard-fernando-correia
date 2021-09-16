interface InputTypeProps {
  message: string;
}

export const InputError = ({ message }: InputTypeProps): JSX.Element => {
  return <p style={{ color: 'red' }}>{message}</p>;
};
