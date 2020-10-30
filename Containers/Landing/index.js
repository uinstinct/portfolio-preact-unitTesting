import Header from './header';
import Navbar from './navbar';

import styles from "../../styles/landing";

function LandingContainer() {
    return (
        <>
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