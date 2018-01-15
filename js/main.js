$(function () {

  setTimeout(function () {
    $("#appendWithJquery").append(
      `
        <br>
        <p style="text-align: center">Description: Aenean lacinia bibendum nulla sed consectetur. (Added with jquery!)</p>
        <br>
        `
    );
  }, 5000);

  let showItem = false;
  $(".list-group-item").click(function () {
    if (showItem === false) {
      $('<li class="list-group-item shownItem">Cras mattis consectetur purus sit amet fermentum.</li>').insertAfter(this);
      showItem = true;
    } else {
      $(".shownItem").remove();
      showItem = false;
    }
  });

  $("#disclaimer").click(function () {
    alert("Redirecting to Advisor Websites!")
  });

  $(".service").click(function () {
    let selectedServiceDescription = $(this).find('p');
    if (selectedServiceDescription.is(".d-sm-none.d-xs-none")) {
      selectedServiceDescription.removeClass("d-sm-none d-xs-none");
    } else {
      selectedServiceDescription.addClass("d-sm-none d-xs-none");
    }
  })

});