// Sviluppato da Mauro Donati
// Modified by Jason O. Jensen and Eric Jensen

var tableempty = true; var oddrow = true;

var componentCheck = 0

// invoked on form submit; empties the table from preceding searches,
// loops through the spell list, prints the spells in the results table.
function searchSpell(frm, spl) {
  var idx; count = 0; pr = true;
  tb = getTBody();
  clearTable(tb);
  for (idx = 0; idx < spl.length; idx++) {
    if(pr && checkSpell(frm, spl[idx])) {
      count++;
      if (count == frm.stop.value) {
        pr = confirm('More than ' + frm.stop.value + ' results found. List all?\n(It might take a while...)');
      }
      insertspell(frm, tb, spl[idx]);
    }
  }
  if (tableempty) insertNoresults(tb);
  return count;
}


// returns true/false if the spell satisfies the criteria
function checkSpell(frm, spell) {
  var reply = true;
// text and description
  if (reply && frm.name.value != '') {
    reply = false;
    txt = frm.name.value.toLowerCase();
    if (spell[0].toLowerCase().indexOf(txt) >= 0) {
      reply = true;
    }
    if (frm.shortd.checked == true && spell[7].toLowerCase().indexOf(txt) >= 0) {
      reply = true;
    }
    if (frm.target.checked == true && spell[10].toLowerCase().indexOf(txt) >= 0) {
      reply = true;
    }
  }

// school and subschool
  if (reply && frm.school.selectedIndex > 0) {
    reply = false;
    txt = frm.school.value;
    if (spell[1].indexOf(txt) >= 0) {
      reply = true;
    }
    if (spell[2].indexOf(txt) >= 0) {
      reply = true;
    }
  }

// descriptor
  if (reply && frm.descriptor.selectedIndex > 0) {
    reply = false;
    txt = frm.descriptor.value;
    if (spell[3].indexOf(txt) >= 0) {
      reply = true;
    }
  }


// component
if (componentCheck == 0)
  if (reply && frm.components.selectedIndex > 0) {
    reply = false;
    txt = frm.components.value;
    if (spell[5].indexOf(txt) > 0) {
      reply = true;
 }
}
if (componentCheck == 1)
  if (reply && frm.components.selectedIndex > 0) {
    reply = false;
    txt = frm.components.value;
    if (spell[5].indexOf(txt) < 0) {
      reply = true;
 }
}

// class and/or level
  if (reply && (frm.cl.selectedIndex > 0 || frm.level.selectedIndex > 0)) {
    reply = false; txt = '';
    if (frm.cl.selectedIndex > 0) {
      txt += frm.cl.value;
    }
    if (frm.level.selectedIndex > 0) {
      txt += ' ' + frm.level.value;
    }
    if (spell[4].indexOf(txt) >= 0) {
      reply = true;
    }
  }

// Saving throw
  if (reply && frm.savingthrow.selectedIndex > 0) {
    reply = false;
    txt = frm.savingthrow.value;
    if (spell[8].indexOf(txt) >= 0) {
      reply = true;
    }
  }
  
// Spell resistance
  if (reply && frm.spellresistance.selectedIndex > 0) {
    reply = false;
    txt = frm.spellresistance.value;
    if (spell[9].indexOf(txt) >= 0) {
      reply = true;
    }
  }
  
// Target/Area/Effect
  if (reply && frm.effect.selectedIndex > 0) {
    reply = false;
    txt = frm.effect.value;
    if (spell[10].indexOf(txt) >= 0) {
      reply = true;
    }
  }

  return reply;
}


// inserts a spell row in the results table
function insertspell(frm, tb, spell) {
  if (tableempty) {
    insertHeader(frm, tb);
    tableempty = false;
  }
  tdn = document.createElement("TD");
  var link = document.createElement("A");
  link.href = spell[6];
  link.style.color = "rgb(87, 158, 182)";
  link.addEventListener("click", function (event) {
    event.preventDefault();
    openLink(spell[6]);
  });
  link.textContent = spell[0];
  tdn.appendChild(link);

  if (frm.ts.checked == true) {  tds  = document.createElement("TD"); tds.textContent  = spell[1] + ' ';};
  if (frm.tsb.checked == true) {tdsb = document.createElement("TD"); tdsb.textContent = spell[2] + ' ';};
  if (frm.td.checked == true) {tdd  = document.createElement("TD"); tdd.textContent  = spell[3] + ' ';};
  if (frm.tl.checked == true) {tdl  = document.createElement("TD"); tdl.textContent  = spell[4] + ' ';};
  if (frm.tc.checked == true) {tdc  = document.createElement("TD"); tdc.textContent  = spell[5] + ' ';};
  if (frm.tst.checked == true) {tdst  = document.createElement("TD"); tdst.textContent  = spell[8] + ' ';};
  if (frm.tsr.checked == true) {tdsr  = document.createElement("TD"); tdsr.textContent  = spell[9] + ' ';};
  if (frm.tt.checked == true) {tdt  = document.createElement("TD"); tdt.textContent  = spell[10] + ' ';};
  if (frm.tsd.checked == true) {tdsd = document.createElement("TD"); tdsd.textContent = spell[7] + ' ';};

  tr = document.createElement("TR");
  if (oddrow) tr.className = 'odd-row'; //tr.setAttribute('class', 'odd-row');
  tr.appendChild(tdn);  
  if (frm.ts.checked == true) {tr.appendChild(tds)};  
  if (frm.tsb.checked == true) {tr.appendChild(tdsb)};
  if (frm.td.checked == true) {tr.appendChild(tdd)};  
  if (frm.tl.checked == true) {tr.appendChild(tdl)};  
  if (frm.tc.checked == true) {tr.appendChild(tdc)};
  if (frm.tst.checked == true) {tr.appendChild(tdst)};
  if (frm.tsr.checked == true) {tr.appendChild(tdsr)};
  if (frm.tt.checked == true) {tr.appendChild(tdt)};
  if (frm.tsd.checked == true) {tr.appendChild(tdsd)}; 
  tb.appendChild(tr);
  
  oddrow = !oddrow;
  return true;
}

// Gets the TBODY object. please, note that in case of modification of searchsp.html,
// the number [2] in the second line should be changed accordingly.
// This number must be equal to the number of <TABLE> tags that precede the empty
// spell results TABLE (at the moment, it is the 3rd <TABLE> tag, then "[2]").
function getTBody() {
  art_table = document.getElementsByTagName("TABLE")[2];
  return art_table.getElementsByTagName("TBODY")[0];
}

// for future use.
function replace(str, fnd, rpl) {
  var idx;
  var a = str.split(fnd);
  reply = ''; sep = '';
  for (idx = 0; idx < a.length; idx++) {
    reply += sep + a[idx];
    sep = rpl;
  }
  return reply;
}

// empties the table from the preceding search results.
function clearTable(tb) {
  while (tb.getElementsByTagName('TR').length > 0) {
    tb.removeChild(tb.getElementsByTagName('TR')[0]);
  }
  oddrow = true; tableempty = true;
  return true;
}

// inserts the "Spell School Subschool ..." header at the top of the table.
function insertHeader(frm, tb) {
  thn  = document.createElement("TD"); var thnB = document.createElement("B"); thnB.textContent = 'Spell Name  '; thn.appendChild(thnB);
  if (frm.ts.checked == true) {ths  = document.createElement("TD"); var thsB = document.createElement("B"); thsB.textContent = 'School  '; ths.appendChild(thsB);};
  if (frm.tsb.checked == true) {thsb = document.createElement("TD"); var thsbB = document.createElement("B"); thsbB.textContent = 'Subschool  '; thsb.appendChild(thsbB);};
  if (frm.td.checked == true) {thd  = document.createElement("TD"); var thdB = document.createElement("B"); thdB.textContent = 'Descriptor  '; thd.appendChild(thdB);};
  if (frm.tc.checked == true) {thc  = document.createElement("TD"); var thcB = document.createElement("B"); thcB.textContent = 'Components  '; thc.appendChild(thcB);};
  if (frm.tl.checked == true) {thl  = document.createElement("TD"); var thlB = document.createElement("B"); thlB.textContent = 'Class/Level  '; thl.appendChild(thlB);};
  if (frm.tst.checked == true) {thst  = document.createElement("TD"); var thstB = document.createElement("B"); thstB.textContent = 'Saving Throw  '; thst.appendChild(thstB);};
  if (frm.tsr.checked == true) {thsr  = document.createElement("TD"); var thsrB = document.createElement("B"); thsrB.textContent = 'Spell Resistance  '; thsr.appendChild(thsrB);};
  if (frm.tt.checked == true) {tht  = document.createElement("TD"); var thtB = document.createElement("B"); thtB.textContent = 'Target/Area/Effect  '; tht.appendChild(thtB);};
  if (frm.tsd.checked == true) {thsd = document.createElement("TD"); var thsdB = document.createElement("B"); thsdB.textContent = 'Short Description    '; thsd.appendChild(thsdB);};

  tr = document.createElement("TR");
  tr.appendChild(thn);  
  if (frm.ts.checked == true) {tr.appendChild(ths)};  
  if (frm.tsb.checked == true) {tr.appendChild(thsb)};
  if (frm.td.checked == true) {tr.appendChild(thd)};  
  if (frm.tl.checked == true) {tr.appendChild(thl)};  
  if (frm.tc.checked == true) {tr.appendChild(thc)};
  if (frm.tst.checked == true) {tr.appendChild(thst)};
  if (frm.tsr.checked == true) {tr.appendChild(thsr)};
  if (frm.tt.checked == true) {tr.appendChild(tht)};
  if (frm.tsd.checked == true) {tr.appendChild(thsd)}; 
  tb.appendChild(tr);
  return true;
}

// inserts a "NO RESULTS FOUND" header
function insertNoresults(tb) {
if (i == 0)
  td = document.createElement("TD"); td.textContent  = '0';
  tr = document.createElement("TR");
  tr.appendChild(td); tb.appendChild(tr);
  return true;
if (i == 1)
  td = document.createElement("TD"); td.textContent  = '1';
  tr = document.createElement("TR");
  tr.appendChild(td); tb.appendChild(tr);
  return true;
if (i == 2)
  td = document.createElement("TD"); td.textContent  = '2';
  tr = document.createElement("TR");
  tr.appendChild(td); tb.appendChild(tr);
  return true;

}


function openLink(lnk) {
  var safeOpener = null;
  try {
    if (window.opener && !window.opener.closed && window.opener.location.origin === window.location.origin) {
      safeOpener = window.opener;
    }
  } catch (e) {
    safeOpener = null;
  }
  if (safeOpener) {
    safeOpener.document.location.href = lnk;
    safeOpener.focus();
  } else {
    var w = window.open(lnk, "spell_detail", "scrollbars=yes,resizable=yes, toolbar=no, status=no, location=no, directories=no, screenX=10, screenY=20, top=20, left=10,noopener,noreferrer");
    if (w) {
      w.focus();
    }
  }
}

