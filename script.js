const qrForm = document.getElementById("qr-form");
const qrText = document.getElementById("qr-text");
const qrCodeDiv = document.getElementById("qr-code");
const downloadLink = document.getElementById("download-link");

let qr;

qrForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous QR code
  qrCodeDiv.innerHTML = "";
  downloadLink.classList.add("hidden");

  const text = qrText.value.trim();
  if (text === "") return;

  // Generate QR Code
  qr = new QRCode(qrCodeDiv, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });

  // Small delay to ensure canvas is ready
  setTimeout(() => {
    const canvas = qrCodeDiv.querySelector("canvas");
    if (canvas) {
      const qrImage = canvas.toDataURL("image/png");
      downloadLink.href = qrImage;
      downloadLink.classList.remove("hidden");
    }
  }, 300);
});
