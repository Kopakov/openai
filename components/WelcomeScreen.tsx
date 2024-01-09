import { Box, Typography } from '@mui/material';
import { useAppContext } from 'context';

const WelcomeScreen = () => {
  const { state, setAppState } = useAppContext();
  const { showWelcomeScreen, loading } = state;

  return (
    <>
      {showWelcomeScreen && !loading &&
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h5'>
            Welcome!
          </Typography>
          <Typography paragraph mb={1}>
            Let's start with a prompt below
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
