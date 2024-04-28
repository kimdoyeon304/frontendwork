console.log("init==============");


function twoArray() {


    var array = [];
    var int = 0;

    for (var i = 0; i < 2; i++) {

        array[i] = [];
        for (var j = 0; j < 5; j++) {
            array[i][j] = ++int;

        }

    }
    console.log(array);
}
console.log(twoArray());

console.log("init==============");

function oneArray(){
    var array=[];
    var sum=0;

    for(var i=0; i<7; i++){
        array[i]=i+3;
        sum=sum+array[i];
    }
    console.log(sum);
}
console.log(oneArray());

console.log("init==============");

function threeArray() {


    var array = [];
    var int = 0;
    var one=0;
    var two=0;

    var two;

    two=0;
    
    for (var i = 0; i < 4; i++) {
        array[i] = [];
        for (var j = 0; j < 5; j++) {
            array[i][j] = ++int;
            if(array[i][j]%2==0){
                two=two+array[i][j];
            }else{
                one=one+array[i][j];
            }

        }

    }
    console.log('짝수합: '+two+'\n홀수합: '+one);
}
console.log(threeArray());
