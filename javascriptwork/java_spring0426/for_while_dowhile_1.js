function Sum(){

    var i;
    var one=0;
    var two=0;

    for(i=2; i<=10; i++){
        if(i%2==0){
            two=two+i;
        }
        if(!(i%2==0)){
            one=one+i;
        }
    }
    console.log('짝수합: '+two+' 홀수합: '+one);

    i=2;
    one=0;
    two=0;
    while (i<=10) {
        if(i%2==0){
            two=two+i;
        }
        if(!(i%2==0)){
            one=one+i;
        }
        ++i;
    }
    console.log('짝수합: '+two+' 홀수합: '+one);

    i=2;
    one=0;
    two=0;
    do {
        if(i%2==0){
            two=two+i;
        }
        if(!(i%2==0)){
            one=one+i;
        }
    } while (++i<=10);
    return '짝수합: '+two+' 홀수합: '+one;

}
console.log(Sum());
