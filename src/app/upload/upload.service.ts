import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

import { UploadResponse } from "../shared/http/upload.response";

@Injectable()
export class UploadService {

  /**
   * @type {Observable<number>}
   */
  private progress$: Observable<number>;

  /**
   * @type {Subscriber}
   */
  private progressSubscriber: Subscriber<number>;

  /**
   * @type {number}
   */
  private _progress: number = 0;

  constructor() {
    this.progress$ = new Observable((subscriber: Subscriber<number>) => this.progressSubscriber = subscriber);
  }

  get progress(): number {
    return this._progress;
  }

  get inProgress(): boolean {
    return this.progress > 0 && this.progress < 100;
  }

  get observer(): Observable<number> {
    return this.progress$;
  }

  public upload(url: string, files: File[], path: string): Promise<UploadResponse> {
    return new Promise((resolve, reject) => {
      window.onbeforeunload = () => "An upload is in progress. Are you sure you want to navigate away?";
      let formData: FormData = new FormData();
      let xhr: XMLHttpRequest = new XMLHttpRequest();

      formData.append('path', path);
      formData.append('_method', 'PUT');
      files.forEach((file) => formData.append("files[]", file, file.name));

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          window.onbeforeunload = undefined;
          xhr.status >= 200 && xhr.status < 300
            ? resolve(JSON.parse(xhr.response))
            : reject(JSON.parse(xhr.response));
        }
      };

      xhr.upload.onprogress = (event: ProgressEvent) => {
        this._progress = Math.ceil(event.loaded / event.total * 100);
        this.progressSubscriber.next(this._progress);
      };

      xhr.open('POST', process.env.API_LOCATION + url, true);
      xhr.send(formData);
    });
  }
}
