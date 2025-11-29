// <== IMPORTS ==>
import path from "path";
import DataURIParser from "datauri/parser.js";

// <== DATA URI FUNCTION ==>
const getDataURI = (file: Express.Multer.File): string => {
  // <== CREATING DATA URI PARSER INSTANCE ==>
  const parser = new DataURIParser();
  // <== GETTING FILE EXTENSION NAME ==>
  const extName = path.extname(file.originalname).toString();
  // <== FORMATTING DATA URI ==>
  return parser.format(extName, file.buffer) as unknown as string;
};

export default getDataURI;
