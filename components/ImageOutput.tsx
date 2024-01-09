import { useAppContext } from 'context';

const ImageOutput = () => {
  const { state, setAppState } = useAppContext();
  const { showWelcomeScreen, loading, mode, response } = state;

  return (
    <>
      {!showWelcomeScreen && !loading && mode === 'image' &&
        <>Image URL: {response}</>
      }
    </>
  );
};

export default ImageOutput;
