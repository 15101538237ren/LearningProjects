fetch("../todos/mario.json")
    .then(response => {
        console.log("Promise 1 resolved,", response);
        return response.json();
    })
    .then(data => {
        console.log("Data,", data);
    })
    .catch(err => {
        console.log("Promise rejected,", err);
    })
    