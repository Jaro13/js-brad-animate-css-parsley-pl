$(function () {


    $('#animateBtn').click(function () {

        //alert dziala
        //alert(1);

        animate('#anim-head', 'rollIn');
        animate('#anim-body', 'rollOut');
        return false; //dlaczego false

    });

    $('#animateBtn2').click(function () {
        animate('header', 'rollIn');
        setTimeout(function () {
            $('header').css('visibility', 'hidden');
        }, 1000);
        return false;
    });

    //dlaczego to ponizej nie działa? - zmieniłem nazwe funkci na animate2
    function animate2(element, animation) {
        $(element).addClass('animated' + animation);
        var wait = setTimeout(function () {
            $(element).removeClass('animated ' + animation);
        }, 1000); //tutaj 2 parametr czyli czas
    }


    // Animate - brad tutaj działa!!!
    function animate(element, animation) {
        $(element).addClass('animated ' + animation);
        var wait = setTimeout(function () {
            $(element).removeClass('animated ' + animation);
        }, 1000);
    }









});

//emmet takze tutaj szkoeleni 
//html takze tutaj szkolenie
//semantic html?

//https://daneden.github.io/animate.css/
//super fajne
//rollIn
//rollOut
//swing
/*
$(function(){
    $('#animateBtn').click(function(){
      animate('#anim-head', 'bounce');
      animate('#anim-body', 'rubberBand');
      return false;
    });

    $('#animateBtn2').click(function(){
      animate('header', 'slideOutUp');
      setTimeout(function(){
        $('header').css('visibility','hidden');
      }, 1000);
      return false;
    });

    // Animate
    function animate(element, animation){
      $(element).addClass('animated '+animation);
      var wait = setTimeout(function(){
        $(element).removeClass('animated '+animation);
      }, 1000);
    }
  })

  */