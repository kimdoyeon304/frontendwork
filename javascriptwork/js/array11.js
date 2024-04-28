function Filter(){

    var array=[1,2,3,4,5];

    let newarray=array.filler(function(item){
        //조건에 만족하는 것만 새로운 배열로 만든다
        return item%2==0;
    });

    console.log(newarray);
}
console.log(Filter());
