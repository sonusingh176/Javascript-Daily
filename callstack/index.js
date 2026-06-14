function hungry() {
    console.log("I am hungry");
    return prepareFood();
}

function prepareFood() {
    console.log("Preparing food");
    return eatFood();
}

function eatFood() {
    console.log("Eating food");
    return "Done";
}

const result = hungry();

console.log(result);