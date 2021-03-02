import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminUserFormModule } from '@sandbox-v4150/web/admin/ui'
import { WebUiPageHeaderModule } from '@sandbox-v4150/web/ui/page-header'

import { AdminUserEditComponent } from './admin-user-edit.component'

@NgModule({
  declarations: [AdminUserEditComponent],
  imports: [
    AdminUserFormModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserEditComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminUserEditModule {}
