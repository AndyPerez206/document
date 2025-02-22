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

function sendWhatsApp() {
    const notes = document.getElementById("textNotes").value;
    const whatsappNumber = prompt("Ingrese el número de WhatsApp de destino:");
    if (whatsappNumber) {
        window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(notes)}`, "_blank");
    }
}

function clearNotes() {
    if (confirm("¿Estás seguro de que deseas borrar las notas?")) {
        document.getElementById("textNotes").value = "";
        localStorage.removeItem("textNotes");
    }
}

function submitContact