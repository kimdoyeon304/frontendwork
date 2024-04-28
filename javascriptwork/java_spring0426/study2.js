function oneArray1(){

    var array=[1,2,3,4,5];

    for(var i=0; i<array.length; i++){

        console.log(array[i]);
    }
}
console.log(oneArray1());


function oneArray2(){
    var array=[];

    for(var i=0; i<9; i++){
        array[i]=i+1;
        console.log(array[i]);
    }
}
console.log(oneArray2());


function oneArray3(){
    var array=[];

    for(var i=0; i<=11; i++){
        array[i]=i;
        console.log(array[i]);
    }
}
console.log(oneArray3());

function twoArray1(){

    var array=[[1,2,3],[4,5,6]];

    for(var i=0;i<array.length; i++){
        for(var j=0; j<array[i].length; j++){
            console.log(array[i][j]);
        }
    }
}
console.log(twoArray1());

function twoArray2(){

    var array=[];
    var int=0;

    for(var i=0; i<2; i++){
        array[i]=[];
        for(var j=0; j<3; j++){
            array[i][j]=++int;
            console.log(array[i][j]);
        }
    }
}
console.log(twoArray2());

console.log('===================주말과제');
// 2차원 1-20입력  3561012만 값들어오고 3의배수 나누어지면 합을 구하여 출력
//es5 map 

function twoArray3(){
    var array=[];
    var int=0;
    var sum=0;

    for(var i=0; i<2; i++){
        array[i]=[];
        for(var j=0; j<10; j++){
            array[i][j]=++int;
            if(int==3||int==5||int==6||int==10||int==12){
                if(int%3==0){
                    sum=sum+int;
                }
            }
        }
    }
    return sum;
}console.log(twoArray3());