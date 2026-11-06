import { openSync, readSync, closeSync } from "node:fs";
import path from "node:path";
export const resumeFileName = "CV_Wederson_Ferreira.pdf";
export const resumeHref = `/${resumeFileName}`;

export function hasResume() {
  let descriptor: number | undefined;
  try { descriptor = openSync(path.join(process.cwd(), "public", resumeFileName), "r"); const header = Buffer.alloc(5); readSync(descriptor, header, 0, 5, 0); return header.toString() === "%PDF-"; }
  catch { return false; }
  finally { if (descriptor !== undefined) closeSync(descriptor); }
}
