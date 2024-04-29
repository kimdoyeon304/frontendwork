
//console.log('===================주말과제');
// 2차원 1-20입력  3561012만 값들어오고 3의배수 나누어지면 합을 구하여 출력
//es5 map 

// function twoArray3(){
//     var array=[];
//     var int=0;
//     var sum=0;

//     for(var i=0; i<2; i++){
//         array[i]=[];
//         for(var j=0; j<10; j++){
//             array[i][j]=++int;
//             if(int==3||int==5||int==6||int==10||int==12){
//                 if(int%3==0){
//                     sum=sum+int;
//                 }
//             }
//         }
//     }
//     return sum;
// }console.log(twoArray3());


// console.log('===================es5 문법 사용하기=========');

function study(){

    var array=[];
    var int=0;
    var sum=0;

    for(var i=0; i<2; i++){
        array[i]=[];
        for(var j=0; j<10; j++){
            array.push(++int);
        }
    }

    array.map(function(item){
        if((item==3||item==5||item==6||item==10||item==12)&&(item%3==0))
            sum+=item;           
    });

    return '조건합: '+sum;


    //====================1차=========================

    // for(var i=0; i<2; i++){
    //     array[i]=[];
    //     for(var j=0; j<10; j++){
    //         array.push(++int);
    //     }
    // }

    // var arrays=array.map(function(value){
    //     return value.filter(function(value1){
    //         return [3,5,6,10,12].includes(value1);
    //     });
    // });

    // var newArr=arrays.map(function(item){
    //     if(item%3==0)
    //         return sum+=item;
    // });

    // return newArr;

}
export default study;

