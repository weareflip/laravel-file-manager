import { FilesystemService } from "./filesystem.service";

export class FilesystemObject {

  /**
   * Fully qualified path
   */
  path: string;

  /**
   * @param object
   * @returns {boolean}
   */
  equals(object: FilesystemObject): boolean {
    return this.path === object.path;
  }

  /**
   * Get name
   *
   * @returns {string}
   */
  get name(): string {
    return FilesystemService.lastPathSegment(this.path);
  }
}
