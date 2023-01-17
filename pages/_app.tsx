import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EB_Garamond } from '@next/font/google';

const garamond = EB_Garamond({
  subsets: ['latin']
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={garamond.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
