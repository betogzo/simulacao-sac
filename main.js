function simularFinanciamento() {
    // Capturando valores dos inputs
    var valorFinanciado = parseFloat(document.getElementById('valor-sim').value);
    var prazoAnos = parseFloat(document.getElementById('prazo-sim').value);
    var jurosAno = parseFloat(document.getElementById('juros-sim').value);

    // Cálculo do Prazo em Meses
    var prazoMeses = prazoAnos * 12;
    
    // Cálculo do Juros ao Mês
    var jurosMes = (Math.pow(1 + jurosAno, (1/12))) - 1;
    
    // Cálculo da amortização
    var amortizacao = (valorFinanciado / prazoMeses);
    
    // Cálculo de Juros, Juros acumulado e total das parcelas
    var x = 0;
    var juros = [];
    var jurosAc = 0;
    var totalParcela = [];
    
    while (x < prazoMeses) {
        juros.push(((valorFinanciado - (x * amortizacao)) * jurosMes));
        jurosAc += (valorFinanciado - (x * amortizacao)) * jurosMes;
        totalParcela.push(((valorFinanciado - (x * amortizacao)) * jurosMes) + amortizacao);
        x++;
    }

    // Preenchendo os inputs
    document.getElementById('prazo-res').value = prazoMeses;
    document.getElementById('juros-res').value = (jurosMes.toFixed(6)).toString() + "%";
    document.getElementById('jurosac-res').value = "R$ " + (jurosAc.toFixed(2)).toString();

    // Mostrando e preenchendo a tabela preenchendo a tabela
    document.getElementsByClassName('tab-res')[0].style.visibility = "visible";


    var amortlist = document.querySelectorAll('.amort');
    for(x = 0; x < amortlist.length; x++) {
        amortlist[x].textContent = "R$ " + amortizacao.toFixed(2);
    }

    amortlist = document.querySelectorAll('.jurosmensal');
    for(x = 0; x < amortlist.length; x++) {
        amortlist[x].textContent = "R$ " + juros[x].toFixed(2);
    }

    amortlist = document.querySelectorAll('.totalparcela');
    for(x = 0; x < amortlist.length; x++) {
        amortlist[x].textContent = "R$ " + totalParcela[x].toFixed(2);
    }

}

//  //