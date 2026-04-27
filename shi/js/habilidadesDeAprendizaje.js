// HABILIDADES DE APRENDIZAJE
function recalculaHabilidadesDeAprendizaje() {
  calculaAbrirCerraduras();
  calculaArco();
  calculaArmaduraDeCombate();
  calculaArmaCorta();
  calculaArmaLarga();
  calculaArmasMilitares();
  calculaArmasBlancas();
  calculaArmasEspeciales();
  calculaArtesMarciales();
  calculaCibernetica();
  calculaCiencia();
  calculaComputadoraComunicaciones();
  calculaConducirVehiculo();
  calculaExplosivos();
  calculaFarmacologia();
  calculaMecanica();
  calculaMedicinaGeneral();
  calculaMedicina();
  calculaMontarAnimal();
  calculaNadar();
  calculaOtroIdioma();
  calculaSistemasDeArmamento();
  calculaSupervivencia();
  calculaTrampas();
  calculaVaciarBolsillos();
}

function calculaAbrirCerraduras() {
  elemento('abrirCerraduras').innerHTML = Math.round(inteligencia() / 2);
}

function calculaArco() {
  elemento('arco').innerHTML = Math.round(2 * percepcion() / 3);
}

function calculaArmaduraDeCombate() {
  elemento('armaduraDeCombate').innerHTML = Math.round((inteligencia() + percepcion()) / 3);
}

function calculaArmaCorta() {
  elemento('armaCorta').innerHTML = Math.round(2 * percepcion() / 3);
}

function calculaArmaLarga() {
  elemento('armaLarga').innerHTML = Math.round(2 * percepcion() / 3);
}

function calculaArmasMilitares() {
  elemento('armasMilitares').innerHTML = Math.round(percepcion() / 3);
}

function calculaArmasBlancas() {
  elemento('armasBlancas').innerHTML = Math.round((agilidad() + percepcion()) / 3);
}

function calculaArmasEspeciales() {
  elemento('armasEspeciales').innerHTML = Math.round(2 * percepcion() / 3);
}

function calculaArtesMarciales() {
  elemento('artesMarciales').innerHTML = Math.round((agilidad() + percepcion()) / 3);
}

function calculaCibernetica() {
  elemento('cibernetica').innerHTML = Math.round(inteligencia() / 2);
}

function calculaCiencia() {
  elemento('ciencia').innerHTML = Math.round(inteligencia() / 3);
}

function calculaComputadoraComunicaciones() {
  elemento('computadoraComunicaciones').innerHTML = Math.round(inteligencia() / 2);
}

function calculaConducirVehiculo() {
  elemento('conducirVehiculo').innerHTML = Math.round((percepcion() + inteligencia()) / 4);
}

function calculaExplosivos() {
  elemento('explosivos').innerHTML = Math.round(inteligencia() / 2);
}

function calculaFarmacologia() {
  elemento('farmacologia').innerHTML = Math.round(inteligencia() / 2);
}

function calculaMecanica() {
  elemento('mecanica').innerHTML = Math.round(inteligencia() / 2);
}

function calculaMedicinaGeneral() {
  elemento('medicinaGeneral').innerHTML = Math.round(inteligencia() / 3);
}

function calculaMedicina() {
  elemento('medicina').innerHTML = Math.round(inteligencia() / 2);
}

function calculaMontarAnimal() {
  elemento('montarAnimal').innerHTML = Math.round(agilidad() / 2);
}

function calculaNadar() {
  elemento('nadar').innerHTML = Math.round((fuerza() + agilidad()) / 2);
}

function calculaOtroIdioma() {
  elemento('otroIdioma').innerHTML = Math.round(inteligencia() / 3);
}

function calculaSistemasDeArmamento() {
  elemento('sistemasDeArmamento').innerHTML = Math.round(percepcion() / 2);
}

function calculaSupervivencia() {
  elemento('supervivencia').innerHTML = Math.round(inteligencia() / 2);
}

function calculaTrampas() {
  elemento('trampas').innerHTML = Math.round(inteligencia());
}

function calculaVaciarBolsillos() {
  elemento('vaciarBolsillos').innerHTML = Math.round(agilidad() / 2);
}
