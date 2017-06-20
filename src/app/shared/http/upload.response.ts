import { Response } from "./response";
import { File } from "../../filesystem/file";

export class UploadResponse extends Response {
  files: File[];
}
