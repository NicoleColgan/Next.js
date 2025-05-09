function square(number) {
    return number * number;
}

function myFunct(theObject) {
    // if this attribute doesnt exist, it will create it
    theObject.colour = "brown"
}

const myApple = {
    type: "pink lady",
    colour: "red",
    cost: 2
}
console.log(myApple)
myFunct(myApple);
console.log(myApple)
console.log(square(2));