$(function(){
    $('#boton1').click(function(){
        var $button = $(this);
        var time = (parseInt(Math.random()*5000)+1000);
        $($button).fadeOut(time);
        $("form[name*='form2']").fadeIn(time, function(){
            $('#boton2').show();
        });
    })
    $('#boton2').click(function(){
        var $button = $(this);
        var time = (parseInt(Math.random()*8000)+3000);
        $('*', 'div').fadeIn(time, function(){
            $($button).fadeOut(time);
            $('#boton1').show();
        });
        $("form[name*='form2']").fadeOut(time);
    });
});
