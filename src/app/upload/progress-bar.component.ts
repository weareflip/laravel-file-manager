import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { UploadService } from "./upload.service";

@Component({
  selector: 'progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="progress" *ngIf="inProgress">
      <div class="progress-bar bg-success"
           [ngClass]="{'progress-bar-striped progress-bar-animated': inProgress}"
           [ngStyle]="{width: width}">
      </div>
    </div>
  `
})
export class ProgressBarComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    protected upload: UploadService
  ) { }

  get width(): string {
    return this.upload.progress + '%';
  }

  get inProgress(): boolean {
    return this.upload.inProgress;
  }

  ngOnInit(): void {
    this.upload.observer.subscribe((progress: number) => {
      this.cd.detectChanges();
    });
  }
}
