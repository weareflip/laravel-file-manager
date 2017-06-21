import { Directory } from "./directory";

export class File {
  path: string;

  url: string;

  type: string;

  get name(): string {
    return Directory.lastPathSegment(this.path);
  }
}
