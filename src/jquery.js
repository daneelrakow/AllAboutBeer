$(document).ready(function() {
  const TEST_VERIFY = true; //SET THIS TO TRUE FOR PRESENTATION
  let verified = false;

  $(".alternatehead").hide();
  $("#gobackbutton").hide();
  $(".alternate").hide();
  $("#another").hide();
  $('#aboutwebsite').hide();
  $('#content').hide();
  $('#accessdenied').hide();
  $('#userlist').hide();
  if (!verified) {
    $("#ageverify").show()
  } else {
    $("#ageverify").hide()

  }


  $("#submitbutton").click(function() {

    let monthVal = $("#bmonth").val();
    let dateVal = $("#bdate").val();
    yearVal = $("#byear").val();

    let todaysDate = new Date();

    let targetYear = todaysDate.getFullYear() - 21;
    let currentMonth = todaysDate.getMonth() + 1;
    let currentDay = todaysDate.getDate();

    if (!monthVal || !dateVal || !yearVal) {
      if (!TEST_VERIFY){
        alert("Please fill out all fields to continue.");
        location.reload();
      }

    }

    if (yearVal < targetYear || TEST_VERIFY == true) {
      $("#ageverify").hide()
      $("#content").show();
      verified = true;
    } else if (yearVal == targetYear) {
      if (monthVal <= currentMonth) {
        if (dateVal <= currentDay) {
          verified = true;
          $("#ageverify").hide()
          $("#content").show();
        } else {
          $("#ageverify").hide()
          $('#accessdenied').show();
        }
      } else {
        $("#ageverify").hide()
        $('#accessdenied').show();
      }
    } else {
      $("#ageverify").hide()
      $('#accessdenied').show();

    }
  })

  //shows the stuff for the random beer selector when random beer is clicked, also hides everthing else
  $("#randomselector").click(function() {
    $("#options").hide();
    $("#defaulthead").hide();
    $("#randominformation").show();
    $("#randombeer").show();
    $("#gobackbutton").show();
    $("#another").show();
    $("#addtolist").show();
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

  $("#gobackbutton").click(function() {
    clearRandomInformation();
    clearUserListDisplay();
    $(".alternatehead").hide();
    $(".displaydefault").show()
    $(".alternate").hide();

    $("#aboutwebsite").show();
    if (!verified) {
      $("#ageverify").show()
    } else {
      $("#content").show();
    }
    $("#another").hide();


    $('#aboutwebsite').hide();
    $('#aboutlink').show();
    $("#userlist").hide();
    $('.mainmenu').show();
    $("#gobackbutton").hide();
    $(this).hide();


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
    $("#ageverify").hide();
    $("#aboutwebsite").show();
    $("#gobackbutton").show();
    // $(this).hide();
  })

  $("#addtolist").click(function() {
    addToList();
  })

  $("#viewlistselector").click(function() {
    $("#userlist").show();
    $("#listBeer").show();
    $("#gobackbutton").show();
    $(".mainmenu").hide();
    $("#defaulthead").hide();

    displayUserList();
  })
});
