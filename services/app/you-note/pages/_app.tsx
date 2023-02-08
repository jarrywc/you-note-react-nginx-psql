import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"


const App = ({  Component, pageProps }: AppProps) => {
    const { session } = pageProps;
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
  );
};

export default App;

