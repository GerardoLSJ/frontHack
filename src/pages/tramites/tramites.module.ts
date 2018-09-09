import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TramitesPage } from './tramites';

@NgModule({
  declarations: [
    TramitesPage,
  ],
  imports: [
    IonicPageModule.forChild(TramitesPage),
  ],
})
export class TramitesPageModule {}
