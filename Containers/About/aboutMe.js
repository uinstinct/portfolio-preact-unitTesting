import { useColorMode } from "@chakra-ui/core";

import styles from "../../styles/aboutMe";

function AboutMe() {
    const { colorMode } = useColorMode();
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className={`container ${colorMode === "dark"?"dark":null}`}>
                <div className="column">
                    <div className="module">
                        <div className="thumbnail">
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"
                                alt="yo"
                            />
                        </div>
                        <div className="content">
                            <h1 className="title">City Lights in New York</h1>
                            <h2 className="sub-title">The city that never sleeps.</h2>
                            <p className="description">
                                New York, the largest city in the U.S., is an architectural marvel
                                with plenty of historic monuments, magnificent buildings and
                                countless dazzling skyscrapers. New York, the largest city in the
                                U.S., is an architectural marvel with plenty of historic
                                monuments, magnificent buildings and countless dazzling
                                skyscrapers.
                            </p>
                            <div className="meta-status">status</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;