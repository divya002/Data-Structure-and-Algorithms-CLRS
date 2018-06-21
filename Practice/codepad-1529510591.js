function add(a, b) {
  return a + b;
}

function main(input) {
  var lines = input.split("\n");
  var t = Number(lines[0]);
  for (var i = 1; i <= t; i++) {
    console.log(lines[i].split("").reverse().join(""));
  }

}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
  main(stdin_input);
});