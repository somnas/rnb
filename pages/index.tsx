import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>RNB</title>
                <link rel="icon" href="/icons/favicon-rnb.png" />
            </Head>
            <Header />
        </div>
    );
};

export default Home;
