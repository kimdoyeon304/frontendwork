
function oneArray(){
    var array=[1,2,3,4,5];
    var sum=0;

    array.forEach(element => {
        sum=sum+element;
    });
    console.log(sum);

console.log('====================');

    array.forEach(element => {
        console.log(element);
    });
 console.log('====================');
    array.forEach(function(item){
        
        console.log(item);
    });

    
}
console.log(oneArray());

console.log('====================');

function oneArray2(input){

    var array=[1,2,3,4,5];

    //es6
    for(const arrays of array){
        console.log(arrays);
    }
}
console.log(oneArray2());

function oneArray3(){

    var array=[1,2,3,4,5];

    for(let i=0; i<5; i++){
        console.log(array[i]);
    }
    console.log('====================');

    //es6
    array.forEach(element => {
        console.log(element);        
    });

    console.log('====================');

    array.forEach(function(element){
        console.log(element);
        
    });

    console.log('====================');

    for (let iterator of array) {
        console.log(iterator);
    }

}
console.log(oneArray3());

function oneArray4(){

    var array=[];

        for(let i=0; i<5; i++){
            array[i]=i+1;
            console.log(array[i]);
        }
        //push 배열에 값을 놓는다
        array.push(6);
        console.log(array);

        console.log('====================');

        var array=[];
        var sum=0;
        for(let i=0; i<10; i++){
            array.push(i+1);
            sum=sum+array[i];
        }
        console.log(array);
        console.log('합: '+sum);
}
console.log(oneArray4());

console.log('====================');

function Map1(){

    var array=[1,2,3,4,5];

    var i=0;
    //변수명: 예악어 불가 var case break 
    array.map(function(arrays) {
        console.log(array[i++]);
    }
    );
}
console.log(Map1());
console.log('====================');

function Map2(){

    var array=[];

    //369 제외한 1-10 입력 후 출력
    for(var i=0; i<10; i++){
        if(!((i+1)%3==0)){
            array.push(i+1);
        }
    }
    //요소로 출력
    array.map(function(arrays){
        console.log(arrays);
    }
);
    // //배열로 출력
    // let numbers = array.map(function (arrays) {
    //     return arrays;
    // }
    // );
    // return numbers;

    
    // //1-10 입력 후 369 제외 출력
    // for(var i=0; i<10; i++){
    //     array.push(i+1);
    // }

    // array.map(function(arrays){
    //     if(arrays%3 != 0)
    //         console.log(arrays);
    // });

}
console.log(Map2());

