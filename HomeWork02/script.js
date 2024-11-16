console.log("Hw 02");
const num1=2;
const num2=3;

// const num1=prompt("введите значение num1");
// const num2=prompt("введите значение num2");
if(num1<=1){
    console.log(num1+ " меньше или равна 1");
}else{
    console.log(num1+ " Больше 1");
};
if(num2<3){
    console.log(num2+ " меньше 3");
}else{
    console.log(num2+ " Больше или равна 3");
};


let test=true;
console.log(test ? '+++' : '---');

const day=21;
if(day<=10){
    console.log("первая декада");
}else {
    if(day>10&&day<=20){
        console.log("вторая декада");
    } else{
        console.log("третья декада");
    }
}

// const num=prompt("введите число");
let num=12.123;
num=parseInt(num);

let units = num % 10;
let tens = Math.floor((num % 100) / 10);
let hundreds = Math.floor(num / 100);
console.log("enter "+num);
console.log(hundreds+ " " + tens+ " "+ units);
