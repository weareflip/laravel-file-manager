import { Component, OnInit } from "@angular/core";
import { FilesystemService } from "../filesystem/filesystem.service";
import { Directory } from "../filesystem/directory";

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html'
})
export class TreeComponent implements OnInit {
  public system: Directory;

  constructor(
    public filesystem: FilesystemService
  ) { }

  ngOnInit(): void {
    this.filesystem.getFullList().then((system: Directory) => this.system = system);
  }
}
