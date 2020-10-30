import Head from 'next/head';

import { SSRTheme } from "../styles/themes/serverTheme";

import Landing from "../Containers/Landing";
import Card from "../Containers/Projects";

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Aditya Mitra</title>
                <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <SSRTheme>
                <div>
                    <Landing />
                    <Card />
                </div>
            </SSRTheme>
        </>
    );
}

export { getStaticProps } from "../styles/themes/serverTheme";