import { Injectable } from "@angular/core";
import { Directory } from "./directory";
import { HttpService } from "../shared/http.service";
import { UploadService } from "../upload/upload.service";

@Injectable()
export class FilesystemService {
  constructor(
    public http: HttpService,
    public uploadService: UploadService
  ) { }

  get path(): string {
    return '/'
  }

  getFullList(): Promise<Directory> {
    return Promise.resolve(this.http.post('system', {}))
      .then((json) => Object.assign(new Directory(), json));
  }

  upload(fileList: FileList): Promise<any> {
    let files = [];

    for (let i = 0; i <  fileList.length; i++) {
      files.push(fileList.item(i));
    }

    return this.uploadService.upload('file', files);
  }
}
