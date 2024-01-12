'use client';

import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Roboto } from 'next/font/google';
import { ContextProvider } from 'context';
import 'styles/index.css';

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ContextProvider>
            <CssBaseline />
            {children}
          </ContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
