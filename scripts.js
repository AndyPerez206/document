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
document.getElementById("btnPreguntar").addEventListener("click", async () => {
  const pregunta = document.getElementById("pregunta").value;
  const respuestaElemento = document.getElementById("respuesta");

  if (!pregunta.trim()) {
    respuestaElemento.innerText = "Por favor, escribe una pregunta.";
    return;
  }

  respuestaElemento.innerText = "Pensando... 🤔";

  try {

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: "write a haiku about ai",
        store: true,
        prompt: pregunta,
        max_tokens: 100000000000000000
      })
    });

    const data = await response.json();
    respuestaElemento.innerText = data.choices[0].text.trim();
  } catch (error) {
    console.error("Error:", error);
    respuestaElemento.innerText = "Hubo un error al obtener la respuesta.";
  }
});





