import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

const Provider = ({ children }) => (
    <ChakraProvider>
        {children}
    </ChakraProvider>
);

export const customRender = (ui, options = {}) => (
    render(ui, { wrapper: Provider, ...options })
);