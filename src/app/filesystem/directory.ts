import { File } from './file';
import { FilesystemService } from "./filesystem.service";
import { FilesystemObject } from "./file-system-object";

export class Directory implements FilesystemObject {

  /**
   * Fully qualified path
   */
  path: string;

  /**
   * Child directories
   *
   * @type {Array}
   * @private
   */
  private _directories: Directory[] = [];

  /**
   * Get directories
   *
   * @returns {Directory[]}
   */
  get directories(): Directory[] {
    return this._directories;
  }

  /**
   * Set directories
   *
   * @param directories
   */
  set directories(directories: Directory[]) {
    directories.forEach((json: Directory) => {
      this._directories.push(Object.assign(new Directory(), json))
    });
  }

  /**
   * Remove Directory
   *
   * @param culprit {Directory|FilesystemObject}
   */
  removeDirectory(culprit: Directory|FilesystemObject) {
    this._directories = this._directories
      .filter((directory: Directory) => culprit.path !== directory.path);
  }

  /**
   * Contained files
   *
   * @type {Array}
   * @private
   */
  private _files: File[] = [];

  /**
   * Get Files
   *
   * @returns {File[]}
   */
  get files(): File[] {
    return this._files;
  }

  /**
   * Set files
   *
   * @param files
   */
  set files(files: File[]) {
    files.forEach((json: File) => {
      this._files.push(Object.assign(new File(), json))
    });
  }

  /**
   * Remove File
   *
   * @param culprit {File|FilesystemObject}
   */
  removeFile(culprit: File|FilesystemObject) {
    this._files = this._files
      .filter((file: File) => culprit.path !== file.path);
  }

  /**
   * Get name
   *
   * @returns {string}
   */
  get name(): string {
    return FilesystemService.lastPathSegment(this.path);
  }

  /**
   * Get location of directory
   *
   * @returns {string}
   */
  get location(): string {
    return FilesystemService.lastPathDirectory(this.path);
  }

  equals(directory: Directory): boolean {
    return this.path === directory.path;
  }
}
