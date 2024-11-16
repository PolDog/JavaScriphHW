console.log("Hw 03");

function persent(value){
    return value/100*13;
}

function findMax(max, num){
    if(num>max){
        return num;
    }
    return max;
}

function valuePlus(a, b){
    return a+b;
}
function valueMinus(a, b){
    return a-b;
}
function valueMultiply(a, b){
    return a*b;
}
function valueDivide(a, b){
    if (b===0){
        return 0;
    }
    return a/b;
}

// let value = prompt('Введите число:');
let value = 200;
value = parseFloat(value);
if (isNaN(value)){
    console.log("error input");
}else{
    console.log(value);
    console.log(value - persent(value));
}

let num1=1;
let num2=-33;
let num3=2;
let max=num1;

max=findMax(max,num1);
max=findMax(max,num2);
max=findMax(max,num3);
console.log("max="+max);

let a=1;
let b=2;
console.log(a+"+"+b+"="+valuePlus(a,b));
console.log(a+"-"+b+"="+valueMinus(a,b));
console.log(a+"*"+b+"="+valueMultiply(a,b));
console.log(a+"/"+b+"="+valueDivide(a,b));