import { useEffect } from 'react';

import styles from './landing.module.css';

function LandingContainer() {

    return (
        <>
            <div className={styles.landingHeader}>
                <header className={`${styles.header}`}>
                    Aditya Mitra
                </header>
                <nav className={`${styles.navbar}`} id="navbar" />
            </div>
        </>
    );
}

export default LandingContainer;