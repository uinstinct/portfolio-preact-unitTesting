export function handleMouseLeave(skillCardEl) {
    setTimeout(() => {
        skillCardEl.style.transform = "none";
        skillCardEl.style.zIndex = "0";
    }, 650);
}

export function handleMouseMove(event, skillCardEl) {
    const { offsetX, offsetY } = event.nativeEvent;
    skillCardEl = skillCardEl ?? event.target;
    const { height, width } = skillCardEl.getBoundingClientRect();

    const x = (-(offsetX - (width / 2)) / 3) / 3;
    const y = ((offsetY - (height / 2)) / 3) / 3;

    skillCardEl.style.transform = `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1.2,1.2,1.2)`;
    skillCardEl.style.zIndex = "90"; // navbar has z-index = 99
}