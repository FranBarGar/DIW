$(function(){
    loadImages();

});

function loadImages (){
    var index=-100;

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
    var pos = 10;
    for (var i = 0; i < img.length; i++) {
        $aux = $(`<img src="${img[i]}">`);
        $aux.data('index', i);
        $aux.draggable();
        $aux.on('drag', function(){
            var $selector = $('#ord');
            var actual = $selector.data('orden');
            var id = $(this).data('index');
            $(this).css('z-index', index);
            index+=1;
            if (actual && actual>id) {
                $(this).draggable({revert: true});
            } else {
                $selector.data('orden', index);
            }
        });
        $elem.push($aux);
    }
    var $elemDes = shuffle($elem);

    for (var i = 0; i < $elemDes.length; i++) {
        $elemDes[i].css({'z-index': i, 'top': `${pos}px`, 'position': 'absolute'});
        pos+=60;
    }

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
