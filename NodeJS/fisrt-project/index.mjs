import fs from "fs";
import countryCodes from "country-codes-list";
import { HTMLConstructor } from "./htmlConstructor.mjs";

console.log(
  countryCodes.all().find((country) => country.countryCode === "UA"),
  "!!!"
);

const data = JSON.parse(fs.readFileSync("./posts.json"));

function main(data) {
  //   console.table(data);
  const countriesLayouts = countryCodes
    .all()
    .slice(0, 10)
    .map(
      (country) => `<div>
        <p>${country.countryNameEn}</p>
        <p>${country.region}</p>
        <p>${country.officialLanguageNameEn}</p>
    </div>`
    );

  const htmlConstructor = new HTMLConstructor(
    "countries",
    countriesLayouts.join(""),
    `
    div {
      border: 1px solid black;
      margin: 5px;
      padding: 5px;
      color: red;
    }
    `
  );

  htmlConstructor.generateFile("html");
  // htmlConstructor.generateFile("");

  changeUser(data, 2);
}

function changeUser(data, index) {

  data[index].username = "NewUsername";

  // Запис оновлених даних у файл data.json
  fs.writeFileSync("./data.json", JSON.stringify(data));
}

main(data);
