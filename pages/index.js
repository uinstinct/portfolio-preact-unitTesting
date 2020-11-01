import Head from 'next/head';

import { SSRTheme } from "../styles/themes/serverTheme";

import Landing from "../Containers/Landing";
import About from "../Containers/About";
import Skills from "../Containers/Skills";
import Cards from "../Containers/Projects";
import Footer from "../Containers/Footer";

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Aditya Mitra</title>
                <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <SSRTheme>
                <div id="all-containers">
                    <Landing />
                    <About />
                    <Skills />
                    <Cards />
                    <Footer />
                </div>
            </SSRTheme>
        </>
    );
}

export { getStaticProps } from "../styles/themes/serverTheme";