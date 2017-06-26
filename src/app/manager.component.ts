import { Component } from "@angular/core";

import { ManagerService } from "./manager/manager.service";
import { FilesystemObject } from "./filesystem/filesystem-object";

@Component({
  selector: 'manager',
  templateUrl: 'manager.component.html'
})
export class ManagerComponent {

  constructor(
    protected manager: ManagerService
  ) { }

  public file: FilesystemObject;

  public selected: boolean = false;

  ngOnInit() {
    this.manager.selected$.subscribe((file) => {
      this.file = file;
      this.selected = typeof file !== 'undefined';
    });
  }
}
