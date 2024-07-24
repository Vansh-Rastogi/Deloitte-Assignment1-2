let arr = [1,2,3,4];
arr.splice(1,0,3);
console.log(arr);
let flag = false;
for(let i in arr) {
    if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
        flag=true;
    }
    else  {
        flag=false;
    }
}

if(flag) {
    console.log("Duplicates Present");
}
else {
    console.log("Duplicates not Present");
}