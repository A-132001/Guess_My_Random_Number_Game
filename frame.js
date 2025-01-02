// Create a frame container
const frame = document.createElement("div");
frame.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 10px solid yellow; /* Frame color and thickness */
    box-sizing: border-box;
    pointer-events: none; /* Allows interaction with underlying content */
    z-index: 9999; /* Ensures the frame is on top of all content */
`;

// Append the frame to the body
document.body.appendChild(frame);
