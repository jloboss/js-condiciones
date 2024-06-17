/* Funcion Valida borde imagen*/

function borde() {
  const bordeImagen = document.querySelector("#imagen");
  if (bordeImagen.style.border == "2px solid red") {
    bordeImagen.style.border = "";
  } else {
    bordeImagen.style.border = "2px solid red";
  }
}
/* Fin Funcion Valida borde imagen*/

/*Funcion valida Stickers*/
var total = 0;

function contar() {
  total =
    Number(document.querySelector("#sticker01").value) +
    Number(document.querySelector("#sticker02").value) +
    Number(document.querySelector("#sticker03").value);

  if (total >= 11) {
    mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Llevas demasiados stickers";
    mensaje.classList.remove("text-white");
    mensaje.classList.add("text-red-500");
  } else {
    mensaje.innerHTML = "Llevas: " + total + " stickers";
    mensaje.classList.remove("text-white-500");
    mensaje.classList.add("text-white");
  }
}
/*Fin Funcion valida Stickers*/

/* Funcion Valida Password*/
function valida_password() {
  let seleccion1 = document.querySelector("#select1").value;
  let seleccion2 = document.querySelector("#select2").value;
  let seleccion3 = document.querySelector("#select3").value;

  let passwordIngresada = seleccion1 + seleccion2 + seleccion3;

  if (passwordIngresada === "911" || passwordIngresada === "714") {
    res_pass.innerHTML = "La password es correcta";
  } else {
    res_pass.innerHTML = "La password es incorrecta, intenta nuevamente";
  }
}
/*Fin Funcion Valida Password*/
