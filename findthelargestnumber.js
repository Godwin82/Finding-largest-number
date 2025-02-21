function findLargest(a,b,c){
    if(typeof a !=='number' || typeof b !=='number' ||typeof c !== 'number'){
        return"Invalid Input" ;
    }


if (a >= b && a >= c ){
    return a;
}
else if (b >= a && b >= c) {
    return b;
}
else {
    return c;
}
}


console.log(findLargest(5,10,3))
console.log(findLargest(20,20,5))
console.log(findLargest("x",10,3))