import { Injectable } from "@angular/core";
import { HttpService } from "../shared";
import { List } from "../file/list";

@Injectable()
export class FilesystemService {
  constructor(
    public http: HttpService
  ) { }

  getFullList(): Promise<List> {
    return Promise.resolve(this.http.post('/file-manager', {}))
  }
}
