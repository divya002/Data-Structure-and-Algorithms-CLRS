var readline = require('readline');


let totalnum = [];

function distinctmark(arr) {
    let num = arr.length;
    // console.log("aa haye bhaiya"+num);
    let i;
    for (i = arr[0]; i < arr[num - 1]; i++) {
        //console.log("ye"+i);
        totalnum.push(i);
    }
    totalnum.push(i);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var main = function (input) {
    //let line = input.split("\n");
    let t = Number(input[0]);

    for (var i = 1; i <= t; i++) {
      //  console.log(input[i]);
        let series = input[i].split(' ').map(Number);
        // console.log("phla"+series[1]);
        distinctmark(series);
        // console.log("dusra"+series[0]);
    }

    // process.stdout.write(result.toString());
 //   console.log(totalnum);
    var result = totalnum.filter(onlyUnique);
    var total = result.length;
  
    process.stdout.write(total.toString() + "\n");
    totalnum=[];
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var stdin_input = '';
//rl.prompt();
rl.on('line', (cmd) => {
    //stdin_input.push(cmd);
    stdin_input += cmd;
    stdin_input += "\n";
})
rl.on('close', function() {
    //console.log(typeof(stdin_input));
    // console.log(countBits(5));
   //console.log("\n");
    var lines = stdin_input.split("\n");
    //console.log(lines);
    var testcase = Number(lines[0]);
    let passone=testcase;
    let testarray = [];
    let i = 1;
    let curr = 1;
    let d = 0;
    while (testcase != 0) {
        var temparry = [];
        temparry.push(lines[curr]);
        let j = curr + 1;
        //console.log("j"+j);
       // console.log("lethwa"+(lines[j].split(' ').length)+"content"+lines[j]);
        while ((lines[j].split(' ').length) == 2) {
            temparry.push(lines[j]);
            j++;
        }
        i++;
        curr = curr + 1 + Number(lines[curr]);
        testarray.push(temparry);
        testcase--;
    }
    // while(testcase!=0){
    // main(stdin_input);

    //  testcase--;
    // }
    //console.log("ye final " + testarray[0]);
   // console.log("ye final second " + testarray[1]);
   let a=0;
   while(a<passone){
      // console.log(testarray[a]);
    
    main(testarray[a]);
    a++;
   }
})

