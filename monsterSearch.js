
var tableempty=true;var oddrow=true;var componentCheck=0
function searchMonster(frm, spl){var idx;count=0;pr=true;tb=getTBody();clearTable(tb);for (idx=0;idx <spl.length;idx++){if(pr && checkMonster(frm, spl[idx])){count++;if (count==frm.stop.value){pr=confirm('More than '+frm.stop.value+' results found. List all?\n(It might take a while...)');}
insertMonster(tb, spl[idx]);}}
if (tableempty) insertNoresults(tb);return count;}
function checkMonster(frm, spell){var reply=true;if (reply && frm.name.value !=''){reply=false;txt=frm.name.value.toLowerCase();if (spell[0].toLowerCase().indexOf(txt)>=0){reply=true;}
if (frm.shortd.checked==true && spell[7].toLowerCase().indexOf(txt)>=0){reply=true;}}
if (reply && frm.school.selectedIndex> 0){reply=false;txt=frm.school.value;if (spell[1].indexOf(txt)>=0){reply=true;}
if (spell[2].indexOf(txt)>=0){reply=true;}}
if (reply && frm.descriptor.selectedIndex> 0){reply=false;txt=frm.descriptor.value;if (spell[3].indexOf(txt)>=0){reply=true;}}
if (reply && frm.components.selectedIndex> 0){reply=false;txt=frm.components.value;if (spell[5].indexOf(txt)> 0){reply=true;}}
if (reply && (frm.cl.selectedIndex> 0 || frm.level.selectedIndex> 0)){reply=false;txt='';if (frm.cl.selectedIndex> 0){txt+=frm.cl.value;}
if (frm.level.selectedIndex> 0){txt+=' '+frm.level.value;}
if (spell[4].indexOf(txt)>=0){reply=true;}}
return reply;}
function insertMonster(tb, spell){if (tableempty){insertHeader(tb);tableempty=false;}
tdn=document.createElement("TD");var link=document.createElement("A");link.href=spell[6];link.style.color="rgb(87, 158, 182)";link.addEventListener("click",function(event){event.preventDefault();openLink(spell[6]);});link.textContent=spell[0];tdn.appendChild(link);tds =document.createElement("TD");tds.textContent =spell[1]+' ';tdsb=document.createElement("TD");tdsb.textContent=spell[2]+' ';tdd =document.createElement("TD");tdd.textContent =spell[3]+' ';tdl =document.createElement("TD");tdl.textContent =spell[4]+' ';tdc =document.createElement("TD");tdc.textContent =spell[5]+' ';tdsd=document.createElement("TD");tdsd.textContent=spell[7]+' ';tr=document.createElement("TR");if (oddrow) tr.className='odd-row';tr.appendChild(tdn);tr.appendChild(tds);tr.appendChild(tdsb);tr.appendChild(tdd);tr.appendChild(tdl);tr.appendChild(tdc);tr.appendChild(tdsd);tb.appendChild(tr);oddrow=!oddrow;return true;}
function getTBody(){art_table=document.getElementsByTagName("TABLE")[2];return art_table.getElementsByTagName("TBODY")[0];}
function replace(str, fnd, rpl){var idx;var a=str.split(fnd);reply='';sep='';for (idx=0;idx <a.length;idx++){reply+=sep+a[idx];sep=rpl;}
return reply;}
function clearTable(tb){while (tb.getElementsByTagName('TR').length> 0){tb.removeChild(tb.getElementsByTagName('TR')[0]);}
oddrow=true;tableempty=true;return true;}
function insertHeader(tb){thn =document.createElement("TD");var thnB=document.createElement("B");thnB.textContent='Monster Name  ';thn.appendChild(thnB);ths =document.createElement("TD");var thsB=document.createElement("B");thsB.textContent='Type  ';ths.appendChild(thsB);thsb=document.createElement("TD");var thsbB=document.createElement("B");thsbB.textContent='Subtype  ';thsb.appendChild(thsbB);thd =document.createElement("TD");var thdB=document.createElement("B");thdB.textContent='CR  ';thd.appendChild(thdB);thc =document.createElement("TD");var thcB=document.createElement("B");thcB.textContent='LA  ';thc.appendChild(thcB);thl =document.createElement("TD");var thlB=document.createElement("B");thlB.textContent='Environment  ';thl.appendChild(thlB);thsd=document.createElement("TD");var thsdB=document.createElement("B");thsdB.textContent='Special Qualities    ';thsd.appendChild(thsdB);tr=document.createElement("TR");tr.appendChild(thn);tr.appendChild(ths);tr.appendChild(thsb);tr.appendChild(thd);tr.appendChild(thl);tr.appendChild(thc);tr.appendChild(thsd);tb.appendChild(tr);return true;}
function insertNoresults(tb){td=document.createElement("TD");var noResultsBold=document.createElement("B");noResultsBold.textContent='NO RESULTS FOUND';td.appendChild(noResultsBold);tr=document.createElement("TR");tr.appendChild(td);tb.appendChild(tr);return true;}
function openLink(lnk){var safeOpener=null;try{if (window.opener && !window.opener.closed && window.opener.location.origin===window.location.origin){safeOpener=window.opener;}}catch (e){safeOpener=null;}if (safeOpener){safeOpener.document.location.href=lnk;safeOpener.focus();}else{var w=window.open(lnk, "spell_detail", "scrollbars=yes,resizable=yes, toolbar=no, status=no, location=no, directories=no, screenX=10, screenY=20, top=20, left=10,noopener,noreferrer");if (w){w.focus();}}}

