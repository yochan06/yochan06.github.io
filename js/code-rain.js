// Initialising the canvas
var canvas = document.querySelector('#code-rain'),
    ctx = canvas.getContext('2d');

// Fixed font size
const fontSize = 16;

// Setting up the letters
var letters = '01';
letters = letters.split('');

// Function to get font width
function getFontWidth(fontSize) {
    ctx.font = fontSize + "px monospace";
    const text = '0'; // Use '0' or '1' to measure width
    const width = ctx.measureText(text).width;
    return width;
}

// Initial font width calculation
var fontWidth = getFontWidth(fontSize);

// Function to set up columns and drops
function setupDrops() {
    columns = Math.floor(canvas.width / fontWidth);
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
}

window.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Recalculate fontWidth for potential adjustment
    fontWidth = getFontWidth(fontSize);

    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + "px monospace";
        ctx.fillText(text, i * fontWidth, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 24);

// Function to set canvas height
function setCanvasHeight() {
    var bodyHeight = document.body.scrollHeight;
    canvas.height = bodyHeight;
}

// Initial setup
canvas.width = window.innerWidth;
setCanvasHeight();
setupDrops();

// Resize listener to adjust canvas dimensions
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    setCanvasHeight();
    setupDrops();
});