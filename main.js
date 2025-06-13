let dialog = document.getElementById('myDialog')
let moreInfo = document.getElementById('moreInfo')
let closeDialog = document.getElementById('closeDialog')

moreInfo.addEventListener('click', function() {
    dialog.showModal()
})

closeDialog.addEventListener('click', function() {
    dialog.close()
})

function login() {
  const usuario = document.getElementById("username").value.trim();
  const contraseña = document.getElementById("password").value.trim();

  if (!usuario && !contraseña) {
    alert("Los campos Usuario y contraseña son obligatorios");
      return false;
  }

  if (!usuario) {
    alert("El campo Usuario es obligatorio");
    return false;
  }

  if (!contraseña) {
    alert("El campo Contraseña es obligatorio");
    return false;
  }

  const usuarioValido = "Lean";
  const contraseñaValida = "2552";

  if (usuario === usuarioValido && contraseña === contraseñaValida) {
    alert("El inicio de sesión se realizó con éxito");
    window.location.href = "index.html";
    return true;
  } else {
    alert("Usuario o contraseña incorrectos");
    return false;
  }
}