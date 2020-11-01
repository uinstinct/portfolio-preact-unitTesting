import Header from './header';
import Navbar from './navbar';

import styles from "../../styles/landing";

function LandingContainer() {
    return (
        <div id="pageLanding">
            <style jsx>
                {styles}
            </style>
            <div className="landingHeader">
                <Header />
                <Navbar />
            </div>
        </div>
    );
}

export default LandingContainer;