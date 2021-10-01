/* this function builds up a list structure from an array
 in which lists are independent but shares the structure that makes up their last elements. 
 */
function ArrayToList(Arr) {
    for (var i = Arr.length - 1; i >= 0; i--) { //loop runs backwards to get nested list
        var list = { value: Arr[i], rest: list };
    }
    return list;
}


/*this function transform a list into an array */
function ListToArray(l) {
    Array = [];
    for (let node = l; node; node = node.rest) {
        Array.push(node.value);
    }


    return Array;
}

/*Helper Function - works like ArrayToList function
takes an element and a list and creates a new list
 */
function Prepend(element, list) {
    var NewList = { value: element, rest: list };
    return NewList;
}

console.log(ArrayToList([10, 20]));
console.log(ListToArray(ArrayToList([10, 20, 30])));
console.log(Prepend(40, Prepend(70, null)));