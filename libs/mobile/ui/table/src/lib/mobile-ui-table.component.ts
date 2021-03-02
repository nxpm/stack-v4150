import { ArrayDataSource } from '@angular/cdk/collections'
import { Component, Input } from '@angular/core'
import { MobileUiTableColumn } from './mobile-ui-table.interfaces'

@Component({
  selector: 'ui-table',
  template: `
    <table cdk-table [dataSource]="dataSource">
      <ng-container *ngFor="let column of cols" [cdkColumnDef]="column.id">
        <th cdk-header-cell *cdkHeaderCellDef [class]="column?.headerClassName">
          {{ column.header }}
        </th>
        <td cdk-cell *cdkCellDef="let row" [class]="column?.className">
          <ng-container *ngIf="column.routerLink">
            <a [routerLink]="column.routerLink(row)">{{ column.label(row) }}</a>
          </ng-container>
          <ng-container *ngIf="!column.routerLink">
            {{ column.label(row) }}
          </ng-container>
        </td>
      </ng-container>
      <tr cdk-header-row *cdkHeaderRowDef="columns"></tr>
      <tr cdk-row *cdkRowDef="let row; columns: columns"></tr>
    </table>
  `,
  styleUrls: ['./mobile-ui-table.component.css'],
})
export class MobileUiTableComponent {
  @Input() cols: MobileUiTableColumn[] = []
  @Input() data: any[] = []

  get dataSource(): ArrayDataSource<any> {
    return new ArrayDataSource(this.data || [])
  }

  get columns() {
    return this.cols?.map((c) => c.id)
  }
}
