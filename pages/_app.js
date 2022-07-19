import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Layout from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: lightgray;
  }

  #__next {
    width: 100%;
    max-width: 550px;
    background-color: white;
    position: relative;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
