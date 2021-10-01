// this function modifies the array given as argument by reversing its elements
function ReverseArrayInPlace(array) {
    l = array.length;
    mid = Math.floor(l / 2); //finds mid of the array

    //loop with 2 variables ,first for starting values and other from ending values
    for (var a = 0, b = array.length - 1 - a; a < mid; a++, b--) {
        //swaping values
        var c = array[a];
        array[a] = array[b];
        array[b] = c;
    }
    return array;
}
console.log(ReverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));