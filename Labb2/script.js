// Function to change background color of CV content
function changeBackgroundColor() {
    const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5'];
    const cvContent = document.getElementById('cv-content');
    if (cvContent) {
        cvContent.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
}

// Easter egg - Show modal on key sequence
let inputSequence = '';
const secretCode = '1337';

document.addEventListener('keydown', (event) => {
    inputSequence += event.key;

    if (inputSequence.endsWith(secretCode)) {
        document.getElementById('easter-egg-modal').style.display = 'flex';
        inputSequence = ''; // Reset input sequence
    }

    // Limit the length of the input sequence to avoid overflow
    if (inputSequence.length > secretCode.length) {
        inputSequence = inputSequence.slice(-secretCode.length);
    }
});