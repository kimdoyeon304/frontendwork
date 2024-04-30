

// 클래스 선언

class Animal {

    // 생성자(Constructor) 메서드
    //매개변수, 인자, 아귀먼트, 파람(param) - name, age
    constructor(name, age) {
        //this.name:전역변수
        //name:지역변수
        //지역변수와 전역변수의 이름이 같으면 this.생략 불가
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



const animal=new Animal('고양이',10);
console.log(animal.getAnimal());

const animal2=new Animal('멍멍이',11);
console.log(animal2.getAnimal());






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





