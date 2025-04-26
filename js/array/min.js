let arr = [11, 15, 10, 2, 6, 7, 12, 20, 70, 17, 1];

let min = arr[0];
let i = 0;

while(i < arr.length) {
    if(min > arr[i]) min = arr[i];
    i++;
}

console.log(min);
