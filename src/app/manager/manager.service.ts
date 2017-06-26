import { Injectable } from "@angular/core";

import { Directory } from "../filesystem/directory";
import { File } from "../filesystem/file";
import { FilesystemObject } from "../filesystem/filesystem-object";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import "rxjs/add/operator/share";
import { FilesystemService } from "../filesystem/filesystem.service";
import { FilesystemCache } from "../filesystem/filesystem-cache";

@Injectable()
export class ManagerService {

  private _directory: Directory;

  private cache: FilesystemCache;

  public directory$: Observable<Directory>;

  private directorySubscriber: Subscriber<Directory>;

  public selected$: Observable<FilesystemObject>;

  private selectedSubscriber: Subscriber<FilesystemObject>;

  constructor(
    protected filesystem: FilesystemService
  ) {
    this.cache = new FilesystemCache();
    this.directory$ = new Observable((subscriber: Subscriber<Directory>) => this.directorySubscriber = subscriber).share();
    this.selected$ = new Observable((subscriber: Subscriber<FilesystemObject>) => this.selectedSubscriber = subscriber).share();

    this.filesystem.observer.subscribe((path: string) => {
      this.cache.bust(path);
      if (this.directory.path === path) {
        this.navigate(path);
      }
    });
  }

  get directory(): Directory {
    return this._directory;
  }

  select(file: File) {
    this.directory.selected = file;
    this.selectedSubscriber.next(file);
  }

  navigate(path: string): Promise<Directory> {
    return this.cache.retrieve(path, this.filesystem.list)
      .then((directory: Directory) => {
        this._directory = directory;
        this.directorySubscriber.next(directory);
        this.selectedSubscriber.next(directory.selected);
        return directory;
      });
  }

  destroy(culprit: FilesystemObject) {
    if (! confirm('Do you wish to do delete ' + culprit.name)) {
      return;
    }

    this.filesystem.destroy(culprit.path).then(() => {
      if (culprit.constructor.name === File.name) {
        this.directory.removeFile(culprit);
        this.selectedSubscriber.next(this.directory.selected);
      }

      if (culprit.constructor.name === Directory.name) {
        this.directory.removeDirectory(culprit);
      }

      this.cache.bust(this.directory.path);
    })
    .catch((err) => console.log(err.message));
  }
}
