import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}
