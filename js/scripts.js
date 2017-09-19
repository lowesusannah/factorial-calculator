var calculateFactorial = function(number) {
  var product = 1;
  for (var i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#number").val();
    var output = calculateFactorial(userInput);

    $("#output h1").text(output);
    $("#output").show();

  });
});
