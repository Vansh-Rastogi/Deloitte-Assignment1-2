let arr = [1,2,3,4];
let s = 0
let e = arr.length-1;
while (s<=e) {
    let a = arr[s];
    arr[s] = arr[e];
    arr[e] = a;
    s++;
    e--;
}

for(let i of arr) {
    console.log(i);
}