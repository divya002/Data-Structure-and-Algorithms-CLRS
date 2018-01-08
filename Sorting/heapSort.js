var Max_Heapify=function(A,n,i){
l=2*i+1;
r=2*i+2;
if (l<n && A[l]>A[i])
largest=l;
else
largest=i;
if (r<n && A[r]>A[largest])
largest=r;
if(largest!=i)
{
A[i] = [A[largest], A[largest]=A[i ]][0];//swapping way
Max_Heapify(A,n,largest);
}
}

var Build_Max_Heap=function(A,n){
for(var i=parseInt(n/2)-1;i>=0;i--)
Max_Heapify(A,n,i);
}

var HeapSort=function(A,n){
Build_Max_Heap(A,n);
for (var i=n-1; i>=0; i--)
{
[A[0],A[i]]=[A[i],A[0]];//ES6 swapping
Max_Heapify(A, i, 0);
}
}
var printArray=function(A,n)
{
    console.log(A);
}

var readline=require('readline');
var rl=readline.createInterface({  
    input:process.stdin,
    output:process.stdout
    })
    var arr=[];
    rl.prompt();
    rl.on('line',(cmd)=>{
    arr.push(Number(cmd));
    }
    )
    rl.on('close',()=>{
        var n=arr.length;
        
        HeapSort(arr,n);
        printArray(arr,n);
       
    }
    )