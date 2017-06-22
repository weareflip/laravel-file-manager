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
    return this.manager.navigate(this.path);
  }

  /**
   * Toggle view details
   */
  toggle() {
    this.list().then(() => {
      this.collapsed = false;
    });
  }

  /**
   * Collapse toggle
   */
  collapse() {
    this.list().then(() => {
      this.collapsed = ! this.collapsed;
    });
  }

  ngOnInit() {
    this.manager.observer.subscribe((directory: Directory) => {
      if (this.path === directory.path) {
        this.directory = directory
      }
    });

    if (this.root) {
      this.toggle();
    }
  }
}
