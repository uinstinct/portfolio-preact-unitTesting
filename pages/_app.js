import Head from 'next/head';
import { useEffect } from 'react';

import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/core';

import theme from "@/styles/themes/theme";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register("/serviceWorker.js")
                    .catch(err => console.log("service worker not supported"))
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>Aditya Mitra</title>
                <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Description" content="The portfolio site of Aditya Mitra." />


                {/*Manifest*/}
                <link rel="manifest" href="/manifest/manifest.json" />

                <meta name="theme-color" content="#fff" />
                <meta name="application-name" content="Aditya" />
                <meta name="apple-mobile-web-app-title" content="Aditya" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="msapplication-navbutton-color" content="#fff" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="msapplication-starturl" content="/" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


                {/*Sharing Card Display*/}
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
                    href="/favicons/32.ico"
                    sizes="32x32" />
                <link rel="icon"
                    href="/favicons/76.ico"
                    sizes="76x76" />
                <link rel="icon"
                    href="/favicons/128.ico"
                    sizes="128x128" />
                <link rel="icon"
                    href="/favicons/228.ico"
                    sizes="228x228" />
                {/* Android */}
                <link rel="shortcut icon"
                    href="/favicons/128.ico"
                    sizes="196x196" />
                {/* iOS */}
                <link rel="apple-touch-icon"
                    href="/favicons/76.ico"
                    sizes="120x120" />

            </Head>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp