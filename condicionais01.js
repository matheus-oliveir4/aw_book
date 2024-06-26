
/*Automatização das Layer's, severity e recomendacion propostas*/
var selectElement = document.getElementById("layer_id")
var selectElement1 = document.getElementById('severity')
var selectElement2 = document.getElementById("recommendation_id")


var indiceOpition0 = 0;
var indiceOpition1 = 1; /*no Issues / sev0 / N/A*/
var indiceOpition2 = 2; /*Light Structural / sev1 / Monitoring at the next inspection opportunity */
var indiceOpition3 = 3; /*Minor Structural / sev2 / Monitoring within 12 months period*/
var indiceOpition4 = 4;  /*Medium Structural / sev / Repair within 6 months */
var indiceOpition5 = 5; /*High Structural / sev4 / Repair within 3 months*/
var indiceOpition6 = 6; /*Critical Structural / sev5 / Stop the turbine and repair*/
var indiceOpition7 = 7; /*Immediate clean up*/
var indiceOpition8 = 8; /*Repair within 1 week*/

/*Condicionais para Rugas - Longitudinal*/
function carregar0() {
  var form = document.getElementById('form0')
  var faltura1 = document.getElementsByName('altura1')
  var fprop1 = document.getElementsByName('propagacao3')
  var ftempo1 = document.getElementsByName('operacao3')
  var ftam1 = document.getElementsByName('tamanho1')
  var fluz1 = document.getElementsByName('luz1')

  if (fprop1[0].checked && ftam1[1].checked || fluz1[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6

    form.style.display = 'none';
  }

  else if (fprop1[0].checked && ftam1[0].checked && fluz1[1].checked) {
    selectElement1.selectedIndex = indiceOpition5
    selectElement.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (fprop1[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    
    form.style.display = 'none';
  }
  else if (ftempo1[1].checked && ftam1[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
   
    form.style.display = 'none';
  }
  else if (ftempo1[0].checked && ftam1[0].checked && fprop1[1].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3
    form.style.display = 'none';
  }
  else if (ftempo1[0].checked && fprop1[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    form.style.display = 'none';
  }
  else if (faltura1[0].checked && fprop1[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    selectElement2.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }
  else if (faltura1[1].checked && fprop1[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    selectElement2.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }
}

/*Condicionais para rugas  Transversais*/
function carregar1() {
  var form = document.getElementById('form1')
  var faltura = document.getElementsByName('altura')
  var fprop = document.getElementsByName('propagacao')
  var ftempo = document.getElementsByName('operacao')
  var ftam = document.getElementsByName('tamanho')
  var fluz = document.getElementsByName('luz')

  if (fprop[0].checked && ftam[1].checked || fluz[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fprop[0].checked && ftam[0].checked && fluz[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (ftempo[1].checked && ftam[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (fprop[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && ftam[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3 
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    
    form.style.display = 'none';
  }
  else if (faltura[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    selectElement2.selectedIndex = indiceOpition1

    form.style.display = 'none';
  }
}
/*Condicionais para Rugas - Almas*/
function carregar2() {
  var form = document.getElementById('form2')
  var faltura = document.getElementsByName('altura2')
  var fprop = document.getElementsByName('propagacao4')
  var ftempo = document.getElementsByName('operacao4')
  var ftam = document.getElementsByName('tamanho2')
  var fcore = document.getElementsByName('danoCore')
  var fh = document.getElementsByName('H')


  if (fprop[0].checked && ftam[2].checked || fcore[1].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fprop[0].checked && ftam[1].checked && fcore[0].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (ftempo[1].checked && ftam[1].checked || fprop[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && ftam[1].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3 
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    form.style.display = 'none';
  }
  else if (fh[0].checked || faltura[0].checked && ftam[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    selectElement2.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }
}

/*Condicionais para Gap ou Ausência de Core - Cascas e Almas*/
function carregar3() {
  var form = document.getElementById('form3')
  var fgap = document.getElementsByName('gap')
  var fresina = document.getElementsByName('resina')
  var fcolisao = document.getElementsByName('colisao')
  var ftempo = document.getElementsByName('operacao5')
  var fprop = document.getElementsByName('propagacao5')
  var fluz = document.getElementsByName('luz2')
  var fdelam = document.getElementsByName('delaPass')

  if (fluz[0].checked && fprop[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fprop[0].checked && fdelam[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2

    form.style.display = 'none';
  }
  else if (fgap[0].checked && fresina[0].checked && fcolisao[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    
    form.style.display = 'none';
  }
}
/*Condicionais paraDegrau - Cascas*/
function carregar4() {
  var form = document.getElementById('form4')
  var ftempo = document.getElementsByName('operacao6')
  var fprop = document.getElementsByName('propagacao6')
  var fluz = document.getElementsByName('luz3')
  var fHD = document.getElementsByName('alturaD')
  var fcompri = document.getElementsByName('compD')


  if (fprop[0].checked && fcompri[1].checked || fluz[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fprop[0].checked && fcompri[0].checked && fluz[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (ftempo[1].checked && fcompri[0].checked && fprop[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && fcompri[0].checked && fprop[0].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && fcompri[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    form.style.display = 'none';
  }
  else if (fHD[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }

}

/*Condicionais para Tecido Seco na superfície - Cascas*/
function carregar5() {
  var form = document.getElementById('form5')
  var fcompri = document.getElementsByName("compT")
  if (fcompri[2].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fcompri[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (fcompri[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
}
/*Condicionais para Tecido Semi-Seco - Cascas e Almas*/

function carregar6() {
  var form = document.getElementById('form6')

  var ftempo = document.getElementsByName('operacao7')
  var fprop = document.getElementsByName('propagacao7')
  var fcompri = document.getElementsByName('compTS')

  if (ftempo[1].checked && fcompri[1]) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (ftempo[0].checked && fcompri[1].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    form.style.display = 'none';
  }
  else if (fcompri[0].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    selectElement2.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }
}
/*Condicionais para Bolhas - Casca*/
function carregar7() {
  var form = document.getElementById('form7')
  var ftamB = document.getElementsByName('tamB')
  var ftempo = document.getElementsByName('operacao8')
  var fprop = document.getElementsByName('propagacao8')
  var fprop1 = document.getElementsByName('propagacao9')
  var fluzP = document.getElementsByName('luz4')
  var fluz = document.getElementsByName('luz5')
  var fcompri = document.getElementsByName('compB')

  if (fprop1[0].checked && fcompri[1].checked || fluz[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fprop1[0].checked && fcompri[0].checked && fluzP[0]) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (fcompri[0].checked && fprop[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (ftempo[1].checked && fcompri[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (ftempo[0] && fcompri[0] && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3
    form.style.display = 'none';
  }
  else if(ftempo[0].checked && fprop[1].checked){
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    
  }
  else if (ftamB[0].checked || ftamB[1].checked) {
    selectElement.selectedIndex = indiceOpition1
    selectElement1.selectedIndex = indiceOpition1
    selectElement2.selectedIndex = indiceOpition1
    form.style.display = 'none';
  }
}

/*Condicionais para Corpo Estranho - Cascas e área de colagem (Somente aplicável para laminados infudidos ou áreas de colagem)*/
function carregar8() {
  var form = document.getElementById('form8')
  var ftam = document.getElementsByName('tamC')
  var fprop = document.getElementsByName('propagacao10')
  var ftempo = document.getElementsByName('operacao9')
  var fmat = document.getElementsByName('mat')

  if (fmat[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (fmat[0].checked && fprop[1].checked && ftam[1].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (fmat[0].checked && ftempo[0].checked && fprop[0].checked && ftam[0].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3
    form.style.display = 'none';
  }
  else if (fmat[0].checked && ftempo[0].checked && fprop[1].checked) {
    selectElement.selectedIndex = indiceOpition2
    selectElement1.selectedIndex = indiceOpition2
    selectElement2.selectedIndex = indiceOpition2
    form.style.display = 'none';
  }
}
/*Condicionais para Trincas Longitudinais - Cascas e Almas*/
function carregar9() {
  var form = document.getElementById('form9')
  var fcompri = document.getElementsByName('compTl')
  var fluz = document.getElementsByName('luz6')

  if (fcompri[2].checked && fluz[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fcompri[1].checked && fluz[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (fcompri[0].checked && fluz[1].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
}

/*Condicionais para Trincas transversais - Cascas e Almas*/
function carregar10() {
  var form = document.getElementById('form10')
  var fcompri = document.getElementsByName('compTT')
  var fluz = document.getElementsByName('luz7')

  if (fcompri[2].checked || fluz[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (fcompri[1].checked && fluz[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (fcompri[0].checked && fluz[1].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
}

/*Condicionais para Trincas Transversais - linhas de colagem*/
function carregar11() {
  var form = document.getElementById('form11')
  var flarg = document.getElementsByName('largT')
  var fdano = document.getElementsByName('danoAss')

  if (flarg[1].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (flarg[0].checked && fdano[0].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3 
    form.style.display = 'none';
  }
}
/*Condicionais para Trincas Longitudinais - linhas de colagem*/
function carregar12() {
  var form = document.getElementById('form12')
  var compriT = document.getElementsByName('largTc')

  if (compriT[1].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  }
  else if (compriT[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
  }
}
/*Condicionais para Descolamentos  - Danos na alma/T-pultrudado*/

function carregar13() {
  var form = document.getElementById('form13')
  var prop = document.getElementsByName('propagação11')
  var tempo = document.getElementsByName('operacao10')
  var tam = document.getElementsByName('tamT')
  var desloc = document.getElementsByName('desl')
  if (desloc[0].checked) {
    selectElement.selectedIndex = indiceOpition6
    selectElement1.selectedIndex = indiceOpition6
    selectElement2.selectedIndex = indiceOpition6
    form.style.display = 'none';
  } else if (prop[1].checked && tam[1].checked) {
    selectElement.selectedIndex = indiceOpition5
    selectElement1.selectedIndex = indiceOpition5
    selectElement2.selectedIndex = indiceOpition5
    form.style.display = 'none';
  }
  else if (prop[1].checked && tam[0].checked) {
    selectElement.selectedIndex = indiceOpition4
    selectElement1.selectedIndex = indiceOpition4
    selectElement2.selectedIndex = indiceOpition4
    form.style.display = 'none';
  }
  else if (prop[0].checked && tempo[0].checked) {
    selectElement.selectedIndex = indiceOpition3
    selectElement1.selectedIndex = indiceOpition3
    selectElement2.selectedIndex = indiceOpition3
    form.style.display = 'none';
  }
}






