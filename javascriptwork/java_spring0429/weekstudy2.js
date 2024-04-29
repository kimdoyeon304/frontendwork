// function onArray(){

//     var array=[1,2,3,4,5];


//     for(var i=0; i<5; i++){
//         console.log(array[i]);
//     }

// }
// console.log(onArray());


// function onArray2(){

//     var array=[];

//     for(i=0; i<11; i++){
//         array[i]=i+1;

//     }
//     console.log(`array:${array}`);
// }console.log(oneArray2());


// function twoArray1(){

//     var array=[[1,2,3],[4,5,6],[7,8,9]];

//     for(var i=0; i<3; i++){
//         for(var j=0; j<3; j++){
//             console.log(array[i][j]);       
//         }
//     }
// }
// console.log(twoArray1());


// function twoArray2(){

//     var array=[];
//     var int=0;
//     var sum=0;

//     for(i=0; i<2; i++){
//         array[i]=[];
//         for(j=0; j<10; j++){
//             array[i][j]=++int;
//             sum+=array[i][j];
//         }
//     }
//     // console.log(`array:${array}`);
//     return sum;
// }
// console.log(twoArray2());


// function twoArray3(){

//     var array=[];
//     var int=0;
//     var sum=0;

//     for(i=0; i<2; i++){
//         array[i]=[];
//         for(j=0; j<5; j++){
//             array[i][j]=++int;

//             if(!(array[i][j]==3||array[i][j]==7||array[i][j]==9)){
//                     sum+=array[i][j];
//             }
//         }
//     }
//     return sum;
// }console.log(twoArray3());
//===============================================================

function twoArray4() {

    var array = [];
    var int = 0;
    var sum = 0;
    let result=0;
    var choicesum=0;
    var choicearray = [3, 7, 9, 11, 13, 15, 17];
    //일일 비교해서 맞으면 빼고 합 출력

    for (var i = 0; i < 2; i++) {
        array[i] = [];
        for (var j = 0; j < 10; j++) {
            array[i][j] = ++int;


            choicearray.forEach(element => {
                if(element==array[i][j]){
                    choicesum+=array[i][j];
                }
            });

        }
    }


            //     // 1 2 4 5 6 8 10 12 14 16 18 19 20 합 135
            // // 6 12 18 합36
            // choicearray.forEach(element => {
            //     if((element == array[i][j])&&(array[i][j]%3==0)){
            //         sum += array[i][j];
            //     }
            // });


//     result = array.map(element => {
//             choicearray.forEach(element2 => {
//                     if((element2!=element)&&(element%3==0)){
//                             sum+=element;
//                     }
//             });
//             return sum;
//     });

// return result;

// for (const iter of array) {
//     for (const iter2 of iter) {
//         choicearray.forEach(element => {
//             if((element==iter2)&&(iter2%3==0)){
//                 sum+=iter2;
//             }
//         });
//     }
// }

// return sum;



// var array = [];
// var int = 0;
// var sum = 0;
// // let result=0;
// var choicesum=0;
// var choicearray = [3, 7, 8];
// //일일 비교해서 맞으면 빼고 합 출력

// for (var i = 0; i < 3; i++) {
//     array[i] = [];
//     for (var j = 0; j < 3; j++) {
//         array[i][j] = ++int;
//         sum+=array[i][j];

//         choicearray.forEach(element => {
//             if(element==array[i][j]){
//                 choicesum+=array[i][j];
//             }
//         });

//     }
// }





return sum-choicesum;

// for (const iter of array) {
//     for (const iter2 of iter) {
//         for(var i=0; i<choicearray.length; i++){
//             if(choicearray[i]==iter2){
//                 choicesum=choicesum+choicearray[i];
//             }
//         }
//         sum+=iter2;
//     }
// }


// return sum-choicesum;

} console.log(twoArray4());


