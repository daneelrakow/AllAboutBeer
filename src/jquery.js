$(document).ready(function() {

  // clears everything from the page on load
  $(".alternatehead").hide();
  $("#gobackbutton").hide();
  $(".alternate").hide();
  $("#another").hide();

//shows the stuff for the random beer selector when random beer is clicked, also hides everthing else
  $("#randomselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#randominformation").show();
    $("#randombeer").show();
    $("#gobackbutton").show();
    $("#another").show();
    getRandomBeer();

  })

//the another button on the random page
  $("#another").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#randominformation").show();
    $("#randombeer").show();
    $("#gobackbutton").show();
    $("#another").show();
    $("#randomlearnmore").show();
    clearRandomInformation();
    getRandomBeer();

  })

  $("#criteriaselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#criteriahead").show();
    $("#another").hide();
    $("#gobackbutton").show();
  })

  $("#specificselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#specifichead").show();
    $("#another").hide();
    $("#gobackbutton").show();
  })

  $("#gobackbutton").click(function() {
    $(".alternatehead").hide();
    $(".displaydefault").show()
    $(".alternate").hide();
    $(this).hide();

    $("#another").hide();
    clearRandomInformation();
  })

  $("#randomlearnmore").click(function(){
    updateAddAdditionalInfo();
    $(".randomadditionalinfo").show();
    $( this ).hide();

  })
});
