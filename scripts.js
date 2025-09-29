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


    // Función para obtener y mostrar la fecha y hora actual
 function mostrarFechaHora() {
      const ahora = new Date(); // Crear un objeto Date con la fecha y hora actual
      const fecha = ahora.toLocaleDateString(); // Obtener la fecha en formato local
      const hora = ahora.toLocaleTimeString(); // Obtener la hora en formato local

      // Mostrar la fecha y hora en el elemento con id "fecha-hora"
      document.getElementById('fecha-hora').textContent = `Fecha: ${fecha} | Hora: ${hora}`;
    }

    // Llamar a la función al cargar la página
    mostrarFechaHora();

    // Actualizar la hora cada segundo
    setInterval(mostrarFechaHora, 1000);

<script>
  document.getElementById('iaBtn').onclick = function() {
    window.location.href = 'ia.html';
  };
</script>

