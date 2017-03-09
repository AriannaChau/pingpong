var pingpong = function(number2) {
  var values = [];
  // var total = 1;
  for (var i = 1; i <= number2; i += 1) {
  values.push(i);
  console.log(values)

  // return total += number;
};
};

$(function() {
  $("form").submit(function(event){
    var number = parseInt($("#number").val());
    var result = pingpong(number);
    event.preventDefault();
  });
});
