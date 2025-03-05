function changeSlidesToScroll(newValue) {
    $('.multiple-slick').slick('slickSetOption', 'slidesToScroll', newValue, true);
}

// Exemplo de uso: alterar para 2 slides por vez
changeSlidesToScroll(4);