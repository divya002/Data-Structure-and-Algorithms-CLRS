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
  // for (var i = 1; i < n; i++)
  //   {
  //       // use 2 keys because we need to sort both
  //       // arrays simultaneously
  //       var key1 = aux[i];
  //       var key2 = arr[i];
  //       var j = i-1;
 
  //       /* Move elements of arr[0..i-1] and aux[0..i-1],
  //         such that elements of aux[0..i-1] are
  //         greater than key1, to one position ahead
  //         of their current position */
  //       while (j >= 0 && aux[j] < key1)
  //       {
  //           aux[j+1] = aux[j];
  //           arr[j+1] = arr[j];
  //           j = j-1;
  //       }
  //       aux[j+1] = key1;
  //       arr[j+1] = key2;
  //   }
    
    var final=[];
    final.push(arr[0]);
    //console.log(final[0]);
    var k;
    for (k=1; k<n; k++)
      {
          //console.log(arr);
          //final.push(arr[0]);
          if((aux[k]==aux[k+1]) && (aux[k]!=aux[k-1]))
          {
              final.push(arr[k]);
              console.log("hello");
          }
          else if((k==n-1) && (aux[k]!=aux[k-1]))
          {
            final.push(arr[k]);
            console.log("worldwa");
          }
          else if(aux[k]!=aux[k+1] && aux[k]!=aux[k-1])
          {
            final.push(arr[k]);
            console.log("helloodar");
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
        console.log(arr[i]+"--"+aux[i]);
    }
    // Sort arr[] according to values in aux[]
    var printfinal=insertionSort(arr, aux, n);
    return printfinal;
}
 
 
 
var testcase = prompt();
var t=0;
while(t<testcase)
{
    var arrsize=prompt();
    var j;
    var input=[];
    for(j=0;j<arrsize;j++)
    {
         input[j]=prompt();
    }
    //input.sort(function(a, b){return a-b});
    console.log(input);
    var smartestset=sortBySetBitCount(input, arrsize)
    console.log(smartestset);
    // for(var d=0;d<smartestset.length;d++)
    // {
    //     console.log(smartestset[d]+" ");
    // }
   t++;
   
}
