var insertionsort=function(arr,n){
    var i, key, j;
   for (i = 1; i < n; i++)
   {
       key = arr[i];
       j = i-1;
 
       /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
       while (j >= 0 && arr[j] > key)
       {
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key;
   }
    }
     //Print sorted array
     var printSort=function(arr,n)
     {
        // console.log(arr);
         var i;
         console.log("Sorted Number:");
         for(i=0;i<n;i++)
        {
        // process.stdout.write(smartestset[f].toString());
         process.stdout.write(arr[i].toString());
         process.stdout.write(" ");
        }
        console.log("\n");
     }
    
    //  #main method to check
    //Give input one by one ,not with spaced number
    var readline=require('readline');
    var rl=readline.createInterface({  
        input:process.stdin,
        output:process.stdout
        })
        var stdin_input=[];
        rl.prompt();
        rl.on('line',(cmd)=>{
        stdin_input.push(Number(cmd));
        //stdin_input += cmd;
        //stdin_input +="\n";
        }
        )
        rl.on('close',()=>{
            var arrsize=stdin_input.length;
            //console.log("sixe"+arrsize);
           // printSort(stdin_input,arrsize);
           // console.log(typeof(arrsize));
            insertionsort(stdin_input,arrsize);
            //console.log(stdin_input);
           printSort(stdin_input,arrsize);
        }
        )