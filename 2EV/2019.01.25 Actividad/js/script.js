var isDragging = false;

$(function(){
    loadImages();

});

function loadImages (){
    var img = [
        'src/Barba Garcia, Francisco.jpg',
        'src/Barba Rodriguez, Arturo.jpg',
        'src/Caro Bernal, Miguel Angel.jpg',
        'src/Castillo Peña, José Luis.jpg',
        'src/Cruz Vidal, Alejandro.jpg',
        'src/Gallego Martel, Jose Maria.jpg',
        'src/Garci Peña, José Joaquín.jpg',
        'src/Vazquez Rodriguez, Maria del Mar.jpg',
    ];

    var $elem = [];
    var $aux;
    for (var i = 0; i < img.length; i++) {
        $aux = $(`<img id="${i}" src="${img[i]}" style="z-index: ${i};">`);
        $aux.mousemove(function(e) {
                $(this).css({'left':e.pageX, 'top':e.pageY, 'position':'absolute'});
            });
        $elem.push($aux);
    }
    var $elemDes = shuffle($elem);

    var $selector = $('#des');
    for (var i = 0; i < $elemDes.length; i++) {
        $selector.append($elemDes[i]);
    }
}

function shuffle(array) {
    var i = array.length, aux, random;

    while (0 !== i) {
        random = Math.floor(Math.random() * i);
        i -= 1;

        aux = array[i];
        array[i] = array[random];
        array[random] = aux;
    }

    return array;
}
