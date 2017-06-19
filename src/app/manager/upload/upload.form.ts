import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { FilesystemService } from "../filesystem/filesystem.service";
import { UploadService } from "./upload.service";

@Component({
  selector: 'upload-form',
  templateUrl: './upload.form.html'
})
export class UploadForm {
  public upload: Object = {};
  public submitted: boolean = false;

  constructor(
    protected filesystem: FilesystemService,
  ) { }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.filesystem.upload(form.value.files);
  }
}
