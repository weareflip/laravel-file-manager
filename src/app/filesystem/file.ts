export class File {
  path: string;

  url: string;

  type: string;

  get name() {
    return this.path.replace(/\//, '');
  }
}
