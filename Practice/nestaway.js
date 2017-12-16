var countBits = function(n){
    var count=0;
    while (n)
    {
      n &= (n-1) ;
      count++;
    }
    return count;
}
var insertionSort=function(arr,aux,n)
{
  for (var i = 1; i < n; i++)
    {
        
        var key1 = aux[i];
        var key2 = arr[i];
        var j = i-1;
 
        
        while (j >= 0 && aux[j] < key1)
        {
            aux[j+1] = aux[j];
            arr[j+1] = arr[j];
            j = j-1;
        }
        aux[j+1] = key1;
        arr[j+1] = key2;
    }
    var final=[];
    final.push(arr[0]);
    
    var k;
    for (k=1; k<n; k++)
      {
          //console.log(arr);
          //final.push(arr[0]);
          if((aux[k]==aux[k+1]) && (aux[k]!=aux[k-1]))
          {
              final.push(arr[k]);
             // console.log("hello");
          }
          else if((k==n-1) && (aux[k]!=aux[k-1]))
          {
            final.push(arr[k]);
          //  console.log("worldwa");
          }
          else if(aux[k]!=aux[k+1] && aux[k]!=aux[k-1])
          {
            final.push(arr[k]);
            //console.log("helloodar");
          }
           
      }
      return final;

}
// Function to sort according to bit count using
// an auxiliary array
var sortBySetBitCount=function(arr,n)
{
    // Create an array and store count of
    // set bits in it.
    var aux=[];
    for (var i=0; i<n; i++)
    {
        
        aux[i] = countBits(arr[i]);
        //console.log(arr[i]+"--"+aux[i]);
    }
    // Sort arr[] according to values in aux[]
    var printfinal=insertionSort(arr, aux, n);
    return printfinal;
}
function main(maininput) {
var lines = maininput.split("\n");
var testcase = Number(lines[0]);
var t=0;
var temp=(2*testcase);
while(t<temp)
{
    var arrsize=Number(lines[t+1]);
   // console.log(typeof(arrsize));
   // console.log("Lines"+lines[t+2]);
    var input = lines[t+2].split(" ").map(Number);
    var index = input.indexOf(0);
    if (index > -1) {
    input.splice(index, 1);
    }
    input.sort(function(a, b){return a-b});
   //console.log(input);
    var smartestset=sortBySetBitCount(input, arrsize);
    smartestset.sort(function(a, b){return a-b});
    //console.log(smartestset);
    for(var f=0;f<smartestset.length;f++)
    {
        //console.log("hello");
    process.stdout.write(smartestset[f].toString());
    process.stdout.write(" ");
    }
   // process.stdout.write(smartestset.toString());
    process.stdout.write("\n");
    // for(var d=0;d<smartestset.length;d++)
    // {
    //     console.log(smartestset[d]+" ");
    // }

   t=t+2;
}
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input ='';

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
//console.log("jekkp");
  main(stdin_input);
});


 
