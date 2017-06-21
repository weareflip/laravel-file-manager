import { Response } from "./response";
import { File } from "../../filesystem/file";

export class UploadResponse extends Response {

  /**
   * Response Files
   *
   * @type {File[]}
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
}
