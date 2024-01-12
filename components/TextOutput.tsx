'use client';
import { useAppContext } from 'context';

const TextOutput = () => {
  const { state, setAppState } = useAppContext();
  const { mode, response } = state;

  return (
    <>
      {mode === 'text' && response &&
        <textarea
          className='output'
          value={response}
          onChange={e => setAppState({
            ...state,
            response: e.target.value
          })}
          style={{
            fontFamily: 'inherit',
          }}
        />
      }
    </>
  );
};

export default TextOutput;
