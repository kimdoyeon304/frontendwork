//es6(2009)



// var ,let ,const 





// var:

// var 키워드는 오래된 JavaScript에서 사용되었으며, 변수를 선언하는 데에 사용

// 함수 스코프를 따르며, 함수 내에서 선언된 변수는 함수 내에서만 접근 가능

// 블록 스코프를 무시하므로, 블록 내에서 선언된 var 변수는 외부에서도 접근 가능

// 변수선언하면 위로 올라가서 위에서 출력해도 출력됨 



var global = '함수밖';



function exampleVar() {

    var x = 10;

    var x = 10;

    //같은이름의변수 초기화가와도 에러없음 



    console.log(x);

    console.log('함수밖변수:' + global);



}





function exampleLet() {



    //변수명이 블럭안에 같으면 에러 

    // let name='아무개';

    // let name='아무개2';



    //괄호밖에것은 사용가능 

    console.log(global); // 

}



console.log(exampleLet());







function exampleConst() {

    const x = 10;

    // x = 20; // 상수이므로 값을 놓을수없다 

    //속성값은 바꿀수  있다

    const obj = { name: 'John', age: 20 };

    obj.name = 'Jane'; // 이것은 허용됩니다.

    console.log(obj.age);



}



console.log(exampleConst());









// 클래스 선언

class Animal {

    // 생성자(Constructor) 메서드

    constructor(name, age) {

        this.name = name;

        this.age = age;

    }



    // 메서드(Method)

    eat() {

        // ES6부터는 백틱을 사용하여 템플릿 리터럴(template literals)

        //문자열과 변수혼합 변수는 ${변수} 한다 

        return `${this.name} is eating.`;

    }





    setAnimal(name, age) {

        this.name = name;

        this.age = age;



    }





    getAnimal() {

        return {

            name: this.name,

            age: this.age

        }

    }





    // 정적 메서드(Static Method)

    static sleep() {

        return 'Animal is sleeping.';

    }

}



// 클래스를 이용한 객체 생성













const dog = new Animal('Max', 3);

console.log(dog); // { name: 'Max', age: 3 }



// 객체의 메서드 호출

console.log(dog.eat()); // Max is eating.



// 정적 메서드 호출

console.log(Animal.sleep()); // Animal is sleeping.





dog.setAnimal('김', 10);

console.log(dog.name);

console.log(dog.age);



let getanimal = dog.getAnimal();



// console.log(getanimal);





// 전달된 모든 인수의 합을 계산하는 함수

function reduceSum(...numbers) {

    // reduce 메서드를 사용하여 배열의 모든 요소를 합산

    return

    // array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)



    numbers.reduce((acc, current) => {

        console.log('acc:' + acc); console.log('current:' + current);

        return (acc + current);



    }, 0);

}



// console.log(reduceSum(1, 2)); // 3

// console.log(reduceSum(1, 2, 3)); // 6

// console.log(reduceSum(1, 2, 3, 4, 5)); // 15



// console.log(reduceSum(1,2));



console.log('=================================');

// 전달된 모든 인수의 합을 계산하는 함수

function reduceSum2(...numbers) {

    // reduce 메서드를 사용하여 배열의 모든 요소를 합산

    return numbers.reduce((acc, current) => acc + current, 0);

}



//1,2 값이 들어가므로 ...numbers 에 배열로 들어가므로 

console.log(reduceSum2(1, 2)); // 3

console.log(reduceSum2(1, 2, 3)); // 6

console.log(reduceSum2(1, 2, 3, 4, 5)); // 15





// Spread Operator



function Spreadsum(x, y, z) {

    return x + y + z;

}



const numbers = [1, 2, 3];

//numbers 가 x,y,z로 쪼개져서 들어감

console.log(Spreadsum(...numbers)); // 6





function Spreadsum2() {

    const arr1 = [1, 2, 3];

    const arr2 = [4, 5, 6];



    const combined = [...arr1, ...arr2];

    console.log(combined); // [1, 2, 3, 4, 5, 6]

}



function Spreadsum2(x, y) {



    console.log(x);

    console.log(y);





}

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];





// console.log(Spreadsum2(arr1,arr2));









function Spreadsum3(y) {





    console.log(y);





}

const arr3 = [1, 2, 3];

const arr4 = [4, 5, 6];

//arr3,arry 배열 합침 

const combined = [...arr3, ...arr4];



console.log(Spreadsum3(combined));





function Foreach() {





    const numbers = [1, 2, 3, 4, 5];



    // 배열의 각 요소를 출력하는 예제

    numbers.forEach((currentValue, index) => {

        console.log(`Index ${index}: ${currentValue}`);

    });



}







function Map1() {



    var array = [1, 2, 3, 4, 5];



    let arrays = array.map(arr => arr);



    for (const iter of arrays) {

        console.log(iter);

    }



}



// console.log(Map1());





//1차원 배열 map에서 더하기

function Map2() {



    let array = [1, 2, 3, 4, 5];

    let sum = 0;

    //sum 합구하기 

    //{}는 비축약형이므로 return 해주어야한다 

    //축약형은 한줄로 {} 없이 반환 

    array.map((arr) => {



        sum = sum + arr;



    })



    console.log(`sum값은 ${sum}`);



}



// console.log(Map2());



//1차원 배열 요소놓고 map 으로 더하기 

function Map3() {

    let sum = 0;

    let array = [];



    for (let i = 0; i < 5; i++) {



        array.push(i + 1);



    }



    array.map(arr => {



        sum = sum + arr;



    })



    console.log(`sum값은 ${sum}`);

}





// console.log(Map3());





//2차원배열  map 합을구하고 출력 

function Map4() {



    var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    sum = 0;

    array.map(function (element) {





        for (const iter of element) {

            sum = sum + iter;



        }









    });



    return sum;

}



console.log(Map4());





//2차원배열  map 합을구하고 출력 



function Map5() {



    var array = [];

    var sum = 0;

    var init = 0;

    for (let row = 0; row < 2; row++) {

        array[row] = [];

        for (let col = 0; col < 10; col++) {

            array[row][col] = ++init;





        }



    }

    // console.log(array);

    array.map((element) => {





        for (const iter of element) {

            sum = sum + iter;



        }









    });

    return sum;

}



// console.log(Map5());















function Map6() {



    const strings = ['apple', 'banana', 'orange', 'grape'];



    const stringLengths = strings.map(function (currentValue) {

        return currentValue.length; // 각 문자열의 길이를 반환

    });



    console.log(stringLengths); // [5, 6, 6, 5]

}





function Map7() {



    const students = [

        { name: 'Alice', age: 20 },

        { name: 'Bob', age: 22 },

        { name: 'Charlie', age: 21 }

    ];



    const names = students.map(student => student.name);



    console.log(names); // ['Alice', 'Bob', 'Charlie']

}