$(document).ready(function() {
    $('.show-info-btn').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('.details-content').slideToggle();
        let buttonText = $(this).text();
        if (buttonText === 'Ver Detalles') {
            $(this).text('Ocultar Detalles');
        } else {
            $(this).text('Ver Detalles');
        }
    });
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); 
        const formMessage = $('#formMessage');
        const email = $('#email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            formMessage.removeClass('d-none alert-danger').addClass('alert alert-success');
            formMessage.text('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            $('#contactForm')[0].reset(); o
        } else {
            formMessage.removeClass('d-none alert-success').addClass('alert alert-danger');
            formMessage.text('Por favor, ingresa un correo electrónico válido.');
        }
        formMessage.slideDown();
    });
});