function twoArray1() {

    var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            console.log(array[i][j]);
        }
    }
}
console.log(twoArray1());

function twoArray2() {

    var array = [[1, 2, 3], [4, 5, 6]];
    var sum = 0;

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            sum = sum + array[i][j];
            console.log(array[i][j]);
        }
    }
    return sum;
}
console.log(twoArray2());

function twoArray3() {

    var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
    var one = 0;
    var two = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 == 0) {
                two = two + array[i][j];
            } else {
                one = one + array[i][j];
            }
        }
    }
    return '짝수합: ' + two + '\n홀수합: ' + one + '\n총합: ' + (two + one);
}
console.log(twoArray3());


function twoArray4() {

    var array = [];
    var int = 0;

    for (var i = 0; i < 2; i++) {

        array[i] = [];

        for (var j = 0; j < 3; j++) {
            array[i][j] = ++int;
        }
    }
    return array;
}
console.log(twoArray4());


function Var() {

    //var es5 변수명 재선언 가능
    //let es6 변수명 재선언 불가

    var name = '아무개';
    var name = '홍길동';

    console.log(name);

    // let address='미국';
    // let address='미국2';
}
console.log(Var());


function twoArray5() {

    var array = [];
    var int = 0;

    for (var i = 0; i < 3; i++) {
        array[i] = [];
        for (var j = 0; j < 3; j++) {
            array[i][j] = ++int;
        }
    }
    return array;
}
console.log(twoArray5());

console.log('============');

function twoArray6() {

    var array = [];
    // var sum=0;
    var int = 0;
    var one = 0;
    var two = 0;

    for (var i = 0; i < 3; i++) {
        array[i] = [];
        for (var j = 0; j < 5; j++) {
            array[i][j] = ++int;
            // sum=sum+array[i][j];
            if (array[i][j] % 2 == 0) {
                two = two + array[i][j];
            } else {
                one = one + array[i][j];
            }
        }
    }
    //return array+'\n총합: '+sum;

    console.log('총합: ' + (one + two) + '\n짝수합: ' + two + '\n홀수합: ' + one);
    //console.log(array);
    return array;
}
console.log(twoArray6());
console.log('============');

function twoArray7() {

    var array = [];
    var one = 0;
    var two = 0;
    var int = 0;

    for (var i = 0; i < 2; i++) {
        array[i] = [];
        for (var j = 0; j < 6; j++) {
            array[i][j] = ++int;

            if (!((array[i][j] == 3) || (array[i][j] == 7) || (array[i][j] == 10))) {

                if (array[i][j] % 2 == 0) {
                    two = two + array[i][j];
                } else {
                    one = one + array[i][j];
                }
            }
        }
    }
    return '짝수합: ' + two + '\n홀수합: ' + one + '\n총합: ' + (one + two);
}
console.log(twoArray7());
