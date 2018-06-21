let totalnum=[];
function distinctmark(arr) {
    for(let i=arr[0];i<arr[arr.length];i++){
        totalnum.push(i);
    }
}
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function main(input) {
  var lines = input.split("\n");
  let t = Number(lines[0]);
  
  for (var i = 1; i <= t; i++) {
    var arr=lines[i].split("")
    distinctmark(arr);
  }
return totalnum.filter( onlyUnique );
process.stdout.write(sum.toString());
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