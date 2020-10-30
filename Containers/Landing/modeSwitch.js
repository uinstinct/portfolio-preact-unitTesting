import { useColorMode } from "@chakra-ui/core";

import styles from '../../styles/modeSwitch';

function ModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
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