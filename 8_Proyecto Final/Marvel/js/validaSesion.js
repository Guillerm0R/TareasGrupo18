document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;

   
    const email = document.getElementById('email');
    const password = document.getElementById('password');

     
    if (email.value.trim() === "") {
        document.getElementById('error-email').innerText = "El email es obligatorio.";
        valid = false;
    } else {
        document.getElementById('error-email').innerText = "";
    }

     
    if (password.value.trim() === "") {
        document.getElementById('error-password').innerText = "La contraseña es obligatoria.";
        valid = false;
    } else {
        document.getElementById('error-password').innerText = "";
    }

     
    if (valid) {
        window.location.href = "http://localhost:8080/peliapp/";
    }
});
