const fs = require('fs');
const path = require('path');
const filePath = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(__dirname, '../dist');
const cleanFolder = _path => {
    let files = [];
    if(fs.existsSync(_path)){
        files = fs.readdirSync(_path);
        for(let i of files){
            const exct_path = _path + '/' + i;
            if(fs.statSync(exct_path).isDirectory()){
                cleanFolder(exct_path);
            }else{
                fs.unlinkSync(exct_path);
            }
        }
        fs.rmdirSync(_path);
    }
}
cleanFolder(filePath);