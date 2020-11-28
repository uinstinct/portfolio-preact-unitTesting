import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const Provider = ({ children }) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    );
}

const customRender = (ui) => {
    render(ui, { wrapper: Provider })
}

export * from "@testing-library/react";
export { customRender as render }; // override