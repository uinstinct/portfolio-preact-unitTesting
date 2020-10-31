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
                console.log('done');    
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
                <h1>Projects</h1>
                <ModeSwitch />
            </nav>
        </>
    );
}

export default Navbar;