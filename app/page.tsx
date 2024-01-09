'use client';

import { useEffect } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { ChatForm, Header, ImageOutput, ModeSwitch, Progress, TextOutput, WelcomeScreen } from 'components';
import { useAppContext } from 'context';

export default function HomePage() {
  const { state, setAppState } = useAppContext();
  const { response, mode } = state;

  // Update output on response change
  useEffect(() => {
    setAppState({
      ...state,
      output: response,
    });
  }, [response]);

  // Clean output on mode change
  useEffect(() => {
    setAppState({
      ...state,
      output: '',
    });
  }, [mode]);

  return (
    <Container
      maxWidth='sm'
      sx={{ py: 3, height: '100%' }}
    >
      <Stack sx={{ height: '100%' }}>
        <Header />

        {/* Top/Middle part taking available space */}
        <Box
          sx={{
            position: 'relative',
            flexGrow: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            borderRadius: '4px',
            mb: 3,
          }}
        >
          <Progress />
          <TextOutput />
          <ImageOutput />
          <WelcomeScreen />
        </Box>

        {/* Bottom aligned form */}
        <Box mt='auto'>
          <ModeSwitch />
          <ChatForm />
        </Box>

      </Stack>
    </Container>
  );
};
