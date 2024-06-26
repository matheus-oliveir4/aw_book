/*Condicionais para Trincas - Inserto do BF*/
function carregar14() {
    var form = document.getElementById('form14')
    var comp = document.getElementsByName('tamBF')
    var abert = document.getElementsByName('abert')

    if (abert[0].checked || comp[2].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    } else if (comp[1].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    } else if (comp[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }

}
/*Condicionais para Linhas de colagem - BA/BF*/
function carregar15() {
    var form = document.getElementById('form15')
    var squezz = document.getElementsByName('squez1')
    var esp = document.getElementsByName('espL')
    var prop = document.getElementsByName('propagação12')


    if (prop[1].checked || esp[3].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
    else if (prop[0].checked || esp[2].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition3
        form.style.display = 'none';
    }
    else if (esp[1].checked) {
        selectElement.selectedIndex = indiceOpition2
        selectElement1.selectedIndex = indiceOpition2
        selectElement2.selectedIndex = indiceOpition2
        form.style.display = 'none';
    }
    else if (squezz[0].checked || esp[0].checked) {
        selectElement.selectedIndex = indiceOpition1
        selectElement1.selectedIndex = indiceOpition1
        
        form.style.display = 'none';
    }
}
/*Condicionais para Vazio área de colagem ou Squeeze Out Pobre -Almas	*/
function carregar16() {
    var form = document.getElementById('form16')
    var squezz = document.getElementsByName("squez2")
    var prop = document.getElementsByName('propagação13')
    var compfc = document.getElementsByName("compFC")
    var compout = document.getElementsByName("compOut")
    var tec = document.getElementsByName('tec')
    var despre = document.getElementsByName("desprend")

    if (despre[1].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    }
    else if (compfc[1].checked && compout[1].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    }
    else if (prop[1].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
    else if (prop[0].checked && tec[1].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition3
        form.style.display = 'none';
    }
    else if (compfc[0].checked && compout[0].checked) {
        selectElement.selectedIndex = indiceOpition2
        selectElement1.selectedIndex = indiceOpition2
        selectElement2.selectedIndex = indiceOpition2
        form.style.display = 'none';
    }
    else if (squezz[0].checked) {
        selectElement.selectedIndex = indiceOpition1
        selectElement1.selectedIndex = indiceOpition1
        form.style.display = 'none';
    }
}

/*Condicionais para Vazio área de colagem - Pestanas BA e BF - até 2.000 mm da face da raiz	*/
function carregar17() {
    var form = document.getElementById('form17')
    var larg = document.getElementsByName('largPest')
    var comp = document.getElementsByName('compPest')

    if (comp[1].checked || larg[2].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    }
    else if (comp[0].checked && larg[1].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    }
    else if (larg[0].checked && comp[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
}
/*Condicionais para Materiais soltos em geral - Interno da pá	*/
function carregar18() {
    var form = document.getElementById('form18')
    var mat = document.getElementsByName('MatSol')
    var mat1 = document.getElementsByName('MatMet')
    var mat2 = document.getElementsByName('MatFragSol')

    if (mat[0].checked || mat1[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition7

        form.style.display = 'none';
    } else if (mat2[0].checked) {
        selectElement.selectedIndex = indiceOpition1
        selectElement1.selectedIndex = indiceOpition1
        form.style.display = 'none';

    }
}
/*Condicionais para Delaminações - Cascas e Almas	*/
function carregar19() {
    var form = document.getElementById('form19')
    var tam = document.getElementsByName('tamDC')
    var prop = document.getElementsByName('propagação14')



    if (tam[2].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    } else if (tam[3].checked && prop[1].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    }
    else if (tam[2].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    }
    else if (prop[0].checked && tam[1].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    }
    else if (tam[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
}
/*Condicionais para Delaminações - T-pultrudado	*/
function carregar20() {
    var form = document.getElementById('form20')
    var tempo = document.getElementsByName('operacao11')
    var prop1 = document.getElementsByName('1propagação16')
    var prop2 = document.getElementsByName('2propagação16')
    var prop3 = document.getElementsByName('3propagação16')
    var comp = document.getElementsByName('compDC1')

    if (prop3[0].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        form.style.display = 'none';
    }
    else if (prop2[0].checked || comp[1].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        form.style.display = 'none';
    }
    else if (comp[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
    else if (prop1[0].checked && tempo[0].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        form.style.display = 'none';
    }
}

/*Condicionais para LPS/LCTU - Root Chamber	*/
function carregar21() {
    var form = document.getElementById('form21')
    var caboDesf = document.getElementsByName('caboDesf')
    var porConec = document.getElementsByName('porConec')
    var caboDan = document.getElementsByName('caboDan')

    if (caboDan[0].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition8
        form.style.display = 'none';
    } else if (porConec[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    } else if (caboDesf[0].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
}
/*Condicionais para Danos ocasionados por raios/queimados/Flashover	*/
function carregar22() {
    var form = document.getElementById('form22')
    var danoR = document.getElementsByName("danoR")
    var compRaio = document.getElementsByName("compRaio")
    var danoArea = document.getElementsByName('danoArea')
    var distanC = document.getElementsByName('distanC')

    if (danoR[0].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    } else if (compRaio[2].checked && danoR[1].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    } else if (danoArea[1].checked && distanC[1].checked) {
        selectElement.selectedIndex = indiceOpition6
        selectElement1.selectedIndex = indiceOpition6
        selectElement2.selectedIndex = indiceOpition6
        form.style.display = 'none';
    } else if (danoR[1].checked && compRaio[1].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    } else if (danoArea[0].checked && distanC[0].checked && compRaio[0].checked && danoR[1].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    } else if (danoArea[0].checked && distanC[0].checked) {
        selectElement.selectedIndex = indiceOpition5
        selectElement1.selectedIndex = indiceOpition5
        selectElement2.selectedIndex = indiceOpition5
        form.style.display = 'none';
    }
}




/*Condicionais para Camada rompida devido lixamento ou remoção de nylon	*/
function carregar23() {
    var form = document.getElementById('form23')
    var tempo = document.getElementsByName('operacao12')
    var prop = document.getElementsByName('propagação17')
    if (tempo[1].checked && prop[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    } else if (tempo[0].checked && prop[0].checked) {
        selectElement.selectedIndex = indiceOpition2
        selectElement1.selectedIndex = indiceOpition2
        selectElement2.selectedIndex = indiceOpition2
        form.style.display = 'none';
    }
}
/*Condicionais para Furos no laminado - Casca*/
function carregar24() {
    var form = document.getElementById('form24')
    var tempo = document.getElementsByName('operacao13')
    var prop = document.getElementsByName('propagação18')
    var diam1 = document.getElementsByName('diam1')
    var diam2 = document.getElementsByName('diam2')
    var diam3 = document.getElementsByName('diam3')
    if (tempo[1].checked && prop[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    } else if (tempo[0].checked && prop[0].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition3
        form.style.display = 'none';
    } else if (diam1[0].checked && diam2[0].checked && diam3[0].checked) {
        selectElement.selectedIndex = indiceOpition1
        selectElement1.selectedIndex = indiceOpition1

    }
}


/*Condicionais para Furos no laminado - Inserto do BF	*/
function carregar25() {
    var form = document.getElementById('form25')
    var tempo = document.getElementsByName('operacao14')
    var prop = document.getElementsByName('propagação19')
    if (prop[1].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    } else if (tempo[0].checked && prop[0].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition3
        form.style.display = 'none';
    }
}
/*Condicionais para Ausência de camada (Preform) - LE/TE - Casca*/
function carregar26() {
    var form = document.getElementById('form26')
    var fprop = document.getElementsByName('propagacao1')
    var ftempo = document.getElementsByName('operacao1')
    if (ftempo[0].checked && fprop[1]) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition3
        form.style.display = 'none';
    }
}
/*Condicionais para Camada contaminada	*/
function carregar27() {
    var form = document.getElementById('form27')
    var fprop = document.getElementsByName('propagacao2')
    var ftempo = document.getElementsByName('operacao2')
    if (ftempo[1].checked || fprop[0].checked) {
        selectElement.selectedIndex = indiceOpition4
        selectElement1.selectedIndex = indiceOpition4
        selectElement2.selectedIndex = indiceOpition4
        form.style.display = 'none';
    }
    else if (ftempo[0].checked && fprop[1].checked) {
        selectElement.selectedIndex = indiceOpition3
        selectElement1.selectedIndex = indiceOpition3
        selectElement2.selectedIndex = indiceOpition3
        form.style.display = 'none';
    }
}