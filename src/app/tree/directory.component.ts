import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { FilesystemService } from "../filesystem/filesystem.service";
import { Directory } from "../filesystem/directory";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'directory',
  templateUrl: './directory.component.html'
})
export class DirectoryComponent implements OnInit {
  @Input() path: string;

  public collapsed: boolean = true;

  public contents: Directory;

  get name(): string {
    return Directory.lastPathSegment(this.path);
  }

  constructor(
    protected cd: ChangeDetectorRef,
    protected filesystem: FilesystemService
  ) { }

  toggle() {
    if (typeof this.contents === 'undefined') {
      this.list();
    }

    this.collapse();
    this.cd.markForCheck();
  }

  collapse() {
    this.collapsed = ! this.collapsed;
  }

  list(): void {
    this.filesystem.list(this.path)
      .then((contents: Directory) => {
        this.contents = contents;
        this.cd.markForCheck();
      });
  }

  ngOnInit() {
    this.filesystem.getObserver().subscribe((path: string) => {
      if (this.path === path) {
        this.list();
      }
    });
  }
}
