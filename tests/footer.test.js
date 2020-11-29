import { fireEvent, screen, waitFor } from '@testing-library/react';

import Footer from '@/containers/Footer';
import { customRender, resizeWindow } from './testUtils';
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

    //it("should have highlighted on mouseenter", async () => {
    //    const { container } = customRender(<Footer />);
    //    const link = container.querySelector('a');
    //    const linkstyles = window.getComputedStyle(link);

    //    const highlighter = document.body.querySelector('.highlight');
    //    expect(highlighter).toBeInTheDocument();
    //    expect(highlighter.clientHeight).toBe(0);

    //    const styles1 = window.getComputedStyle(highlighter);

    //    fireEvent.mouseEnter(link);
    //    const styles2 = window.getComputedStyle(highlighter);
    //    expect(styles1).not.toMatchObject(styles2);

    //    await waitFor(() => {
    //        expect(styles1.width).toMatch(linkstyles.width);
    //    }, { timeout: 3000 });

    //    console.log(styles2);

    //});

    //it("should have styles on different viewports", () => {
    //    const { container } = customRender(<Footer />);
    //    const border = container.querySelector('.border');

    //    const style1 = window.getComputedStyle(border);

    //    //window = resizeWindow(window, 500, 700);
    //    //window.resizeTo = function resizeTo(width, height) {
    //    //    Object.assign(this, {
    //    //        innerWidth: width,
    //    //        innerHeight: height,
    //    //        outerWidth: width,
    //    //        outerHeight: height,
    //    //    })
    //    //}
    //    //window.resizeTo(500, 700);

    //    window = { ...window, innerWidth: 500, innerHeight: 700 };

    //    console.log(window.innerWidth);

    //    const style2 = window.getComputedStyle(border);

    //    console.log(style1, style2);
    //    expect(style1.display).not.toMatch(style2.display);


    //})

});