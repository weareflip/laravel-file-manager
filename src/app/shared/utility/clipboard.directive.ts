import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import * as Clipboard from 'clipboard';

@Directive({
  selector: '[clipboard]',
  host: {
    'class': 'clipboard',
    '[class.copied]': 'copied'
  }
})
export class ClipboardDirective {
  @Input('clipboard') selector: ElementRef;

  protected _copied: any;

  protected clipboard: Clipboard;

  constructor(
    private el: ElementRef
  ) { }

  get copied(): Boolean {
    return typeof this._copied !== 'undefined';
  }

  @HostListener('click') onClick() {
    clearTimeout(this._copied);
    this._copied = setTimeout(() => {
      this._copied = undefined;
    }, 1500);
  }

  ngOnInit() {
    this.clipboard = new Clipboard(this.el.nativeElement, {
      target: () => {
        return this.el.nativeElement;
      }
    });
  }
}
