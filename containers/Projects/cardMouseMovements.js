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
        console.log("drag", shiftX, currentItem);

        const relativeCurrent = currentItem - uniqueMark;
        if (shiftX < -150 && relativeCurrent < totalItems - 1) {
            const event = { target: { value: currentItem + 1 } };
            displayCard(event);
            willDrag = false;
        } else if (shiftX > 150 && relativeCurrent > 0) {
            const event = { target: { value: currentItem - 1 } };
            displayCard(event);
            willDrag = false;
        }

    }
}

export function handleDragEnd() {
    willDrag = false;
}