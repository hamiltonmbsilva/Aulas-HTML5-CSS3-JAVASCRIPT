function start(){
    var secaoPri = document.createElement("section");
    secaoPri.setAttribute("id","secaoPrincipal");
    secaoPri.setAttribute("class","principal");
    document.body.appendChild(secaoPri);
    
    var cabec = document.createElement("section");
    cabec.setAttribute("id","secaoCabecalho");
    cabec.setAttribute("class","cabecalho");
    document.getElementById("secaoPrincipal").appendChild(cabec);
    
    var logo = document.createElement("img");
    logo.setAttribute("id","imgINSS");
    logo.setAttribute("src","logo_inss.png");
    document.getElementById("secaoCabecalho").appendChild(logo);
    
    var paragrafo1 = document.createElement("p");
    paragrafo1.setAttribute("id","pCabecalho");
    paragrafo1.setAttribute("class","paragrafo");
    paragrafo1.innerHTML="Calcular INSS";
    document.getElementById("secaoCabecalho").appendChild(paragrafo1);
    
    var menu1 = document.createElement("menu");
    menu1.setAttribute("id","secaoMenu");
    menu1.setAttribute("class","menu");
    document.getElementById("secaoPrincipal").appendChild(menu1);
    
    var botao1= document.createElement("button");
    botao1.setAttribute("id","botaoInfo");
    botao1.setAttribute("class", "botao");
    botao1.setAttribute("onclick","informacao()")
    botao1.innerHTML="Informações";
    document.getElementById("secaoMenu").appendChild(botao1);
    
    var botao2= document.createElement("button");
    botao2.setAttribute("id","botaoCalcular");
    botao2.setAttribute("class", "botao");
    botao2.setAttribute("onclick","calcular()")
    botao2.innerHTML="Calcular";
    document.getElementById("secaoMenu").appendChild(botao2);
    
    var botao3= document.createElement("button");
    botao3.setAttribute("id","botaoTabela");
    botao3.setAttribute("class", "botao");
    botao3.setAttribute("onclick","tabela()")
    botao3.innerHTML="Tabela";
    document.getElementById("secaoMenu").appendChild(botao3);
    
    var botao4= document.createElement("button");
    botao4.setAttribute("id","botaoPrevidencia");
    botao4.setAttribute("class", "botao");
    botao4.setAttribute("onclick","previdencia()")
    botao4.innerHTML="Previdencia Social";
    document.getElementById("secaoMenu").appendChild(botao4);
    
    
}

function calcular(){
    
    if(document.getElementById("secaoCalcular"))
    secaoCalcular.parentNode.removeChild(secaoCalcular);
    if(document.getElementById("secaoInfo"))
    secaoInfo.parentNode.removeChild(secaoInfo);
    if(document.getElementById("secaoTabela"))
    secaoTabela.parentNode.removeChild(secaoTabela);
    if(document.getElementById("secaoPrevidencia"))
    secaoPrevidencia.parentNode.removeChild(secaoPrevidencia);
    
    var calc= document.createElement("section");
    calc.setAttribute("id","secaoCalcular");
    calc.setAttribute("class", "calcular");
    document.getElementById("secaoPrincipal").appendChild(calc);
    
    var paragrafo1 = document.createElement("p");
    paragrafo1.setAttribute("id","tituloSecao");
    paragrafo1.innerHTML="Calcular INSS - Empregado, Empregado Doméstico e Trabalhador Avulso";
    document.getElementById("secaoCalcular").appendChild(paragrafo1);
    
    var textolabel = document.createElement("label");
    textolabel.setAttribute("id","labelSalario");
    textolabel.innerHTML="Salário Bruto";
    document.getElementById("secaoCalcular").appendChild(textolabel);
    
    var sal = document.createElement("input");
    sal.setAttribute("id", "inputSalario");
    sal.setAttribute("type","number");
    sal.setAttribute("placeHolder","Digite seu salário bruto");
    sal.setAttribute("onchange","calcularValorINSS()");
    //sal.onchange="calcularValorINSS()";
    document.getElementById("secaoCalcular").appendChild(sal);
    
}

function calcularValorINSS(){
    
    /**/
    if(document.getElementById("secaoResultado"))
       secaoResultado.parentNode.removeChild(secaoResultado);
    
    var valor = parseFloat(inputSalario.value);
    
    if(valor <=  1556.94){
        var resultado1 = (valor * 8)/100;
        var ali = 8;
    }
    
    if(valor > 1556.94 && valor <= 2594.92){
        resultado1 = (valor * 9)/100;
        var ali = 9;
    }
    
    if(valor > 2594.92){
        var resultado1 = (valor * 11)/100;
        var ali = 11;
    }
    
    var resul = document.createElement("section");
    resul.setAttribute("id", "secaoResultado");
    resul.setAttribute("class","resultado");
    document.getElementById("secaoCalcular").appendChild(resul);
    
    var paragrafo = document.createElement("p");
    paragrafo.setAttribute("id","tituloResultado");
    paragrafo.innerHTML="Resultado";
    document.getElementById("secaoResultado").appendChild(paragrafo);
    
    var paragrafo1 = document.createElement("p");
    paragrafo1.setAttribute("id","pResultado");
    paragrafo1.innerHTML="O valor a ser pago é R$"+resultado1+"  (alíquota de " + ali+ "%)";
    paragrafo1.setAttribute("class","texto"); document.getElementById("secaoResultado").appendChild(paragrafo1);
}

function informacao(){
    
    if(document.getElementById("secaoInfo"))
    secaoInfo.parentNode.removeChild(secaoInfo);
    if(document.getElementById("secaoCalcular"))
    secaoCalcular.parentNode.removeChild(secaoCalcular);
    if(document.getElementById("secaoTabela"))
    secaoTabela.parentNode.removeChild(secaoTabela);
    if(document.getElementById("secaoPrevidencia"))
    secaoPrevidencia.parentNode.removeChild(secaoPrevidencia);
    
    var inf = document.createElement("section");
    inf.setAttribute("id","secaoInfo");
    document.getElementById("secaoPrincipal").appendChild(inf);
    
    var paragrafo = document.createElement("p");
    paragrafo.setAttribute("id", "tituloSecao");
    paragrafo.innerHTML =" O que é INSS e para que serve?";
    document.getElementById("secaoInfo").appendChild(paragrafo);
    
    var paragrafo1 = document.createElement("p");
    paragrafo1.setAttribute("id", "p1SecaoPrincipal");
    paragrafo1.setAttribute("class", "texto");
    paragrafo1.innerHTML =" A sigla INSS significa Instituto Nacional do Seguro Social (órgão do Ministério da Previdência Social, ligado diretamente ao Governo) e é responsável pelos pagamentos das aposentadorias e demais benefícios dos trabalhadores brasileiros que contribuem com a Previdência Social (seguro que garante uma aposentadoria ao contribuinte quando ele pára de trabalhar), com exceção dos servidores públicos.";
    document.getElementById("secaoInfo").appendChild(paragrafo1);
    
    var paragrafo2 = document.createElement("p");
    paragrafo2.setAttribute("id", "p1SecaoPrincipal");
    paragrafo2.setAttribute("class", "texto");
    paragrafo2.innerHTML =" A principal vantagem da contribuição para o INSS é garantir o recebimento de um benefício mensal durante a aposentadoria. Outra vantagem é que o trabalhador que contribui para a Previdência tem direito de receber auxílio-doença em caso de afastamento do serviço por motivo de saúde.";
    document.getElementById("secaoInfo").appendChild(paragrafo2);
}

function tabela(){
    
    if(document.getElementById("secaoTabela"))
    secaoTabela.parentNode.removeChild(secaoTabela);
    if(document.getElementById("secaoInfo"))
    secaoInfo.parentNode.removeChild(secaoInfo);
    if(document.getElementById("secaoCalcular"))
    secaoCalcular.parentNode.removeChild(secaoCalcular);
    if(document.getElementById("secaoPrevidencia"))
    secaoPrevidencia.parentNode.removeChild(secaoPrevidencia);
    
    
    var tabela = document.createElement("section");
    tabela.setAttribute("id","secaoTabela");
    document.getElementById("secaoPrincipal").appendChild(tabela);
    
    var paragrafo=document.createElement("p");
    paragrafo.setAttribute("id","tituloSecao");
    paragrafo.innerHTML="Tabelas INSS 2017";
    document.getElementById("secaoTabela").appendChild(paragrafo);
    
    var imagem = document.createElement("img");
    imagem.setAttribute("id", "imgTabela1");
    imagem.setAttribute("src","tabela1.png");
    document.getElementById("secaoTabela").appendChild(imagem);
    
    var imagem1 = document.createElement("img");
    imagem1.setAttribute("id", "imgTabela2");
    imagem1.setAttribute("src","tabela2.png");
    document.getElementById("secaoTabela").appendChild(imagem1);
    
    
}

function previdencia(){
    
    if(document.getElementById("secaoPrevidencia"))
    secaoPrevidencia.parentNode.removeChild(secaoPrevidencia);
    if(document.getElementById("secaoTabela"))
    secaoTabela.parentNode.removeChild(secaoTabela);
    if(document.getElementById("secaoInfo"))
    secaoInfo.parentNode.removeChild(secaoInfo);
    if(document.getElementById("secaoCalcular"))
    secaoCalcular.parentNode.removeChild(secaoCalcular);
    
    var prev = document.createElement("section");
    prev.setAttribute("id","secaoPrevidencia");
    prev.setAttribute("class","previdencia");
    document.getElementById("secaoPrincipal").appendChild(prev);
    
    var prev1 = document.createElement("iframe");
    prev1.setAttribute("id", "framePrevidencia");
    prev1.setAttribute("class","frame");
    prev1.setAttribute("src","http://www.previdencia.gov.br/");
    document.getElementById("secaoPrevidencia").appendChild(prev1);
    
    
}