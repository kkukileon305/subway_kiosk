import Head from 'next/head';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SUBWAY 써브웨이</title>
        <meta name='description' content='서브웨이 키오스크' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  );
};

export default Layout;
