var array = [1, 2, 3, 4, 5, 6];


for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log('길이는' + array.length);


var array = [];

for (var i = 0; i < 9; i++) {
    array[i] = i + 2;
    console.log(array[i]);
}



//1-10 짝수합 홀수합 

var array = [];
var one=0;
var two=0;

for (var i = 0; i < 10; i++) {
    array[i] = i + 1;
        if(array[i]%2==0){
            two=two+array[i];
        }else{
            one=one+array[i];
        }
}
console.log('1-10 짝수합: '+two+'\n1-10 홀수합: '+one);

