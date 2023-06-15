import fs from "fs";

export class HTMLConstructor {
  constructor(fileName = "", content = "", style = "") {
    this.fileName = fileName;
    this.content = content;
    this.style = style;
  }

  generateBasicHTMLContent(content, style) {
    return `
    <html>
        <head>
        <style>
            ${style}
        </style>
        </head>
        <body>
            ${content}
        </body>
    </html>
    `
  }

  generateFoldersFromPath(path) {
    if (path.includes("/")) return path;

    const pathItems = path.split("/");

    pathItems.forEach((p, i) => {
      const fullPathToCurrentFolder = pathItems.slice(0, i + 1).join("/");
      console.log(fullPathToCurrentFolder, "!!!!!!!!!!!!!!!!!!!!!!!");
      !fs.existsSync(fullPathToCurrentFolder) && fs.mkdirSync(fullPathToCurrentFolder);
    });
  }

  generateFile(path = "") {
    if (path) {
      this.generateFoldersFromPath(path);
    }

    fs.writeFileSync(
      path ? `${path}/${this.fileName}.html` : `${this.fileName}.html`,
      this.generateBasicHTMLContent(this.content, this.style)
    );

    return this;
  }
}
