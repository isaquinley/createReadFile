const fs = require("fs");

const createDir = async (dirPath, filePath, format) => {
  console.log("entreee", filePath);
  fs.mkdir(dirPath, { recursive: true }, (error) => {
    console.log("2");
    if (error) {
      console.log("An error occurred", error);
    } else {
      console.log("Directory successful created");
       fs.writeFile(`./SD/${filePath}`, format, (error) => {
        if (error) {
          console.log("An error occurred", error);
        } else {
          console.log("Directory successful created");
        }
      });
    }
  });
};

module.exports = { createDir };
