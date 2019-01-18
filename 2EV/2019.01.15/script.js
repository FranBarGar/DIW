$(function(){
    $('#boton1').click(function(e) {
        var number = $('#num').prop('value');
        if (number>2 && number<7) {
            $(this).hide();
            for (var i = 0; i < number; i++) {
                $('body').append('<div></div>')
            }
            $('div').each(function(){
                $(this).append('<h1>Titulo</h1>');
                var random = (parseInt(Math.random()*11)+10)*number;
                for (var i = 0; i < random; i++) {
                    $(this).append(`<p>Parrafo ${i}</p>`);
                }
            });
            $('body').append(`<div style="
                display: block;
                bottom: 0;
                min-height: 10%;
                min-width: 100%;"></div>`)
        } else {
            alert('Debe introducir un numero entre 2 y 7 (ambos no incluidos)');
        }
    });
});
