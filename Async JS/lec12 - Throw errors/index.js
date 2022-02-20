const getTodos = async () => {
    const response = await fetch("../todos/marios.json");
    if (response.status !== 200){
        throw new Error("Can't fetch the data");
    }
    const data = await response.json();
    return data;
}

getTodos().then(data => {
    console.log("Data,", data);
}).catch(error => {
    console.log("Error, ", error);
});