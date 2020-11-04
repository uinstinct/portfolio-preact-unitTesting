import { useState } from "react";

import constants from "./constants";

import {useColorMode, Link, Icon } from "@chakra-ui/core";
import styles from "../../styles/footer";

function Footer() {
    const providerDefault = "@uinstinct";
    const [provider, setProvider] = useState(providerDefault);
    const { colorMode } = useColorMode();

    const finds = constants.map(constant => {
        return (
            <Link href={constant.link} isExternal
                onMouseEnter={() => setProvider(constant.provider)}
                onMouseLeave={() => setProvider(providerDefault)}
                key={constant.link}
            >
                <Icon
                    as={constant.icon} color={constant.colour}
                    boxSize={8} margin="0 1rem"
                />
            </Link>
        );
    })

    return (
        <div id="find me">
            <style jsx>
                {styles}
            </style>
            <footer className={`footer ${colorMode==="dark"?"dark":null}`}>
                <div className="contact-container">
                    <span className="header">Talk With Me</span>
                    <div className="contact-icons">{finds}</div>
                    <div className="provider">{provider}</div>
                </div>
                <div className="built-with">
                    <div className="border" />
                    My Portfolio Site Built With
                    <Link isExternal href="https://github.com/aditya-mitra/portfolio/">
                        <span className="built">NextJS</span>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;