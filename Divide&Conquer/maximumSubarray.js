// A Divide and Conquer based program for maximum subarray sum problem
// A utility funtion to find maximum of two integers
var max=function(a,b) { return (a > b)? a : b; }

// A utility funtion to find maximum of three integers
var maximum=function(a, b, c) { return max(max(a, b), c); }

// Find the maximum possible sum in arr[] auch that arr[m] is part of it
var maxCrossingSum=function(arr, l, m, h)
{
	// Include elements on left of mid.
	var sum = 0;
	var left_sum =Number.MIN_VALUE;
	for (var i = m; i >= l; i--)
	{
		sum = sum + arr[i];
		if (sum > left_sum)
		left_sum = sum;
	}

	// Include elements on right of mid
	sum = 0;
	var right_sum = Number.MIN_VALUE;
	for (var i = m+1; i <= h; i++)
	{
		sum = sum + arr[i];
		if (sum > right_sum)
		right_sum = sum;
	}

	// Return sum of elements on left and right of mid
	return left_sum + right_sum;
}

// Returns sum of maxium sum subarray in aa[l..h]
var maxSubArraySum=function(arr, l, h)
{
// Base Case: Only one element
if (l == h)
	return arr[l];

// Find middle point
var m=parseInt((l + h)/2);
console.log(m);
/* Return maximum of following three possible cases
	a) Maximum subarray sum in left half
	b) Maximum subarray sum in right half
	c) Maximum subarray sum such that the subarray crosses the midpoint */
return maximum(maxSubArraySum(arr, l, m),
			maxSubArraySum(arr, m+1, h),
			maxCrossingSum(arr, l, m, h));
}

//  #main method to check
//Give input one by one ,not with spaced number
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
        var max_sum = maxSubArraySum(arr, 0, n-1);
        console.log("Maximum contiguous sum is "+max_sum);
       
    }
    )