function changeSlidesToShow(newValue) {
    $('.multiple-slick').slick('slickSetOption', 'slidesToShow', newValue, true);
}

function verificarTamanhoTela(){
    let janelaWidth = window.innerWidth;
    if (janelaWidth < 700) {
        changeSlidesToShow(1);
    } else if (janelaWidth < 900) {
        changeSlidesToShow(2);
    } else {
        changeSlidesToShow(3);
    }
}

window.addEventListener('resize', verificarTamanhoTela);
window.addEventListener('DOMContentLoaded', verificarTamanhoTela); // Garante atualização ao carregar a página