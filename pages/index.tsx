import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Head>
                <title>RNB</title>
                <link rel="icon" href="/favicon-rnb.png" />
            </Head>
        </>
    );
};

export default Home;
