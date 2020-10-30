import { useEffect } from 'react';

import ModeSwitch from './modeSwitch';

import styles from "../../styles/navbar";

function Navbar() {
    useEffect(() => {
        const nav = document.querySelector("#navbar");
        var topOfNav = nav.offsetTop;
        function fixNav() {
            if (window.scrollY >= topOfNav) {
                nav.classList.add("fixNavbar");
            }
            else {
                nav.classList.remove("fixNavbar");
            }
        }

        window.addEventListener('scroll', fixNav)
    }, []);
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <nav className="navbar" id="navbar">
                <h1>Projects</h1>
                <ModeSwitch />
            </nav>
        </>
    );
}

export default Navbar;