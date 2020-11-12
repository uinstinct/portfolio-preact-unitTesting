import { useColorMode } from "@chakra-ui/core";

import DeviceChange from "./deviceChange";
import AboutMe from "./aboutMe";
import constants from "./constants";

import styles from "@/styles/aboutContainer";

export default function About() {
    const { colorMode } = useColorMode();
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className={`about-container ${colorMode === "dark"?"dark":null}`}>
                <DeviceChange />
                <AboutMe title={constants.title} subTitle={constants.subTitle}
                    description={constants.description} image={constants.image}
                    status={constants.status} />
            </div>
        </>
    );
}