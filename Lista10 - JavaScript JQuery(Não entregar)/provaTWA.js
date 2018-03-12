function start(){
	jQuery("body").css("background","url('imagens/banner1.jpeg')");
	/*<section id="secaoCabecalho"></section>*/
	var secao = $("<section>");
	secao.attr({id:"secaoCabecalho"});
	$("body").append(secao);
	
	/*<img id="imgLogo" src="imagens/logo.png">*/
	var imagem = $("<img>");
	imagem.attr({	id:"imgLogo",
					src:"imagens/logo.png"
				});
	$("#secaoCabecalho").append(imagem);
	
	/*<nav id="navegacao"></nav>*/
	var nav = $("<nav>");
	nav.attr({	id:"navegacao"
				});
	$("#secaoCabecalho").append(nav);
	
	/*<ul id="ulmenu" class="menu"></ul>*/
	var ul = $("<ul>");
	ul.attr(
		{
			id:"ulmenu",
			class:"menu"
		}
	);
	$("#navegacao").append(ul);
	
	/*<li id="lihome"></li>*/
	var li = $("<li>");
	li.attr({id:"lihome"});
	$("#ulmenu").append(li);
	
	/*<a id="linkhome" href="">HOME</a>*/
	var a =$("<a>");
	a.attr({id:"linkhome",
			onclick:"home()"});
	a.text("HOME");
	$("#lihome").append(a);
	
	/*<li id="liingressos"></li>*/
	var li = $("<li>");
	li.attr({id:"liingressos"});
	$("#ulmenu").append(li);
	
	/*<a id="linkingressos" href="">INGRESSOS</a>*/
	var a =$("<a>");
	a.attr({id:"linkingressos",
			onclick:"ingressos()"});
	a.text("INGRESSOS");
	$("#liingressos").append(a);
	
	/*<li id="lidescontos"></li>*/
	var li = $("<li>");
	li.attr({id:"lidescontos"});
	$("#ulmenu").append(li);
	
	/*<a id="linkdescontos" href="">INGRESSOS</a>*/
	var a =$("<a>");
	a.attr({id:"linkdescontos",
			onclick:"desconto()"});
	a.text("DESCONTOS");
	$("#lidescontos").append(a);
}
function desconto(){
	$("#secaoDescontos").remove();
	jQuery("body").css("background","url('imagens/banner3.jpeg')");
	/*<section id="secaoDescontos"></section>*/
	var secao = $("<section>");
	secao.attr({id:"secaoDescontos"});
	$("body").append(secao);
	/*<h3 id="h3Descontos">Descontos</h3>*/
	var cabecalho = $("<h3>");
	cabecalho.attr({id:"secaoDescontos"});
	cabecalho.text("descontos");
	$("#secaoDescontos").append(cabecalho);
	/*<p id="p1Descontos"></p>*/
	var paragrafo = $("<p>");
	paragrafo.attr({id:"p1Descontos"});
	paragrafo.text("Comprando pelo site você ganha 5% de desconto na compra de 2 ou mais ingressos de tarifa normal");
	$("#secaoDescontos").append(paragrafo);
	/*<input id="inputQdade" type="number" placeholder="Quantidade" onChange="calcular()">*/
	var campo = $("<input>");
	campo.attr({
		id:"inputQdade",
		type:"number",
		placeholder:"Quantidade",
		onchange:"calcular()"
	});
	$("#secaoDescontos").append(campo);
	
}
function calcular(){
	var qdade = parseFloat($("#inputQdade").val());
	var valor = 15*qdade;
	$("#secaoResultado").remove();
	/*<section id="secaoResultado"></section>*/
	var secao = $("<section>");
	secao.attr({id:"secaoResultado"});
	$("body").append(secao);
	/*<h3 id="h3Resultado">Valor a pagar</h3>*/
	var cabecalho = $("<h3>");
	cabecalho.attr({id:"secaoResultado"});
	cabecalho.text("Valor a pagar");
	$("#secaoResultado").append(cabecalho);
	if (qdade>=2){
		valor = valor-(0.05*valor);
		/*<p id="p1Resultado"></p>*/
		var paragrafo = $("<p>");
		paragrafo.attr({id:"p1Resultado"});
		paragrafo.text("Parabéns você ganhou 5% de desconto");
		$("#secaoResultado").append(paragrafo);
	}
	/*<p id="p2Resultado"></p>*/
	var paragrafo = $("<p>");
	paragrafo.attr({id:"p2Resultado"});
	paragrafo.text("O valor a pagar é R$"+valor);
	$("#secaoResultado").append(paragrafo);
}
function ingressos(){
	jQuery("body").css("background","url('imagens/banner2.jpeg')");
	
}
function home(){
	jQuery("body").css("background","url('imagens/banner1.jpeg')");
	
}