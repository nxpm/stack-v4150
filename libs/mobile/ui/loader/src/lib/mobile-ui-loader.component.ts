import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'ui-loader',
  template: `
    <div class="" *ngIf="loading">
      <div class="">
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileUiLoaderComponent {
  @Input() loading = true
}
