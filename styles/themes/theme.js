import { extendTheme } from '@chakra-ui/core';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('white', 'black')(props),
            color: mode('black', 'white')(props),
        },
    })
};

const components = {
    Link: {
        baseStyle: (props) => ({
            color: mode('blue.400', 'blue.300')(props)
        })
    },
};

const theme = extendTheme({
    styles,
    components,
});

export default theme;