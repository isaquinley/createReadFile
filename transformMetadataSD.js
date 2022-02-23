const { create } = require("xmlbuilder2");
const formatDate = require("./utils/formats");
const fs = require("fs");

async function collectInformationSD(info) {
  // console.log(info);
  const {
    FileName,
    Asset_Class,
    Asset_ID,
    Asset_Name,
    Creation_Date,
    Creation_Date_2,
    Description,
    Product,
    Provider,
    Provider_ID,
    Version_Major,
    Version_Minor,
    Series_ID,
    Episode_Name,
    Asset_Class_1,
    Asset_Class_2,
    Asset_Class_3,
    Asset_Class_4,
    Version_Minor_1,
    Type_1,
    Type_2,
    Type_3,
    Audio_Type,
    HDContent,
    Content_FileSize,
    Encoding_Type,
    ContentValue,
    ContentValue_1,
    ContentValue_2,
    Image_Qualifier,
  } = info;
  const root = create({ version: "1.0", encoding: "utf-8" })
    .ele("ADI", { xmlns: "http://www.eventis.nl/PRODIS/ADI" })
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Metadata_Spec_Version",
      Value: "CableLabsVOD1.1",
    })
    .up()
    .up()

    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class_1,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
    })
    .up()

    //for
    .ele("App_Data", {
      App: "MOD",
      Name: "Series_ID",
      Value: Series_ID,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Episode_Name",
      Value: Episode_Name,
    })
    .up()
    .up()

    //Block 3
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class_2,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor_1,
    })
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Type_1,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Audio_Type,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: HDContent,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Content_FileSize,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Encoding_Type,
    })
    .up()
    .up()
    .ele("Content", { Value: ContentValue })
    .up()
    .up()
    .up()

    //Block 4
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class_3,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor_1,
    })
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Type_2,
    })
    .up()
    .up()
    .ele("Content", { Value: ContentValue_1 })
    .up()
    .up()
    .up()

    //Block 5
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class_4,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date_2),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor_1,
    })
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Type_3,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Image_Qualifier",
      Value: Image_Qualifier,
    })
    .up()
    .up()
    .ele("Content", { Value: ContentValue_2 })
    .up();

  const xml = root.end({ prettyPrint: true });
  // console.log(xml);

  await fs.writeFile(`${FileName}`, xml, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

module.exports = { collectInformationSD };

