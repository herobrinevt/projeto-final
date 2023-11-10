alert('bom dia e vamos para as semis da liberta')
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
for(let contador = 0; contador <listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classlist[1];
    const idAudio = '#som_${instrumento}';

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}