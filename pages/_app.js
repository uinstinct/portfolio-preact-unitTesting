import { useEffect } from 'react';

import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';

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
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;