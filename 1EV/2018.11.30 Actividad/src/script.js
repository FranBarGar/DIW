var interval, timeout;
window.onload = function() {
    setTimeout(function(){
        iniciarReloj();
    }, 2000);
    empezar.addEventListener('click', iniciarReloj);
    pararse.addEventListener('click', parar);
    agrandar.addEventListener('click', function(){
        if (segundero.getAttribute('class') == 'reloj') {
            hacerPeque();
        } else {
            hacerGrande();
        }
    });
};

function parar () {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function hacerPeque () {
    document.getElementById('esfera').setAttribute("class", "pequeño");
    document.getElementById('segundero').setAttribute("class", "pequeño");
    document.getElementById('milisegundero').setAttribute("class", "pequeño");
    document.getElementById('minutero').setAttribute("class", "pequeño");
    document.getElementById('horario').setAttribute("class", "pequeño");
}

function hacerGrande() {
    document.getElementById('esfera').setAttribute("class", "reloj");
    document.getElementById('segundero').setAttribute("class", "reloj");
    document.getElementById('milisegundero').setAttribute("class", "reloj");
    document.getElementById('minutero').setAttribute("class", "reloj");
    document.getElementById('horario').setAttribute("class", "reloj");
}

function iniciarReloj () {
    parar();
    var date = new Date();
    var ms = 0;
    var seg = (360/60)*date.getSeconds();
    var min = (360/60)*(date.getMinutes()+date.getSeconds()/60);
    var hora = (360/12)*(date.getHours()+date.getMinutes()/60);
    interval = setInterval(function(){
        ms+=360;
        seg+=6;
        min+=0.1;
        hora+=0.00836820084;
        milisegundero.style.transform = `rotate(${ms}deg)`;
        segundero.style.transform = `rotate(${seg}deg)`;
        minutero.style.transform = `rotate(${min}deg)`;
        horario.style.transform = `rotate(${hora}deg)`;
    }, 1000);
    timeout = setTimeout(hacerPeque, 5000);
}
