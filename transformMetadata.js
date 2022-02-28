const { create } = require("xmlbuilder2");
const formatDate = require("./utils/formats");
const formatRun_Time_hour = require("./utils/formats");
const formatRun_Time = require("./utils/formats");
const fs = require("fs");

async function collectInformation(info) {
  //console.log(info);
  const {
    FileName,
    Asset_Class,
    Asset_ID,
    Asset_Name,
    Creation_Date,
    Creation_Date_1,
    Creation_Date_2,
    Creation_Date_3,
    Creation_Date_4,
    Description,
    Product,
    Provider,
    Provider_ID,
    Version_Major,
    Version_Minor,
    Series_ID,
    Episode_Name,
    Series_Name,
    Series_Ordinal,
    Episode_Ordinal,
    Summary_Short,
    Rating,
    Run_Time,
    Display_Run_Time,
    Year,
    Actors,
    Actors_Display,
    Genre,
    Licensing_Window_Start,
    Licensing_Window_End,
    Type,
    Title,
    Title_Brief,
    Director,
    Country_of_Origin,
    Show_ID,
    Category,
    Show_Type,
    Gross_price,
    Available_in_localities,
    Show_Name,
    Eds_Product_ID,
    Net_price,
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
      Creation_Date: formatDate.formatDate( Creation_Date_1),
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
      Name: "Episode_Name ",
      Value: Episode_Name,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Series_Name",
      Value: Series_Name,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Series_Ordinal",
      Value: Series_Ordinal,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Episode_Ordinal",
      Value: Episode_Ordinal,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Summary_Short",
      Value: Summary_Short,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Rating",
      Value: Rating,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Run_Time",
      Value: formatRun_Time.formatRun_Time(Run_Time),
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Display_Run_Time",
      Value: formatRun_Time_hour.formatRun_Time_hour(Display_Run_Time),
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Year",
      Value: Year,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Actors",
      Value: Actors,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Actors_Display",
      Value: Actors_Display,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Genre",
      Value: Genre,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Licensing_Window_Start",
      Value: formatDate.formatDate(Licensing_Window_Start),
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Licensing_Window_End",
      Value: formatDate.formatDate(Licensing_Window_End),
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Type,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Title",
      Value: Title,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Title_Brief",
      Value: Title_Brief,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Director",
      Value: Director,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Country_of_Origin",
      Value: Country_of_Origin,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Show_ID",
      Value: Show_ID,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Category",
      Value: Category,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Show_Type",
      Value: Show_Type,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Gross_price",
      Value: Gross_price,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Available_in_localities",
      Value: Available_in_localities,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Show_Name",
      Value: Show_Name,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Eds_Product_ID",
      Value: Eds_Product_ID,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Net_price",
      Value: Net_price,
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
      Creation_Date: formatDate.formatDate(Creation_Date_2),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor_1,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Type",
      Value: Type_1,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Audio_Type",
      Value: Audio_Type,
    })
    .up()
    .ele("App_Data", {
      App: "FVOD",
      Name: "HDContent",
      Value: HDContent,
    })
    .up()
    .ele("App_Data", {
      App: "MOD",
      Name: "Content_FileSize",
      Value: Content_FileSize,
    })
    .up()
    .ele("App_Data", {
      App: "FVOD",
      Name: "Encoding_Type",
      Value: Encoding_Type,
    })
    .up()
    .up()
    .ele("Content", { Value: ContentValue })
    .up()
    .up()
    

    //Block 4
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class_3,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date_3),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor_1,
    })
    .up()
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
    
    //Block 5
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Asset_Class: Asset_Class_4,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Creation_Date: formatDate.formatDate(Creation_Date_4),
      Description: Description,
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor_1,
    })
    .up()
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

module.exports = { collectInformation };

// for (let i = 1; i <= 29; i++) {
//   const item = app.ele("App_Data");
//   item.att("App", "MOD");
//   item.att("Name", keyValue);
//   item.att("Value", Values);
// }
