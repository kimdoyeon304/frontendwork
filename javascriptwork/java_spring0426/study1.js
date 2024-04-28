// var (es5):재선언 가능


function Var1() {

    var name = '아무개';
    var name = '홍길동';

    console.log('이름은' + name);

}
console.log(Var1());


function Var2(){

    var age=30;

    age=age+1;
   
    console.log('나이는'+age);
}
console.log(Var2());


function Var3(){

    var int=0;
    console.log(int);
    console.log(++int);
    console.log(++int);

    int=0;
    console.log(int);
    console.log(++int);
    console.log(++int);

    console.log(int);
    console.log(int++);
    console.log(int);
    console.log(int++);
    console.log(int++);
    console.log(++int);
    console.log(int);
}
console.log(Var3());

function If1(){
    // if (true) {
    //     true 괄호실행
    // }else{
    //     false 실행
    // }


    var age=40;

    if (age<=50) {
        console.log('true'+age);
    } else {
        console.log('false'+age);
    }
}
console.log(If1());

function If2(){

    var one=10;
    var two=20;

    if (one<=two) {
        console.log(true);
    }
    if (one>=two) {
        console.log(true);
    }
    //==같다 ===타입과 실제데이터형이 같다
    if (one==two) {
        console.log(true);
    }

}
console.log(If2());

function If3(){

    var one=10;
    var two=20;

    if (one==two) {
        console.log("같다");
    } else if (one<=two) {
        console.log("two더크다");
    } else if (one>=two) {
        console.log("one더크다");
    }
}
console.log(If3());

function Switch1(){
    var choice=4;

    switch (choice) {
        case 1:
            console.log(1);
            break;
            case 2:
                console.log(2);
                break;
                case 3:
                    console.log(3);
                    break;
    
        default:
            console.log('값 없음');
            break;
    }
    console.log('출력');
}
console.log(Switch1());


function If4(){

    //&&
    //||

    var one=10;
    var two=10;

    if((one<=two)&&(two==one)){
        console.log(true);
    }else{
        console.log(false);
    }
}
console.log(If4());

function If5(){
    var one=10;
    var two=20;

    if ((one<=two)||(one==two)) {
        console.log(true);
        
    }
    if ((one<=two)||(one==two)) {
        console.log(true);
        
    }else{
        console.log(false);
    }
    if ((one<=two)||(one<=two)) {
        console.log(true);
        
    }

    var one=3; var two=5;

    if(one==3||two==5){
        console.log('one'+one+'\t'+'two'+two);
    }

}
console.log(If5());


function For1(){
    var sum=0;
    for (var i = 1; i <= 10; i++) {
        sum=sum+i;
    }
    return sum;
}
console.log(For1());


function While1(){
    var int=0;
    var sum=0;

    while (++int<=10) {
        sum=sum+int;
    }
    return sum;
}
console.log(While1());


function DoWhile(){

    var int=1;
    var sum=0;
    do {
        sum=sum+int;
    } while (++int<=10);
    return sum;
}
console.log(DoWhile());


function Print(){
    var i;

    console.log('========for======');
    for(i=3; i<=11; i++){
        console.log(i);
    }
    console.log('========while======');
    i=3;
    while (i<=11) {
        console.log(i);
        ++i;
    }
    console.log('========do-while======');
    i=3;
    do {
        console.log(i);
    } while (++i<=11);
}
console.log(Print());


