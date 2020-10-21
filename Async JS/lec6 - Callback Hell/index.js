const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if (request.readyState == 4){
            callback("could not find data", undefined);
        }
    })

    request.open("GET", resource);
    request.send();
}
console.log(1);
console.log(2);


getTodos("../todos/mario.json", (err, data) => {
    console.log("Callback fired");
    console.log(data);
    getTodos("../todos/shaun.json", (err, data) => {
        console.log("Callback fired");
        console.log(data);
        getTodos("../todos/luigi.json", (err, data) => {
            console.log("Callback fired");
            console.log(data);
        });
    });
});

console.log(3);
console.log(4);