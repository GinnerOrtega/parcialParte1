function validarCampoObligatorio(campo, errorElement, mensaje) {
    if (campo.value.trim() === '') {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
    if (campo.value.trim().length < min || campo.value.trim().length > max) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarCorreo(campo, errorElement, mensaje) {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(campo.value.trim())) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarTelefono(campo, errorElement, mensaje) {
    const telefonoRegex = /^[0-9]{7,10}$/;
    if (!telefonoRegex.test(campo.value.trim())) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarGenero(genero, errorElement, mensaje) {
    let seleccionado = false;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validarTerminos(campo, errorElement, mensaje) {
    if (!campo.checked) {
        errorElement.textContent = mensaje;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function mostrarMensajeExito() {
    Toastify({
        text: "✅ ¡Registro exitoso! Revisa tu correo para confirmar tu cuenta.",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "12px 20px"
        },
        stopOnFocus: true,
    }).showToast();
}

function validarFormulario() {

    const inputTipoIdentificacion = document.getElementById('identificacion');
    const inputIdentificacion = document.getElementById('numero-identificacion');
    const inputNombres = document.getElementById('nombres');
    const inputApellidos = document.getElementById('apellidos');
    const inputCorreoElectronico = document.getElementById('correo-electronico');
    const inputTelefono = document.getElementById('telefono');
    const inputGenero = document.getElementsByName('genero');
    const inputTerminos = document.getElementById('terminos');

    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const labelErrorNumeroIdentificacion = document.getElementById('errorNumeroIdentificacion');
    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    const labelErrorCorreo = document.getElementById('errorCorreo');
    const labelErrorTelefono = document.getElementById('errorTelefono');
    const labelErrorGenero = document.getElementById('errorGenero');
    const labelErrorTerminos = document.getElementById('errorTerminos');

    const tipoIdentificacionValida = validarCampoObligatorio(inputTipoIdentificacion, labelErrorTipoIdentificacion, 'El tipo de identificación es obligatorio.');
    const identificacionValida = validarCampoObligatorio(inputIdentificacion, labelErrorNumeroIdentificacion, 'El número de identificación es obligatorio.');
    const nombresValidos = validarLongitud(inputNombres, labelErrorNombres, 1, 30, 'El nombre debe tener entre 1 y 30 caracteres.');
    const apellidosValidos = validarLongitud(inputApellidos, labelErrorApellidos, 1, 30, 'El apellido debe tener entre 1 y 30 caracteres.');
    const correoValido = validarCorreo(inputCorreoElectronico, labelErrorCorreo, 'Ingresa un correo electrónico válido.');
    const telefonoValido = validarTelefono(inputTelefono, labelErrorTelefono, 'Ingresa un teléfono válido (solo números, 7 a 10 dígitos).');
    const generoValido = validarGenero(inputGenero, labelErrorGenero, 'El género es obligatorio.');
    const terminosValidos = validarTerminos(inputTerminos, labelErrorTerminos, 'Debes aceptar los términos y condiciones.');

    const formularioValido = tipoIdentificacionValida && identificacionValida && nombresValidos &&
        apellidosValidos && correoValido && telefonoValido && generoValido && terminosValidos;

    if (formularioValido) {
        mostrarMensajeExito();
        const formulario = document.getElementById('formularioRegistro');
        formulario.scrollIntoView({ behavior: "smooth", block: "start" });
        formulario.classList.add("was-validated");
        setTimeout(() => {
            formulario.reset();
        }, 2000);
        return false;
    } else {
        alert('Por favor, completa correctamente el formulario.');
        return false;
    }
}

function validarCamposAlCambiarFoco() {
    const inputTipoIdentificacion = document.getElementById('identificacion');
    const inputIdentificacion = document.getElementById('numero-identificacion');
    const inputNombres = document.getElementById('nombres');
    const inputApellidos = document.getElementById('apellidos');
    const inputCorreoElectronico = document.getElementById('correo-electronico');
    const inputTelefono = document.getElementById('telefono');
    const inputGenero = document.getElementsByName('genero');
    const inputTerminos = document.getElementById('terminos');

    const labelErrorTipoIdentificacion = document.getElementById('errorTipoIdentificacion');
    const labelErrorNumeroIdentificacion = document.getElementById('errorNumeroIdentificacion');
    const labelErrorNombres = document.getElementById('errorNombres');
    const labelErrorApellidos = document.getElementById('errorApellidos');
    const labelErrorCorreo = document.getElementById('errorCorreo');
    const labelErrorTelefono = document.getElementById('errorTelefono');
    const labelErrorGenero = document.getElementById('errorGenero');
    const labelErrorTerminos = document.getElementById('errorTerminos');

    inputTipoIdentificacion.addEventListener('blur', () => validarCampoObligatorio(inputTipoIdentificacion, labelErrorTipoIdentificacion, 'El tipo de identificación es obligatorio.'));
    inputIdentificacion.addEventListener('blur', () => validarCampoObligatorio(inputIdentificacion, labelErrorNumeroIdentificacion, 'El número de identificación es obligatorio.'));
    inputNombres.addEventListener('blur', () => validarLongitud(inputNombres, labelErrorNombres, 1, 30, 'El nombre debe tener entre 1 y 30 caracteres.'));
    inputApellidos.addEventListener('blur', () => validarLongitud(inputApellidos, labelErrorApellidos, 1, 30, 'El apellido debe tener entre 1 y 30 caracteres.'));
    inputCorreoElectronico.addEventListener('blur', () => validarCorreo(inputCorreoElectronico, labelErrorCorreo, 'Ingresa un correo electrónico válido.'));
    inputTelefono.addEventListener('blur', () => validarTelefono(inputTelefono, labelErrorTelefono, 'Ingresa un teléfono válido (solo números, 7 a 10 dígitos).'));
    Array.from(inputGenero).forEach(input => input.addEventListener('blur', () => validarGenero(inputGenero, labelErrorGenero, 'El género es obligatorio.')));
    inputTerminos.addEventListener('blur', () => validarTerminos(inputTerminos, labelErrorTerminos, 'Debes aceptar los términos y condiciones.'));
}

document.addEventListener('DOMContentLoaded', validarCamposAlCambiarFoco);
