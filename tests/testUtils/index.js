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

export const resizeWindow = (window, x = 1024, y = 768) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
    return window;
}

export const customRender = (ui, options = {}, theme = 'light') => (
    render(ui, {
        wrapper: theme === 'dark' ? DarkModeProvider : LightModeProvider,
        ...options
    })
);