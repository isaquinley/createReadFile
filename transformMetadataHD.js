const { create } = require("xmlbuilder2");
const formatDate = require("./utils/formats");
const formatRun_Time_hour = require("./utils/formats");
const formatRun_Time = require("./utils/formats");
const fs = require("fs");

async function collectInformationHD(info) {
  // console.log(info);
  const {
    FileName,
    Creation_Date,
    Product,
    Provider,
    Provider_ID,
    Version_Major,
    Version_Minor,
    Asset_Class,
    Asset_ID,
    Description,
    Asset_Name,
    Creation_Date_1,
    Asset_Class_1,
    Type,
    Title,
    Title_Brief,
    Summary_Short,
    Summary_Long,
    Rating,
    Studio_Code,
    Run_Time,
    Display_Run_Time,
    Year,
    Category,
    Genre,
    Distributor_Name,
    Licensing_Window_Start,
    Licensing_Window_End,
    Audience,
    Billing_ID,
    Title_Sort_Name,
    Country_Of_Origin,
    Actors_Display,
    Studio,
    Contract_Name,
    Studio_Name,
    Actors,
    Director,
    Asset_Class_2,
    Creation_Date_2,
    Type_1,
    Audio_Type,
    Screen_Format,
    Languages,
    Copy_Protection,
    Content_FileSize,
    HDContent,
    Encoding_Type,
    ContentValue,
    Creation_Date_3,
    Asset_Class_3,
    Type_2,
    ContentValue_1,
    Creation_Date_4,
    Asset_Class_4,
    Type_3,
    Image_Qualifier,
    Image_Aspect_Ratio,
    ContentValue_2,
  } = info;

  //Bloque Package
  const root = create({ version: "1.0", encoding: "utf-8" })
    .ele("ADI")
    .ele("Metadata")
    .ele("AMS", {
      Creation_Date: formatDate.formatDate(Creation_Date),
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
      Asset_Class: Asset_Class,
      Asset_ID: Asset_ID,
      Description: Description,
      Asset_Name: Asset_Name,
    })
    .up()
    .ele("App_Data", {
      App: "SVOD",
      Name: "Metadata_Spec_Version",
      Value: "CableLabsVOD1.1",
    })
    .up()
    .up()

    //Bloque Title
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Creation_Date: formatDate.formatDate(Creation_Date_1),
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
      Asset_Class: Asset_Class_1,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Description: Description,
    })
    .up()

    .ele("App_Data", {
      Name: "Type",
      Value: Type,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Title",
      Value: Title,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Title_Brief",
      Value: Title_Brief,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Summary_Short",
      Value: Summary_Short,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Summary_Long",
      Value: Summary_Long,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Rating",
      Value: Rating,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Run_Time",
      Value: formatRun_Time.formatRun_Time(Run_Time),
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Display_Run_Time",
      Value: formatRun_Time_hour.formatRun_Time_hour(Display_Run_Time),
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Year",
      Value: Year,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Category",
      Value: Category,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Genre",
      Value: Genre,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Distributor_Name",
      Value: Distributor_Name,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Licensing_Window_Start",
      Value: formatDate.formatDate(Licensing_Window_Start),
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Licensing_Window_End",
      Value: formatDate.formatDate(Licensing_Window_End),
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Audience",
      Value: Audience,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Billing_ID",
      Value: Billing_ID,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Title_Sort_Name",
      Value: Title_Sort_Name,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Country_Of_Origin",
      Value: Country_Of_Origin,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Actors_Display",
      Value: Actors_Display,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Studio",
      Value: Studio,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Contract_Name",
      Value: Contract_Name,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Studio_Name",
      Value: Studio_Name,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Actors",
      Value: Actors,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Director",
      Value: Director,
      App: "FVOD",
    })
    .up()
    .up()

    //Bloque Movie
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Creation_Date: formatDate.formatDate(Creation_Date_2),
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
      Asset_Class: Asset_Class_2,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Description: Description,
    })
    .up()
    .ele("App_Data", {
      Name: "Type",
      Value: Type_1,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Audio_Type",
      Value: Audio_Type,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Screen_Format",
      Value: Screen_Format,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Languages",
      Value: Languages,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Copy_Protection",
      Value: Copy_Protection,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Content_FileSize",
      Value: Content_FileSize,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "HDContent",
      Value: HDContent,
      App: "FVOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Encoding_Type",
      Value: Encoding_Type,
      App: "FVOD",
    })
    .up()
    .up()
    .ele("Content", { Value: ContentValue })
    .up()
    .up()

    //Bloque Box Cover
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Creation_Date: formatDate.formatDate(Creation_Date_3),
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
      Asset_Class: Asset_Class_3,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Description: Description,
    })
    .up()
    .ele("App_Data", {
      Name: "Type",
      Value: Type_2,
      App: "FVOD",
    })
    .up()
    .up()
    .ele("Content", { Value: ContentValue_1 })
    .up()
    .up()

    //Bloque Image
    .ele("Asset")
    .ele("Metadata")
    .ele("AMS", {
      Creation_Date: formatDate.formatDate(Creation_Date_4),
      Product: Product,
      Provider: Provider,
      Provider_ID: Provider_ID,
      Verb: "",
      Version_Major: Version_Major,
      Version_Minor: Version_Minor,
      Asset_Class: Asset_Class_4,
      Asset_ID: Asset_ID,
      Asset_Name: Asset_Name,
      Description: Description,
    })
    .up()
    .ele("App_Data", {
      Name: "Type",
      Value: Type_3,
      App: "MOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Image_Qualifier",
      Value: Image_Qualifier,
      App: "MOD",
    })
    .up()
    .ele("App_Data", {
      Name: "Image_Aspect_Ratio",
      Value: Image_Aspect_Ratio,
      App: "MOD",
    })
    .up()
    .ele("App_Data")
    .up()
    .up()
    .ele("Content", { Value: ContentValue_2 })
    .up();

  const xml = root.end({ prettyPrint: true });
  // console.log(xml);

  await fs.writeFile(`./HD/${FileName}`, xml, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
    }
  });
}

module.exports = { collectInformationHD };
