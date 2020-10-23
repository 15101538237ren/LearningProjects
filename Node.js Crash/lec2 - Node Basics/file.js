const fs = require("fs");

const dir = "./blogs";
const fp1 = `${dir}/blog1.txt`;
const fp2 = `${dir}/blog2.txt`;

// read files
const read = (fp) =>{
    fs.readFile(fp, (err, data) => {
        if (err) {
            console.log(err);
        }else{
            console.log(data.toString());
        }
    });
}

const write = (fp) =>{
    fs.writeFile(fp, `Hello ${fp}!`, (err) =>{
        if (err) {
            console.log(err);
        }else{
            console.log(`File ${fp} is written!`);
        }
    });
}

const delete_file = (fp) =>{
    if (fs.existsSync(fp)){
        // deleting files
        fs.unlink(fp, (err) =>{
            if (err) {
                console.log(err);
            }else{
                console.log(`File ${fp} is deleted!`);
            }
        });
    }
}

// directories
const pipeline = () => {
    if (!fs.existsSync(dir)){
        fs.mkdir(dir, (err)=>{
            if (err){
                console.log(err);
            }else{
                console.log(`folder ${dir} created`);
                // writing files
                write(fp1);
                write(fp2);
            }
        });
    }else{
        delete_file(fp1);
        delete_file(fp2);
        fs.rmdir(dir, (err) =>{
            if (err){
                console.log(err);
            }else{
                console.log(`folder ${dir} deleted`);
            }
        });
    }
};

pipeline();



