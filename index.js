// Select element
const keyInfo = document.getElementById("key-info");

// respond when button is clicked
document.addEventListener("keydown", (e) => {
  keyInfo.innerHTML = `
    <strong>Key:</strong> ${e.key} <br/>
    <strong>Code:</strong> ${e.code} <br/>
    <strong>Shift:</strong> ${e.shiftKey} <br/>
    <strong>Alt:</strong> ${e.altKey} <br/>
    <strong>Ctrl:</strong> ${e.ctrlKey}
  `;
});