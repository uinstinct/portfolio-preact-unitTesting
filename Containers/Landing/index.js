import { useEffect } from 'react';

import { Text, Heading } from '@chakra-ui/core';
import styles from './landing.module.css';

function LandingContainer() {

    return (
        <>
            <div className={styles.landingHeader}>
                <header className={`${styles.header}`}>
                    Aditya Mitra
                </header>
                <nav className={`${styles.navbar}`} id="navbar">
                    <h1>Projects</h1>
                    <h1>Mode</h1>
                </nav>
            </div>
        </>
    );
}

export default LandingContainer;