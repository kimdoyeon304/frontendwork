

function Doyeon() {
    var array = [];
    var sum = 0;

    for (var i = 0; i < 10; i++) {
        array[i] = i + 2;
        sum = sum + array[i]; 
    }
    return sum;

}

console.log(Doyeon());

