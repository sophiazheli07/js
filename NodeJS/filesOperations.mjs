import fs from "fs";
import * as path from 'path';


// !fs.existsSync("folder") && fs.mkdirSync("folder");

// fs.writeFileSync("folder/text.txt", "Hello from nodeJS");
// fs.writeFileSync("text2.txt", "Hello 2");

// fs.writeFile("text3.txt", "hello 3", () => {
//     console.log("File was created")
// });


// const data = ["Hello", "Hello2", "From", "World", "abc"];
// const folderPath = 'data';

// if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath);
//     console.log(` ${folderPath} was created`);
//   }

// data.forEach((element, index) => {
//   const fileName = `${index}.txt`; 
//   const fileContent = element; 
//   const filePath = path.join(folderPath, fileName);
  
//   fs.writeFile(filePath, fileName, fileContent, () => {
//     console.log(` ${filePath} was created`);
//   });
// });



const data = ["Hello", "Hello2", "From", "World", "abc"];
const folderPath = 'data'; 

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(` ${folderPath}was created`);
}

data.forEach((element, index) => {
  const fileName = `${index}.txt`; 
  const fileContent = element; 
  const filePath = path.join(folderPath, fileName); 

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(` ${filePath} was created`);
  });
});
