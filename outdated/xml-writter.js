var XMLWriter = require("xml-writer");

function transformData(info) {
  // console.log(info);
  xw = new XMLWriter();

  xw.startDocument("1.0", "utf-8");
  xw.startElement("ADI").writeAttribute(
    "xmlns",
    "http://www.eventis.nl/PRODIS/ADI"
  );

  xw.startElement("Metadata")
    .startElement("AMS")
    .writeAttribute("Asset_Class", "package")
    .writeAttribute("Asset_ID", "EEANME201")
    .writeAttribute("Asset_Name", "MecanimalesT02EP01")
    .writeAttribute("Creation_Date", "2022-02-11")
    .writeAttribute("Description", "Serie Mecanimales")
    .writeAttribute("Product", "FVOD;;;;;;;;")
    .writeAttribute("Provider", "Edye")
    .writeAttribute("Provider_ID", "www.Edye.com")
    .writeAttribute("Verb", "")
    .writeAttribute("Version_Major", "1")
    .writeAttribute("Version_Minor", "1")
    .startElement("App_Data")
    .writeAttribute("App", "MOD")
    .writeAttribute("Name", "Metadata_Spec_Version")
    .writeAttribute("Value", "CableLabsVOD1.1")
    .endAttribute()
    .endElement();

  //block 2

  xw.startElement("Metadata")
    .startElement("AMS")
    .writeAttribute("Asset_Class", "title")
    .writeAttribute("Asset_ID", "EEANME201")
    .writeAttribute("Asset_Name", "MecanimalesT02EP01")
    .writeAttribute("Creation_Date", "2022-02-11")
    .writeAttribute("Description", "Serie Mecanimales")
    .writeAttribute("Product", "FVOD;;;;;;;;")
    .writeAttribute("Provider", "Edye")
    .writeAttribute("Provider_ID", "www.Edye.com")
    .writeAttribute("Verb", "")
    .writeAttribute("Version_Major", "1")
    .writeAttribute("Version_Minor", "1")
    .startElement("App_Data")
    .writeAttribute("App", "MOD")
    .writeAttribute("Name", "Metadata_Spec_Version")
    .writeAttribute("Value", "CableLabsVOD1.1")
    .endAttribute()
    .endElement();

  xw.endDocument();

  console.log(xw.toString());
}

module.exports = { transformData };
