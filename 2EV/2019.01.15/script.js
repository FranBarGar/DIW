$(function(){

    /**
     * Cuando se hace click en el boton este desaparece y se añaden los DIV
     * que se han pasado por parametro en el campo de texto, luego se añaden
     * una cantidad de parrafos aleatorios a cada DIV.
     * En caso de introducir un valor erroneo, nos muestra un alert.
     */
    $('#boton1').click(function() {
        var number = $('#num').prop('value');
        if (number>2 && number<7) {
            $(this).hide();
            appendDivs($('body'), number);
            $('div').each(function(){
                appendP($(this), arRandom(20, 10)*number)
            });
            $('body').append(`<div style="
            display: block;
            bottom: 0;
            position: absolute;
            bottom: 0;
            height: 10%;
            width: 100%;"></div>`);

            $('div').mouseenter(mouseIn);
            $('div').mouseout(mouseOut);
        } else {
            alert('Debe introducir un numero entre 2 y 7 (ambos no incluidos)');
        }
    });

});

/**
 * Funcion arrow, genera un numero aleatorio entre el minimo y el maximo que se
 * le pasen, ambos incluidos.
 * @param  {int} max Valor maximo del numero aleatorio.
 * @param  {int} min Valor minimo del numero aleatorio.
 * @return {int}     Numero aleatorio.
 */
var arRandom = (max, min) => (parseInt(Math.random()*(max-min+1))+min);

/**
 * Añade DIVs a un selector.
 * @param  {selector} selector Donde se van a añadir los DIVs.
 * @param  {[type]} num      Numero de DIVs que se van a añadir.
 */
function appendDivs(selector, num)
{
    for (var i = 0; i < num; i++) {
        $(selector).append('<div></div>')
    }
}

/**
 * Añade P a un selector.
 * @param  {selector} selector Donde se van a añadir los P.
 * @param  {int} num      Numero de P a añadir.
 */
function appendP(selector, num)
{
    $(selector).append('<h1>Titulo</h1>');
    for (var i = 0; i < num; i++) {
        $(selector).append(`<p>Parrafo ${i}</p>`);
    }
}

/**
 * Realiza los fadeIn y los fadeOut a los selectores.
 * @param  {selector} selector Elemento al que se le asigna los fades.
 * @param  {[type]} time     Tiempo que duran ambos fades.
 */
function fades(selector, time){
    if (!$(selector).data('time')) {
        $(selector).fadeIn(time, function(){
            $(selector).data('time', time);
            $(selector).fadeOut(time, function(){
                $(selector).removeData('time');
            });
        });
    }
}

/**
 * Evento que hace aparecer y desaparecer los parrafos al introducir
 * el raton en un DIV.
 */
function mouseIn() {
    var selector = $('p').toArray();
    var len = selector.length-1;
    inter = setInterval(function(){
        fades(selector[arRandom(len, 0)], arRandom(3000,1000));
    }, 100);
    setTimeout(function(){
        clearInterval(inter);
        $('p').fadeIn(4000);
    }, 20000);
}

/**
 * Evento que cancela el mouseIn y pone el Titulo en rojo.
 */
function mouseOut()
{
    $('h1').css('color', 'red');
    setTimeout(function(){
        clearInterval(inter);
        $('p').fadeIn(4000);
    }, 5000);
}
