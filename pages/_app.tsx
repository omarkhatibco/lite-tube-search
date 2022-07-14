// import { Providers } from 'context';
import 'focus-visible/dist/focus-visible';

export function reportWebVitals(metric) {
  // console.log(metric);
}

function App({ Component, pageProps }) {
  return (
    // <Providers>
    <Component {...pageProps} />
    // </Providers>
  );
}

export default App;
