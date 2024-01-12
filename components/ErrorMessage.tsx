import { Alert } from '@mui/material';
import { useAppContext } from 'context';

const ErrorMessage = () => {
  const { state: { error } } = useAppContext();

  return (
    <>
      {
        error &&
        <Alert severity='error' sx={{ mb: 2 }}>
          {error}
        </Alert>
      }
    </>
  );
};

export default ErrorMessage;
