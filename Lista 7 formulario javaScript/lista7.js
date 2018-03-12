function criarCalculo(){
    
    /* <p><Paragrafo = "Calcular Área do Triângulo"></p>*/
    
    var paragrafo=document.createElement("p");
    paragrafo.id="p";
    paragrafo.innerHTML="Calcular Área do Triângulo";
    document.body.appendChild(paragrafo);
    
    /*<div><Div principal></div>*/
    
    var areaPrincipal = document.createElement("div");
    areaPrincipal.id="dive";
    document.body.appendChild(areaPrincipal);
    
    /*<label>
    
    var tag = document.createElement("div");
    document.body.appendChild(tag);
    document.getElementsByTagName("div")[0].appendChild(tag);*/
    
    /*<label id="labelBase">Base</label>*/
    
    var tag = document.createElement("label");
    tag.setAttribute("id", "labelBase");
    tag.innerHTML="Base";
    document.getElementById("dive").appendChild(tag);
    
    /*<imput id="labelResultado" id= "labelBAse" type="text">*/
    
    var tag1 = document.createElement('input');
    tag1.setAttribute("id", "inputBase");
    //tag.setAttribute("class", "labelBase");
    tag1.setAttribute("type","number");   
    document.getElementById("dive").appendChild(tag1);
    
    /*<label Altura>*/
    var tag = document.createElement("label");
    tag.setAttribute("id", "labelAltura");
    tag.innerHTML="Altura";
    document.getElementById("dive").appendChild(tag);
    
    /*<imput id="labelAltura" id= "labelAltura" type="text">*/
    
    var tag2 = document.createElement('input');
    tag2.setAttribute("id", "inputAltura");
    //tag.setAttribute("class", "labelBase");
    tag2.setAttribute("type","number");   
    document.getElementById("dive").appendChild(tag2);
    
    /*Imagens*/
    /*Imagem Formula*/
    var imagem = document.createElement('img');
    imagem.setAttribute("id", "imgFormula");
    imagem.setAttribute("src","formulaTriangulo.png");
    document.getElementById("dive").appendChild(imagem);
    
    /*Imagem Triangulo*/
    var imagem2 = document.createElement('img');
    imagem2.setAttribute("id", "imgtriangulo");
    imagem2.setAttribute("src","triangulo.png");
    document.getElementById("dive").appendChild(imagem2);
    
    /*Botão*/
    
    var botao = document.createElement("button");
    botao.setAttribute("class", "button");
    botao.setAttribute("type", "submit");
    botao.setAttribute("value", "Login");
    botao.innerHTML="Calcular Area";
    botao.setAttribute("onclick", "resultado()");
    document.getElementById("dive").appendChild(botao);
    
    
 
}

function resultado(){
    
    if(document.getElementById("pResultado"))
        pResultado.parentNode.removeChild(pResultado);
    if(document.getElementById("divResultado"))
        pResultado.parentNode.removeChild(divResultado);
    
     /* <p><Paragrafo = "Calcular Área do Triângulo"></p>*/
    
    var paragrafo=document.createElement("p");
    paragrafo.setAttribute("id", "pResultado");
    paragrafo.id="p";
    paragrafo.innerHTML="Resultado";
    document.body.appendChild(paragrafo);
    
    /*<div><Div segundaria></div>*/
    
    var areasegundaria = document.createElement("div");
    areasegundaria.id="dive1";
    areasegundaria.setAttribute("class","divResultado");
    document.body.appendChild(areasegundaria);
    
    var tag = document.createElement("label");
    tag.setAttribute("id", "labelResultado");
    tag.innerHTML="Superfície Triângulo";
     document.getElementById("dive1").appendChild(tag);
    
    var tagarea = document.createElement("input");
    tagarea .setAttribute("id", "inputResultado");
    tagarea .getAttribute("type","text");
    document.getElementById("dive1").appendChild(tagarea ).disabled = true;
    
    var base = parseFloat(document.getElementById("inputBase").value);
    var altura = parseFloat(document.getElementById("inputAltura").value);
    var area = (base * altura) / 2;
    
    document.getElementById("inputResultado").value = String(area)+" metros";
    
    
}