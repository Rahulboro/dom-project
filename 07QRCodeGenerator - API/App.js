// Function to generate the QR code
function generateQRCode(text) {
    const qrcodeElement = document.getElementById('qrcode');
    qrcodeElement.innerHTML = ''; // Clear previous QR code, if any
    const qrcode = new QRCode(qrcodeElement, {
      text: text,
      width: 128,
      height: 128
    });
  }
  
  // Event listener for the button click
  const generateButton = document.getElementById('submit');
  generateButton.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    generateQRCode(text);
  });
  