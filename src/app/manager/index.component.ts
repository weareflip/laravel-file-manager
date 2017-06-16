import { Component, OnInit } from "@angular/core";
import { FilesystemService } from "./filesystem.service";
import { List } from "../file/list";

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  public list: List;

  constructor(
    public filesystem: FilesystemService
  ) { }

  ngOnInit(): void {
    this.filesystem.getFullList().then((list) => this.list = list);
  }
}
