const XLXS = require("xlsx");
const prompt = require("prompt-sync")({ sigint: true });
const collectInformation = require("./transformMetadata");
const collectInformationSD = require("./transformMetadataSD");
const fs = require("fs");

function readExcelFile(file) {
  const workbook = XLXS.readFile(file);
  const workbookSheets = workbook.SheetNames; //for for each sheet

  const sheetInput = prompt("Enter the option 1.standard 2.SD 3.HD : ");
  const sheet = workbookSheets[sheetInput];
  
  const excelMetaData = XLXS.utils.sheet_to_json(workbook.Sheets[sheet]);
  //console.log(excelMetaData)
  if (sheetInput == 0) {
    excelMetaData.forEach((excelInformation) => {
      collectInformation.collectInformation(excelInformation); // for each row in the excel file
    });
  } else if (sheetInput == 1) {
    excelMetaData.forEach((excelInformation) => {
      collectInformationSD.collectInformationSD(excelInformation); // for each row in the excel file
    });
  } else {
    //excelMetaData.forEach((excelInformation) => {
    //  collectInformation.collectInformation(excelInformation); // for each row in the excel file
    //});
  }
}

readExcelFile("MECANIMALEST02_VALUES_FOR_XML_VTR.xlsx");
