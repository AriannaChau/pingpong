var pingpong = function(number) {
var values = [];
for (var i = 1; i <= number; i += 1) {

  if (i % 3 === 0) {
    values.push("ping");
  } else if (i % 5 === 0) {
    values.push("pong");
  } else {
    values.push(i);
  }

};
  return values;
};


$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = pingpong(number);
    $("#total").text(result);
    console.log(result)

});
});
