class ManipulateFiles{
    constructor(){
        this.fsnp = require('fs');
    }

    getImage(caminho, name){
        return this.fsnp.createReadStream(caminho+name);
    } 

    setImage(caminho, name){
        return this.fsnp.createWriteStream(caminho+name);
    } 

    getText(name){
        return this.fsnp.readFileSync('./src/docs/'+name, "utf-8");
    } 
}

module.exports = ManipulateFiles;