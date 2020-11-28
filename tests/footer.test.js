import { fireEvent, screen, waitFor } from '@testing-library/react';

import Footer from '@/containers/Footer';
import { customRender } from './testUtils';
import { footerConstants } from './testUtils/constants';

jest.mock("@/containers/Footer/constants", () => ({
    __esModule: true,
    default: require('./testUtils/constants').footerConstants,
}));

describe("test the footer component and its functionalities |", () => {

    it("should render and match its snapshot", () => {
        const { container } = customRender(<Footer />);
        const link = container.querySelector('a');

        expect(screen.getByText(/nextjs/gi)).toBeInTheDocument();
        expect(link).toHaveAttribute('href', footerConstants[0].link);
        expect(container.innerHTML).toMatchSnapshot();
    });

    it("should match snapshot when dark mode is on", () => {
        const { container } = customRender(<Footer />, null, 'dark');
        expect(container.innerHTML).toMatchSnapshot();
    });

});