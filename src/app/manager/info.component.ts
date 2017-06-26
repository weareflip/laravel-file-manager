import { Component, Input, OnInit } from "@angular/core";

import { ManagerService } from "./manager.service";
import { FilesystemObject } from "../filesystem/filesystem-object";
import { File } from "../filesystem/file";

@Component({
  selector: 'info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

  constructor(
    protected manager: ManagerService
  ) { }

  @Input() file: File;

  get background(): string {
    return 'transparent url("' + this.file.url + '") center center no-repeat contain';
  }

  ngOnInit() {
    this.manager.selected$.subscribe((file) => this.file = Object.assign(new File(), file));
  }
}
