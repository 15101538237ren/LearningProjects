global.setTimeout(()=>{
    console.log("Timeout");
    clearInterval(interval);
}, 3000);

var nsec = 0;

const interval = global.setInterval(() => {
    nsec += 1;
    console.log(`${nsec}s`);
}, 1000);


console.log(__dirname);
console.log(__filename);