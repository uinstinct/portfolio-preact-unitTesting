import { SimpleGrid } from "@chakra-ui/core";
import DeviceChange from "./deviceChange";

function About() {

    return (
        <>
            <SimpleGrid minChildWidth="352px" spacingX="10px" spacingY="10px">
                <DeviceChange />
            </SimpleGrid>
        </>
    );
}

export default About;