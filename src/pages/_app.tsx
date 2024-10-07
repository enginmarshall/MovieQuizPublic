import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const callMatomo = async () => {
    // let _mtm: any;
    // _mtm = _mtm || [];
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    if (s.parentNode) {
      g.async = true; g.src = 'https://analytics.enginmarshall.se/js/container_9D1CkCpl.js'; s.parentNode.insertBefore(g, s);
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      callMatomo();
      return () => clearTimeout(timeOut);
    }, 2000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>)
}
