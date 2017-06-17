import { Injectable } from "@angular/core";

@Injectable()
export class ManagerService {
  protected path: string = '/';

  setPath(path: string) {
    this.path = path;
  }

  getPath() {
    return this.path;
  }
}
