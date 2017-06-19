import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { UploadService } from "./upload.service";

@Component({
  selector: 'progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="progress">
      <div class="progress-bar bg-success" 
           [ngClass]="{'progress-bar-striped progress-bar-animated': inProgress}"
           [ngStyle]="{width: width}">
      </div>
    </div>
  `
})
export class ProgressBarComponent implements OnInit {

  /**
   * Progress percentage
   *
   * @type {number}
   */
  public progress: number = 0;

  get width(): string {
    return this.progress + '%';
  }

  get inProgress(): boolean {
    return this.progress > 0 && this.progress < 100;
  }

  constructor(
    private cd: ChangeDetectorRef,
    private uploadService: UploadService,
  ) { }

  ngOnInit(): void {
    this.uploadService.getObserver().subscribe((progress) => {
      this.progress = Math.ceil(progress);
      this.cd.detectChanges();
    });
  }
}
