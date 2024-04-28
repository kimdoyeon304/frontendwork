// ctrl+alt+n
// ctrl+m 왼쪽창 / ctrl+j 아래창

console.log('안녕');



function arrayLesson1() {
   console.log('function 말하다');
}

// ctrl+space 보기창

console.log('말하다');
console.log(arrayLesson1());



function oneArray() {

   // 모든 객체지향언어는 같다
   // 모든언어공통:배열은 index 0부터 시작한다
   // 값을 얻는것도 0부터 얻는다

   var array = [1, 2, 3, 4, 5];


   for (var i = 0; i < 5; i++) {
      console.log(array[i]);

   }
}

console.log(oneArray());


console.log('================');

function j304Ex1() {

   var array304 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

   for (i = 0; i < 11; i++) {
      console.log(array304[i]);
   }
}

console.log(j304Ex1());


function oneArray2() {
   var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

   console.log('배열의길이는' + array.length);

   for (i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}
console.log(oneArray2());

console.log('================');

function oneArray3() {


   var array = [];
   //var int=0;
   for (i = 0; i < 9; i++) {

      array[i] = i + 1;

      //array[i] = ++int;
      console.log(array[i]);

   }

}
console.log(oneArray3());

console.log('================');

function oneArray4() {

   var array = [];
   for (i = 0; i < 10; i++) {
      array[i] = i + 1;
      console.log(array[i]);
   }
}

console.log(oneArray4());

console.log('================');

function oneArray5() {


   var array = [];
   for (i = 0; i < 10; i++) {
      array[i] = i + 3;
      console.log(array[i]);
   }
}
console.log(oneArray5());
console.log('================');

function Sum() {

   var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var array2 = [];
   var sum = 0;

   for (var i = 0; i < array1.length; i++) {
      sum = sum + array1[i];
   }
   console.log('1-10 합출력: '+sum);

   sum = 0;
   for (i = 0; i < 9; i++) {
      array2[i] = i + 1;
      sum = sum + array2[i];
   }
   console.log('1-10 입력 후 합출력: '+sum);
}
console.log(Sum());
