import { Component } from "@angular/core";

import { ManagerService } from "./manager.service";
import { Directory } from "../filesystem/directory";
import { File } from "../filesystem/file";

@Component({
  selector: 'details-view',
  templateUrl: 'details.component.html'
})
export class DetailsComponent {

  constructor(
    protected manager: ManagerService
  ) { }

  get directory(): Directory {
    return this.manager.directory;
  }

  isParentDirectory(path: string): boolean {
    return this.manager.basepath === path;
  }

  select(file: File) {
    this.manager.select(file);
  }

  navigate(directory: Directory) {
    this.manager.navigate(directory.path);
  }

  destroy(culprit: File|Directory) {
    this.manager.destroy(culprit);
  }
}
