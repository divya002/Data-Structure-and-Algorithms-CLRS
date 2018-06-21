function add(a, b) {
  return a + b;
}

function main(input) {
  var lines = input.split("\n");
  var t = Number(lines[0]);
  for (var x = 1; x <= t; x++) {
    var sum = lines[x].split(" ").map(Number).reduce(add);
    process.stdout.write(sum.toString());
    process.stdout.write("\n");
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