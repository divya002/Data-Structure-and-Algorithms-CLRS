var bubblesort=function(arr,n){
var i,j;
for(i=0;i<n-1;i++)
{
for(j=0;j<n-i-1;j++)
{
    if(arr[j]>arr[j+1])
{
var temp=arr[j];
arr[j]=arr[j+1];
arr[j+1]=temp;
}
}
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
        bubblesort(stdin_input,arrsize);
        //console.log(stdin_input);
       printSort(stdin_input,arrsize);
    }
    )