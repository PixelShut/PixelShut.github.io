// football.js

// Make the football draggable
const football = document.querySelector('.football');
let isDragging = false;
let offsetX, offsetY;

football.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - football.offsetLeft;
    offsetY = e.clientY - football.offsetTop;
    football.style.cursor = 'grabbing'; // Change the cursor to indicate dragging
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        football.style.left = `${x}px`;
        football.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    football.style.cursor = 'grab'; // Reset the cursor once dragging ends
});
