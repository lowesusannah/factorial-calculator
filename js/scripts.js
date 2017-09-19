var calculateFactorial = function(number) {
  if (isNaN(number)) {
    return NaN;
  }
  if (number < 0) {
    return null;
  }

  var product = 1;
  for (var i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#number input").val());
    var output = calculateFactorial(userInput);

    $("#number").removeClass("has-error");
    $("#number").addClass("has-success");
    $("#number .help-block").hide();

    if(isNaN(output) || output === null) {
      $("#number").addClass("has-error");
      $("#number .help-block").show();
    } else {
      $("#number").addClass("has-success");
      $("#output h1").text(output);
      $("#output").show();
    }
  });
});
