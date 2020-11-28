import React from 'react';
import Footer from '@/containers/Footer';
import { customRender } from './test-utils';
import { screen } from '@testing-library/react';

describe("test the footer component and its functionalities |", () => {
    it("it should render without hindrance", () => {
        customRender(<Footer />);
        expect(screen.getByText(/nextjs/gi)).toBeInTheDocument();
    });
});