// Sviluppato da Mauro Donati
// Modified by Jason O. Jensen and Eric Jensen

var tableempty = true; var oddrow = true;

// invoked on form submit; empties the table from preceding searches,
// loops through the power list, prints the powers in the results table.
function searchPower(frm, spl) {
  var idx; count = 0; pr = true;
  tb = getTBody();
  clearTable(tb);
  for (idx = 0; idx < spl.length; idx++) {
    if(pr && checkPower(frm, spl[idx])) {
      count++;
      if (count == frm.stop.value) {
        pr = confirm('More than ' + frm.stop.value + ' results found. List all?\n(It might take a while...)');
      }
      insertpower(tb, spl[idx]);
    }
  }
  if (tableempty) insertNoresults(tb);
  return count;
}


// returns true/false if the power satisfies the criteria
function checkPower(frm, power) {
  var reply = true;
// text and description
  if (reply && frm.name.value != '') {
    reply = false;
    txt = frm.name.value.toLowerCase();
    if (power[0].toLowerCase().indexOf(txt) >= 0) {
      reply = true;
    }
    if (frm.shortd.checked == true && power[7].toLowerCase().indexOf(txt) >= 0) {
      reply = true;
    }
  }

// school and subschool
  if (reply && frm.discipline.selectedIndex > 0) {
    reply = false;
    txt = frm.discipline.value;
    if (power[1].indexOf(txt) >= 0) {
      reply = true;
    }
    if (power[2].indexOf(txt) >= 0) {
      reply = true;
    }
  }

// descriptor
  if (reply && frm.descriptor.selectedIndex > 0) {
    reply = false;
    txt = frm.descriptor.value;
    if (power[3].indexOf(txt) >= 0) {
      reply = true;
    }
  }

// component
  if (reply && frm.display.selectedIndex > 0) {
    reply = false;
    txt = frm.display.value;
    if (power[5].indexOf(txt) >= 0) {
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
    if (power[4].indexOf(txt) >= 0) {
      reply = true;
    }
  }

  return reply;
}


// inserts a power row in the results table
function insertpower(tb, power) {
  if (tableempty) {
    insertHeader(tb);
    tableempty = false;
  }
  tdn = document.createElement("TD");
  var link = document.createElement("A");
  link.href = power[6];
  link.style.color = "rgb(87, 158, 182)";
  link.addEventListener("click", function (event) {
    event.preventDefault();
    openLink(power[6]);
  });
  link.textContent = power[0];
  tdn.appendChild(link);

  tds  = document.createElement("TD"); tds.textContent  = power[1] + ' ';
  tdsb = document.createElement("TD"); tdsb.textContent = power[2] + ' ';
  tdd  = document.createElement("TD"); tdd.textContent  = power[3] + ' ';
  tdl  = document.createElement("TD"); tdl.textContent  = power[4] + ' ';
  tdc  = document.createElement("TD"); tdc.textContent  = power[5] + ' ';
  tdsd = document.createElement("TD"); tdsd.textContent = power[7] + ' ';

  tr = document.createElement("TR");
  if (oddrow) tr.className = 'odd-row'; //tr.setAttribute('class', 'odd-row');
  tr.appendChild(tdn);  tr.appendChild(tds);  tr.appendChild(tdsb);
  tr.appendChild(tdd);  tr.appendChild(tdl);  tr.appendChild(tdc);
  tr.appendChild(tdsd); tb.appendChild(tr);

  oddrow = !oddrow;
  return true;
}

// Gets the TBODY object. please, note that in case of modification of searchsp.html,
// the number [2] in the second line should be changed accordingly.
// This number must be equal to the number of <TABLE> tags that precede the empty
// power results TABLE (at the moment, it is the 3rd <TABLE> tag, then "[2]").
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

// inserts the "power School Subschool ..." header at the top of the table.
function insertHeader(tb) {
  thn  = document.createElement("TD"); var thnB = document.createElement("B"); thnB.textContent = 'Power Name  '; thn.appendChild(thnB);
  ths  = document.createElement("TD"); var thsB = document.createElement("B"); thsB.textContent = 'Discipline  '; ths.appendChild(thsB);
  thsb = document.createElement("TD"); var thsbB = document.createElement("B"); thsbB.textContent = 'Subdiscipline  '; thsb.appendChild(thsbB);
  thd  = document.createElement("TD"); var thdB = document.createElement("B"); thdB.textContent = 'Descriptor  '; thd.appendChild(thdB);
  thc  = document.createElement("TD"); var thcB = document.createElement("B"); thcB.textContent = 'Display  '; thc.appendChild(thcB);
  thl  = document.createElement("TD"); var thlB = document.createElement("B"); thlB.textContent = 'Class/Level  '; thl.appendChild(thlB);
  thsd = document.createElement("TD"); var thsdB = document.createElement("B"); thsdB.textContent = 'Short Description    '; thsd.appendChild(thsdB);

  tr = document.createElement("TR");
  tr.appendChild(thn);  tr.appendChild(ths);  tr.appendChild(thsb);
  tr.appendChild(thd);  tr.appendChild(thl);  tr.appendChild(thc);
  tr.appendChild(thsd); tb.appendChild(tr);
  return true;
}

// inserts a "NO RESULTS FOUND" header
function insertNoresults(tb) {
  td = document.createElement("TD");
  var noResultsBold = document.createElement("B");
  noResultsBold.textContent = 'NO RESULTS FOUND';
  td.appendChild(noResultsBold);
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
    var w = window.open(lnk, "power_detail", "scrollbars=yes,resizable=yes, toolbar=no, status=no, location=no, directories=no, screenX=10, screenY=20, top=20, left=10,noopener,noreferrer");
    if (w) {
      w.focus();
    }
  }
}

