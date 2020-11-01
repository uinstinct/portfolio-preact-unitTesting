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

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Aditya_Mitra_" />
                <meta name="twitter:title" content="Aditya Mitra" />
                <meta name="twitter:description" content="The portfolio site of Aditya Mitra." />
                <meta name="twitter:image" content="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604254256/portfolio/fallbacks/png%20fallback.png" />
                <meta name="twitter:image:alt" content="uinstinct" />

                <meta property="og:title" content="Aditya Mitra" />
                <meta property="og:site_name" content="Aditya Mitra" />
                <meta property="og:url" content="https://aditya-mitra.netlify.app/" />
                <meta property="og:description" content="The portfolio site of Aditya Mitra." />
                <meta property="og:image" content="/me.jpg" />

                {/* generics */}
                <link rel="icon"
                    href="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604255529/portfolio/favicons/32_fp8hpk.ico"
                    sizes="32x32" />
                <link rel="icon"
                    href="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604255530/portfolio/favicons/76_qe8zbi.ico"
                    sizes="76x76" />
                <link rel="icon"
                    href="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604255530/portfolio/favicons/128_mh8anx.ico"
                    sizes="128x128" />
                <link rel="icon"
                    href="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604255530/portfolio/favicons/228_johffl.ico"
                    sizes="228x228" />
                {/* Android */}
                <link rel="shortcut icon" 
                    href="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604255530/portfolio/favicons/128_mh8anx.ico"
                    sizes="196x196" />
                {/* iOS */}
                <link rel="apple-touch-icon"
                    href="https://res.cloudinary.com/gamersinstinct7/image/upload/v1604255530/portfolio/favicons/76_qe8zbi.ico"
                    sizes="120x120" />

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