import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

import { FilesystemService } from "../filesystem/filesystem.service";
import { File } from "../filesystem/file";
import { UploadResponse } from "../shared/http/upload.response";

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  @Input() path: string;

  public modalOpen: boolean = false;

  public open: boolean = false;

  public uploading: boolean = false;

  public upload: Object = {};

  public files: File[] = [];

  public error: string = '';

  constructor(
    protected filesystem: FilesystemService,
  ) { }

  /**
   * @todo Convert to angular2 animation
   */
  toggle() {
    this.modalOpen
      ? setTimeout(() => {
        this.modalOpen = false;
        this.reset();
      }, 300)
      : this.modalOpen = true;

    this.open
      ? this.open = false
      : setTimeout(() => this.open = true, 300);
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.reset();
    this.uploading = true;

    this.filesystem.upload(this.path, form.value.files)
      .then((res: UploadResponse) => {
        this.files = res.files;
        this.uploading = false;
      })
      .catch((err) => this.reset(JSON.parse(err).message));
  }

  reset(error:string = '') {
    this.uploading = false;
    this.error = error;
  }
}
