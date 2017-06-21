import { File } from './file';

export class Directory {

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
   * Get name
   *
   * @returns {string}
   */
  get name(): string {
    return Directory.lastPathSegment(this.path);
  }

  /**
   * Last segment of path
   *
   * @param path
   * @returns {string}
   */
  static lastPathSegment(path: string): string {
    if (path === '/') {
      return path;
    }

    return path.match(/[^\/]+$/)[0];
  }
}
