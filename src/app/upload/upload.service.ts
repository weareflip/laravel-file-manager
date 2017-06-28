import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

import { UploadResponse } from "../shared/http/upload.response";
import { ProgressStream } from "./progress-stream";

@Injectable()
export class UploadService {

  private _streams: ProgressStream[] = [];

  /**
   * @type {Observable<number>}
   */
  private streams$: Observable<ProgressStream[]>;

  /**
   * @type {Subscriber}
   */
  private streamsSubscriber: Subscriber<ProgressStream[]>;

  constructor() {
    this.streams$ = new Observable((subscriber: Subscriber<ProgressStream[]>) => this.streamsSubscriber = subscriber);
  }

  get observer(): Observable<ProgressStream[]> {
    return this.streams$;
  }

  public upload(url: string, files: File[], path: string): Promise<UploadResponse> {
    let stream = new ProgressStream(files);
    this._streams.push(stream);

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
          this._streams.map((item) => item.id !== stream.id);
          xhr.status >= 200 && xhr.status < 300
            ? resolve(JSON.parse(xhr.response))
            : reject(JSON.parse(xhr.response));
        }
      };

      xhr.upload.onprogress = (event: ProgressEvent) => {
        stream.progress = Math.ceil(event.loaded / event.total * 100);
        this.streamsSubscriber.next(this._streams);
      };

      xhr.open('POST', process.env.API_LOCATION + url, true);
      xhr.send(formData);
    });
  }
}
