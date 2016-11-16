var time = moment().format('h:mm:ss A');
var timeOfDay = parseInt(moment().format('H'));


console.log(time);
console.log(timeOfDay);

//if(moment().isBefore('12:00:00')){
//  console.log('hey');
//}


$(document).ready(function () {

  // Empty input and text area when modal close
  $(".modal").on("hidden.bs.modal", function () {
    $("#name-area").val('');
  });

  $(".modal").on("hidden.bs.modal", function () {
    $("#email-area").val('');
  });

  $(".modal").on("hidden.bs.modal", function () {
    $("#note-area").val('');
  });
  //------------------------------------------



  $('.type-writer2').typeIt({
    strings: '<strong>Hola !</strong>',
    speed: 50,
    autoStart: true

  });


  var $timeDisplay = $('<div/>').addClass('time').html(time);
  $('.top-banner').html($timeDisplay);



  if (timeOfDay >= 6 && timeOfDay < 12) {
    $('.top-content').css('background-image', 'url(' + "./assets/img/morning.jpg" + ')');

  }

  if (timeOfDay >= 12 && timeOfDay < 17) {
    $('.top-content').css('background-image', 'url(' + "./assets/img/day.jpg" + ')');

  }

  if (timeOfDay >= 17 && timeOfDay < 19) {
    $('.top-content').css('background-image', 'url(' + "./assets/img/dusk.jpg" + ')');

  }

  if (timeOfDay >= 19 || timeOfDay < 6) {
    console.log('sds');
    $('.top-content').css('background-image', 'url(' + "./assets/img/night.jpg" + ')');
    
    $('.top-content').css('background-attachment', 'fixed');

  }

});

$(document).ready(function () {

  setInterval(function () {

    var time = moment().format("h:mm:ss A");

    var $timeDisplay = $('<div/>').addClass('time').html(time);
    $('.top-banner').html($timeDisplay);
  }, 1000)

});
