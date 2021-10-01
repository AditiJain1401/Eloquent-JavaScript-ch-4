/* thi function will take an array as an argument
and will return a new array in reverse order.
 */
function ReverseArray(Arr) {
    l = Arr.length; //counts the length of given array
    var NewArr = [];
    //loop to insert values in New Array from last index of given array
    for (var i = 0; i < l; i++) {
        NewArr.push(Arr.pop());
    }
    return NewArr;
}
console.log(ReverseArray(["A", "B", "C", "D", "E"]));