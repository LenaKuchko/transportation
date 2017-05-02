$(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    $("#transportation").hide();
    $("#otherTransportation").show();
    $("input:checkbox[name=transportation]:checked").each(function() {
      var tranResponse = $(this).val();
      $("#responseOne").append(tranResponse + "<br>");
      $("#responseOne").show();
    });
    $("input:checkbox[name=otherTransportation]:checked").each(function() {
      var tranResponse = $(this).val();
      $("#responseTwo").append(tranResponse + "<br>");
      $("#responseTwo").show();
      $("#responseOne").hide();

    });
  });
});
