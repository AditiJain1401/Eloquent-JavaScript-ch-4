/*  this function will take a start, end and step value of an array as input*
and then will return an array of numbers */
function range(start, end, step) {
    var Array = [];

    //setting 1 as default value of step is it not given
    if (step == undefined) {
        step = "1"
    }
    for (var num = start; num <= end; num = num + step) {
        Array.push(num); //to insert numbers into array
    }
    return Array;
}

/* this function will take an range of numbers as input
and then will return the sum of these numbers */
function sum(Arr) {
    l = Arr.length; //counts length of Array
    var s = 0

    //loop that changes index of numbers of an Array
    for (var i = 0; i < l; i = i + 1) {
        s = s + Arr[i];
    }
    return s;
}
console.log(range(1, 10, 2)); //returns array with given requirements
console.log(sum(range(1, 10, 2))); //takes  array from range function and returns its sum.