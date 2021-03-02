import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@sandbox-v4150/web/ui/button'
import { WebUiFormModule } from '@sandbox-v4150/web/ui/form'
import { AdminUserFormComponent } from './admin-user-form.component'

@NgModule({
  declarations: [AdminUserFormComponent],
  exports: [AdminUserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AdminUserFormModule {}
