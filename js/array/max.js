let arr = [11, 15, 10, 2, 6, 7, 12, 20, 70, 17, 100];

let max = arr[0];
let i = 0;

while(i < arr.length) {
    if(max < arr[i]) max = arr[i];
    i++;
}

console.log(max);
