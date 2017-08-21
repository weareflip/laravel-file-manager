import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';

import { Directory } from '../filesystem/directory';
import { File } from '../filesystem/file';
import { ManagerService } from './manager.service';

@Component({
  selector: 'details-view',
  templateUrl: 'details.component.html'
})
export class DetailsComponent {
  files: File[];
  query: Subject<string> = new Subject();

  constructor(protected manager: ManagerService) {}

  ngOnInit() {
    this.query
      .map(query => query.toLowerCase())
      .combineLatest(this.manager.directory$)
      .subscribe(([query, directory]) => {
        this.files = directory.files
          .filter((file) => !query || file.name.toLowerCase().includes(query));
      });

    this.query.next('');
  }

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
