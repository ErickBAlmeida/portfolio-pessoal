function copiarTexto(){
    const email = "erick.b.almeida11@gmail.com";
    navigator.clipboard.writeText(email);

}

function textocopiado(){
    icon = document.getElementById('icone');
    texto = document.getElementById('email-txt');

    if (icon.classList.contains('fa-copy')){
        icon.classList.remove('fa-copy');
        icon.classList.add('fa-check');
        icon.style.color = "#918cff";
        texto.style.color = "#918cff";
    } else {
        alert('erro: ', err)
    }
};

document.getElementById('copy-button').addEventListener('click', copiarTexto);
document.getElementById('copy-button').addEventListener('click', textocopiado);