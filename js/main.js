$(document).ready(function(){
    //cambio de header
    $(window).on('scroll', function(){
        let posicion = $('#pr').offset();
        if($(window).scrollTop()>=posicion.top){
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
    //Accionamiento del menu lateral
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
    //smooth scroll
    $('.hero-down').click(function(){
        $('html, body').animate({
            scrollTop: $("#pr").offset().top
        }, 2000);
    })
})