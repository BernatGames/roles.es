// ATRIBUTOS
function recalculaPoderes() {
  //calculaAbsorcionDeEnergias();
  calculaAbsorcionDePoderes();
  calculaAbsorcionDeVida();
  calculaAdherencia();
  calculaAgresionPsionica();
  calculaAlteracionDeLaDensidad();
  calculaAnulacionDePoderes();
  //calculaBlindajeNatural();
  calculaCambioDeEstado();
  calculaCambioDeTamanyo();
  calculaCampoDeFuerza();
  calculaCongelacion();
  calculaControlDeLaFloraYVegetacion();
  calculaControlDeLaGeodinamica();
  calculaControlDeLaTemperaturaDeLosCuerposOrganicos();
  calculaControlDeLasMoleculasAjenas();
  calculaControlDeOtrasEnergias();
  calculaControlDelAgua();
  calculaControlDelClima();
  calculaControlDelFuego();
  calculaControlMuscular();
  calculaDominacionMental();
  calculaDonacionDeVida();
  calculaElasticidad();
  calculaEmisionDeOtrasEnergias();
  calculaEmpatiaAnimal();
  calculaEmpatiaMental();
  calculaEmpatiaTecnologica();
  calculaExplosividad();
  calculaFusion();
  calculaGritoSonico();
  //calculaInmortalidad();
  calculaInvisibilidad();
  //calculaInvulnerabilidad();
  calculaMalaSuerte();
  //calculaMultiformidadAnimalUnica();
  //calculaMultiformidadEnAnimales();
  //calculaMultiformidadEnObjetos();
  //calculaMultiformidadEnPersonas();
  calculaPlasticidad();
  calculaPolilocalizacion();
  calculaPrecognicion();
  //calculaRegeneracionDeTejidos();
  //calculaSuperagilidad();
  //calculaSuperapariencia();
  //calculaSuperconstitucion();
  //calculaSuperfuerza();
  //calculaSuperinteligencia();
  //calculaSuperpercepcion();
  //calculaSupervelocidad();
  calculaTelepatia();
  calculaTeleportacion();
  calculaTelequinesis();
  calculaTraduccionDeLenguas();
  calculaVolar();
}

function calculaAbsorcionDeEnergias() {
  elemento('absorcionDeEnergias').innerHTML = '-';
}

function calculaAbsorcionDePoderes() {
  elemento('absorcionDePoderes').innerHTML = Math.round(constitucion() / 2);
}

function calculaAbsorcionDeVida() {
  elemento('absorcionDeVida').innerHTML = Math.round((constitucion() + percepcion()) / 2);
}

function calculaAdherencia() {
  elemento('adherencia').innerHTML = Math.round((fuerza() + agilidad()) / 2);
}

function calculaAgresionPsionica() {
  elemento('agresionPsionica').innerHTML = Math.round((inteligencia() + percepcion()) / 2);
}

function calculaAlteracionDeLaDensidad() {
  elemento('alteracionDeLaDensidad').innerHTML = Math.round(constitucion() / 2);
}

function calculaAnulacionDePoderes() {
  elemento('anulacionDePoderes').innerHTML = Math.round(constitucion() / 2);
}

function calculaBlindajeNatural() {
  elemento('blindajeNatural').innerHTML = '-';
}

function calculaCambioDeEstado() {
  elemento('cambioDeEstado').innerHTML = Math.round(constitucion() / 2);
}

function calculaCambioDeTamanyo() {
  elemento('cambioDeTamanyo').innerHTML = Math.round(constitucion());
}

function calculaCampoDeFuerza() {
  elemento('campoDeFuerza').innerHTML = Math.round(constitucion());
}

function calculaCongelacion() {
  elemento('congelacion').innerHTML = Math.round(percepcion() / 2);
}

function calculaControlDeLaFloraYVegetacion() {
  elemento('controlDeLaFloraYVegetacion').innerHTML = Math.round(percepcion() / 2);
}

function calculaControlDeLaGeodinamica() {
  elemento('controlDeLaGeodinamica').innerHTML = Math.round((constitucion() + percepcion()) / 2);
}

function calculaControlDeLaTemperaturaDeLosCuerposOrganicos() {
  elemento('controlDeLaTemperaturaDeLosCuerposOrganicos').innerHTML = Math.round(percepcion());
}

function calculaControlDeLasMoleculasAjenas() {
  elemento('controlDeLasMoleculasAjenas').innerHTML = Math.round(percepcion() / 2);
}

function calculaControlDeOtrasEnergias() {
  elemento('controlDeOtrasEnergias').innerHTML = Math.round(constitucion() / 2);
}

function calculaControlDelAgua() {
  elemento('controlDelAgua').innerHTML = Math.round((constitucion() + percepcion()) / 3);
}

function calculaControlDelClima() {
  elemento('controlDelClima').innerHTML = Math.round((constitucion() + percepcion()) / 2);
}

function calculaControlDelFuego() {
  elemento('controlDelFuego').innerHTML = Math.round((inteligencia() + percepcion()) / 2);
}

function calculaControlMuscular() {
  elemento('controlMuscular').innerHTML = Math.round(percepcion() / 2);
}

function calculaDominacionMental() {
  elemento('dominacionMental').innerHTML = Math.round((inteligencia() + percepcion()) / 2);
}

function calculaDonacionDeVida() {
  elemento('donacionDeVida').innerHTML = Math.round(constitucion());
}

function calculaElasticidad() {
  elemento('elasticidad').innerHTML = Math.round(agilidad());
}

function calculaEmisionDeOtrasEnergias() {
  elemento('emisionDeOtrasEnergias').innerHTML = Math.round(percepcion() / 2);
}

function calculaEmpatiaAnimal() {
  elemento('empatiaAnimal').innerHTML = Math.round(percepcion() / 2);
}

function calculaEmpatiaMental() {
  elemento('empatiaMental').innerHTML = Math.round((inteligencia() + percepcion()) / 2);
}

function calculaEmpatiaTecnologica() {
  elemento('empatiaTecnologica').innerHTML = Math.round(percepcion() / 2);
}

function calculaExplosividad() {
  elemento('explosividad').innerHTML = Math.round(constitucion());
}

function calculaFusion() {
  elemento('fusion').innerHTML = Math.round((fuerza() + constitucion()) / 2);
}

function calculaGritoSonico() {
  elemento('gritoSonico').innerHTML = Math.round(constitucion());
}

function calculaInmortalidad() {
  elemento('inmortalidad').innerHTML = '-';
}

function calculaInvisibilidad() {
  elemento('invisibilidad').innerHTML = Math.round(constitucion() / 2);
}

function calculaInvulnerabilidad() {
  elemento('invulnerabilidad').innerHTML = '-';
}

function calculaMalaSuerte() {
  elemento('malaSuerte').innerHTML = Math.round(percepcion() / 2);
}

function calculaMultiformidadAnimalUnica() {
  elemento('multiformidadAnimalUnica').innerHTML = '?';
}

function calculaMultiformidadEnAnimales() {
  elemento('multiformidadEnAnimales').innerHTML = '?';
}

function calculaMultiformidadEnObjetos() {
  elemento('multiformidadEnObjetos').innerHTML = '?';
}

function calculaMultiformidadEnPersonas() {
  elemento('multiformidadEnPersonas').innerHTML = '?';
}

function calculaPlasticidad() {
  elemento('plasticidad').innerHTML = Math.round(constitucion() / 2);
}

function calculaPolilocalizacion() {
  elemento('polilocalizacion').innerHTML = Math.round(constitucion() / 2);
}

function calculaPrecognicion() {
  elemento('precognicion').innerHTML = Math.round(percepcion() / 2);
}

function calculaRegeneracionDeTejidos() {
  elemento('regeneracionDeTejidos').innerHTML = '-';
}

function calculaSuperagilidad() {
  elemento('superagilidad').innerHTML = '-';
}

function calculaSuperapariencia() {
  elemento('superapariencia').innerHTML = '-';
}

function calculaSuperconstitucion() {
  elemento('superconstitucion').innerHTML = '-';
}

function calculaSuperfuerza() {
  elemento('superfuerza').innerHTML = '-';
}

function calculaSuperinteligencia() {
  elemento('superinteligencia').innerHTML = '-';
}

function calculaSuperpercepcion() {
  elemento('superpercepcion').innerHTML = '-';
}

function calculaSupervelocidad() {
  elemento('supervelocidad').innerHTML = '-';
}

function calculaTelepatia() {
  elemento('telepatia').innerHTML = Math.round((inteligencia() + percepcion()) / 2);
}

function calculaTeleportacion() {
  elemento('teleportacion').innerHTML = '?';
}

function calculaTelequinesis() {
  elemento('telequinesis').innerHTML = Math.round(percepcion());
}

function calculaTraduccionDeLenguas() {
  elemento('traduccionDeLenguas').innerHTML = Math.round((inteligencia() + percepcion()) / 2);
}

function calculaVolar() {
  elemento('volar').innerHTML = Math.round(agilidad() / 2);
}
