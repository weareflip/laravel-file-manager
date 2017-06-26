import { Directive, HostListener, Input } from "@angular/core";
import { FilesystemService } from "../filesystem/filesystem.service";

@Directive({
  selector: '[fmDropzone]',
  host: {
    '[class.dragging]': 'dragging'
  }
})
export class DropzoneDirective {
  @Input('fmDropzone') path: string;

  public dragging: boolean = false;

  constructor(
    protected filesystem: FilesystemService
  ) { }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event']) onDrag(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = true;
  }

  @HostListener('dragend')
  @HostListener('dragleave') onDragEnd() {
    this.dragging = false;
  }

  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = false;
    let dataTransfer = event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;

    if (dataTransfer.files) {
      this.filesystem.upload(this.path, dataTransfer.files)
        .catch((err) => console.error(err.message));
    }
  }
}
