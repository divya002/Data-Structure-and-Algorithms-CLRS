var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
//   prompt.start();
 
//   // 
//   // Get two properties from the user: username and email 
//   // 
//   prompt.get(['username', 'email'], function (err, result) {
//     // 
//     // Log the results. 
//     // 
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });


var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', function (cmd) {

    input.push(cmd);
});

rl.on('close', function () {

    console.log(input.join('\n'));
    process.exit(0);
});
