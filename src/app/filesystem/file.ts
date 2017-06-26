import { FilesystemService } from "./filesystem.service";
import { FilesystemObject } from "./filesystem-object";

export class File extends FilesystemObject {
  url: string;

  type: string;

  date_modified: string;

  get location(): string {
    return FilesystemService.lastPathDirectory(this.path);
  }

  get icon(): string {
    return 'icon-' + this.type;
  }
}
