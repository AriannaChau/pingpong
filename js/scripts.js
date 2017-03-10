// Back end logic
var pingpong = function(number) {
var values = [];
for (var i = 1; i <= number; i += 1) {

  if (i % 3 === 0 && i % 5 !==0) {
    values.push("ping");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    values.push("pong");
  } else if (i % 15 === 0) {
    values.push("ping-pong");
  } else {
    values.push(i);
  }
};
  return values;
};

// Front end logic
$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    var results = pingpong(number);
    $("#output ul").empty();
    results.forEach(function(result) {
    $("#output ul").append("<li>" + result + "</li>")
  });
    console.log(results)
});
});
