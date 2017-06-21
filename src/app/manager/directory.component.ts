import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";

import { FilesystemService } from "../filesystem/filesystem.service";
import { Directory } from "../filesystem/directory";
import { ManagerService } from "./manager.service";

@Component({
  selector: 'directory',
  templateUrl: './directory.component.html'
})
export class DirectoryComponent implements OnInit {

  /**
   * Directory's path
   */
  @Input() path: string;

  /**
   * Current directory considered root
   *
   * @type {boolean}
   */
  @Input() root: boolean = false;

  /**
   * Collapse state
   *
   * @type {boolean}
   */
  public collapsed: boolean = true;

  /**
   * Host directory
   */
  public directory: Directory;

  constructor(
    protected cd: ChangeDetectorRef,
    protected filesystem: FilesystemService,
    protected manager: ManagerService
  ) { }

  get name(): string {
    return this.root
      ? 'Parent Directory'
      : FilesystemService.lastPathSegment(this.path);
  }

  get selected(): boolean {
    return this.directory && this.manager.directory.equals(this.directory);
  }

  /**
   * List contents
   * Return promise of directory contents, response or cached
   *
   * @returns {Promise<Directory>}
   */
  list(): Promise<Directory> {
    return new Promise((resolve, reject) => {
      if (typeof this.directory === 'undefined') {
        return resolve(this.filesystem.list(this.path))
      }

      return resolve(this.directory);
    }).then((directory: Directory) => this.directory = directory);
  }

  /**
   * Toggle view details
   */
  toggle() {
    this.list().then((directory: Directory) => {
      this.manager.directory = directory;
      this.collapsed = false;
      this.cd.markForCheck();
    });
  }

  /**
   * Collapse toggle
   */
  collapse() {
    this.list().then((directory: Directory) => {
      this.collapsed = ! this.collapsed;
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    if (this.root) {
      this.toggle();
    }

    this.filesystem.getObserver().subscribe((path: string) => {
      if (this.path === path) {
        this.toggle();
      }
    });
  }
}
