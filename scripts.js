/* scripts.js */
document.addEventListener("DOMContentLoaded", () => {
    const notes = localStorage.getItem("textNotes");
    if (notes) {
        document.getElementById("textNotes").value = notes;
    }
});

function sendEmail() {
    const notes = document.getElementById("textNotes").value;
    const email = prompt("Ingrese el correo electrónico de destino:");
    if (email) {
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: email,
                subject: 'Tus Notas',
                text: notes
            })
        }).then(response => response.text())
          .then(result => alert(result))
          .catch(error => console.error('Error:', error));
    }
}

function contactWhatsApp() {
    // Reemplaza 51987654321 por tu número de WhatsApp (incluye el código de país)
    window.open("https://wa.me/51997531712", "_blank");
}



function clearNotes() {
    if (confirm("¿Estás seguro de que deseas borrar las notas?")) {
        document.getElementById("textNotes").value = "";
        localStorage.removeItem("textNotes");
    }
}


/* IA */
async function obtenerRespuesta(pregunta) {
  const response = await fetch("https://api.tu-ia.com/v1/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer TU_API_KEY"
    },
    body: JSON.stringify({
      prompt: pregunta,
      max_tokens: 100
    })
  });

  const data = await response.json();
  document.getElementById("respuesta").innerText = data.choices[0].text;
}




