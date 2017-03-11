// Back end logic
var pingPong = function(number) {
var numberArray = [];
for (var i = 1; i <= number; i += 1) {

  if (i % 3 === 0 && i % 5 !==0) {
    numberArray.push("ping");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    numberArray.push("pong");
  } else if (i % 15 === 0) {
    numberArray.push("ping-pong");
  } else {
    numberArray.push(i);
  }
};
  return numberArray;
};

// Front end logic
$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    var results = pingPong(number);
    $("#output").empty();
    results.forEach(function(result) {
    $("#output").append("<li>" + result + "</li>")
  });
});
});
