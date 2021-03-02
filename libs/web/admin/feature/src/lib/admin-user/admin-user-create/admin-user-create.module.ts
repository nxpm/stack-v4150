import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminUserFormModule } from '@sandbox-v4150/web/admin/ui'
import { WebUiPageHeaderModule } from '@sandbox-v4150/web/ui/page-header'

import { AdminUserCreateComponent } from './admin-user-create.component'

@NgModule({
  declarations: [AdminUserCreateComponent],
  imports: [
    AdminUserFormModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserCreateComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminUserCreateModule {}
