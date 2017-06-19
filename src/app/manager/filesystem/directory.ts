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
   * Contained files
   *
   * @type {Array}
   * @private
   */
  private _files: File[] = [];

  /**
   * Get directories
   *
   * @returns {Directory[]}
   */
  get directories() {
    return this._directories;
  }

  /**
   * Set directories
   *
   * @param directories
   */
  set directories(directories: Array<Object>) {
    directories.forEach((json: Object) => {
      this._directories.push(Object.assign(new Directory(), json))
    });
  }

  /**
   * Get Files
   *
   * @returns {File[]}
   */
  get files() {
    return this._files;
  }

  /**
   * Set files
   *
   * @param files
   */
  set files(files: Array<Object>) {
    files.forEach((json: Object) => {
      this._files.push(Object.assign(new File(), json))
    });
  }

  /**
   * Get name
   *
   * @returns {string}
   */
  get name() {
    return this.path.replace(/\//, '');
  }
}
