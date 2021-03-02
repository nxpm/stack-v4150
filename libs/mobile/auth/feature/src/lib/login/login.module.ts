import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MobileAuthDataAccessModule } from '@sandbox-v4150/mobile/auth/data-access'
import { MobileUiFormModule } from '@sandbox-v4150/mobile/ui/form'
import { AuthPageModule } from '@sandbox-v4150/mobile/auth/ui'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MobileUiFormModule,
    AuthPageModule,
    MobileAuthDataAccessModule,
  ],
})
export class LoginModule {}
