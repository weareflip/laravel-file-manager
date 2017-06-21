import { Component, ElementRef } from "@angular/core";

@Component({
  selector: 'uploader',
  templateUrl: 'uploader.component.html'
})
export class UploaderComponent {

  public path: string;

  constructor(
    private el: ElementRef
  ) {
    this.path = el.nativeElement.getAttribute('path');
  }
}
