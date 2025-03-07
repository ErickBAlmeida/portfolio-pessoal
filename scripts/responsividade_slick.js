function changeSlidesToShow(newValue) {
    $('.multiple-slick').slick('slickSetOption', 'slidesToShow', newValue, true);
}



function verificarTamanhoTela(){
    let janelaWidth = window.innerWidth;
    if (janelaWidth < 450) {
        changeSlidesToShow(1);
    } else {
        changeSlidesToShow(3);
    }
}


window.addEventListener('resize', verificarTamanhoTela);