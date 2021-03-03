import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { MobileShellFeatureModule } from '@sandbox-v4150/mobile/shell/feature'

import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule, MobileShellFeatureModule],
})
export class AppModule {}
