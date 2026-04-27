// FUNCIONES GENERALES
function recalcula() {
  recalculaAtributos();
  recalculaHabilidadesGenerales();
  recalculaHabilidadesDeAprendizaje();
  recalculaPoderes();
}

function elemento(nombre) {
  return document.getElementById(nombre);
}

function fuerza() {
  return +elemento('fuerza').value;
}

function constitucion() {
  return +elemento('constitucion').value;
}

function agilidad() {
  return +elemento('agilidad').value;
}

function inteligencia() {
  return +elemento('inteligencia').value;
}

function percepcion() {
  return +elemento('percepcion').value;
}

function apariencia() {
  return +elemento('apariencia').value;
}
