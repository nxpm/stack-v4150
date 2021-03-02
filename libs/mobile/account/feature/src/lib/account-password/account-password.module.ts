import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountUiPasswordFormModule } from '@sandbox-v4150/mobile/account/ui'
import { MobileUiLoaderModule } from '@sandbox-v4150/mobile/ui/loader'
import { AccountPasswordComponent } from './account-password.component'

@NgModule({
  declarations: [AccountPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AccountPasswordComponent }]),
    AccountUiPasswordFormModule,
    MobileUiLoaderModule,
  ],
})
export class AccountPasswordModule {}
