import { Injectable } from "@angular/core";

import { Api } from "../shared/api";
import { Directory } from "../filesystem/directory";
import { File } from "../filesystem/file";
import { FilesystemObject } from "../filesystem/file-system-object";

@Injectable()
export class ManagerService {

  private _directory: Directory;

  get directory(): Directory {
    return this._directory;
  }

  set directory(directory: Directory) {
    this._directory = directory;
  }

  destroy(culprit: FilesystemObject) {
    Api.destroy('file', {path: culprit.path}).then(() => {
        if (culprit.constructor.name === File.name) {
          this.directory.removeFile(culprit);
        }

        if (culprit.constructor.name === Directory.name) {
          this.directory.removeDirectory(culprit);
        }
      })
      .catch((err) => console.log(err.message));
  }
}
