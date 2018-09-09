import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TramiteDetailPage } from './tramite-detail';

@NgModule({
  declarations: [
    TramiteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TramiteDetailPage),
  ],
})
export class TramiteDetailPageModule {}
