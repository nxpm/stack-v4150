import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { WebAuthDataAccessModule } from '@sandbox-v4150/web/auth/data-access'
import { WebUiFormModule } from '@sandbox-v4150/web/ui/form'
import { AuthPageModule } from '@sandbox-v4150/web/auth/ui'
import { LogoutComponent } from './logout.component'

const routes: Routes = [{ path: '', component: LogoutComponent }]

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WebUiFormModule, AuthPageModule, WebAuthDataAccessModule],
})
export class LogoutModule {}
