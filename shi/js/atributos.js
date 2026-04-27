// ATRIBUTOS
function recalculaAtributos() {
  calculaPuntosDeVida();
  calculaInconsciencia();
  calculaRecuperacionPuntosDeVidaPorHora();
  calculaDanyoAbsorbido();
  calculaAccionesPorAsalto();
  calculaIniciativaReflejos();
  calculaParada();
  calculaResistenciaAGasesYVenenos();
  calculaSalto();
  calculaPesoLevantado();
  calculaDanyoEnFuncionDeLaFuerza();
  calculaCombateCuerpoACuerpo();
}

function calculaPuntosDeVida() {
  var puntosDeVida;
  if (constitucion() < 101)
    puntosDeVida = constitucion();
  else
    puntosDeVida = 2 * constitucion() - 10 * (10 - Math.floor((constitucion() - 91) / 10));
  elemento('puntosDeVida').innerHTML = puntosDeVida;
}

function calculaInconsciencia() {
  var inconsciencia;
  if (constitucion() < 101)
    inconsciencia = - Math.round(constitucion() / 2);
  else
    inconsciencia = -constitucion() + 5 * (10 - Math.floor((constitucion() - 91) / 10));
  elemento('inconsciencia').innerHTML = inconsciencia;
}

function calculaRecuperacionPuntosDeVidaPorHora() {
  var recuperacionPuntosDeVidaPorHora;
  if (constitucion() < 101)
    recuperacionPuntosDeVidaPorHora = 1;
  else if (constitucion() < 131)
    recuperacionPuntosDeVidaPorHora = 2 * Math.floor((constitucion() - 91) / 10);
  else
    recuperacionPuntosDeVidaPorHora = 5 * Math.floor((constitucion() - 111) / 10);
  elemento('recuperacionPuntosDeVidaPorHora').innerHTML = recuperacionPuntosDeVidaPorHora;
}

function calculaDanyoAbsorbido() {
  var danyoAbsorbido;
  if (constitucion() < 101)
    danyoAbsorbido = 0;
  else
    danyoAbsorbido = 15 * Math.floor((constitucion() - 91) / 10);
  elemento('danyoAbsorbido').innerHTML = danyoAbsorbido;
}

function calculaAccionesPorAsalto() {
  var accionesPorAsalto;
  if (agilidad() < 76)
    accionesPorAsalto = 1;
  else if (agilidad() < 91)
    accionesPorAsalto = 2;
  else if (agilidad() < 131)
    accionesPorAsalto = 3;
  else if (agilidad() < 176)
    accionesPorAsalto = 4;
  else if (agilidad() < 200)
    accionesPorAsalto = 5;
  else
    accionesPorAsalto = 6;
  elemento('accionesPorAsalto').innerHTML = accionesPorAsalto;
}

function calculaIniciativaReflejos() {
  elemento('iniciativaReflejos').innerHTML = Math.round(agilidad() / 2);
}

function calculaParada() {
  var parada;
  if (agilidad() < 101)
    parada = agilidad() / 4;
  else if (agilidad() < 116)
    parada = 30;
  else if (agilidad() < 131)
    parada = 40;
  else if (agilidad() < 146)
    parada = 50;
  else if (agilidad() < 161)
    parada = 55;
  else if (agilidad() < 176)
    parada = 60;
  else if (agilidad() < 191)
    parada = 65;
  else if (agilidad() < 196)
    parada = 70;
  else if (agilidad() < 200)
    parada = 75;
  else
    parada = 80;
  elemento('parada').innerHTML = Math.round(parada);
}

function calculaResistenciaAGasesYVenenos() {
  elemento('resistenciaAGasesYVenenos').innerHTML = Math.round(constitucion() / 3);
}

function calculaSalto() {
  var modificadorSaltoPorFuerza;
  if (fuerza() < 101)
    modificadorSaltoPorFuerza = 1;
  else if (fuerza() < 121)
    modificadorSaltoPorFuerza = 2;
  else if (fuerza() < 141)
    modificadorSaltoPorFuerza = 5;
  else if (fuerza() < 161)
    modificadorSaltoPorFuerza = 10;
  else if (fuerza() < 181)
    modificadorSaltoPorFuerza = 20;
  else if (fuerza() < 200)
    modificadorSaltoPorFuerza = 40;
  else
    modificadorSaltoPorFuerza = 100;
  var saltoBase;
  if (agilidad() < 76)
    saltoBase = agilidad() / 12;
  else if(agilidad() < 91)
    saltoBase = agilidad() / 11;
  else if(agilidad() < 101)
    saltoBase = agilidad() / 10;
  else if(agilidad() < 116)
    saltoBase = agilidad() / 10;
  else if(agilidad() < 131)
    saltoBase = agilidad() / 9;
  else if(agilidad() < 146)
    saltoBase = agilidad() / 9;
  else if(agilidad() < 161)
    saltoBase = agilidad() / 8;
  else if(agilidad() < 176)
    saltoBase = agilidad() / 8;
  else if(agilidad() < 191)
    saltoBase = agilidad() / 7;
  else if(agilidad() < 196)
    saltoBase = agilidad() / 6;
  else if(agilidad() < 200)
    saltoBase = agilidad() / 5;
  else
    saltoBase = agilidad() / 4;
  elemento('salto').innerHTML = Math.round(modificadorSaltoPorFuerza * saltoBase);
}

function calculaPesoLevantado() {
  var pesoLevantado;
  if (fuerza() < 76)
    pesoLevantado = fuerza();
  else if (fuerza() < 91)
    pesoLevantado = 2 * fuerza();
  else if (fuerza() < 100)
    pesoLevantado = 3 * fuerza();
  else if (fuerza() < 101)
    pesoLevantado = 500;
  else if (fuerza() < 103)
    pesoLevantado = 1000;
  else if (fuerza() < 117)
    pesoLevantado = 2000 * Math.floor((fuerza() - 101) / 2);
  else if (fuerza() < 118)
    pesoLevantado = 16000;
  else if (fuerza() < 119)
    pesoLevantado = 18000;
  else if (fuerza() < 120)
    pesoLevantado = 19000;
  else
    pesoLevantado = 1000 * (fuerza() - 100);
  elemento('pesoLevantado').innerHTML = pesoLevantado;
}

function calculaDanyoEnFuncionDeLaFuerza() {
  var danyoEnFuncionDeLaFuerza;
  if (fuerza() < 76)
    danyoEnFuncionDeLaFuerza = '1d4';
  else if (fuerza() < 91)
    danyoEnFuncionDeLaFuerza = '1d4+2';
  else if (fuerza() < 100)
    danyoEnFuncionDeLaFuerza = '1d4+4';
  else if (fuerza() < 101)
    danyoEnFuncionDeLaFuerza = '1d6+4';
  else if (fuerza() < 103)
    danyoEnFuncionDeLaFuerza = '1d8+1d10';
  else if (fuerza() < 105)
    danyoEnFuncionDeLaFuerza = '2d10';
  else if (fuerza() < 107)
    danyoEnFuncionDeLaFuerza = '3d10';
  else if (fuerza() < 109)
    danyoEnFuncionDeLaFuerza = '4d10';
  else if (fuerza() < 111)
    danyoEnFuncionDeLaFuerza = '5d10';
  else if (fuerza() < 113)
    danyoEnFuncionDeLaFuerza = '5d10+5';
  else if (fuerza() < 115)
    danyoEnFuncionDeLaFuerza = '5d10+10';
  else if (fuerza() < 117)
    danyoEnFuncionDeLaFuerza = '5d10+15';
  else if (fuerza() < 118)
    danyoEnFuncionDeLaFuerza = '5d10+20';
  else if (fuerza() < 119)
    danyoEnFuncionDeLaFuerza = '5d10+25';
  else if (fuerza() < 120)
    danyoEnFuncionDeLaFuerza = '1d100';
  else
    danyoEnFuncionDeLaFuerza = '1d100+' + (fuerza() - 100);
  elemento('danyoEnFuncionDeLaFuerza').innerHTML = danyoEnFuncionDeLaFuerza;
}

function calculaCombateCuerpoACuerpo() {
  elemento('combateCuerpoACuerpo').innerHTML = Math.round((agilidad() + percepcion()) / 2);
}
