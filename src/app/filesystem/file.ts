import { FilesystemService } from "./filesystem.service";

export class File {
  path: string;

  url: string;

  type: string;

  date_modified: string;

  get name(): string {
    return FilesystemService.lastPathSegment(this.path);
  }

  get location(): string {
    return FilesystemService.lastPathDirectory(this.path);
  }

  get icon(): string {
    return 'icon-' + this.type;
  }
}
