//1-20  3,5,6,10,12 3의배수 합

function es5Week1(){
var array=[];
var int=0;

for(var i=0; i<2; i++){
    array[i]=[];
    for(var j=0; j<10; j++){
        array.push(++int);
    }
}

//es6버전 
console.log(`2차원배열 ${array}`);

}
console.log(es5Week1());



function es5Week2(){
    var array=[];
    var int=0;
    var sum=0;

    for(var i=0; i<2; i++){
        array[i]=[];
        for(var j=0; j<10; j++){
            array.push(++int);
            if(int==3||int==5||int==6||int==10||int==12){
                if(int%3==0){
                    sum+=int;
                }
        }
    }
    
}
return sum;
}
console.log(es5Week2());



function es5Week3(){
    var array=[];
    var int=0;
    var sum=0;
    var choicearray=[3,5,6,10,12];

    for(var i=0; i<4; i++){
        array[i]=[];
        for(var j=0; j<5; j++){
            array.push(++int);
        }
    }

    // array.map()

        
return sum;
}
console.log(es5Week3());


function forOf(){
    var array=[1,2,3,4,5];

    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }

    //es6
    array.forEach(element => {
        console.log(`element:${element}`);
    });

    for (const iterator of array) {
        console.log(`element:${iterator}`);
    }

}
console.log(forOf());


function Map1(){
    var array=[1,2,3,4,5];

    //es5 비축약형 {return}
    let print=array.map(function(element){return element;});
    //es6 축약형 
    let print2=array.map(element => element);

    console.log(print);
    console.log(print2);
}
console.log(Map1());


function Map2(){
    let array=[1,2,3,4,5];

    let sum=0;
    //es5 비축약형 {return}
    let print=array.map(function(element){
        sum+=element;
    });
    return sum;

    // //es6 축약형 
    // let print2=array.map(element => element);

    //forEach 현재배열에서 출력
    //map 새로운배열 만들어서 출력(재가공 원할때 사용)

    // print.forEach(element => {
    //     console.log(element);
    // });

    // console.log(print);
    // console.log(print2);
}
console.log(Map2());

