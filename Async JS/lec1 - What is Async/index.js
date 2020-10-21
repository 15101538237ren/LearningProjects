console.log(1);
console.log(2);

setTimeout(() => {
    console.log("Callback called");
}, 2000);

console.log(3);
console.log(4);