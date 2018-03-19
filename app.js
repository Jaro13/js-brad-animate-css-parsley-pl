//uwaga tutaj ponzej jest klasa - czyli zapisa .przycisk
$('.przycisk-subscribe').on('click', function () {


    alert(1);
    $('#emailField').addClass('animated bounceOutLeft');

    //co zrobic po skonczeniu animacji
    //$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

    //uwage tutaj jest id czyli #
    $('#emailField').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

        $('#emailField').removeClass('animated bounceOutLeft');


    });

});


//parsley js validacja



$(document).ready(function () {
    $('form').parsley();
});