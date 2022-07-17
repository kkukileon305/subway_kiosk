import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Subway</title>
        <meta name='description' content='서브웨이 키오스크' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
