import { FilesystemObject } from "./filesystem-object";

export class FilesystemCache {

  private map: Map<string, FilesystemObject>;

  constructor() {
    this.map = new Map();
  }

  bust(path: string) {
    this.map.delete(path);
  }

  retrieve(path: string, store: (path: string) => Promise<FilesystemObject>): Promise<FilesystemObject> {
    if (this.map.has(path)) {
      return new Promise((resolve) => resolve(this.map.get(path)));
    }

    return store(path)
      .then((object: FilesystemObject) => {
        this.map.set(object.path, object);
        return object;
      });
  }
}
