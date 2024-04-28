console.log('it에 오신것을 환영합니다');

//개발규칙
function oneArray1(){
    var array=[1,2,3,4];

    for(var i=0; i<4; i++){
        console.log(array[i]);
    }
}

console.log(oneArray1());

console.log('==============');
function oneArray2(){
    var  array=[];

    for(i=0; i<4; i++){
        array[i]=i+1;
        console.log(array[i]);
    }
}
console.log(oneArray2());

function Undefined(){

    console.log('print....');
    return "function은 기본적으로 return으로 던져야한다";

}

//f3: 선택된 함수나 변수로 점프한다
//ctrl+o : 현재페이지 모든 함수나 변수 보여준다
console.log(Undefined());


function oneArray3(){
    var array=[];
    var sum=0;

    for(i=0; i<10; i++){
        array[i]=i+1;
        sum=sum+array[i];
    }
    return sum;

}
console.log(oneArray3());


