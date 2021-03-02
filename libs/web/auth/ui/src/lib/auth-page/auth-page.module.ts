import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@sandbox-v4150/web/ui/form'
import { AuthPageComponent } from './auth-page.component'

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
