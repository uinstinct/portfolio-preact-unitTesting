import {useEffect } from 'react';

import styles from './landing.module.css';

function LandingContainer() {

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove("loading");
    })

    return (
        <>
            <div className={styles.landingHeader}>
                <header className={`${styles.header}`}>
                    Aditya Mitra
                </header>
                <nav className={`${styles.navbar} ${styles.loading}`} id="navbar">

                </nav>
            </div>
        </>
    );
}

export default LandingContainer;