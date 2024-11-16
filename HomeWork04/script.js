console.log("Hw 04");

for(let i=0;i<10;i++){
    if(i===0){
        console.log("i="+i+" 0");
    }else if(i%2==0){
        console.log("i="+i+" четное");
    }else{
        console.log("i="+i+" не четное");
    }
}

let arr=[1,2,3,4,5,6,7];
arr.splice(arr.indexOf(4), 1);
arr.splice(arr.indexOf(5), 1);
for(let i=0;i<=arr.length;i++){
    console.log(arr[i]);
}
// console.log(arr);
// console.log("=================");
// let newAr=[];
// let index=0;
// for(let i=0;i<=arr.length;i++){
//     if (i!=3&&i!=4){
//     // console.log(arr[i]);
//     newAr[index]=arr[i];
//     index++;
//     }
// }
// for(let i=0;i<=newAr.length;i++){
//     console.log(newAr[i]);
// }


let arr2=[];
for(let i=0;i<5;i++){
    arr2[i]=(Math.floor(Math.random()*10))
}
console.log("gen");

console.log(arr2);

let sum=0;
for(let i=0;i<arr2.length;i++){
    sum=sum+arr2[i];
}
console.log("sum="+sum);
console.log("sum="+ arr2.reduce((acc, num) => acc + num, 0));

console.log("min="+Math.min(...arr2));
console.log("max="+Math.max(...arr2));
console.log("include 3 ="+arr2.includes(3));

