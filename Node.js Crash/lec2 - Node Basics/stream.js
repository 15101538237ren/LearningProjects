const fs = require("fs");

const fp = "./carpe diem.txt";
const fp2 = "./carpe diem.txt.bk";

const readStream = fs.createReadStream(fp, { encoding : "utf-8" });

const writeStream = fs.createWriteStream(fp2);

const lineSeparator = "\n------------A NEW DATA CHUNK------------\n";

const readStart = () =>{
    readStream.on('data', (chunk) => {
        console.log(lineSeparator);
        console.log(chunk.toString());
        
        writeStream.write(lineSeparator);
        writeStream.write(chunk);
    });
};

// readStart();

//piping
readStream.pipe(writeStream);