$(document).ready(function() {

  // clears everything from the page on load
  $(".alternatehead").hide();
  $("#gobackbutton").hide();
  $(".alternate").hide();
  $("#another").hide();
  $('#aboutwebsite').hide();
  $('#content').hide();
  $('#accessdenied').hide();

  $("#submitbutton").click(function(){

    let monthVal = $("#bmonth").val();
    let dateVal = $("#bdate").val();
    let yearVal = $("#byear").val();

    //verifies that all fields are filled out
    if (!monthVal || !dateVal|| !yearVal){
      alert("Please enter all information.");
    }

    var todaysDate = new Date();

    var targetYear = todaysDate.getFullYear() - 21;
    console.log(targetYear);

//TODO finish this shit
  })

//shows the stuff for the random beer selector when random beer is clicked, also hides everthing else
  $("#randomselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#randominformation").show();
    $("#randombeer").show();
    $("#gobackbutton").show();
    $("#another").show();
    getRandomBeer();
    $('#aboutwebsite').hide();

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
    $("#gobackbutton").show();
    $('#aboutwebsite').hide();

    clearRandomInformation();
    getRandomBeer();

  })

  $("#criteriaselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#criteriahead").show();
    $("#another").hide();
    $("#gobackbutton").show();
    $('#aboutwebsite').hide();

  })

  $("#specificselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#specifichead").show();
    $("#another").hide();
    $("#gobackbutton").show();
    $('#aboutwebsite').hide();

  })

  $("#gobackbutton").click(function() {
    $(".alternatehead").hide();
    $(".displaydefault").show()
    $(".alternate").hide();
    $(this).hide();
    $("#aboutwebsite").show();
    $("#content").show();
    $("#another").hide();
    clearRandomInformation();
    $("#gobackbutton").show();
    $('#aboutwebsite').hide();
    $('#aboutlink').show();


  })

  $("#randomlearnmore").click(function() {
    updateAddAdditionalInfo();
    $(".randomadditionalinfo").show();
    $(this).hide();
    $("#gobackbutton").show();
    $('#aboutwebsite').hide();

  })

  $("#aboutlink").click(function() {
    $("#content").hide();

    $("#AboutWebsite").show();
    $("#gobackbutton").show();

    $(this).hide();

  })



});
