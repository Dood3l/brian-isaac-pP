function largestRemainderCheck(x, y){
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(largestRemainderCheck(336, 360))
console.log(largestRemainderCheck(78, 126))