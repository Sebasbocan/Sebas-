const inputNombre = document.getElementById("nombre-usuario");
const inputCorreo = document.getElementById("correo");

function validarCampos() {
    let error = false;

    if (inputNombre.value.trim() === "") {
        inputNombre.classList.add("input-error");
        error = true;
    } else {
        inputNombre.classList.remove("input-error");
    }

    if (inputCorreo.value.trim() === "") {
        inputCorreo.classList.add("input-error");
        error = true;
    } else {
        inputCorreo.classList.remove("input-error");
    }

    return error;
}
document.querySelector(".guardar-formulario").addEventListener("click", function (e) {
    e.preventDefault();

    if (validarCampos()) {
        alert("Complete los campos obligatorios.");
    }
});