import { Component, ElementRef } from "@angular/core";

@Component({
  selector: 'uploader',
  templateUrl: 'uploader.component.html'
})
export class UploaderComponent {

  public path: string;
  public label: string;

  constructor(
    private el: ElementRef
  ) {
    this.path = el.nativeElement.getAttribute('path') || '/';
    this.label = el.nativeElement.getAttribute('label') || 'Upload';
  }
}
