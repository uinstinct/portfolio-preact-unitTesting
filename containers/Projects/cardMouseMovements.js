import { createStandaloneToast, Box, Icon } from "@chakra-ui/core";
import { GiSideswipe } from "react-icons/gi";

let willDrag = false;
let originalPosX = 0;
export function handleDragStart(event, totalItems) {
    if (totalItems > 1) {
        willDrag = true;
        originalPosX = event.nativeEvent.pageX;
    }
}

export function handleDrag(
    event, uniqueMark, totalItems,
    currentItem, displayCard
) {
    if (willDrag) {
        const shiftX = event.nativeEvent.pageX - originalPosX;

        const relativeCurrent = currentItem - uniqueMark;
        if (shiftX < -50 && relativeCurrent < totalItems - 1) {
            const event = { target: { value: currentItem + 1 } };
            displayCard(event);
            willDrag = false;
        } else if (shiftX > 50 && relativeCurrent > 0) {
            const event = { target: { value: currentItem - 1 } };
            displayCard(event);
            willDrag = false;
        }

    }
}

export function handleDragEnd() {
    willDrag = false;
}


let shown = false;
export function showSwipeGuide() {
    if (!shown) {
        const toast = createStandaloneToast();
        toast({
            position: "bottom-left",
            render: () => (
                <Box
                    p={1} maxWidth="sm"
                    color="white" bg="orange.400" opacity="0.95"
                    borderRadius="lg" textAlign="center"
                >
                    <pre>Hey, try swiping
                        <Icon as={GiSideswipe} margin="0 0.3rem" />
                        on my card!
                    </pre>
                </Box>
            ),
            duration: 7500,
        });

        shown = true;
    }

}