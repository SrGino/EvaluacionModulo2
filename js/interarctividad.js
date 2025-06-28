$(document).ready(function() {

    // --- Lógica para la página de Amenazas Comunes ---
    // Usamos jQuery para mostrar/ocultar los detalles de las amenazas
    $('.show-info-btn').on('click', function(e) {
        e.preventDefault(); // Evita que el enlace recargue la página
        // Encuentra el card-footer asociado y lo muestra/oculta con un efecto
        $(this).closest('.card').find('.details-content').slideToggle();
        
        // Cambiar el texto del botón
        let buttonText = $(this).text();
        if (buttonText === 'Ver Detalles') {
            $(this).text('Ocultar Detalles');
        } else {
            $(this).text('Ver Detalles');
        }
    });

    // --- Lógica para la página de Consejos de Seguridad ---

    // 1. Validación del Formulario de Contacto
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario
        const formMessage = $('#formMessage');
        const email = $('#email').val();
        
        // Expresión regular simple para validar el formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            // Validación exitosa
            formMessage.removeClass('d-none alert-danger').addClass('alert alert-success');
            formMessage.text('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            $('#contactForm')[0].reset(); // Limpia el formulario
        } else {
            // Validación fallida
            formMessage.removeClass('d-none alert-success').addClass('alert alert-danger');
            formMessage.text('Por favor, ingresa un correo electrónico válido.');
        }
        formMessage.slideDown(); // Muestra el mensaje con animación
    });
    // 2. Lógica del Test de Seguridad (Modal)
    const testModal = new bootstrap.Modal(document.getElementById('securityTestModal'));
    $('#openTestModalBtn').on('click', function() {
        testModal.show(); // Muestra el modal del test
    });
    $('#testForm').on('submit', function(e) {
        e.preventDefault();
        const resultsDiv = $('#testResults');
        const q1Answer = $('input[name="q1"]:checked').val();
        const q2Answer = $('input[name="q2"]:checked').val();
        let score = 0;
        let feedback = '';
        if (q1Answer === 'correct') {
            score++;
        }
        if (q2Answer === 'correct') {
            score++;
        }
        if (score === 2) {
            feedback = '<p class="text-success fw-bold">¡Excelente! Eres un experto en ciberseguridad. Sigue así.</p>';
        } else if (score === 1) {
            feedback = '<p class="text-warning fw-bold">¡Bien! Tienes conocimientos básicos. Revisa los consejos para mejorar.</p>';
        } else {
            feedback = '<p class="text-danger fw-bold">¡Necesitas mejorar! Revisa la sección de consejos para protegerte mejor.</p>';
        }
        resultsDiv.html(feedback).removeClass('d-none').slideDown();
    });
});