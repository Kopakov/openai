'use client';
import { Box, Typography } from '@mui/material';
import { useAppContext } from 'context';

const WelcomeScreen = () => {
  const { state } = useAppContext();
  const { response, loading } = state;

  return (
    <>
      {!response && !loading &&
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 16px',
          }}
        >
          <Typography variant='h5'>
            Welcome!
          </Typography>
          <Typography paragraph mb={1}>
            Let&apos;s start with a prompt below
          </Typography>
          <Box fontSize={19}>
            ⬇️
          </Box>
        </Box>
      }
    </>
  );
};

export default WelcomeScreen;
