
function leiaMais() {
  var maisTexto=document.getElementById("mais");
  var btnLeiaMais=document.getElementById("btnLeiaMais");

  if(btnLeiaMais.style.display === "none"){
    maisTexto.style.display="inline";
    btnLeiaMais.innerHTML="Clique aqui";
  }else{
    maisTexto.style.display="none";
    btnLeiaMais.innerHTML="Manutenção e suporte em informática"
  }
  
}
