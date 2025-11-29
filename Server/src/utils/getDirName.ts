// <== IMPORTS ==>
import path from "path";
import { fileURLToPath } from "url";

// <== NODE JS PATH HELPER FUNCTION ==>
export const getDirName = (importMetaUrl: string): string => {
  // <== GETTING DIRECTORY NAME ==>
  return path.dirname(fileURLToPath(importMetaUrl));
};
