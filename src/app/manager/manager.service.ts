import { Injectable } from "@angular/core";
import { Directory } from "../filesystem/directory";

@Injectable()
export class ManagerService {

  private _directory: Directory;

  get directory(): Directory {
    return this._directory;
  }

  set directory(directory: Directory) {
    if (this._directory !== directory) {
      this._directory = directory;
    }
  }
}
