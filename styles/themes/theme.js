import { extendTheme } from '@chakra-ui/core';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('white', 'gray.900')(props)
        }
    })
};

const components = {
    Link: {
        baseStyle: (props) => ({
            color: mode('blue.400', 'blue.300')(props)
        })
    }
};

const theme = extendTheme({
    components,
    styles
});

export default theme;