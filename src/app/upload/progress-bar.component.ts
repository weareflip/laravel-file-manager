import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { UploadService } from "./upload.service";
import { ProgressStream } from "./progress-stream";

@Component({
  selector: 'progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let stream of streams">
      <div *ngIf="stream.inProgress">
        <span>Uploading {{ stream.name }}</span>
        <div class="progress">
          <div class="progress-bar bg-success"
               [ngClass]="{'progress-bar-striped progress-bar-animated': stream.inProgress}"
               [ngStyle]="{width: stream.progress + '%'}">
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProgressBarComponent implements OnInit {

  public streams: ProgressStream[];

  constructor(
    private cd: ChangeDetectorRef,
    protected upload: UploadService
  ) { }

  ngOnInit(): void {
    this.upload.observer.subscribe((streams: ProgressStream[]) => {
      this.streams = streams;
      this.cd.detectChanges();
    });
  }
}
