function start(){
    
    var fundo = document.createAttribute("Background"); document.body.setAttribute("style","background:url('imagens/banner1.jpeg ')");
    
    var secaocabe = document.createElement("section");
    secaocabe.setAttribute("id","secaoCabecalho");
    document.body.appendChild(secaocabe);
    
    var logo1 = document.createElement("img");
    logo1.setAttribute("id","imgLogo");
    logo1.setAttribute("src","imagens/logo.png");
    document.getElementById("secaoCabecalho").appendChild(logo1);
    
    var secaomenu = document.createElement("nav");
    secaomenu.setAttribute("id","navegacao");
    document.getElementById("secaoCabecalho").appendChild(secaomenu);
    
    var menu = document.createElement("ul");
    menu.setAttribute("id", "ulmenu");
    menu.setAttribute("class","menu");
    document.getElementById("navegacao").appendChild(menu);
    
    
    
}