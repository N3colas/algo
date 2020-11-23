function ai(){
	alert('aa')
}
var linksMenu =  document.querySelectorAll('a'); 
var paginaAtual = '#inicio';
var paginaDesejada = '';  
linksMenu.forEach(function(link){ 
  console.log(link);
  link.addEventListener('click', alterarPagina);
});
function alterarPagina(evt){
  evt.preventDefault();
  console.log(evt);
  document.querySelector(paginaAtual).style.display = 'none';
  paginaDesejada = evt.target.hash; 
  document.querySelector(paginaDesejada).style.display = 'block';
  paginaAtual = paginaDesejada;  
}