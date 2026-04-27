// HABILIDADES GENERALES
function recalculaHabilidadesGenerales() {
  calculaAcecharDiscrecion();
  calculaBuscarReferencias();
  calculaConocimientosGenerales();
  calculaEquilibrioMental();
  calculaEsconderse();
  calculaIdea();
  calculaIdiomaNativo();
  calculaInfluencia();
  calculaLanzar();
  calculaPrimerosAuxilios();
  calculaRastrear();
  calculaSuerte();
  calculaTreparSaltar();
}

function calculaAcecharDiscrecion() {
  elemento('acecharDiscrecion').innerHTML = Math.round((agilidad() + percepcion()) / 2);
}

function calculaBuscarReferencias() {
  elemento('buscarReferencias').innerHTML = Math.round(inteligencia() - 10);
}

function calculaConocimientosGenerales() {
  elemento('conocimientosGenerales').innerHTML = Math.round(inteligencia() / 3);
}

function calculaEquilibrioMental() {
  elemento('equilibrioMental').innerHTML = Math.round(inteligencia());
}

function calculaEsconderse() {
  elemento('esconderse').innerHTML = Math.round((agilidad() + percepcion()) / 4);
}

function calculaIdea() {
  elemento('idea').innerHTML = Math.round(inteligencia() / 2);
}

function calculaIdiomaNativo() {
  elemento('idiomaNativo').innerHTML = Math.round(inteligencia());
}

function calculaInfluencia() {
  elemento('influencia').innerHTML = Math.round((inteligencia() + apariencia()) / 2);
}

function calculaLanzar() {
  elemento('lanzar').innerHTML = Math.round((fuerza() + percepcion()) / 2);
}

function calculaPrimerosAuxilios() {
  elemento('primerosAuxilios').innerHTML = Math.round(inteligencia() / 2);
}

function calculaRastrear() {
  elemento('rastrear').innerHTML = Math.round((inteligencia() + percepcion()) / 4);
}

function calculaSuerte() {
  elemento('suerte').innerHTML = Math.round(percepcion() / 2);
}

function calculaTreparSaltar() {
  elemento('treparSaltar').innerHTML = Math.round(agilidad());
}
