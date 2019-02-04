$(function(){
    loadImages();

    /**
     * Pone el div objetivo como droppable, siendo este el encargado de bloquear y encargarse
     * @param  {Event} event Evento de drop.
     * @param  {Event} ui    Evento que causa el drop (el draggable).
     */
    $('#ord').droppable({drop: function(event, ui){
        var $carta = ui.draggable;
        var $this = $(event.target);
        var actual = $this.data('orden');
        var id = $carta.prop('id');
        if (!actual || actual<id) {
            $carta.draggable({revert: false});
            let $last = $(`img[id=${actual}]`)
            $carta.css(
                {
                    'z-index': id,
                    'left': `${parseInt($last.css('left'))+40}px`,
                    'top': `${parseInt($last.css('top'))+40}px`
                }
            );
            $this.data('orden', id);
            $carta.draggable('destroy');
        }
    }});
});

/**
 * Carga las imagenes en el navegador.
 */
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

    setImgs(shuffle(initImgs(img)));
}

/**
 * Inicializa el array de imagenes con los valores basicos iniciales.
 * @param  {Array} ar Array a inicializar de imagenes.
 * @return {Array}    Array ya inicializado.
 */
function initImgs(ar) {
    var $elem = [];
    var $aux;
    for (var i = 0; i < ar.length; i++) {
        $aux = $(`<img id="${i}" src="${ar[i]}">`);
        $aux.draggable({revert: true});
        $elem.push($aux);
    }
    return $elem;
}

/**
 * Pone las imagenes en su div correspondiente.
 * @param {Array} ar Array de objetos a colocar.
 */
function setImgs(ar) {
    var $selector = $('#des');
    var pos = 10;
    for (var i = 0; i < ar.length; i++) {
        ar[i].css({'z-index': i, 'top': `${pos}px`, 'position': 'absolute'});
        pos+=60;
        $selector.append(ar[i]);
    }
}

/**
 * "Baraja" un array, haciendo que sea aleatorio
 * @param  {Array} array Array a aleatorizar.
 * @return {Array}       Array aleatorio.
 */
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
