import Header from './header';
import ModeSwitch from "./modeSwitch";

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
                    <ModeSwitch />
                </nav>
            </div>
        </>
    );
}

export default LandingContainer;