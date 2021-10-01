/*This function takes two values and returns true only
if they are the same value or are objects with the same properties 
*/
function DeepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    //checks whether both are objects
    if (typeof obj1 != "object" && typeof obj2 != "object") {
        return false;
    }
    let x = Object.keys(obj1),
        y = Object.keys(obj2);
    //compares if lengths of the property list are same
    if (x.length != y.length) {
        return false;
    }
    for (let key of x) {
        //checking if both have same properties with a recursive call
        if (!y.includes(key) || !DeepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(DeepEqual(obj, obj));
console.log(DeepEqual(obj, { here: 1, object: 2 }));
console.log(DeepEqual(obj, { here: { is: "an" }, object: 2 }));