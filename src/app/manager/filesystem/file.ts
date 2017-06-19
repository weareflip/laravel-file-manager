export class File {
  path: string;

  type: string;

  get name() {
    return this.path.replace(/\//, '');
  }
}
