import { File } from './file';
import { FilesystemService } from "./filesystem.service";
import { FilesystemObject } from "./filesystem-object";

export class Directory extends FilesystemObject {

  /**
   * Child directories
   *
   * @type {Array}
   * @private
   */
  private _directories: Directory[] = [];

  /**
   * @returns {Directory[]}
   */
  get directories(): Directory[] {
    return this._directories;
  }

  /**
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
   */
  private _files: File[] = [];

  /**
   * @returns {File[]}
   */
  get files(): File[] {
    return this._files;
  }

  /**
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
    if (this.selected && this.selected.equals(culprit)) {
      this._selected = undefined;
    }

    this._files = this._files
      .filter((file: File) => culprit.path !== file.path);
  }

  /**
   * @param file
   * @returns {boolean}
   */
  contains(file: File): boolean {
    return this.files.map((item: File) => file.equals(item)).length > 0;
  }

  /**
   * Selected file to provide info
   *
   * @type {File}
   */
  private _selected: File;

  /**
   * @returns {File}
   */
  get selected(): File {
    return this._selected;
  }

  /**
   * @param selected
   */
  set selected(selected: File) {
    if (this.contains(selected)) {
      this._selected = this.files.filter((file: File) => file.path === selected.path)[0];
    }
  }

  /**
   * Get location of directory
   *
   * @returns {string}
   */
  get location(): string {
    return FilesystemService.lastPathDirectory(this.path);
  }
}
