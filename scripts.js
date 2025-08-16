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

import { animate, stagger, text } from 'animejs';

const { chars } = text.split('h2', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});


function clearNotes() {
    if (confirm("¿Estás seguro de que deseas borrar las notas?")) {
        document.getElementById("textNotes").value = "";
        localStorage.removeItem("textNotes");
    }
}


