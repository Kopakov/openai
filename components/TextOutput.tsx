import { useAppContext } from 'context';

const TextOutput = () => {
  const { state, setAppState } = useAppContext();
  const { showWelcomeScreen, loading, mode, output } = state;

  return (
    <>
      {!showWelcomeScreen && !loading && mode === 'text' &&
        <textarea
          className='output'
          value={output}
          onChange={e => setAppState({
            ...state,
            output: e.target.value
          })}
        />
      }
    </>
  );
};

export default TextOutput;
