import { Injectable, OnInit } from "@angular/core";

import { Directory } from "../filesystem/directory";
import { File } from "../filesystem/file";
import { FilesystemObject } from "../filesystem/filesystem-object";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { FilesystemService } from "../filesystem/filesystem.service";
import { FilesystemCache } from "../filesystem/filesystem-cache";

@Injectable()
export class ManagerService {

  private _directory: Directory;

  private cache: FilesystemCache;

  private manager$: Observable<Directory>;

  private managerSubscriber: Subscriber<Directory>;

  constructor(
    protected filesystem: FilesystemService
  ) {
    this.cache = new FilesystemCache();
    this.manager$ = new Observable((subscriber: Subscriber<Directory>) => this.managerSubscriber = subscriber);

    this.filesystem.observer.subscribe((path: string) => {
      this.cache.bust(path);
      if (this.directory.path === path) {
        this.navigate(path);
      }
    });
  }

  get observer() {
    return this.manager$;
  }

  get directory(): Directory {
    return this._directory;
  }

  navigate(path: string): Promise<Directory> {
    return this.cache.retrieve(path, this.filesystem.list)
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

        this.cache.bust(this.directory.path);
      })
      .catch((err) => console.log(err.message));
  }
}
