import '../styles/globals.css'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/core';

import theme from "../styles/themes/theme";

function MyApp({ Component, pageProps }) {

    return (
        <ChakraProvider>
                <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp