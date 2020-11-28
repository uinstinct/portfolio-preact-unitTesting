import { ChakraProvider, DarkMode, LightMode } from '@chakra-ui/react';
import { render } from '@testing-library/react';

const LightModeProvider = ({ children }) => (
    <ChakraProvider>
        <LightMode>
            {children}
        </LightMode>
    </ChakraProvider>
);

const DarkModeProvider = ({ children }) => (
    <ChakraProvider>
        <DarkMode>
            {children}
        </DarkMode>
    </ChakraProvider>
);

export const resizeWindow = (x = 900, y = 768) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
}

export const customRender = (ui, options = {}, theme = 'light') => (
    render(ui, {
        wrapper: theme === 'dark' ? DarkModeProvider : LightModeProvider,
        ...options
    })
);