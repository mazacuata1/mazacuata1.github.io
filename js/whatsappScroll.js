// Redirección al chat de WhatsApp
document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/55200551313', '_blank'); // Reemplaza '1234567890' con tu número de WhatsApp
});

// Ocultar botón y mensaje de WhatsApp al llegar al footer
window.addEventListener('scroll', function() {
    var whatsappButton = document.getElementById('whatsapp-button');
    var whatsappMessage = document.getElementById('whatsapp-message');
    var footer = document.querySelector('footer');
    var footerTop = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        whatsappButton.style.display = 'none';
        whatsappMessage.style.display = 'none';
    } else {
        whatsappButton.style.display = 'flex';
        whatsappMessage.style.display = 'block';
    }
});