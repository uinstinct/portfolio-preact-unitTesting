import {useColorMode, Link } from "@chakra-ui/core";
import styles from "../../styles/footer";

function Footer() {
    const { colorMode } = useColorMode();
    return (
        <div id="find me">
            <style jsx>
                {styles}
            </style>
            <footer className={`footer ${colorMode==="dark"?"dark":null}`}>
                <div className="contact-container">
                    <span className="header">Talk With Me</span>
                    <div className="contact-icons">
                        <span>1</span>
                        <span>2</span>
                    </div>
                    <div className="provider">provider</div>
                </div>
                <div className="built-with">
                    <div className="border" />
                    My Portfolio built with
                    <Link isExternal href="https://nextjs.org/">
                        <span>NextJS</span>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;