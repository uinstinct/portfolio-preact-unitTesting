import Header from './header';

import { IconButton } from '@chakra-ui/core';
import styles from "../../styles/landing";

function LandingContainer() {

    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="landingHeader">
                <Header />
                <nav className="navbar" id="navbar">
                    <h1>Projects</h1>
                    <IconButton isRound="true" variant="ghost" icon="sun" />
                </nav>
            </div>
        </>
    );
}

export default LandingContainer;