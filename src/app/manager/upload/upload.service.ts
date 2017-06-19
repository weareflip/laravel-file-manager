import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Observer } from "rxjs/Observer";
import { Subscriber } from "rxjs/Subscriber";

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

  constructor() {
    this.progress$ = new Observable((subscriber: Subscriber<number>) => this.progressSubscriber = subscriber);
  }

  public getObserver(): Observable<number> {
    return this.progress$;
  }

  public upload(url: string, files: File[]): Promise<any> {
    return new Promise((resolve, reject) => {
      let formData: FormData = new FormData();
      let xhr: XMLHttpRequest = new XMLHttpRequest();

      formData.append('path', '/');
      formData.append('_method', 'PUT');
      files.forEach((file) => formData.append("files[]", file, file.name));

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          xhr.status >= 200 && xhr.status < 300
            ? resolve(xhr.response)
            : reject(xhr.response);
        }
      };

      xhr.upload.onprogress = (event) => {
        this.progressSubscriber.next(event.loaded / event.total * 100);
      };

      xhr.open('POST', process.env.API_LOCATION + url, true);
      xhr.send(formData);
    });
  }
}
