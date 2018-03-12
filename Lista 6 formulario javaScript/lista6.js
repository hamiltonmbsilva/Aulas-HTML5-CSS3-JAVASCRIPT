function criarForm(){
	
	/*<form>*/
	var tag=document.createElement("form");
	
	tag.setAttribute("id","formulario");
    tag.setAttribute("action","#");
    tag.setAttribute("method","post");
	document.body.appendChild(tag);
	
	/*<fieldset>*/
	var tag=document.createElement("fieldset");
	document.getElementById("formulario").appendChild(tag);
	
	/*<legend>Autenticação</legend>*/
	var legenda=document.createElement("legend");
	legenda.innerHTML="Autenticação";
	document.getElementsByTagName("fieldset")[0].appendChild(legenda);
	
	/*<label class="usuario">Usuário</label>*/
	var tag = document.createElement("label");
	tag.setAttribute("class","usuario");
	tag.innerHTML="Usuário";
	document.getElementsByTagName("fieldset")[0].appendChild(tag);
	
	/*<input id="inputUsuario" class="usuario" type="text">*/
	var tag = document.createElement('input');
	tag.setAttribute("id","inputUsuario");
	tag.setAttribute("class","usuario");
	tag.setAttribute("type","text");
	document.getElementsByTagName("fieldset")[0].appendChild(tag);
	
	/*<label class="senha">Senha</label>*/
	var tag = document.createElement("label");
	tag.setAttribute("class","senha");
	tag.innerHTML="Senha";
	document.getElementsByTagName("fieldset")[0].appendChild(tag);
	
	/*<input id="inputSenha" class="senha" type="password">*/
	var tag = document.createElement('input');
	tag.setAttribute("id","inputSenha");
	tag.setAttribute("class","senha");
	tag.setAttribute("type","password");
	document.getElementsByTagName("fieldset")[0].appendChild(tag);
	
	/*<input id="button" type="submit" value="Login">*/
	var tag = document.createElement('input');
	tag.setAttribute("id","button");
	tag.setAttribute("type","submit");
	tag.setAttribute("value","Login");
	document.getElementsByTagName("fieldset")[0].appendChild(tag);
}