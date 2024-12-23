const sendMessage = (id, event) => {

    const userName = document.getElementById('name').value || null;
    const message = document.getElementById('message').value || null;
    const idEvent = id;
    var waMessage;
    // Aquí defines el número de teléfono al cual se enviará el mensaje. Debe estar en formato internacional.
    const phoneNumber = "523318522551"; // Reemplaza con el número de WhatsApp al que quieres enviar el mensaje.
  
    switch (idEvent) {
      case 0:
        waMessage=`Hola, Me interesa desarrollar una web estatica.`;
      break;
      case 1:
        waMessage=`Hola, Me interesa desarrollar una web estatica.`;
      break;

      case 'wh':
        if (!userName || !message) {
          alert("Por favor, completa tu nombre y el mensaje."); // Validación simple
          return; // Salir de la función si falta información
      }
        waMessage=`Hola, soy ${userName}. ${message}`;
      break;
    
      default:
      break;
    }
    // Codificamos el mensaje para que sea válido en una URL
    const encodedMessage = encodeURIComponent(waMessage);
  
    // Creamos el enlace a WhatsApp
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Redirigimos al usuario a la aplicación de WhatsApp
    window.open(waLink, '_blank');
  };
  
  export default sendMessage;
  