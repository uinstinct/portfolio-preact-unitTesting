import Head from 'next/head';
import { useState } from 'react';

import { SSRTheme } from "../styles/themes/serverTheme";

import Landing from "../containers/Landing";
import About from "../containers/About";
import Skills from "../containers/Skills";
import Cards from "../containers/Projects";
import Footer from "../containers/Footer";

export default function IndexPage() {
    const [areComponentsMounted, setComponentsMount] = useState(false);
    setTimeout(() => {
        setComponentsMount(true);
    }, 2000);

    return (
        <>
            <SSRTheme>
                <div id="all-containers">
                    <Landing />
                    <div
                        style={{ display: areComponentsMounted ? "block" : "block" }}
                    >
                        <About />
                        <Skills />
                        <Cards />
                        <Footer />
                    </div>
                </div>
            </SSRTheme>
        </>
    );
}

export { getStaticProps } from "../styles/themes/serverTheme";