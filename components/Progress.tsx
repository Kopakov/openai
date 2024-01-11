'use client';
import { LinearProgress } from '@mui/material';
import { useAppContext } from 'context';

const Progress = () => {
  const { state: { loading } } = useAppContext();

  return (
    <>
      {
        loading &&
        <LinearProgress
          color='secondary'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            borderTopRightRadius: 'inherit',
            borderTopLeftRadius: 'inherit',
          }
          }
        />
      }
    </>
  );
};

export default Progress;
