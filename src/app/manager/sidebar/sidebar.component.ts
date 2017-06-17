import { Component, OnInit } from "@angular/core";
import { FilesystemService } from "../filesystem/filesystem.service";
import { List } from "../filesystem/list";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public list: List;

  constructor(
    public filesystem: FilesystemService
  ) { }

  ngOnInit(): void {
    this.filesystem.getFullList().then((list: List) => this.list = list);
  }
}
