function copiarTexto(){
    const email = "erick.b.almeida11@gmail.com";
    navigator.clipboard.writeText(email);

}

function textocopiado(){
    elemento = document.getElementById('icone');

    if (elemento.classList.contains('fa-copy')){
        elemento.classList.remove('fa-copy');
        elemento.classList.add('fa-check');
    } else {
        alert('erro: ', err)
    }
};

document.getElementById('copy-button').addEventListener('click', copiarTexto);
document.getElementById('copy-button').addEventListener('click', textocopiado);