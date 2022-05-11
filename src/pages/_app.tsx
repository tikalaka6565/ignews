import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider as SessionProviderAuth } from 'next-auth/react';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProviderAuth session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProviderAuth>
  )
}

export default MyApp
