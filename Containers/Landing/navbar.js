import { useEffect } from 'react';

import ModeSwitch from './modeSwitch';

import { useColorMode, Button, Link, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core";
import styles from "../../styles/navbar";

function Navbar() {
    const { colorMode } = useColorMode();

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


        let barSeen = false;
        const bar = document.querySelector(".skill-container");
        const progresses = document.getElementsByClassName("bar"); // the progress bar class

        /**forEach will not work in this case
         * moz does not support Nodelist
         * */
        for (let i = 0; i < progresses.length; i++) {
            progresses[i].classList.add("inactive");
        }

        /**better to initialize them
         * problem may occur when the function runs to retireive them
         * */
        const { clientHeight, offsetTop } = bar;

        function skillBarsSeen() {
            const slideInAt =
                window.scrollY + window.innerHeight - bar.clientHeight / 5;
            const isHalfShown = slideInAt > offsetTop;
            const barBottom = offsetTop + clientHeight;

            const hasNotScrolledPast = window.scrollY < barBottom;
            if (isHalfShown && hasNotScrolledPast) {
                [].forEach.call(progresses, function (progress) {
                    progress.classList.remove("inactive");
                });
                barSeen = true;
            }
        }

        function scrollEvents() {
            clearTimeout(window.navTimer);
            window.navTimer = setTimeout(() => { // otherwise scroll is lagging
                fixNav();
                if (!barSeen) {
                    skillBarsSeen();
                }
            }, 100);
        }

        window.addEventListener('scroll', scrollEvents);
    }, []);
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <nav className="navbar" id="navbar">
                <Menu
                    isLazy
                    transition="all 1s linear"
                    borderRadius="md"
                    borderWidth="none"
                    borderColor="white"
                    _focus={{ boxShadow: "none" }}
                >
                    <MenuButton as={Button} style={{
                        backgroundColor: "transparent",
                        fontFamily: "Righteous",
                        fontSize: "1.5rem",
                        color: colorMode === "dark" ? "#5c5c3d" : "#e6e6e6",
                    }}>
                        Browse More
                    </MenuButton>
                    <MenuList style={{
                        fontSize: "1.2rem",
                        fontFamily: "Righteous",
                        color: colorMode === "dark" ? "#e6e6e6" : "#5c5c3d",
                        backgroundColor: colorMode === "dark" ? "#5c5c3d" : "#e6e6e6",
                    }}>
                        <Link href="#myAbout"><MenuItem>Meet Me</MenuItem></Link>
                        <Link href="#myTechSkills"><MenuItem>Tools</MenuItem></Link>
                        <Link href="#myProjects"><MenuItem>Projects</MenuItem></Link>
                        <Link href="#pageLanding"><MenuItem>Home</MenuItem></Link>
                    </MenuList>
                </Menu>
                <ModeSwitch />
            </nav>
        </>
    );
}

export default Navbar;