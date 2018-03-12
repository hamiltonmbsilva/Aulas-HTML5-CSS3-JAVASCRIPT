function start(){
    
    var secaoPri = document.createElement("section");
	secaoPri.setAttribute("id","secaoPrincipal");
	document.body.appendChild(secaoPri);
    
    
    var imagem = document.createElement("img");
    imagem.setAttribute("id","imgCabecalho");
    imagem.setAttribute("src","logo.png");
    document.getElementById("secaoPrincipal").appendChild(imagem);
    
    var menu1 = document.createElement("menu");
    menu1.setAttribute("id", "secaoMenu");
    menu1.setAttribute("class", "menu");
    document.getElementById("secaoPrincipal").appendChild(menu1);
    
    var botao1= document.createElement("button");
    botao1.setAttribute("id","botaoInfo");
    botao1.setAttribute("class", "botao");
    botao1.setAttribute("onclick","informacao()")
    botao1.innerHTML="Informações";
    document.getElementById("secaoMenu").appendChild(botao1);
    
    var botao2= document.createElement("button");
    botao2.setAttribute("id","botaoCalculadora");
    botao2.setAttribute("class", "botao");
    botao2.setAttribute("onclick","calculadora()")
    botao2.innerHTML="Calculadora";
    document.getElementById("secaoMenu").appendChild(botao2);
    
    var botao3= document.createElement("button");
    botao3.setAttribute("id","botaoEventos");
    botao3.setAttribute("class", "botao");
    botao3.setAttribute("onclick","eventos()")
    botao3.innerHTML="Eventos";
    document.getElementById("secaoMenu").appendChild(botao3);
    
}

function calculadora(){
    
    if(document.getElementById("sectionCalculadora"))
        sectionCalculadora.parentNode.removeChild(sectionCalculadora);
    if(document.getElementById("sectionInfo"))
        sectionInfo.parentNode.removeChild(sectionInfo);
    if(document.getElementById("sectionEventos"))
        sectionEventos.parentNode.removeChild(sectionEventos);
    
    
    var calcular = document.createElement("section");
	calcular.setAttribute("id","sectionCalculadora");
	document.body.appendChild(calcular);
    
    /*Seção Distancia*/
    
    var distancia = document.createElement("section");
    distancia.setAttribute("id", "sectionDistancia");
    document.getElementById("sectionCalculadora").appendChild(distancia);
    
    var distanciatext = document.createElement("label");
    distanciatext.setAttribute("id", "labelDistancia");
    distanciatext.innerHTML = "Distância";
    document.getElementById("sectionDistancia").appendChild(distanciatext);
    
    var distancia2 = document.createElement("input");
    distancia2.setAttribute("id","inputDistancia");
    distancia2.setAttribute("type","number");
    distancia2.setAttribute("placeholder","Km");
    document.getElementById("sectionDistancia").appendChild(distancia2);
    
    /*Seção tempo*/
    
    var tempo = document.createElement("section");
    tempo.setAttribute("id", "sectionTempo");
    document.getElementById("sectionCalculadora").appendChild(tempo);
    
    var tempo1 = document.createElement("label");
    tempo1.setAttribute("id","labelTempo");
    tempo1.innerHTML = "Tempo";
    document.getElementById("sectionTempo").appendChild(tempo1);
    
    var tempo2 = document.createElement("input");
    tempo2.setAttribute("id","inputTempo");
    tempo2.setAttribute("type","number");
    tempo2.setAttribute("placeholder","minutos");
    document.getElementById("sectionTempo").appendChild(tempo2);
    
    /*Botão*/
    
    var botao1 = document.createElement("button");
    botao1.setAttribute("id", "botaoCalcular");
    botao1.setAttribute("onclick","ritmo()");
    botao1.innerHTML="Calcular";
    document.getElementById("sectionCalculadora").appendChild(botao1);
    
}

function ritmo(){
    
    if(document.getElementById("sectionResultado"))
        sectionResultado.parentNode.removeChild(sectionResultado);
    
    var resultado = document.createElement("section");
    resultado.setAttribute("id","sectionResultado");
    document.getElementById("sectionCalculadora").appendChild(resultado);
    
    var paragrafo = document.createElement("p");
    paragrafo.setAttribute("id","pTituloResultado");
    paragrafo.innerHTML="Resultado";
    document.getElementById("sectionResultado").appendChild(paragrafo);
    
        
    var distancia = parseFloat(inputDistancia.value);
	var tempo = parseFloat(inputTempo.value);
	var resultado = (tempo/distancia);
    
    var paragrafo = document.createElement("p");
    paragrafo.setAttribute("id","pResultado");
    paragrafo.innerHTML = "Ritmo(PACE): "+resultado +"min/Km";
    document.getElementById("sectionResultado").appendChild(paragrafo);
  
    
    
}

function informacao(){
    
    if(document.getElementById("sectionInfo"))
        sectionInfo.parentNode.removeChild(sectionInfo);
    if(document.getElementById("sectionEventos"))
        sectionEventos.parentNode.removeChild(sectionEventos);
    if(document.getElementById("sectionCalculadora"))
        sectionCalculadora.parentNode.removeChild(sectionCalculadora);
    
    var infor = document.createElement("section");
    infor.setAttribute("id","sectionInfo");
    document.body.appendChild(infor);
    
    var cabecalho = document.createElement("p");
    cabecalho.setAttribute("id","tituloSecao");
    cabecalho.innerHTML="Você sabe o que é pace?";
    document.getElementById("sectionInfo").appendChild(cabecalho);
    
    var paragrafo1 = document.createElement("p");
    paragrafo1.setAttribute("id","p1Texto");
    paragrafo1.innerHTML="Quem está começando a correr com certeza já ouviu falar no pace, mas você sabe o que é?";
    document.getElementById("sectionInfo").appendChild(paragrafo1);
    
    var paragrafo2 = document.createElement("p");
    paragrafo2.setAttribute("id","p2Texto");
    paragrafo2.innerHTML="O pace nada mais é que seu ritmo médio de corrida, medido em minutos por quilômetro, ou seja: marcar em quanto tempo você percorre 1km. Ele é um grande aliado, pois dá ao atleta uma dimensão de sua capacidade e o ajuda a alcançar resultados dentro de suas limitações, sem cometer erros ou exageros que possam comprometer seu desempenho.";
    document.getElementById("sectionInfo").appendChild(paragrafo2);
    
    var paragrafo3 = document.createElement("p");
    paragrafo3.setAttribute("id","p3Texto");
    paragrafo3.innerHTML="Saber seu pace é adequar o ritmo do treino ao seu nível de condicionamento. Para chegar a esse número, um treinador precisa analisar sua rotina de treinamentos, sua capacidade física atual e suas metas. “O pace ideal é o ritmo no qual você consegue economizar energia, evitando o desperdício e, se possível, deixar uma sobra para o final”, explicou o treinador Nelson Evâncio em entrevista à revista O2.";
    document.getElementById("sectionInfo").appendChild(paragrafo3);
    
    var paragrafo4 = document.createElement("p");
    paragrafo4.setAttribute("id","p4Texto");
    paragrafo4.innerHTML="O pace também é um dado importante na hora de se posicionar dentro da largada de uma corrida de rua e sair no pelotão certo, com tempo alvo semelhante ao seu, evitando tumultos e ajudando a prova a fluir naturalmente.";
    document.getElementById("sectionInfo").appendChild(paragrafo4);
}

function eventos(){
    
    if(document.getElementById("sectionEventos"))
        sectionEventos.parentNode.removeChild(sectionEventos);
    if(document.getElementById("sectionInfo"))
        sectionInfo.parentNode.removeChild(sectionInfo);
    if(document.getElementById("sectionCalculadora"))
        sectionCalculadora.parentNode.removeChild(sectionCalculadora);
    
    var evento = document.createElement("section");
    evento.setAttribute("id","sectionEventos");
    document.body.appendChild(evento);
    
    var imagem = document.createElement("img");
    imagem.setAttribute("id","imgEventos");
    imagem.setAttribute("src","eventos.png");
    document.getElementById("sectionEventos").appendChild(imagem);
}

