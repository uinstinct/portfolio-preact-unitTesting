import { useColorMode } from "@chakra-ui/core";

import DeviceChange from "./deviceChange";
import AboutMe from "./aboutMe";

import styles from "../../styles/aboutContainer";

function About() {
    const { colorMode } = useColorMode();
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className={`about-container ${colorMode === "dark"?"dark":null}`}>
                <DeviceChange />
                <AboutMe />
            </div>
        </>
    );
}

export default About;