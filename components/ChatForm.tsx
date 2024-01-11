'use client';
import { KeyboardEventHandler } from 'react';
import { TextField, Button } from '@mui/material';
import { useAppContext } from 'context';
import { generateContent } from 'services';

const ChatForm = () => {
  const { state, setAppState } = useAppContext();
  const { input, loading, mode } = state;

  // Send form on enter press inside input
  const handleInputEnterPress: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.code == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    };
  };

  // Submit form
  const handleSubmit = async () => {
    // Reset app while loading response
    setAppState({
      ...state,
      loading: true,
      input: '',
      response: '',
    });

    try {
      const response = await generateContent(mode, input);

      // Update state with response
      setAppState({
        ...state,
        response,
        loading: false,
      });
    } catch (error) {
      console.log(error);

      // Update state with error response
      setAppState({
        ...state,
        response: 'Error fetching Open AI. Please try again or reload page',
        loading: false,
      });
    };
  };

  return (
    <>
      <TextField
        value={input}
        onChange={e => setAppState({
          ...state,
          input: e.target.value
        })}
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
    </>
  );
};

export default ChatForm;
