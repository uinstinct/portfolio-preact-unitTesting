import Header from './header';
import Navbar from './navbar';

import styles from "../../styles/landing";

function LandingContainer() {
    return (
        <>
            <span id="pageLanding" style={{ display: "none" }} />
            <style jsx>
                {styles}
            </style>
            <div className="landingHeader">
                <Header />
                <Navbar />
            </div>
        </>
    );
}

export default LandingContainer;