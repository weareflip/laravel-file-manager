import { Component, ElementRef } from "@angular/core";

import { ManagerService } from "./manager/manager.service";
import { FilesystemObject } from "./filesystem/filesystem-object";

@Component({
  selector: 'manager',
  templateUrl: 'manager.component.html'
})
export class ManagerComponent {

  public path: string;

  constructor(
    protected el: ElementRef,
    protected manager: ManagerService,
  ) {
    manager.basepath = this.path = el.nativeElement.getAttribute('path') || '/';
  }

  public file: FilesystemObject;

  public selected: boolean = false;

  ngOnInit() {
    this.manager.selected$.subscribe((file) => {
      this.file = file;
      this.selected = typeof file !== 'undefined';
    });
  }
}
