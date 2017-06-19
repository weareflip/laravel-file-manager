import { Injectable } from "@angular/core";
import { Directory } from "./directory";
import { HttpService } from "../../shared/http.service";

@Injectable()
export class FilesystemService {
  constructor(
    public http: HttpService
  ) { }

  getFullList(): Promise<Directory> {
    return Promise.resolve(this.http.post('system', {}))
      .then((json) => Object.assign(new Directory(), json));
  }
}
