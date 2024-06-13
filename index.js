function updateSignature() {
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const signatureHTML = `
        <p><strong>${name}</strong></p>
        <p>${position}</p>
        <p>P: ${phone} | E: <a href="mailto:${email}">${email}</a> | <a href="https://www.shakudo.io/">Shakudo - The Data & AI Operating System</a></p>
        <p>SOC 2 Certified | GCP, AWS Cloud Partners | Certified NVIDIA MLOps Tool</p>
        <img src="https://uploads-ssl.webflow.com/625447c67b621ab49bb7e3e5/66636fc84c7ea5feb10d7d22_shakudo-emailsig-quote-v2.gif   " alt="Company Logo" style="width: 624px; height: 118.67px;">
    `;

  document.getElementById("signature").innerHTML = signatureHTML;
}

function copySignature() {
  const signature = document.getElementById("signature").innerHTML;
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = signature;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);
  alert("Signature copied to clipboard");
}

// Initialize the signature area with empty inputs
updateSignature();
