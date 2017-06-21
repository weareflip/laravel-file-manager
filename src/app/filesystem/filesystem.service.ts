import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

import { Directory } from "./directory";
import { UploadService } from "../upload/upload.service";
import { UploadResponse } from "../shared/http/upload.response";
import { Api } from "../shared/api";

@Injectable()
export class FilesystemService {

  /**
   * Observes changes to tree directories
   *
   * @type {Observable<string>}
   */
  private path$: Observable<string>;

  /**
   * @type {Subscriber<string>}
   */
  private pathSubscriber: Subscriber<string>;

  constructor(
    public uploadService: UploadService
  ) {
    this.path$ = new Observable((subscriber: Subscriber<string>) => this.pathSubscriber = subscriber);
  }

  getObserver(): Observable<string> {
    return this.path$;
  }

  list(path: string): Promise<Directory> {
    return Promise.resolve(Api.post('system', {path}))
      .then((json) => Object.assign(new Directory(), json));
  }

  upload(path: string, fileList: FileList): Promise<UploadResponse> {
    let files = [];

    for (let i = 0; i <  fileList.length; i++) {
      files.push(fileList.item(i));
    }

    if (this.pathSubscriber) {
      this.pathSubscriber.next(path);
    }

    return this.uploadService.upload('file', files);
  }

  destroy(path: string) {

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

  /**
   * Last directory of path
   *
   * @param path
   * @returns {string}
   */
  static lastPathDirectory(path: string): string {
    return path.match(/.+\//)[0];
  }
}
