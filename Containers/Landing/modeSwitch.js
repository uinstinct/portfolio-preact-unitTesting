import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/core";

import styles from '../../styles/modeSwitch';

function ModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    useEffect(() => {
        if (colorMode === "dark") {
            document.body.setAttribute("data-theme", "dark");
        } else {
            document.body.setAttribute("data-theme", "light");
        }
    }, [colorMode]);
    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="container">
                <input className="l" type="checkbox"
                    checked={colorMode === "dark"} onChange={toggleColorMode} />
            </div>
        </>
    );
}

export default ModeSwitch;