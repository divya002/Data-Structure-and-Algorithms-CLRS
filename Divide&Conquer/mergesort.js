 //Function merge two subset of array
 var merge=function(arr,l,m,r){
    var n1=m-l+1;
    var n2=r-m;
    var l1=[];
    var r1=[];
    var i,j,k;
    for(i=0;i<n1;i++){
       // console.log(typeof(i));
        l1[i]=arr[l+i];
    }
    for(j=0;j<n2;j++){
        r1[j]=arr[m+1+j];
    }
    i=0;
    j=0;
    k=l;
    while(i<n1 && j<n2){
       if(l1[i]<r1[j]) {
           arr[k]=l1[i];
           i++;
       }
       else{
           arr[k]=r1[j];
           j++
       }
       k++;
    }
    while(i<n1)
    {
        arr[k]=l1[i];
        i++;
        k++;
    }
    while(j<n2)
    {
        arr[k]=r1[j];
        j++;
        k++;
    }
  //  console.log(arr);
 }
 //Merge Sort
 var mergesort=function(arr,l,r){
     if(l<r)
     {
        var m=l+parseInt((r-l)/2); //to overcome to overflow
         mergesort(arr,l,m);
         mergesort(arr,m+1,r);
         merge(arr,l,m,r);
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
        mergesort(stdin_input,0,arrsize-1);
        //console.log(stdin_input);
       printSort(stdin_input,arrsize);
    }
    )