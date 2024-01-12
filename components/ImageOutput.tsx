'use client';
import Image from 'next/image';
import { useAppContext } from 'context';
import { Box, Skeleton, Typography } from '@mui/material';

const ImageOutput = () => {
  const { state } = useAppContext();
  const { mode, response } = state;

  return (
    <>
      {mode === 'image' && response &&
        <Box
          sx={{
            display: 'block',
            padding: '14px 16px',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Skeleton
              variant="rectangular"
              animation='wave'
              sx={{
                position: 'absolute',
                width: '100%',
                minWidth: '100%',
                height: '100%',
                zIndex: -1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }}
            >
              <Typography sx={{ visibility: 'visible !important' }}>Loading image...</Typography>
            </Skeleton>

            <Image
              src={response}
              width={512}
              height={512}
              alt=''
              style={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
                margin: 'auto',
              }}
            />

            {/* <img
            src={response}
            width={512}
            height={512}
            alt=''
            style={{
              display: 'block',
              maxWidth: '100%',
              margin: 'auto',
            }}
          /> */}
          </Box>

        </Box>
      }
    </>
  );
};

export default ImageOutput;
