
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
}
export default study;

// function study(){

//     var array=[];
//     var int=0;
//     var sum=0;

//     for(var i=0; i<2; i++){
//         array[i]=[];
//         for(var j=0; j<10; j++){
//             array.push(++int);
//         }
//     }

//        var item = array.forEach(function(element){
//             return element==3,5,6,10,12 && element%3==0;
//         });

//         array.map(function(item){
//             sum+=item;
//         });

//     return '조건합: '+sum;
// }
// export default study;

// function study(){

//     var array=[];
//     var int=0;
//     var sum=0;

//     for(var i=0; i<2; i++){
//         array[i]=[];
//         for(var j=0; j<10; j++){
//             array.push(++int);
//         }
//     }

//     // array.forEach(function(){
//     //     array.push(++int);
//     // });


//     array.forEach(function(item){
//        if((item==3,5,6,10,12)&&(item%3==0))
//                        return sum+=item;
//      });

// }
// export default study;


// arr.forEach(function (item) {

//     console.log(item);

// });



// var newArr = arr.map(function (item) {

//     return item * 2;

// });

// console.log('map:'+newArr); // [2, 4, 6]



// var newArr = arr.filter(function (item) {

//     return item % 2 == 0;

// });


// var arr = [1, 2, 3, 4];

// var sum = arr.reduce(function (acc, curr) {

//     return acc + curr;

// }, 0);

// console.log('reduce:' + sum); // 10



