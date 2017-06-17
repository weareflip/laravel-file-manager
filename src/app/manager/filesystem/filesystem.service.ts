import { Injectable } from "@angular/core";
import { List } from "./list";
import { HttpService } from "../../shared/http.service";

@Injectable()
export class FilesystemService {
  constructor(
    public http: HttpService
  ) { }

  getFullList(): Promise<List> {
    return Promise.resolve(this.http.post('system', {}))
  }
}
