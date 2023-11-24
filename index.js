// Get DOM elements
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const convertBtn = document.getElementById('convertBtn');
const hexOutput = document.getElementById('hex');

// Add event listener to the convert button
convertBtn.addEventListener('click', convertRGBToHex);

// Function to convert RGB to Hex
function convertRGBToHex() {
  const red = parseInt(redInput.value);
  const green = parseInt(greenInput.value);
  const blue = parseInt(blueInput.value);

  if (isNaN(red) || isNaN(green) || isNaN(blue)) {
    hexOutput.value = 'Invalid RGB values';
    return;
  }

  if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
    hexOutput.value = 'RGB values must be between 0 and 255';
    return;
  }

  const hex = '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  hexOutput.value = hex;
}