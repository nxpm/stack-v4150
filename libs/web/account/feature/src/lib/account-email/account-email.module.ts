import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  AccountUiEmailFormModule,
  AccountUiEmailListModule,
  AccountUiEmailPrimaryFormModule,
} from '@sandbox-v4150/web/account/ui'
import { WebUiLoaderModule } from '@sandbox-v4150/web/ui/loader'
import { AccountEmailComponent } from './account-email.component'

@NgModule({
  declarations: [AccountEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountEmailComponent,
      },
    ]),
    AccountUiEmailListModule,
    AccountUiEmailPrimaryFormModule,
    AccountUiEmailFormModule,
    WebUiLoaderModule,
  ],
})
export class AccountEmailModule {}
