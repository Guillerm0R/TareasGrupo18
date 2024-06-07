document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const pais = document.getElementById('pais');
    const terminos = document.getElementById('terminos');

 
    if (nombre.value.trim() === "") {
        document.getElementById('error-nombre').innerText = "El nombre es obligatorio.";
        valid = false;
    } else {
        document.getElementById('error-nombre').innerText = "";
    }

  
    if (apellido.value.trim() === "") {
        document.getElementById('error-apellido').innerText = "El apellido es obligatorio.";
        valid = false;
    } else {
        document.getElementById('error-apellido').innerText = "";
    }

 
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

 
    if (fechaNacimiento.value.trim() === "") {
        document.getElementById('error-fechaNac').innerText = "La fecha de nacimiento es obligatoria.";
        valid = false;
    } else {
        document.getElementById('error-fechaNac').innerText = "";
    }

 
    if (pais.value.trim() === "") {
        document.getElementById('error-pais').innerText = "El país es obligatorio.";
        valid = false;
    } else {
        document.getElementById('error-pais').innerText = "";
    }

 
    if (!terminos.checked) {
        document.getElementById('error-terminos').innerText = "Debe aceptar los términos y condiciones.";
        valid = false;
    } else {
        document.getElementById('error-terminos').innerText = "";
    }

 
    if (valid) {
        const alertaRegistro = document.getElementById('alerta-registro');
        alertaRegistro.innerText = "Registro completo";
        alertaRegistro.style.display = 'block';
        alertaRegistro.style.color = 'red';

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    }
});
