// ************************************
// *                                  *
// *  Calculadora de Impactos         *
// *  Autor: Bernat Garrigues Serra   *
// *  email: bernatgs@hotmail.com     *
// *  Última actualización: 20090922  *
// *                                  *
// ************************************



function CambiaOpciones(formulario)
{
	if (formulario.CaCoDistancia[0].checked) // CaC
	{
		formulario.HAD.disabled = false;
		formulario.HADMenos.disabled = false;
		formulario.HADMas.disabled = false;
		//formulario.HAD.value = 4;
		formulario.TSCD.disabled = true;
		formulario.TSCMenos.disabled = true;
		formulario.TSCMas.disabled = true;
		formulario.Asaltando.disabled = false;
		formulario.noTSC.disabled = true;
	}
	else
	{
		formulario.HAD.disabled = true;
		formulario.HADMenos.disabled = true;
		formulario.HADMas.disabled = true;
		//formulario.HAD.value = "-";
		formulario.TSCD.disabled = false;
		formulario.TSCMenos.disabled = false;
		formulario.TSCMas.disabled = false;
		formulario.Asaltando.disabled = true;
		formulario.noTSC.disabled = false;
	}
}


function CalculaImpactos(formulario)
{
	NumAtaques = parseInt(formulario.AtaquesA.value);
	if (formulario.CaCoDistancia[0].checked && formulario.Asaltando.checked)
		NumAtaques++;

	// Probabilidad de impactar
	if (formulario.AutoImpactar.checked)
		ProbImpactar = 1;
	else {
		if (formulario.CaCoDistancia[0].checked)
		{
			if (formulario.HAD.value == "-")
				ProbImpactar = 0.5;
			else if (formulario.HAA.value > formulario.HAD.value)
				ProbImpactar = 2/3;
			else if (formulario.HAA.value >= 0.5*formulario.HAD.value)
				ProbImpactar = 0.5;
			else
				ProbImpactar = 1/3;
		}
		else
		{
			ProbImpactar = (7 - Math.max(2, (7 - formulario.HAA.value))) / 6;
			if (formulario.HAA.value >= 6)
				ProbImpactar = ProbImpactar + (1 - ProbImpactar) * (7 - (7 - (formulario.HAA.value - 5))) / 6;
		}
		if (formulario.RepiteImpactar.checked)
			ProbImpactar = ProbImpactar + (1 - ProbImpactar) * ProbImpactar;
	}

	// Probabilidad de herir
	if (formulario.ResistenciaD.value > parseInt(formulario.FuerzaA.value) + 3)
	{
		if (formulario.ArmasAceradas.checked)
			ProbHerir = 1/6;
		else
			ProbHerir = 0;
	} else if (formulario.ResistenciaD.value == parseInt(formulario.FuerzaA.value) + 3)
	{
		ProbHerir = 1/6;
	} else
		ProbHerir = (7 - Math.max(2, formulario.ResistenciaD.value - formulario.FuerzaA.value + 4)) / 6;
	if (formulario.RepiteHerir.checked)
		ProbHerir = ProbHerir + (1 - ProbHerir) * ProbHerir;
	else if (formulario.RepiteHerirUnaVez.checked)
		ProbHerir = ProbHerir + (1 - ProbHerir) * ProbHerir / NumAtaques;

	// Probabilidad de salvar
	if (!formulario.noTSa.checked && isFinite(formulario.TSaD.value))
		PrTSa = (7 - formulario.TSaD.value) / 6;
	else
		PrTSa = 0;
	if (!formulario.noTSi.checked && isFinite(formulario.TSiD.value))
		PrTSi = (7 - formulario.TSiD.value) / 6;
	else
		PrTSi = 0;
	if (formulario.CaCoDistancia[1].checked && !formulario.noTSC.checked && isFinite(formulario.TSCD.value))
		PrTSC = (7 - formulario.TSCD.value) / 6;
	else
		PrTSC = 0;
	if (PrTSa > 0 && PrTSa > PrTSi && PrTSa > PrTSC) {
		if (formulario.ArmasAceradas.checked) {
			PrTSa = PrTSa * 6;
			PrTSa = PrTSa - 1; // si sacamos un 6 natural
			if (formulario.NoHayDolor.checked)
				PrTSa = PrTSa + (6 - PrTSa) * 0.5;
			PrTSa = PrTSa + Math.max(PrTSi, PrTSC);
			PrTSa = PrTSa / 6;
		} else {
			if (formulario.NoHayDolor.checked) {
				PrTSa = PrTSa + (1 - PrTSa) * 0.5;
			}
		}
	}
	ProbSalvar = Math.max(PrTSa, PrTSi);
	ProbSalvar = Math.max(ProbSalvar, PrTSC);

	// Probabilidad de infligir 1 herida
	ProbInf1Herida = ProbImpactar * ProbHerir * (1 - ProbSalvar);

	// Heridas por miniatura
	HeridasPorMiniatura = NumAtaques * ProbImpactar * ProbHerir * (1 - ProbSalvar);

	// Heridas por punto
	HeridasPorPunto = NumAtaques * ProbImpactar * ProbHerir * (1 - ProbSalvar) / formulario.PuntosA.value;

	// Número de heridas infligidas
	HeridasInfligidas = formulario.NminiA.value * NumAtaques * ProbImpactar * ProbHerir * (1 - ProbSalvar);

	// Resultados
	ProbImpactar = Math.round(ProbImpactar * 10000) / 10000;
	ProbHerir = Math.round(ProbHerir * 10000) / 10000;
	ProbSalvar = Math.round(ProbSalvar * 10000) / 10000;
	ProbInf1Herida = Math.round(ProbInf1Herida * 10000) / 10000;
	HeridasPorMiniatura= Math.round(HeridasPorMiniatura * 10000) / 10000;
	HeridasPorPunto= Math.round(HeridasPorPunto * 10000) / 10000;
	HeridasInfligidas= Math.round(HeridasInfligidas * 10000) / 10000;

	formulario.Resultados.value = "";
	if (formulario.IncluirInfoAtacante.checked) {
		formulario.Resultados.value += formulario.NombreA.value + ": ";
		formulario.Resultados.value += "#" + formulario.NminiA.value + " ";
		if (formulario.CaCoDistancia[0].checked)
			formulario.Resultados.value += "HA";
		else
			formulario.Resultados.value += "HP";
		formulario.Resultados.value += formulario.HAA.value + " ";
		formulario.Resultados.value += "F" + formulario.FuerzaA.value + " ";
		formulario.Resultados.value += "A" + formulario.AtaquesA.value + ".\n";
	}
	if (formulario.IncluirInfoDefensor.checked) {
		formulario.Resultados.value += formulario.NombreD.value + ": ";
		if (formulario.CaCoDistancia[0].checked)
			formulario.Resultados.value += "HA" + formulario.HAD.value + " ";
		formulario.Resultados.value += "R" + formulario.ResistenciaD.value + " ";
		formulario.Resultados.value += "TSa" + formulario.TSaD.value;
		if (isFinite(formulario.TSaD.value))
			 formulario.Resultados.value += "+";
		formulario.Resultados.value += " ";
		formulario.Resultados.value += "TSi" + formulario.TSiD.value;
		if (isFinite(formulario.TSiD.value))
			 formulario.Resultados.value += "+";
		if (!formulario.CaCoDistancia[0].checked) {
			formulario.Resultados.value += " ";
			formulario.Resultados.value += "TSC" + formulario.TSCD.value;
			if (isFinite(formulario.TSCD.value))
				 formulario.Resultados.value += "+"
		}
		formulario.Resultados.value += ".\n";
	}
	if (formulario.IncluirInfoOpciones.checked) {
		formulario.Resultados.value += "Opciones:";
		if (formulario.CaCoDistancia[0].checked)
			formulario.Resultados.value += " Combate CaC";
		else
			formulario.Resultados.value += " Combate a Distancia";
		if (formulario.CaCoDistancia[0].checked && formulario.Asaltando.checked)
			formulario.Resultados.value += ", Atacante asaltando";
		if (formulario.ArmasAceradas.checked)
			formulario.Resultados.value += ", Armas aceradas";
		if (formulario.NoHayDolor.checked)
			formulario.Resultados.value += ", ¡No hay dolor!";
		if (formulario.RepiteImpactar.checked)
			formulario.Resultados.value += ", Repite para impactar";
		if (formulario.AutoImpactar.checked)
			formulario.Resultados.value += ", Impacta automáticamente";
		if (formulario.RepiteHerirUnaVez.checked)
			formulario.Resultados.value += ", Repite para herir (1/miniatura)";
		if (formulario.RepiteHerir.checked)
			formulario.Resultados.value += ", Repite para herir";
		if (formulario.noTSa.checked)
			formulario.Resultados.value += ", Ignora TSa";
		if (formulario.noTSi.checked)
			formulario.Resultados.value += ", Ignora TSi";
		if (!formulario.CaCoDistancia[0].checked && formulario.noTSC.checked)
			formulario.Resultados.value += ", Ignora TSC";
		formulario.Resultados.value += ".\n";
	}
	if (formulario.IncluirInfoAtacante.checked || formulario.IncluirInfoDefensor.checked || formulario.IncluirInfoOpciones.checked)
		formulario.Resultados.value += "\n";
	if (formulario.IncluirProbImpactar.checked)
		formulario.Resultados.value += "Probabilidad de Impactar:          " + ProbImpactar + "\n";
	if (formulario.IncluirProbHerir.checked)
		formulario.Resultados.value += "Probabilidad de Herir:             " + ProbHerir + "\n";
	if (formulario.IncluirProbSalvar.checked)
		formulario.Resultados.value += "Probabilidad de Salvar:            " + ProbSalvar + "\n";
	if (formulario.IncluirProbInf1Herida.checked)
		formulario.Resultados.value += "Probabilidad de Infligir 1 Herida: " + ProbInf1Herida + "\n";
	if (formulario.IncluirProbImpactar.checked || formulario.IncluirProbHerir.checked || formulario.IncluirProbSalvar.checked)
		formulario.Resultados.value += "\n";
	if (formulario.IncluirHeridasPorMiniatura.checked)
		formulario.Resultados.value += "Heridas infligidas por miniatura:  " + HeridasPorMiniatura + "\n";
	if (formulario.IncluirHeridasPorPunto.checked)
		formulario.Resultados.value += "Heridas infligidas por punto:      " + HeridasPorPunto + "\n";
	if (formulario.IncluirHeridasInfligidas.checked)
		formulario.Resultados.value += "Número de heridas infligidas:      " + HeridasInfligidas + "\n";
}

	
function Suma(texto, minValue, maxValue, defaultValue, underflowValue, overflowValue)
{
	if (texto.value != overflowValue) {
		if (texto.value == underflowValue && underflowValue != minValue) {
			texto.value = minValue;
		} else {
			valor = parseInt(texto.value);
			if (isFinite(valor)) {
				if (valor < minValue)
					valor = underflowValue;
				else if (valor >= maxValue)
					valor = overflowValue;
				else
					valor++;
			} else
				valor = defaultValue;
			texto.value = valor;
		}
	}
}


function Resta(texto, minValue, maxValue, defaultValue, underflowValue, overflowValue)
{
	if (texto.value != underflowValue) {
		if (texto.value == overflowValue && overflowValue != maxValue) {
			texto.value = maxValue;
		} else {
			valor = parseInt(texto.value);
			if (isFinite(valor)) {
				if (valor <= minValue)
					valor = underflowValue;
				else if (valor > maxValue)
					valor = overflowValue;
				else
					valor--;
			} else
				valor = defaultValue;
			texto.value = valor;
		}
	}
}