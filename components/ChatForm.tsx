import { TextField, Button } from '@mui/material';
import { useAppContext } from 'context';
import { KeyboardEventHandler } from 'react';

const ChatForm = () => {
  const { state, setAppState } = useAppContext();
  const { input, loading } = state;

  // Send form on enter press inside input
  const handleInputEnterPress: KeyboardEventHandler<HTMLDivElement> = e => {
    if (e.code == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    };
  };

  // Submit form
  const handleSubmit = async () => {
    setAppState({
      ...state,
      loading: true,
      output: '',
      input: '',
      showWelcomeScreen: false,
    });

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const response = data.choices[0].message.content;

      setAppState({
        ...state,
        response,
        loading: false,
      });
    } catch (error) {
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
