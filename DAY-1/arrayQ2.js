let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let esum=0;
let osum=0;
for(let i in arr) {
    if(i%2 == 0) {
        esum += arr[i];
    }
    else {
        osum += arr[i];
    }
}

let arr1 = [];

arr1.push(esum);
arr1.push(osum);

console.log(arr1);