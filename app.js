function  missingNumber(numbers)
{
    var missing = -1;
    var sorted = numbers.sort(function(a, b) { return a - b; });

    for(var i = sorted[0]; i <= numbers.length -1 ; i++){
        if (numbers.indexOf(i) === -1){
            missing = i;
        }
    }
    return missing;
}

var numbers = [ 1, 2, 3, 4, 8, 9, 10];

console.log ("The missing number from the array is:", missingNumber(numbers))

var msg = "John's Coding Challenges";
console.log(msg)


//Display the missing number/s in a given integer array of 1 to 10
var a = [1,2,3,4,5,9,10], //missing [6,7,8]
//var a = [1,2,6,7,8,9,10], //missing [3,4,5]
  count = 10;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log("The missing numbers from the array are:", missing);



// Returns length of the longest contiguous subarray
function min( x, y) { return (x < y)? x : y; }
function max( x, y) { return (x > y)? x : y; }
function findLength( arr, n)
{
    let max_len = 1;  
    for (let i=0; i<n-1; i++)
    {
    
        let mn = arr[i], mx = arr[i];
 
        for (let j=i+1; j<n; j++)
        {
            mn = min(mn, arr[j]);
            mx = max(mx, arr[j]);
 
            if ((mx - mn) == j-i)
                max_len = Math.max(max_len, mx-mn+1);
        }
    }
    return max_len; 
}
    //let arr = [1,2,3,4,5,6,8,9,10]; // Length should be: 6
    //let arr = [10, 12, 11]; // Length should be: 3
    //let arr = [14, 12, 11, 20]; //Length should be: 2
    let arr = [1, 56, 58, 57, 90, 92, 94, 93, 91, 45]; //Length should be: 5
    let n = arr.length;
    console.log("Length of the longest contiguous subarray is: "
         + findLength(arr, n));