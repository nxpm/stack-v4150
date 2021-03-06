import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'ui-loader',
  template: `
    <div class="flex items-center justify-center p-4 rounded" *ngIf="loading">
      <div class="flex space-x-3 animate-pulse">
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
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
export class WebUiLoaderComponent {
  @Input() loading = true
}
