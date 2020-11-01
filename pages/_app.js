import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/core';

import theme from "../styles/themes/theme";

function MyApp({ Component, pageProps }) {

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp