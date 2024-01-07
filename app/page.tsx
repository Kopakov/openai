'use client';

import { Box, Button, Card, CardContent, Container, LinearProgress, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const handleInputEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    };
  };

  const handleSubmit = async () => {
    setLoading(true);
    setOutput('');
    setInput('');
    setShowWelcomeScreen(false);

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const response = data.choices[0].message.content;
      setResponse(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setResponse('Error fetching Open AI. Please try again or reload page');
    };
  };

  useEffect(() => {
    setOutput(response);
  }, [response]);

  return (
    <Container
      maxWidth='sm'
      sx={{ py: 3, height: '100%' }}
    >
      <Stack sx={{ height: '100%' }}>
        <Typography
          variant='h4'
          textAlign='center'
          sx={{
            mb: 3,
            fontWeight: 700,
          }}
        >
          💻 Ask AI 🧠
        </Typography>

        <Box
          sx={{
            position: 'relative',
            flexGrow: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            borderRadius: '4px',
            mb: 3,
          }}
        >
          {loading &&
            <LinearProgress
              color='secondary'
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                borderTopRightRadius: 'inherit',
                borderTopLeftRadius: 'inherit',
              }}
            />
          }
          {!showWelcomeScreen && !loading &&
            <textarea
              className='output'
              value={output}
              onChange={e => setOutput(e.target.value)}
            />
          }
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
        </Box>

        <Box mt='auto'>
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputEnterPress}
            placeholder="Your message"
            multiline
            maxRows={8}
            sx={{ mb: 2 }}
            fullWidth
            autoFocus
          />
          <Button
            variant='contained'
            size='large'
            fullWidth
            onClick={handleSubmit}
          >
            {loading ? 'Generating...' : 'Go'}
          </Button>
        </Box>

      </Stack>
    </Container>
  );
};
