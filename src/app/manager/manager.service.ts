import { Injectable } from "@angular/core";

import { Api } from "../shared/api";
import { Directory } from "../filesystem/directory";
import { File } from "../filesystem/file";
import { FilesystemObject } from "../filesystem/file-system-object";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { FilesystemService } from "../filesystem/filesystem.service";

@Injectable()
export class ManagerService {

  private _directory: Directory;

  private manager$: Observable<Directory>;

  private managerSubscriber: Subscriber<Directory>;

  constructor(
    protected filesystem: FilesystemService
  ) {
    this.manager$ = new Observable((subscriber: Subscriber<Directory>) => this.managerSubscriber = subscriber);
  }

  get observer() {
    return this.manager$;
  }

  get directory(): Directory {
    return this._directory;
  }

  navigate(path: string): Promise<Directory> {
    return new Promise((resolve, reject) => resolve(this.filesystem.list(path)))
      .then((directory: Directory) => {
        this.managerSubscriber.next(directory);
        this._directory = directory;
        return directory;
      });
  }

  destroy(culprit: FilesystemObject) {
    this.filesystem.destroy(culprit.path).then(() => {
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
