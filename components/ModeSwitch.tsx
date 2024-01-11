'use client';
import { useEffect } from 'react';
import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ModeType } from 'types';
import { useAppContext } from 'context';

const ModeSwitch = () => {
  const { state, setAppState } = useAppContext();
  const { mode } = state;

  const handleModeChange = (mode: ModeType) => {
    setAppState({
      ...state,
      mode,
      response: '', // Clean response on mode change
    });
  };

  return (
    <Box
      sx={{
        mb: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box mr={1}>
        Generate:
      </Box>
      <RadioGroup
        value={mode}
        onChange={(_, value) => handleModeChange(value as ModeType)}
        name="mode-input"
        row
        sx={{
          display: 'inline-flex'
        }}
      >
        <FormControlLabel
          value="text"
          label={<>Text 📃</>}
          control={<Radio />}
        />
        <FormControlLabel
          value="image"
          label={<>Image 🌄</>}
          control={<Radio />}
        />
      </RadioGroup>
    </Box>
  );
};

export default ModeSwitch;
