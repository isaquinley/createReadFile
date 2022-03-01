const XLXS = require("xlsx");
const prompt = require("prompt-sync")({ sigint: true });
const collectInformation = require("./transformMetadata");
const collectInformationSD = require("./transformMetadataSD");
const collectInformationHD = require("./transformMetadataHD");
const fs = require("fs");

function readExcelFile(file) {
  const workbook = XLXS.readFile(file);
  const workbookSheets = workbook.SheetNames; //for for each sheet
  
  const sheetInput = prompt("Enter the option 0.SD 1.HD : ");
  const sheet = workbookSheets[sheetInput];

  const excelMetaData = XLXS.utils.sheet_to_json(workbook.Sheets[sheet]);

  if (sheetInput == 0) {
    excelMetaData.forEach((excelInformation) => {
      collectInformationSD.collectInformationSD(excelInformation); // for each row in the excel file
    });
  } else if (sheetInput == 1) {
    excelMetaData.forEach((excelInformation) => {
      collectInformationHD.collectInformationHD(excelInformation); // for each row in the excel file
    });
  } else {
    console.log("Error, Enter the option 0.standard 1.SD 2.HD");
  }
}

//readExcelFile("MECANIMALEST02_VALUES_FOR_XML_VTR.xlsx");
readExcelFile("VTR_DINOTRENT01_VALUES_XML_022522.xlsx");
