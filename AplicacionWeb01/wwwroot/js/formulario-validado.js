//const emailInput = document.getElementById('correoelectronico');
//const errorMessage = document.getElementById('error-message');

//emailInput.addEventListener('input', () => {
//    const email = emailInput.value;
//    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
//    if (regex.test(email)) {
//        errorMessage.style.display = 'none';
//    } else {
//        errorMessage.style.display = 'block';
//        errorMessage.textContent = 'Correo electrónico no válido';
//    }
//});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("correoelectronico");

    form.addEventListener("submit", function (event) {
        if (!validateEmail(emailInput.value)) {
            event.preventDefault();
            alert("Por favor, ingresa un correo electrónico válido.");
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});