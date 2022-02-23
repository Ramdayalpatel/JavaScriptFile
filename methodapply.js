var arr=[1,2,3,4,4,5,6,7,10];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
var result=Math.max.apply(this.arr,arr);
console.log("Maximum Value",result);

console.log("Min Value");
result=Math.min.apply(this.arr,arr);
console.log(result);
var arr1=[10,20,30,40,50];
arr.push.apply(arr,arr1);
console.log(arr);