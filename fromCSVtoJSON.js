//Before to convert a file we need to install 'csvtojson' library, it could be installed globally

const csv = require("csvtojson");
const fs = require("fs");

const csvPath = "./public/tasas_vida.csv";
const jsonPath =
  "./public/tasas_vida.json";

csv()
  .fromFile(csvPath)
  .then((jsonObj) => {
    fs.writeFile(jsonPath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
      } else {
        console.log(`File converted and saved as ${jsonPath}`);
      }
    });
  })
  .catch((err) => {
    console.error("Error converting CSV to JSON:", err);
  });
