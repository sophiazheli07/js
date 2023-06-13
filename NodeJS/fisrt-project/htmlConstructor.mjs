import fs from "fs"
export class HTMLConstructor {

    constructor (fileName = "", content = "") {
        this.fileName = fileName;
        this.content = content;
    }

    generateFIle(path = "/htmlContent") {
        if (path) {
            !fs.exsistsSync(path) && fs.mkdirSync(path);
        }

        fs.writeFileSync(`${path}/${this.fileName}.html`, this.content);
        
        return this;

    }
}