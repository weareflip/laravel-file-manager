import { Guid } from "../shared/utility/guid";

export class ProgressStream {
  public id: string;

  private files: File[];

  constructor(files: File[]) {
    this.id = Guid.guid();
    this.files = files;
  }

  private _progress: number;

  set progress(int: number) {
    this._progress = int;
  }

  get progress(): number {
    return this._progress;
  }

  get name(): string {
    return this.files.length > 1
      ? this.files.length + ' files'
      : this.files[0].name;
  }

  get inProgress(): boolean {
    return this.progress > 0 && this.progress < 100;
  }
}
